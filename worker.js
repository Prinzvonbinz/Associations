const CATEGORIES = [
  "Halloween",
  "Ein Wort mit 3 Buchstaben",
  "Tiere",
  "Essen",
  "Getränke",
  "Videospiele",
  "Minecraft",
  "Fortnite",
  "Filme",
  "Serien",
  "Superhelden",
  "Schulfächer",
  "Dinge im Klassenzimmer",
  "Berufe",
  "Sportarten",
  "Länder",
  "Städte",
  "Obst",
  "Gemüse",
  "Süßigkeiten",
  "Fast Food",
  "Dinge im Kühlschrank",
  "Dinge im Badezimmer",
  "Dinge im Schlafzimmer",
  "Dinge in einer Küche",
  "Dinge im Rucksack",
  "Dinge, die Geräusche machen",
  "Dinge, die fliegen",
  "Dinge, die schwimmen",
  "Dinge, die rund sind",
  "Dinge, die blau sind",
  "Dinge, die teuer sind",
  "Dinge, die man verlieren kann",
  "Dinge, die man sammelt",
  "Dinge, die man verschenkt",
  "Dinge am Strand",
  "Dinge im Wald",
  "Dinge im Weltall",
  "Dinge im Supermarkt",
  "Dinge auf einer Party",
  "Dinge an Weihnachten",
  "Dinge im Sommer",
  "Dinge im Winter",
  "Dinge, die man morgens macht",
  "Dinge, die man nicht vergessen sollte",
  "Marken",
  "Automarken",
  "Tiere im Zoo",
  "Meerestiere",
  "Dinosaurier",
  "Mythische Wesen",
  "Zaubersprüche",
  "Fantasy-Welten",
  "Musikinstrumente",
  "Musikgenres",
  "Internet-Memes",
  "YouTube",
  "Social Media",
  "Technologie",
  "Erfindungen",
  "Wörter mit A",
  "Wörter mit B",
  "Wörter mit S",
  "Wörter mit K",
  "Wörter mit Z",
  "Wörter mit genau 5 Buchstaben",
  "Dinge, die man essen kann",
  "Dinge, die man nicht essen kann",
  "Dinge, die man einschalten kann",
  "Dinge, die man öffnen kann",
  "Dinge, die man in der Schule hört",
  "Dinge, die man auf Reisen braucht",
  "Dinge, die man im Internet kauft",
  "Dinge, die man reparieren kann",
  "Dinge, die man unter Wasser findet",
  "Dinge, die man nachts sieht",
  "Dinge, die Angst machen",
  "Dinge, die glücklich machen",
  "Dinge, die man im Sommer trägt",
  "Dinge, die man im Winter trägt",
  "Dinge, die man in einem Film sieht",
  "Dinge, die man im Urlaub macht",
  "Nenne etwas, das man im Sommerurlaub macht",
  "Nenne eine Beschäftigung an einem verschneiten Tag",
  "Nenne etwas, das bei einem Festival nicht fehlen darf",
  "Nenne eine Dekoration für eine Feier",
  "Nenne etwas, das man bei einem Umzug braucht",
  "Nenne eine Aktivität für einen Spieleabend",
  "Nenne etwas, das man bei einem Picknick mitnimmt",
  "Nenne einen Grund, eine Party zu veranstalten",
  "Nenne etwas, das man bei einer Schatzsuche findet",
  "Nenne eine Aktivität für einen Kindergeburtstag",
  "Nenne etwas, das man auf einer Klassenfahrt erlebt",
  "Nenne etwas, das man bei einem Straßenfest sieht",
  "Nenne etwas, das man mit einer Tastatur macht",

  // 🎬 FILME & UNTERHALTUNG
  "Nenne einen Animationsfilm",
  "Nenne einen Film mit Superhelden",
  "Nenne eine bekannte Filmreihe",
  "Nenne einen Film mit einem Roboter",
  "Nenne einen Film, der im Weltraum spielt",
  "Nenne ein Filmgenre",
  "Nenne einen Beruf beim Filmdreh",
  "Nenne eine bekannte Zeichentrickserie",
  "Nenne ein Instrument in einem Orchester",
  "Nenne ein Genre elektronischer Musik",
  "Nenne eine bekannte Musikplattform",
  "Nenne einen Grund, warum ein Song im Kopf bleibt",
  "Nenne etwas, das bei einem Konzert passiert",
  "Nenne ein Bühnenaccessoire",
  "Nenne ein Genre für einen Podcast",
  "Nenne eine Art von Unterhaltungsshow",
  "Nenne ein bekanntes Brettspiel",
  "Nenne ein Kartenspiel",
  "Nenne eine Art von Zaubertrick",
  "Nenne etwas, das in einem Escape Room vorkommt",

  // 🏫 SCHULE & WISSEN
  "Nenne ein chemisches Element",
  "Nenne ein Säugetier",
  "Nenne einen Planeten",
  "Nenne einen mathematischen Fachbegriff",
  "Nenne eine geometrische Form",
  "Nenne eine physikalische Einheit",
  "Nenne eine historische Epoche",
  "Nenne eine antike Erfindung",
  "Nenne eine europäische Hauptstadt",
  "Nenne eine Sprache mit einem anderen Schriftsystem",
  "Nenne eine berühmte wissenschaftliche Entdeckung",
  "Nenne einen Knochen im menschlichen Körper",
  "Nenne ein Organ des menschlichen Körpers",
  "Nenne eine Energiequelle",
  "Nenne eine erneuerbare Energieform",
  "Nenne ein Metall",
  "Nenne einen Aggregatzustand",
  "Nenne eine Wolkenart",
  "Nenne eine Maßeinheit für Länge",
  "Nenne eine mathematische Rechenoperation",

  // 🏙️ ORTE & REISEN
  "Nenne eine Insel im Mittelmeer",
  "Nenne eine Großstadt in Asien",
  "Nenne ein Land in Südamerika",
  "Nenne ein Land ohne Meeresküste",
  "Nenne ein bekanntes Gebirge",
  "Nenne einen berühmten Wasserfall",
  "Nenne eine Sehenswürdigkeit in Europa",
  "Nenne einen Flughafen",
  "Nenne ein öffentliches Verkehrsmittel",
  "Nenne einen Ort für einen Familienausflug",
  "Nenne einen Ort für ein erstes Date",
  "Nenne einen Ort, an dem man Ruhe findet",
  "Nenne einen Ort mit vielen Touristen",
  "Nenne einen Ort, an dem man Tiere beobachten kann",
  "Nenne eine Unterkunft für eine Reise",
  "Nenne etwas, das man am Bahnhof hört",
  "Nenne etwas, das man im Flugzeug braucht",
  "Nenne eine Sehenswürdigkeit in Deutschland",
  "Nenne einen Ort unter der Erde",
  "Nenne einen Ort, den man nur mit einem Boot erreicht",

  // ⚽ SPORT & BEWEGUNG
  "Nenne eine olympische Sportart",
  "Nenne eine Ballsportart",
  "Nenne eine Wintersportart",
  "Nenne eine Sportart im Wasser",
  "Nenne ein Gerät aus einem Fitnessstudio",
  "Nenne eine Position im Fußball",
  "Nenne eine Sportart mit Schläger",
  "Nenne eine Kampfsportart",
  "Nenne etwas, das man beim Wandern braucht",
  "Nenne einen Grund für eine Spielunterbrechung",
  "Nenne eine Disziplin der Leichtathletik",
  "Nenne eine Sportart mit einem Netz",
  "Nenne etwas, das ein Schiedsrichter benutzt",
  "Nenne eine Sportart auf Rädern",
  "Nenne eine Sportart auf Eis",
  "Nenne etwas, das man beim Schwimmen trägt",
  "Nenne ein Trainingsziel",
  "Nenne eine Art von Tanz",
  "Nenne ein Sportereignis",
  "Nenne eine Ausrüstung für den Radsport",

  // 👕 GEGENSTÄNDE & MODE
  "Nenne einen Kleidungsstil",
  "Nenne ein Accessoire für den Kopf",
  "Nenne eine Art von Schuh",
  "Nenne ein Material für Kleidung",
  "Nenne einen Gegenstand aus Leder",
  "Nenne etwas, das aus Glas besteht",
  "Nenne etwas aus Edelstahl",
  "Nenne einen Gegenstand mit einem Reißverschluss",
  "Nenne etwas, das man falten kann",
  "Nenne etwas, das man aufhängen kann",
  "Nenne einen Gegenstand mit Rädern",
  "Nenne etwas mit einem Display",
  "Nenne einen Gegenstand mit einem Magneten","Nenne etwas, das man aufladen muss",
  "Nenne etwas, das Wasser filtert",
  "Nenne einen Gegenstand mit einem Schloss",
  "Nenne etwas, das Geräusche erzeugt",
  "Nenne etwas, das Licht reflektiert",
  "Nenne einen Gegenstand aus Papier",
  "Nenne etwas, das man zusammenklappen kann",

  // 😂 HUMOR & CHAOS
  "Nenne etwas, das bei einer Party schiefgehen kann",
  "Nenne einen peinlichen Moment",
  "Nenne einen absurden Superheldennamen",
  "Nenne einen schlechten Namen für ein Restaurant",
  "Nenne etwas, das ein Alien seltsam finden würde",
  "Nenne einen ungewöhnlichen Haustiernamen",
  "Nenne etwas, das man nicht in der Schule hören möchte",
  "Nenne einen absurden Grund für Verspätung",
  "Nenne etwas, das man niemals in einer Suppe erwarten würde",
  "Nenne einen lächerlichen Wettbewerb",
  "Nenne etwas, das ein Pinguin nicht gebrauchen kann",
  "Nenne einen Gegenstand, der als Haustier ungeeignet wäre",
  "Nenne einen ungewöhnlichen Beruf",
  "Nenne etwas, das bei einem Zaubertrick schiefgehen kann",
  "Nenne eine absurde Erfindung",
  "Nenne etwas, das ein Pirat nicht verlieren möchte",
  "Nenne einen seltsamen Namen für einen Planeten",
  "Nenne etwas, das man nicht in einem Aufzug tun sollte",
  "Nenne eine ungewöhnliche Zutat für einen Kuchen",
  "Nenne einen schlechten Namen für eine Band",

  // 🧠 KNIFFLIGE KATEGORIEN
  "Nenne ein Wort mit genau drei Buchstaben",
  "Nenne ein Wort mit fünf Silben",
  "Nenne ein deutsches Wort mit Doppelbuchstaben",
  "Nenne ein Wort, das mit X beginnt",
  "Nenne ein Wort, das auf Z endet",
  "Nenne ein Wort ohne den Buchstaben E",
  "Nenne ein Wort mit drei verschiedenen Vokalen",
  "Nenne ein Wort, das rückwärts anders klingt",
  "Nenne einen Begriff mit mindestens zwölf Buchstaben",
  "Nenne ein zusammengesetztes deutsches Substantiv",
  "Nenne ein Wort, das mehrere Bedeutungen hat",
  "Nenne ein Wort, das sich auf Haus reimt",
  "Nenne einen Begriff aus vier Buchstaben",
  "Nenne ein Wort mit zwei aufeinanderfolgenden Vokalen",
  "Nenne ein Wort, das mit demselben Buchstaben beginnt und endet",
  "Nenne einen Begriff, der auch ein Vorname sein kann",
  "Nenne ein deutsches Wort mit ungewöhnlicher Schreibweise",
  "Nenne ein Wort, das mit Q beginnt",
  "Nenne ein Wort mit genau zwei Silben",
  "Nenne ein Wort, das man leicht falsch schreibt",

  // 🚀 FANTASIE & ZUKUNFT
  "Nenne eine futuristische Erfindung",
  "Nenne einen Beruf im Jahr 2200",
  "Nenne etwas, das auf dem Mars gebaut werden könnte",
  "Nenne eine Fähigkeit, die Menschen gerne hätten",
  "Nenne eine neue Energiequelle für Raumschiffe",
  "Nenne einen Gegenstand aus einer Fantasywelt",
  "Nenne eine magische Fähigkeit",
  "Nenne eine Spezies für ein Science-Fiction-Universum",
  "Nenne eine futuristische Transportmöglichkeit",
  "Nenne etwas, das ein Zeitreisender mitnehmen würde",
  "Nenne einen Grund für eine Reise durch ein Wurmloch",
  "Nenne einen Namen für eine Weltraumstation",
  "Nenne eine Gefahr auf einem fremden Planeten",
  "Nenne einen Gegenstand aus einer Zauberschule",
  "Nenne eine Fähigkeit für einen Endgegner",
  "Nenne etwas, das in einer Unterwasserstadt existiert",
  "Nenne eine Erfindung, die den Alltag verändern würde",
  "Nenne eine Technologie, die es noch nicht gibt",
  "Nenne ein Fortbewegungsmittel für eine Fantasywelt",
  "Nenne einen Namen für eine geheime Organisation",

  // 🎃 JAHRESZEITEN & ANLÄSSE
  "Nenne etwas, das man an Silvester macht",
  "Nenne eine Halloween-Verkleidung",
  "Nenne etwas, das man auf einem Weihnachtsmarkt kauft",
  "Nenne eine Tradition zu Ostern",
  "Nenne etwas, das man bei einer Hochzeit braucht",
  "Nenne eine typische Geburtstagsüberraschung",
  "Nenne etwas, das man beim Camping benötigt",
  "Nenne eine Aktivität an einem Regentag",
  // 🌍 ALLTAG & WELT
  "Nenne etwas, das man jeden Morgen macht",
  "Nenne etwas, das in einer Hosentasche steckt",
  "Nenne etwas, das man verlieren kann",
  "Nenne etwas, das man sammeln kann",
  "Nenne etwas, das Menschen nervös macht",
  "Nenne etwas, das man ungern teilt",
  "Nenne etwas, das man verschenken kann",
  "Nenne etwas, das man reparieren kann",
  "Nenne etwas, das man ausleihen kann",
  "Nenne etwas, das man niemals vergessen möchte",
  "Nenne etwas, das in einem Rucksack steckt",
  "Nenne etwas, das man im Dunkeln sucht",
  "Nenne etwas, das man täglich benutzt",
  "Nenne etwas, das man versehentlich kaputt machen kann",
  "Nenne etwas, das man auf Reisen mitnimmt",
  "Nenne etwas, das man zu Hause versteckt",
  "Nenne etwas, das man aufräumen muss",
  "Nenne etwas, das man oft verlegt",
  "Nenne etwas, das man vor dem Verlassen des Hauses überprüft",
  "Nenne etwas, das man nur selten benutzt",

  // 🍕 ESSEN & TRINKEN
  "Nenne eine ungewöhnliche Pizzazutat",
  "Nenne ein Lebensmittel, das knackt",
  "Nenne ein Gericht, das man mit den Händen isst",
  "Nenne eine beliebte Soße",
  "Nenne etwas, das man auf ein Brot legt",
  "Nenne ein Lebensmittel mit einer Schale",
  "Nenne etwas, das man grillen kann",
  "Nenne ein Gericht aus einem anderen Land",
  "Nenne eine beliebte Eissorte",
  "Nenne etwas, das sauer schmeckt",
  "Nenne ein Getränk ohne Kohlensäure",
  "Nenne etwas, das man zum Frühstück essen kann",
  "Nenne eine Süßigkeit mit Schokolade",
  "Nenne ein Lebensmittel, das im Kühlschrank steht",
  "Nenne etwas, das man mit Käse überbacken kann",
  "Nenne eine Zutat für einen Salat",
  "Nenne etwas, das man in einer Bäckerei kauft",
  "Nenne ein Gericht mit Kartoffeln",
  "Nenne ein Getränk, das heiß serviert wird",
  "Nenne etwas, das man mit Zucker bestreut",

  // 🐾 TIERE & NATUR
  "Nenne ein Tier mit Streifen",
  "Nenne ein Tier, das nachts aktiv ist",
  "Nenne ein Tier, das fliegen kann",
  "Nenne ein Tier, das im Wasser lebt",
  "Nenne ein Tier mit einem langen Hals",
  "Nenne ein Tier, das Winterschlaf hält",
  "Nenne ein Tier, das in Australien lebt",
  "Nenne ein Tier, das in einer Wüste lebt",
  "Nenne ein Tier, das sehr langsam ist",
  "Nenne ein Tier mit einem Panzer",
  "Nenne einen Baum mit essbaren Früchten",
  "Nenne eine Blume mit einer auffälligen Farbe",
  "Nenne etwas, das man im Wald findet",
  "Nenne etwas, das bei Gewitter passiert",
  "Nenne etwas, das im Herbst von Bäumen fällt",
  "Nenne ein Naturphänomen am Himmel",
  "Nenne etwas, das in einer Höhle lebt",
  "Nenne eine Landschaftsform",
  "Nenne etwas, das man am Strand finden kann",
  "Nenne eine Pflanze, die man essen kann",

  // 🎮 GAMING & TECH
  "Nenne ein bekanntes Videospiel",
  "Nenne eine Spielkonsole",
  "Nenne ein Gaming-Zubehör",
  "Nenne etwas, das in einem Inventar liegt",
  "Nenne einen Gegenstand aus einem Rollenspiel",
  "Nenne einen typischen Endgegner",
  "Nenne eine Fähigkeit aus einem Videospiel",
  "Nenne einen Grund für einen Game Over",
  "Nenne etwas, das in einem Multiplayer-Spiel nervt",
  "Nenne einen Gegenstand, den man in einem Spiel craften kann",
  "Nenne eine Programmiersprache",
  "Nenne eine bekannte App",
  "Nenne einen Grund, warum ein Computer langsam ist",
  "Nenne ein Gerät mit Touchscreen",
  "Nenne ein soziales Netzwerk",
  "Nenne eine Computerkomponente",
  "Nenne eine Dateiendung",
  "Nenne ein digitales Dateiformat",
  "Nenne ein Gerät mit Bluetooth",
];

