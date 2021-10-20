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


var currentPathStep = 0;
var selectedReadDirection;
var selectedFixDirection;
var feedbackMessage = "";


/**
 * Handles the action perfomed by the user and passes the action to the server.
 * @param {Object} action performed action of the user (card1 is always the card with the smaller id)
 */
export function actionPerformed(action) {
    let validActionPerformed = checkIfValidAction(action);
    setValidFeedbackMessage();

    if (!validActionPerformed) {
        //TODO: handle invalid action
        feedbackMessage = "Aktion nicht gültig!"
        return false;
    }
    return true;
}


/**
 * checks if an action is valid 
 * @param {Object} performedAction action that is checked for validity
 * @returns {Boolean} true if action is valid or false if action is invalid
 */
function checkIfValidAction(performedAction) {

    console.log("before: read direction " + selectedReadDirection + "; fix direction " + selectedFixDirection)

    let validStep = false;

    if (!selectedReadDirection) {
        // read direction and fix direction not set ==> step 1
        validStep = setReadDirection(performedAction);
    } else if (selectedReadDirection && !selectedFixDirection) {
        // read direction is set; fix direction not set ==> step 2-4
        validStep = setFixDirection(performedAction);

    } else if (selectedReadDirection && selectedFixDirection) {
        // read direction and fix direction are set ==> step 4+
        if (selectedReadDirection == 'L') {
            if (selectedFixDirection == 'L') {
                let actionSolutionLinksLesendLinksFixierend = solutionPath1.find((step) => step.step === currentPathStep + 1).action;
                validStep = compareAction(actionSolutionLinksLesendLinksFixierend, performedAction)
                setValidFeedbackMessage(1);
            } else if (selectedFixDirection == 'R') {
                let actionSolutionLinksLesendRechtsFixierend = solutionPath2.find((step) => step.step === currentPathStep + 1).action;
                validStep = compareAction(actionSolutionLinksLesendRechtsFixierend, performedAction)
                setValidFeedbackMessage(2);
            }
        } else if (selectedReadDirection == 'R') {
            if (selectedFixDirection == 'L') {
                let actionSolutionRechtsLesendLinksFixierend = solutionPath3.find((step) => step.step === currentPathStep + 1).action;
                validStep = compareAction(actionSolutionRechtsLesendLinksFixierend, performedAction)
                setValidFeedbackMessage(3);
            } else if (selectedFixDirection == 'R') {
                let actionSolutionRechtsLesendRechtsFixierend = solutionPath4.find((step) => step.step === currentPathStep + 1).action;
                validStep = compareAction(actionSolutionRechtsLesendRechtsFixierend, performedAction)
                setValidFeedbackMessage(4);
            }
        }
        validStep = false;
    }
    console.log("after: read direction " + selectedReadDirection + "; fix direction " + selectedFixDirection)
    return validStep
}

function setReadDirection(performedAction){
    let actionSolutionLinksLesend = solutionPath1.find((step) => step.step === currentPathStep + 1).action;
    let actionSolutionRechtsLesend = solutionPath3.find((step) => step.step === currentPathStep + 1).action;

    if (compareAction(actionSolutionLinksLesend, performedAction)) {
        selectedReadDirection = 'L'
        setValidFeedbackMessage(1);
        return true;
    }
    if (compareAction(actionSolutionRechtsLesend, performedAction)) {
        selectedReadDirection = 'R'
        setValidFeedbackMessage(3);
        return true;
    }
    return false;
}

function setFixDirection(performedAction){    
    if (selectedReadDirection == 'L') {
        let actionSolutionLinksLesendLinksFixierend = solutionPath1.find((step) => step.step === currentPathStep + 1).action;
        let actionSolutionLinksLesendRechtsFixierend = solutionPath2.find((step) => step.step === currentPathStep + 1).action;

        if (compareAction(actionSolutionLinksLesendLinksFixierend, performedAction)) {
            if (currentPathStep >= 4) selectedFixDirection = 'L'
            setValidFeedbackMessage(1);
            return true;
        }
        if (compareAction(actionSolutionLinksLesendRechtsFixierend, performedAction)) {
            if (currentPathStep >= 4) selectedFixDirection = 'R'
            setValidFeedbackMessage(2);
            return true;
        }
        return false;
    }
    if (selectedReadDirection == 'R') {
        let actionSolutionRechtsLesendLinksFixierend = solutionPath3.find((step) => step.step === currentPathStep + 1).action;
        let actionSolutionRechtsLesendRechtsFixierend = solutionPath4.find((step) => step.step === currentPathStep + 1).action;

        if (compareAction(actionSolutionRechtsLesendLinksFixierend, performedAction)) {
            if (currentPathStep >= 4) selectedFixDirection = 'L'
            setValidFeedbackMessage(3);
            return true;
        }
        if (compareAction(actionSolutionRechtsLesendRechtsFixierend, performedAction)) {
            if (currentPathStep >= 4) selectedFixDirection = 'R'
            setValidFeedbackMessage(4);
            return true;
        }
        return false;
    }
}

/**
 * Checks if the performed action and solution action match. If they match the step counter is increased.
 * @param {Object} solutionAction 
 * @param {Object} performedAction 
 * @returns {boolean} true if the performed action matches the solution action otherwise returns false 
 */
function compareAction(solutionAction, performedAction) {
    if (solutionAction.tool == performedAction.tool && solutionAction.card1 == performedAction.card1 && solutionAction.card2 == performedAction.card2) {
        currentPathStep++;
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
    console.log("currentPathStep: " + currentPathStep)
    switch (solutionPath) {
        case 1:
            feedbackMessage = responses[solutionPath1.find((solStep) => solStep.step === currentPathStep).response]
            return;
        case 2:
            feedbackMessage = responses[solutionPath2.find((solStep) => solStep.step === currentPathStep).response];
            return;
        case 3:
            feedbackMessage = responses[solutionPath3.find((solStep) => solStep.step === currentPathStep).response];
            return;
        case 4:
            feedbackMessage = responses[solutionPath4.find((solStep) => solStep.step === currentPathStep).response];
            return;
        default:
            throw new Error("No valid solution path detected");
    }
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
    //addNewLogEntry("test");
    return feedbackMessage;
}

function addNewLogEntry(logEntry) {
    logging.appendLogEntry(logEntry);
}