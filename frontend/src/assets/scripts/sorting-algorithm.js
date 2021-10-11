import * as logging from "../scripts/logging"

// Werkzeug ID 
// - lesen = L
// - merken = M
// - fixieren = F
// - tauschen = T

//Rückmeldung
// 0 = ""
// 1 = "Sehr gut, Sie haben nun die erste Karte gelesen! Machen Sie weiter!"
// 2 = "Gut gemacht! Der Merkzeiger hält die Karte nun sichtbar und ermöglicht Ihnen weiterzuarbeiten!"
// 3 = "Durch das von Ihnen gewählte systematische Vorgehen, konnten Sie nun alle Karten erfolgreich lesen. Wie geht es nun weiter?"
// 4 = "Der erste Kartentausch hat gut geklappt. Was ist jetzt noch zu tun um die restlichen Karten zu sortieren."
// 5 = "Sie haben erfolgreich die erste Karte fixiert und damit einer Karte die endgültige Position zugewiesen. Das weitere Sortieren sollte Ihnen jetzt keine großen Schwierigkeiten mehr bereiten."
// 6 = "Auch dieser Tausch ist Ihnen geglückt! Sie werden sehen, je weniger verbleibende Karten es gibt, desto schneller werden Sie vorankommen."
// 7 = "Nur noch zwei verbleibende Karten sind zu sortieren. Bald haben Sie es geschafft!"
// 8 = "Sehr gut! Die vorletzte Karte ist fixiert. Was ist jetzt noch zu tun?"
// 9 = "Glückwunsch! Sie haben erfolgreich das Sortierbeispiel gelöst! Dabei haben Sie die Karten nach den Regeln eines Computerprogrammes sortiert. In weiterer Folge wird es dann darum gehen, dieses Vorgehen in eine Handlungsanweisung (Algorithmus) für einen Computer zu beschreiben."
// 10 = "Sie haben die bisherigen Schritte gut gelöst.Von nun an erscheinen in dieser Box nur mehr Meldungen, welche sie für die weitere Bearbeitung erforderlich sind."

const responses = ["", "Sehr gut, Sie haben nun die erste Karte gelesen! Machen Sie weiter!",
    "Gut gemacht! Der Merkzeiger hält die Karte nun sichtbar und ermöglicht Ihnen weiterzuarbeiten!",
    "Durch das von Ihnen gewählte systematische Vorgehen, konnten Sie nun alle Karten erfolgreich lesen. Wie geht es nun weiter?",
    "Der erste Kartentausch hat gut geklappt. Was ist jetzt noch zu tun um die restlichen Karten zu sortieren.",
    "Sie haben erfolgreich die erste Karte fixiert und damit einer Karte die endgültige Position zugewiesen. Das weitere Sortieren sollte Ihnen jetzt keine großen Schwierigkeiten mehr bereiten.",
    "Auch dieser Tausch ist Ihnen geglückt! Sie werden sehen, je weniger verbleibende Karten es gibt, desto schneller werden Sie vorankommen.",
    "Nur noch zwei verbleibende Karten sind zu sortieren. Bald haben Sie es geschafft!",
    "Sehr gut! Die vorletzte Karte ist fixiert. Was ist jetzt noch zu tun?",
    "Glückwunsch! Sie haben erfolgreich das Sortierbeispiel gelöst! Dabei haben Sie die Karten nach den Regeln eines Computerprogrammes sortiert. In weiterer Folge wird es dann darum gehen, dieses Vorgehen in eine Handlungsanweisung (Algorithmus) für einen Computer zu beschreiben.",
    "Sie haben die bisherigen Schritte gut gelöst.Von nun an erscheinen in dieser Box nur mehr Meldungen, welche sie für die weitere Bearbeitung erforderlich sind."
];