function randomId() {
  return crypto.randomUUID();
}

function randomCategory() {
  return CATEGORIES[
    Math.floor(Math.random() * CATEGORIES.length)
  ];
}

function normalizeAnswer(answer) {
  return String(answer)
  .toLocaleLowerCase("de-DE")
  .replace(/\s+/g, "");
}

function validRounds(value) {
  const number = Number(value);

  if (
    !Number.isInteger(number) ||
    number < 1 ||
    number > 100
  ) {
    return 5;
  }

  return number;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/ws") {
      if (!env.ROOMS) {
        return new Response("Durable Object binding fehlt.", {
          status: 500
        });
      }

      const code = (
        url.searchParams.get("room") || ""
      ).toUpperCase();

      if (!/^[A-Z0-9]{6}$/.test(code)) {
        return new Response("Ungültiger Lobby-Code.", {
          status: 400
        });
      }

      const id = env.ROOM.idFromName(code);
      const room = env.ROOMS.get(id);

      return room.fetch(request);
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response("Associations Server läuft.", {
      status: 200
    });
  }
};

export class Room {
  constructor(ctx, env) {
    this.ctx = ctx;
    this.env = env;
    this.room = null;this.ready = this.ctx.storage
      .get("room")
      .then(saved => {
        this.room = saved || null;
      });
  }

