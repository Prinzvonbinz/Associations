const CATEGORIES = [
  "Ein Wort mit 3 Buchstaben",
  "Etwas, das man an Halloween sieht",
  "Ein beliebtes Videospiel",
  "Ein Tier, das im Wasser lebt",
  "Etwas, das man in der Schule braucht",
  "Ein Land in Europa",
  "Etwas Rundes",
  "Ein beliebtes Essen",
  "Etwas, das fliegen kann",
  "Ein Superheld",
  "Ein Gegenstand im Badezimmer",
  "Etwas Kaltes",
  "Ein Beruf",
  "Etwas, das laut ist",
  "Ein Filmgenre",
  "Ein Gegenstand aus Metall",
  "Etwas, das man am Strand findet",
  "Ein Sport",
  "Ein Musikinstrument",
  "Etwas, das leuchtet",
  "Ein Gemüse",
  "Ein Getränk",
  "Ein Tier mit vier Beinen",
  "Etwas, das man sammeln kann",
  "Ein Gegenstand aus Holz",
  "Etwas, das man im Winter braucht",
  "Ein Videospielcharakter",
  "Ein Planet",
  "Etwas, das man essen kann",
  "Ein Gegenstand in einer Küche",
  "Ein Transportmittel",
  "Ein Obst",
  "Etwas, das man im Wald findet",
  "Ein Gegenstand mit Bildschirm",
  "Etwas, das man verschenken kann",
  "Ein Wort mit 5 Buchstaben",
  "Ein Tier, das fliegen kann",
  "Etwas, das man im Sommer macht",
  "Ein Gegenstand in einem Rucksack",
  "Ein beliebter Snack",
  "Etwas, das schnell ist",
  "Ein Gegenstand aus Glas",
  "Etwas, das man nachts sieht",
  "Ein Fantasiewesen",
  "Ein Gegenstand mit Rädern",
  "Etwas, das man im Supermarkt kauft",
  "Ein Schulfach",
  "Ein Gegenstand, der Geräusche macht",
  "Etwas, das man auf Reisen braucht"
];

const ROUND_OPTIONS = [3, 5, 8, 10, 15, 20];
const MAX_PLAYERS = 12;

function randomCategory() {
  return CATEGORIES[
    Math.floor(Math.random() * CATEGORIES.length)
  ];
}

function normalizeAnswer(answer) {
  return String(answer)
    .toLocaleLowerCase("de-DE")
  .return(/\s+/g, "");
}

function errorResponse(message, status = 400) {
  return Response.json({ error: message }, { status });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/ws") {
      if (
        request.headers.get("Upgrade")?.toLowerCase()
        !== "websocket"
      ) {
        return errorResponse("WebSocket erforderlich.", 426);
      }

      const code = (
        url.searchParams.get("room") || ""
      ).toUpperCase();

      if (!/^[A-Z0-9]{6}$/.test(code)) {
        return errorResponse("Ungültiger Lobby-Code.");
      }

      const id = env.ROOMS.idFromName(code);
      const room = env.ROOMS.get(id);

      return room.fetch(request);
    }

    return env.ASSETS.fetch(request);
  }
};

export class Room {
  constructor(ctx, env) {
    this.ctx = ctx;
    this.env = env;
    this.room = null;
    this.clients = new Map();
  }

  async fetch(request) {
    const url = new URL(request.url);

    const mode = url.searchParams.get("mode");
    const code = (
      url.searchParams.get("room") || ""
    ).toUpperCase();

    const clientId = (
      url.searchParams.get("clientId") || ""
    );

    const username = (
      url.searchParams.get("username") || ""
    ).trim().slice(0, 20);

    if (
      !["create", "join"].includes(mode) ||
      !/^[A-Z0-9]{6}$/.test(code) ||
      clientId.length < 5 ||
      clientId.length > 100 ||
      !username
    ) {
      return errorResponse("Ungültige Verbindungsdaten.");
    }

    const pair = new WebSocketPair();
    const client = pair[0];
    const server = pair[1];

    server.accept();

    const reject = message => {
      server.send(JSON.stringify({
        type: "error",
        message
      }));

      setTimeout(() => {
        try {
          server.close(1008, "Verbindung abgelehnt");
        } catch {}
      }, 100);

      return new Response(null, {status: 101,
        webSocket: client
      });
    };

    if (!this.room) {
      if (mode !== "create") {
        return reject("Diese Lobby existiert nicht.");
      }

      this.room = {
        code,
        phase: "lobby",
        hostId: clientId,
        players: [],
        roundsTotal: 5,
        roundIndex: 0,
        category: "",
        teamScore: 0,
        gameId: "",
        history: []
      };
    } else if (mode === "create") {
      return reject("Diese Lobby existiert bereits.");
    }

    const room = this.room;

    const existingPlayer = room.players.find(
      player => player.id === clientId
    );

    if (room.phase !== "lobby" && !existingPlayer) {
      return reject("Diese Runde läuft bereits.");
    }

    if (
      !existingPlayer &&
      room.players.length >= MAX_PLAYERS
    ) {
      return reject("Diese Lobby ist voll.");
    }

    const oldSocket = this.clients.get(clientId);

    if (oldSocket && oldSocket !== server) {
      this.clients.set(clientId, server);

      try {
        oldSocket.close(1000, "Neue Verbindung");
      } catch {}
    } else {
      this.clients.set(clientId, server);
    }

    if (existingPlayer) {
      existingPlayer.username = username;
    } else {
      room.players.push({
        id: clientId,
        username,
        submitted: false,
        answer: ""
      });
    }

    server.addEventListener("message", event => {
      this.onMessage(server, clientId, event.data);
    });

    server.addEventListener("close", () => {
      this.onClose(server, clientId);
    });

    server.addEventListener("error", () => {
      this.onClose(server, clientId);
    });

    this.broadcast();

    return new Response(null, {
      status: 101,
      webSocket: client
    });
  }