// linkslesend, linksfixierend
const solutionPath1 = [{
        step: 1,
        action: {
            tool: 'L',
            card1: 1,
            card2: null
        },
        response: 1
    },
    {
        step: 2,
        action: {
            tool: 'M',
            card1: 1,
            card2: null
        },
        response: 2
    },
    {
        step: 3,
        action: {
            tool: 'L',
            card1: 2,
            card2: null
        },
        response: 10
    },
    {
        step: 4,
        action: {
            tool: 'M',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 5,
        action: {
            tool: 'L',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 6,
        action: {
            tool: 'M',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 7,
        action: {
            tool: 'L',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 8,
        action: {
            tool: 'M',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 9,
        action: {
            tool: 'L',
            card1: 5,
            card2: null
        },
        response: 3
    },
    {
        step: 10,
        action: {
            tool: 'T',
            card1: 1,
            card2: 4
        },
        response: 4
    },

    {
        step: 11,
        action: {
            tool: 'F',
            card1: 1,
            card2: null
        },
        response: 5
    },
    {
        step: 12,
        action: {
            tool: 'L',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 13,
        action: {
            tool: 'M',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 14,
        action: {
            tool: 'L',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 15,
        action: {
            tool: 'M',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 16,
        action: {
            tool: 'L',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 17,
        action: {
            tool: 'L',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 18,
        action: {
            tool: 'T',
            card1: 2,
            card2: 3
        },
        response: 6
    },

    {
        step: 19,
        action: {
            tool: 'F',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 20,
        action: {
            tool: 'L',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 21,
        action: {
            tool: 'M',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 22,
        action: {
            tool: 'L',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 23,
        action: {
            tool: 'M',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 24,
        action: {
            tool: 'L',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 25,
        action: {
            tool: 'T',
            card1: 3,
            card2: 5
        },
        response: 7
    },

    {
        step: 26,
        action: {
            tool: 'F',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 27,
        action: {
            tool: 'L',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 28,
        action: {
            tool: 'M',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 29,
        action: {
            tool: 'L',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 30,
        action: {
            tool: 'M',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 31,
        action: {
            tool: 'T',
            card1: 4,
            card2: 5
        },
        response: 0
    },

    {
        step: 32,
        action: {
            tool: 'F',
            card1: 4,
            card2: null
        },
        response: 8
    },
    {
        step: 33,
        action: {
            tool: 'L',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 34,
        action: {
            tool: 'M',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 35,
        action: {
            tool: 'T',
            card1: 5,
            card2: 5
        },
        response: 0
    },
    {
        step: 36,
        action: {
            tool: 'F',
            card1: 5,
            card2: null
        },
        response: 9
    },
]

// linkslesend, rechtsfixierend
const solutionPath2 = [{
        step: 1,
        action: {
            tool: 'L',
            card1: 1,
            card2: null
        },
        response: 1
    },
    {
        step: 2,
        action: {
            tool: 'M',
            card1: 1,
            card2: null
        },
        response: 2
    },
    {
        step: 3,
        action: {
            tool: 'L',
            card1: 2,
            card2: null
        },
        response: 10
    },
    {
        step: 4,
        action: {
            tool: 'L',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 5,
        action: {
            tool: 'L',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 6,
        action: {
            tool: 'L',
            card1: 5,
            card2: null
        },
        response: 3
    },
    {
        step: 7,
        action: {
            tool: 'T',
            card1: 1,
            card2: 5
        },
        response: 4
    },

    {
        step: 8,
        action: {
            tool: 'F',
            card1: 5,
            card2: null
        },
        response: 5
    },
    {
        step: 9,
        action: {
            tool: 'L',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 10,
        action: {
            tool: 'M',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 11,
        action: {
            tool: 'L',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 12,
        action: {
            tool: 'M',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 13,
        action: {
            tool: 'L',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 14,
        action: {
            tool: 'L',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 15,
        action: {
            tool: 'T',
            card1: 2,
            card2: 4
        },
        response: 6
    },

    {
        step: 16,
        action: {
            tool: 'F',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 17,
        action: {
            tool: 'L',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 18,
        action: {
            tool: 'M',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 19,
        action: {
            tool: 'L',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 20,
        action: {
            tool: 'L',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 21,
        action: {
            tool: 'T',
            card1: 1,
            card2: 3
        },
        response: 7
    },

    {
        step: 22,
        action: {
            tool: 'F',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 23,
        action: {
            tool: 'L',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 24,
        action: {
            tool: 'M',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 25,
        action: {
            tool: 'L',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 26,
        action: {
            tool: 'T',
            card1: 1,
            card2: 2
        },
        response: 0
    },

    {
        step: 27,
        action: {
            tool: 'F',
            card1: 2,
            card2: null
        },
        response: 8
    },
    {
        step: 28,
        action: {
            tool: 'L',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 29,
        action: {
            tool: 'M',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 30,
        action: {
            tool: 'T',
            card1: 1,
            card2: 1
        },
        response: 0
    },
    {
        step: 31,
        action: {
            tool: 'F',
            card1: 1,
            card2: null
        },
        response: 9
    },
]

// rechtslesend, linksfixierend
const solutionPath3 = [{
        step: 1,
        action: {
            tool: 'L',
            card1: 5,
            card2: null
        },
        response: 1
    },
    {
        step: 2,
        action: {
            tool: 'M',
            card1: 5,
            card2: null
        },
        response: 2
    },
    {
        step: 3,
        action: {
            tool: 'L',
            card1: 4,
            card2: null
        },
        response: 10
    },
    {
        step: 4,
        action: {
            tool: 'M',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 5,
        action: {
            tool: 'L',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 6,
        action: {
            tool: 'L',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 7,
        action: {
            tool: 'L',
            card1: 1,
            card2: null
        },
        response: 3
    },
    {
        step: 8,
        action: {
            tool: 'T',
            card1: 1,
            card2: 4
        },
        response: 4
    },

    {
        step: 9,
        action: {
            tool: 'F',
            card1: 1,
            card2: null
        },
        response: 5
    },
    {
        step: 10,
        action: {
            tool: 'L',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 11,
        action: {
            tool: 'M',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 12,
        action: {
            tool: 'L',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 13,
        action: {
            tool: 'L',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 14,
        action: {
            tool: 'M',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 15,
        action: {
            tool: 'L',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 16,
        action: {
            tool: 'T',
            card1: 2,
            card2: 3
        },
        response: 6
    },

    {
        step: 17,
        action: {
            tool: 'F',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 18,
        action: {
            tool: 'L',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 19,
        action: {
            tool: 'M',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 20,
        action: {
            tool: 'L',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 21,
        action: {
            tool: 'L',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 22,
        action: {
            tool: 'T',
            card1: 3,
            card2: 5
        },
        response: 7
    },

    {
        step: 23,
        action: {
            tool: 'F',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 24,
        action: {
            tool: 'L',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 25,
        action: {
            tool: 'M',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 26,
        action: {
            tool: 'L',
            card1: 4,
            card2: 1
        },
        response: 0
    },
    {
        step: 27,
        action: {
            tool: 'T',
            card1: 4,
            card2: 5
        },
        response: 0
    },

    {
        step: 28,
        action: {
            tool: 'F',
            card1: 4,
            card2: null
        },
        response: 8
    },
    {
        step: 29,
        action: {
            tool: 'L',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 30,
        action: {
            tool: 'M',
            card1: 5,
            card2: null
        },
        response: 0
    },
    {
        step: 31,
        action: {
            tool: 'T',
            card1: 5,
            card2: 5
        },
        response: 0
    },
    {
        step: 32,
        action: {
            tool: 'F',
            card1: 5,
            card2: null
        },
        response: 9
    },
]

// rechtslesend, rechtsfixierend
const solutionPath4 = [{
        step: 1,
        action: {
            tool: 'L',
            card1: 5,
            card2: null
        },
        response: 1
    },
    {
        step: 2,
        action: {
            tool: 'M',
            card1: 5,
            card2: null
        },
        response: 2
    },
    {
        step: 3,
        action: {
            tool: 'L',
            card1: 4,
            card2: null
        },
        response: 10
    },
    {
        step: 4,
        action: {
            tool: 'L',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 5,
        action: {
            tool: 'L',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 6,
        action: {
            tool: 'M',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 7,
        action: {
            tool: 'L',
            card1: 1,
            card2: null
        },
        response: 3
    },
    {
        step: 8,
        action: {
            tool: 'M',
            card1: 1,
            card2: null
        },
        response: 0
    },

    {
        step: 9,
        action: {
            tool: 'T',
            card1: 1,
            card2: 5
        },
        response: 4
    },
    {
        step: 10,
        action: {
            tool: 'F',
            card1: 5,
            card2: null
        },
        response: 5
    },
    {
        step: 11,
        action: {
            tool: 'L',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 12,
        action: {
            tool: 'M',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 13,
        action: {
            tool: 'L',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 14,
        action: {
            tool: 'M',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 15,
        action: {
            tool: 'L',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 16,
        action: {
            tool: 'M',
            card1: 2,
            card2: null
        },
        response: 0
    },

    {
        step: 17,
        action: {
            tool: 'L',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 18,
        action: {
            tool: 'T',
            card1: 2,
            card2: 4
        },
        response: 6
    },
    {
        step: 19,
        action: {
            tool: 'F',
            card1: 4,
            card2: null
        },
        response: 0
    },
    {
        step: 20,
        action: {
            tool: 'L',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 21,
        action: {
            tool: 'M',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 22,
        action: {
            tool: 'L',
            card1: 2,
            card2: null
        },
        response: 0
    },

    {
        step: 23,
        action: {
            tool: 'L',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 24,
        action: {
            tool: 'M',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 25,
        action: {
            tool: 'T',
            card1: 1,
            card2: 3
        },
        response: 7
    },
    {
        step: 26,
        action: {
            tool: 'F',
            card1: 3,
            card2: null
        },
        response: 0
    },
    {
        step: 27,
        action: {
            tool: 'L',
            card1: 2,
            card2: null
        },
        response: 0
    },

    {
        step: 28,
        action: {
            tool: 'M',
            card1: 2,
            card2: null
        },
        response: 0
    },
    {
        step: 29,
        action: {
            tool: 'L',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 30,
        action: {
            tool: 'M',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 31,
        action: {
            tool: 'T',
            card1: 1,
            card2: 2
        },
        response: 0
    },
    {
        step: 32,
        action: {
            tool: 'F',
            card1: 2,
            card2: null
        },
        response: 8
    },
    {
        step: 33,
        action: {
            tool: 'L',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 34,
        action: {
            tool: 'M',
            card1: 1,
            card2: null
        },
        response: 0
    },
    {
        step: 35,
        action: {
            tool: 'T',
            card1: 1,
            card2: 1
        },
        response: 9
    },
    {
        step: 36,
        action: {
            tool: 'F',
            card1: 1,
            card2: null
        },
        response: 0
    },
]

// count number of matching actions (performed and solution) in each path 
// key of map identifies the path
// the first path with 5 matching actions is selected
const pathConsensus = new Map();
pathConsensus.set(1, 0);
pathConsensus.set(2, 0);
pathConsensus.set(3, 0);
pathConsensus.set(4, 0);

var selectedSolutionPath = 0;
var feedbackMessage = "";

/**
 * Checks if the performed action and solution action match. If they match the step counter for this path is increased in pathConsensus.
 * @param {Object} solutionAction 
 * @param {Object} performedAction 
 * @param {int} checkedPath 
 * @returns {boolean} true if the performed action matches the solution action otherwise returns false 
 */
function checkAction(solutionAction, performedAction, checkedPath) {
    if (solutionAction.tool == performedAction.tool && solutionAction.card1 == performedAction.card1 && solutionAction.card2 == performedAction.card2) {
        //valid action in checkedPath performed --> increase counter of path consensus of checked path
        let newValue = pathConsensus.get(checkedPath) + 1
        pathConsensus.set(checkedPath, newValue);
        return true;
    }
    return false;
}

/**
 * Returns the string from responses matching with the current step of the solution.
 * @param {int} solutionPath selectedSolutionPath
 * @returns {String} response of current step in selected solution path
 */
function setValidFeedbackMessage(solutionPath) {
    console.log(solutionPath)
    printPathConsensus()
    switch (solutionPath) {
        case 1:
            feedbackMessage = responses[solutionPath1.find((solStep) => solStep.step === pathConsensus.get(solutionPath)).response]
            return;
        case 2:
            feedbackMessage = responses[solutionPath2.find((solStep) => solStep.step === pathConsensus.get(solutionPath)).response];
            return;
        case 3:
            feedbackMessage = responses[solutionPath3.find((solStep) => solStep.step === pathConsensus.get(solutionPath)).response];
            return;
        case 4:
            feedbackMessage = responses[solutionPath4.find((solStep) => solStep.step === pathConsensus.get(solutionPath)).response];
            return;
        default:
            console.log("no valid solution path")
            throw new Error("No valid solution path detected");
    }
}

/**
 * Handles the action perfomed by the user and passes the action to the server.
 * @param {Object} action performed action of the user (card1 is always the card with the smaller id)
 * @returns {String} response of the performed action depending on the set solution path
 */
export function actionPerformed(action) {
    //1. check if a solution path is already set
    //2a. if yes -> check if the action matches the solution path (valid/invalid action)
    //2b. if no -> check if the action matches any solution path (valid/invalid action)

    console.log(action)

    let validAction = checkIfValidAction(action);

    if (validAction) {
        console.log("Valid action perfomed");
        if (selectedSolutionPath == 0) {
            //path is not selected --> check if path is now selected
            checkSolutionPath();
            //messages until path selection are the same
            setValidFeedbackMessage(1);
        } else {
            //path is selected --> get message for selectedSolutionPath
            setValidFeedbackMessage(selectedSolutionPath);
        }
    } else {
        //TODO: handle invalid action
        feedbackMessage = "Aktion nicht gültig!"
        console.log("Invalid action performed");
    }
}

function checkSolutionPath() {
    for (let path = 1; path <= 4; path++) {
        if (pathConsensus.get(path) >= 4) {
            console.log("Set selectedSolutionPath to path" + path);
            // step 4 of path performed --> set path
            selectedSolutionPath = path;
        }
    }
}

function printPathConsensus() {
    for (const [key, value] of pathConsensus.entries()) {
        console.log("Path: " + key + " --> Step: " + value)
    }
}

/**
 * checks if an action is valid 
 * @param {Object} performedAction action that is checked for validity
 * @returns {Boolean} true if action is valid or false if action is invalid
 */
function checkIfValidAction(performedAction) {
    //get action of solutions to compare to --> current step in path + 1
    let nextActionSolution1 = solutionPath1.find((step) => step.step === pathConsensus.get(1) + 1).action;
    let nextActionSolution2 = solutionPath2.find((step) => step.step === pathConsensus.get(2) + 1).action;
    let nextActionSolution3 = solutionPath3.find((step) => step.step === pathConsensus.get(3) + 1).action;
    let nextActionSolution4 = solutionPath4.find((step) => step.step === pathConsensus.get(4) + 1).action;

    let validAction = false;
    if (checkAction(nextActionSolution1, performedAction, 1)) validAction = true;
    if (checkAction(nextActionSolution2, performedAction, 2)) validAction = true;
    if (checkAction(nextActionSolution3, performedAction, 3)) validAction = true;
    if (checkAction(nextActionSolution4, performedAction, 4)) validAction = true;

    return validAction
}

/**
 * checks if an action is valid 
 * @param {Object} performedAction action that is checked for validity
 * @returns {Boolean} true if action is valid or false if action is invalid
 */
function checkIfValidActionWithPath(performedAction, path) {
    let nextActionSolution;
    switch (path) {
        case 0:
            nextActionSolution = solutionPath1.find((step) => step.step === pathConsensus.get(path) + 1).action;
            break;
        case 1:
            nextActionSolution = solutionPath1.find((step) => step.step === pathConsensus.get(path) + 1).action;
            break;
        case 2:
            nextActionSolution = solutionPath2.find((step) => step.step === pathConsensus.get(path) + 1).action;
            break;
        case 3:
            nextActionSolution = solutionPath3.find((step) => step.step === pathConsensus.get(path) + 1).action;
            break;
        case 4:
            nextActionSolution = solutionPath4.find((step) => step.step === pathConsensus.get(path) + 1).action;
            break;
        default:
            console.log("no valid solution path")
            throw new Error("No valid solution path detected");

    }
    return checkAction(nextActionSolution, performedAction, path);
}


function sendActionToServer(entry) {
    //TODO: save action in database
    //TODO: send action to server
}

/**
 * 
 * @returns feedback mesage of last action
 */
export function getFeedbackMessage() {
    addNewLogEntry("test");
    return feedbackMessage;
}

function addNewLogEntry (logEntry) {
    logging.appendLogEntry(logEntry);
}