  async fetch(request) {
    if (
      request.headers.get("Upgrade")?.toLowerCase()
      !== "websocket"
    ) {
      return new Response("WebSocket erforderlich.", {
        status: 426
      });
    }

    const url = new URL(request.url);

    const code = (
      url.searchParams.get("room") || ""
    ).toUpperCase();

    const username = (
      url.searchParams.get("username") || ""
    ).trim().slice(0, 20);

    const clientId = (
      url.searchParams.get("clientId") || ""
    ).slice(0, 100);

    const mode = url.searchParams.get("mode");

    await this.ready;

    if (!username || !clientId) {
      return new Response("Username oder Spieler-ID fehlt.", {
        status: 400
      });
    }

    if (mode !== "create" && mode !== "join") {
      return new Response("Ungültiger Modus.", {
        status: 400
      });
    }

    if (mode === "create") {
      if (this.room && this.room.players.length > 0) {
        return new Response("Diese Lobby existiert bereits.", {
          status: 409
        });
      }

      this.room = {
        code,
        hostId: clientId,
        phase: "lobby",
        roundsTotal: 5,
        roundIndex: 1,
        teamScore: 0,
        category: "",
        gameId: "",
        players: [
          {
            id: clientId,
            username,
            submitted: false
          }
        ],
        pendingAnswers: {},
        history: []
      };
    } else {
      if (!this.room || this.room.players.length === 0) {
        return new Response("Lobby nicht gefunden.", {
          status: 404
        });
      }

      const existing = this.room.players.find(
        player => player.id === clientId
      );

      if (existing) {
        existing.username = username;
      } else {
        if (this.room.phase !== "lobby") {
          return new Response(
            "Diese Partie läuft bereits.",
            { status: 409 }
          );
        }

        if (this.room.players.length >= 20) {
          return new Response("Lobby ist voll.", {
            status: 409
          });
        }

        this.room.players.push({
          id: clientId,
          username,
          submitted: false
        });
      }
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);

    this.ctx.acceptWebSocket(server);

    server.serializeAttachment({
      clientId
    });

    await this.persist();
    this.broadcast();

    return new Response(null, {
      status: 101,
      webSocket: client
    });
  }