  onMessage(socket, clientId, rawData) {
    if (
      !this.room ||
      this.clients.get(clientId) !== socket
    ) {
      return;
    }

    let data;

    try {
      data = JSON.parse(rawData);
    } catch {
      return;
    }

    const room = this.room;

    const player = room.players.find(
      item => item.id === clientId
    );

    if (!player) return;

    const isHost = room.hostId === clientId;

    switch (data.type) {
      case "setRounds": {
        if (!isHost || room.phase !== "lobby") return;

        const rounds = Number(data.rounds);

        if (!ROUND_OPTIONS.includes(rounds)) return;

        room.roundsTotal = rounds;
        this.broadcast();
        break;
      }

      case "startGame": {
        if (
          !isHost ||
          room.phase !== "lobby" ||
          room.players.length < 2
        ) {
          return;
        }

        const rounds = Number(data.rounds);

        if (ROUND_OPTIONS.includes(rounds)) {
          room.roundsTotal = rounds;
        }

        room.phase = "playing";
        room.roundIndex = 1;
        room.category = randomCategory();
        room.teamScore = 0;
        room.history = [];
        room.gameId = crypto.randomUUID();

        room.players.forEach(p => {
          p.submitted = false;
          p.answer = "";
        });

        this.broadcast();
        break;
      }

      case "submit": {
        if (
          room.phase !== "playing" ||
          player.submitted
        ) {
          return;
        }

        const answer = String(
          data.answer ?? ""
        ).trim().slice(0, 120);

        if (!answer) return;

        player.answer = answer;
        player.submitted = true;

        if (room.players.every(p => p.submitted)) {
          this.resolveRound();
        }

        this.broadcast();
        break;
      }

      case "nextRound": {
        if (!isHost || room.phase !== "reveal") return;

        if (room.roundIndex >= room.roundsTotal) {room.phase = "results";
          this.broadcast();
          return;
        }

        room.roundIndex++;
        room.category = randomCategory();
        room.phase = "playing";

        room.players.forEach(p => {
          p.submitted = false;
          p.answer = "";
        });

        this.broadcast();
        break;
      }

      case "finishGame": {
        if (
          !isHost ||
          room.phase !== "reveal" ||
          room.roundIndex < room.roundsTotal
        ) {
          return;
        }

        room.phase = "results";
        this.broadcast();
        break;
      }

      case "returnLobby": {
        if (!isHost || room.phase !== "results") return;

        room.phase = "lobby";
        room.roundIndex = 0;
        room.category = "";

        room.players.forEach(p => {
          p.submitted = false;
          p.answer = "";
        });

        this.broadcast();
        break;
      }
    }
  }

  resolveRound() {
    const room = this.room;

    if (!room || room.phase !== "playing") return;

    const answers = room.players.map(player => ({
      id: player.id,
      username: player.username,
      answer: player.answer
    }));

    const counts = new Map();

    for (const item of answers) {
      const key = normalizeAnswer(item.answer);

      counts.set(key, (counts.get(key) || 0) + 1);
    }

    let points = 0;

    for (const count of counts.values()) {
      if (count >= 2) {
        points += count * 10;
      }
    }

    room.teamScore += points;

    room.history.push({
      round: room.roundIndex,
      category: room.category,
      answers,
      points,
      scoreAfter: room.teamScore
    });

    room.phase = "reveal";
  }

  onClose(socket, clientId) {
    if (this.clients.get(clientId) !== socket) return;

    this.clients.delete(clientId);

    if (!this.room) return;

    const room = this.room;

    room.players = room.players.filter(
      player => player.id !== clientId
    );

    if (room.players.length === 0) {
      this.room = null;
      this.clients.clear();
      return;
    }

    if (room.hostId === clientId) {
      room.hostId = room.players[0].id;
    }

    if (
      room.phase === "playing" &&
      room.players.length < 2
    ) {
      room.phase = "lobby";
      room.roundIndex = 0;
      room.category = "";

      room.players.forEach(p => {
        p.submitted = false;
        p.answer = "";
      });
    } else if (
      room.phase === "playing" &&
      room.players.every(p => p.submitted)
    ) {
      this.resolveRound();
    }

    this.broadcast();
  }

  publicState() {
    const room = this.room;

    if (!room) return null;

    return {
      code: room.code,
      phase: room.phase,
      hostId: room.hostId,

      players: room.players.map(player => ({
        id: player.id,
        username: player.username,
        submitted: player.submitted
      })),

      roundsTotal: room.roundsTotal,
      roundIndex: room.roundIndex,
      category: room.category,
      teamScore: room.teamScore,
      gameId: room.gameId,
      history: room.history
    };
  }

  broadcast() {
    const state = this.publicState();

    if (!state) return;

    const message = JSON.stringify({
      type: "state",
      state
    });

    for (const socket of this.clients.values()) {
      try {
        if (socket.readyState === 1) {
          socket.send(message);
        }
      } catch {}
    }
  }
}