  publicState() {
    if (!this.room) return null;

    const {
      pendingAnswers,
      ...state
    } = this.room;

    return {
      ...state,
      players: state.players.map(player => ({
        id: player.id,
        username: player.username,
        submitted: player.submitted
      }))
    };
  }

  broadcast() {
    if (!this.room) return;

    const message = JSON.stringify({
      type: "state",
      state: this.publicState()
    });

    for (const ws of this.ctx.getWebSockets()) {
      try {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send(message);
        }
      } catch {
        // Geschlossene Verbindungen ignorieren.
      }
    }
  }

  async persist() {
    if (this.room) {
      await this.ctx.storage.put("room", this.room);
    }
  }

  async update() {
    await this.persist();
    this.broadcast();
  }

  sendError(ws, message) {
    try {
      ws.send(JSON.stringify({
        type: "error",
        message
      }));
    } catch {
      // Verbindung nicht mehr erreichbar.
    }
  }

  async webSocketMessage(ws, message) {
    await this.ready;if (!this.room) return;

    let data;

    try {
      data = JSON.parse(
        typeof message === "string"
          ? message
          : new TextDecoder().decode(message)
      );
    } catch {
      this.sendError(ws, "Ungültige Nachricht.");
      return;
    }

    const attachment = ws.deserializeAttachment();
    const clientId = attachment?.clientId;

    if (!clientId) return;

    const room = this.room;

    const player = room.players.find(
      item => item.id === clientId
    );

    if (!player) return;

    const isHost = room.hostId === clientId;

    switch (data.type) {
      case "setRounds": {
        if (!isHost || room.phase !== "lobby") {
          return;
        }

        room.roundsTotal = validRounds(data.rounds);

        await this.update();
        break;
      }

      case "startGame": {
        if (!isHost || room.phase !== "lobby") {
          return;
        }

        if (room.players.length < 2) {
          this.sendError(
            ws,
            "Mindestens zwei Spieler werden benötigt."
          );
          return;
        }

        room.roundsTotal = validRounds(data.rounds);
        room.roundIndex = 1;
        room.teamScore = 0;
        room.category = randomCategory();
        room.gameId = randomId();
        room.history = [];
        room.pendingAnswers = {};
        room.players.forEach(p => {
          p.submitted = false;
        });
        room.phase = "playing";

        await this.update();
        break;
      }

      case "submit": {
        if (room.phase !== "playing") return;
        if (player.submitted) return;

        const answer = String(data.answer || "")
          .trim()
          .slice(0, 120);

        if (!answer) {
          this.sendError(ws, "Bitte eine Antwort eingeben.");
          return;
        }

        room.pendingAnswers[clientId] = answer;
        player.submitted = true;

        if (
          room.players.length > 0 &&
          room.players.every(p => p.submitted)
        ) {
          this.finishRound();
        } else {
          await this.update();
        }

        break;
      }

      case "nextRound": {
        if (
          !isHost ||
          room.phase !== "reveal" ||
          room.roundIndex >= room.roundsTotal
        ) {
          return;
        }

        room.roundIndex++;
        room.category = randomCategory();
        room.pendingAnswers = {};

        room.players.forEach(p => {
          p.submitted = false;
        });

        room.phase = "playing";

        await this.update();
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

        await this.update();
        break;
      }

      case "returnLobby": {
        if (!isHost || room.phase !== "results") {
          return;
        }

        room.phase = "lobby";
        room.roundIndex = 1;
        room.category = "";
        room.pendingAnswers = {};

        room.players.forEach(p => {
          p.submitted = false;
        });

        await this.update();
        break;
      }
    }
  }

  async finishRound() {
    const room = this.room;

    if (!room || room.phase !== "playing") return;

    const answers = room.players.map(player => ({
      username: player.username,
      answer: room.pendingAnswers[player.id] || ""
    }));

    const counts = new Map();

    for (const item of answers) {
      const key = normalizeAnswer(item.answer);

      counts.set(
        key,
        (counts.get(key) || 0) + 1
      );
    }

    let points = 0;

    for (const count of counts.values()) {
      if (count >= 2) {
        points += count;
      }
    }room.teamScore += points;

    room.history.push({
      round: room.roundIndex,
      category: room.category,
      answers,
      points,
      scoreAfter: room.teamScore
    });

    room.phase = "reveal";

    await this.update();
  }

  async webSocketClose(ws) {
    await this.removePlayer(ws);
  }

  async webSocketError(ws) {
    await this.removePlayer(ws);
  }

  async removePlayer(ws) {
    await this.ready;

    if (!this.room) return;

    let clientId;

    try {
      clientId = ws.deserializeAttachment()?.clientId;
    } catch {
      return;
    }

    if (!clientId) return;

    const anotherConnection = this.ctx
      .getWebSockets()
      .some(other => {
        if (other === ws) return false;

        try {
          return (
            other.readyState === WebSocket.OPEN &&
            other.deserializeAttachment()?.clientId === clientId
          );
        } catch {
          return false;
        }
      });

    if (anotherConnection) return;

    const room = this.room;

    room.players = room.players.filter(
      player => player.id !== clientId
    );

    delete room.pendingAnswers[clientId];

    if (room.players.length === 0) {
      this.room = null;
      await this.ctx.storage.delete("room");
      return;
    }

    if (room.hostId === clientId) {
      room.hostId = room.players[0].id;
    }

    if (
      room.phase === "playing" &&
      room.players.every(player => player.submitted)
    ) {
      await this.finishRound();
      return;
    }

    await this.update();
  }
}
