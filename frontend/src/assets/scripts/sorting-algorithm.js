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
const solutionPath1 = [
    { step: 1, action: {tool: 'L', card1: 1, card2: null}, response: 1},
    { step: 2, action: {tool: 'M', card1: 1, card2: null}, response: 2},
    { step: 3, action: {tool: 'L', card1: 2, card2: null}, response: 10},
    { step: 4, action: {tool: 'M', card1: 2, card2: null}, response: 0}, 
    { step: 5, action: {tool: 'L', card1: 3, card2: null}, response: 0 },
    { step: 6, action: {tool: 'M', card1: 3, card2: null}, response: 0 },
    { step: 7, action: {tool: 'L', card1: 4, card2: null}, response: 0 },
    { step: 8, action: {tool: 'M', card1: 4, card2: null}, response: 0 },
    { step: 9, action: {tool: 'L', card1: 5, card2: null}, response: 3 },
    { step: 10, action: {tool: 'T', card1: 1, card2: 4}, response: 4 },

    { step: 11, action: {tool: 'F', card1: 1, card2: null}, response: 5},
    { step: 12, action: {tool: 'L', card1: 2, card2: null}, response: 0},
    { step: 13, action: {tool: 'M', card1: 2, card2: null}, response: 0},
    { step: 14, action: {tool: 'L', card1: 3, card2: null}, response: 0}, 
    { step: 15, action: {tool: 'M', card1: 3, card2: null}, response: 0 },
    { step: 16, action: {tool: 'L', card1: 4, card2: null}, response: 0 },
    { step: 17, action: {tool: 'L', card1: 5, card2: null}, response: 0 },
    { step: 18, action: {tool: 'T', card1: 2, card2: 3}, response: 6 },

    { step: 19, action: {tool: 'F', card1: 2, card2: null}, response: 0 },
    { step: 20, action: {tool: 'L', card1: 3, card2: null}, response: 0 },
    { step: 21, action: {tool: 'M', card1: 3, card2: null}, response: 0},
    { step: 22, action: {tool: 'L', card1: 4, card2: null}, response: 0},
    { step: 23, action: {tool: 'M', card1: 5, card2: null}, response: 0},
    { step: 24, action: {tool: 'L', card1: 5, card2: null}, response: 0}, 
    { step: 25, action: {tool: 'T', card1: 3, card2: 5}, response: 7 },

    { step: 26, action: {tool: 'F', card1: 3, card2: null}, response: 0 },
    { step: 27, action: {tool: 'L', card1: 4, card2: null}, response: 0 },
    { step: 28, action: {tool: 'M', card1: 4, card2: null}, response: 0 },
    { step: 29, action: {tool: 'L', card1: 5, card2: null}, response: 0 },
    { step: 30, action: {tool: 'M', card1: 5, card2: null}, response: 0 },
    { step: 31, action: {tool: 'T', card1: 4, card2: 5}, response: 0 }, 
    
    { step: 32, action: {tool: 'F', card1: 4, card2: null}, response: 8},
    { step: 33, action: {tool: 'L', card1: 5, card2: null}, response: 0},
    { step: 34, action: {tool: 'M', card1: 5, card2: null}, response: 0}, 
    { step: 35, action: {tool: 'T', card1: 5, card2: 5}, response: 0 },
    { step: 36, action: {tool: 'F', card1: 5, card2: null}, response: 9 },
]

// linkslesend, rechtsfixierend
const solutionPath2 = [
    { step: 1, action: {tool: 'L', card1: 1, card2: null}, response: 1 },
    { step: 2, action: {tool: 'M', card1: 1, card2: null}, response: 2 },
    { step: 3, action: {tool: 'L', card1: 2, card2: null}, response: 10 },
    { step: 4, action: {tool: 'L', card1: 3, card2: null}, response: 0 }, 
    { step: 5, action: {tool: 'L', card1: 4, card2: null}, response: 0 },
    { step: 6, action: {tool: 'L', card1: 5, card2: null}, response: 3 },
    { step: 7, action: {tool: 'T', card1: 1, card2: 5}, response: 4 },

    { step: 8, action: {tool: 'F', card1: 5, card2: null}, response: 5 },
    { step: 9, action: {tool: 'L', card1: 1, card2: null}, response: 0 },
    { step: 10, action: {tool: 'M', card1: 1, card2: null}, response: 0 },
    { step: 11, action: {tool: 'L', card1: 2, card2: null}, response: 0 },
    { step: 12, action: {tool: 'M', card1: 2, card2: null}, response: 0 },
    { step: 13, action: {tool: 'L', card1: 3, card2: null}, response: 0 },
    { step: 14, action: {tool: 'L', card1: 4, card2: null}, response: 0 }, 
    { step: 15, action: {tool: 'T', card1: 2, card2: 4}, response: 6 },

    { step: 16, action: {tool: 'F', card1: 4, card2: null}, response: 0 },
    { step: 17, action: {tool: 'L', card1: 1, card2: null}, response: 0 },
    { step: 18, action: {tool: 'M', card1: 1, card2: null}, response: 0 },
    { step: 19, action: {tool: 'L', card1: 2, card2: null}, response: 0 },
    { step: 20, action: {tool: 'L', card1: 3, card2: null}, response: 0 },
    { step: 21, action: {tool: 'T', card1: 1, card2: 3}, response: 7 },

    { step: 22, action: {tool: 'F', card1: 3, card2: null}, response: 0 },
    { step: 23, action: {tool: 'L', card1: 1, card2: null}, response: 0 },
    { step: 24, action: {tool: 'M', card1: 1, card2: null}, response: 0 }, 
    { step: 25, action: {tool: 'L', card1: 2, card2: null}, response: 0 },
    { step: 26, action: {tool: 'T', card1: 2, card2: 1}, response: 0 },

    { step: 27, action: {tool: 'F', card1: 2, card2: null}, response: 8 },
    { step: 28, action: {tool: 'L', card1: 1, card2: null}, response: 0 },
    { step: 29, action: {tool: 'M', card1: 1, card2: null}, response: 0 },
    { step: 30, action: {tool: 'T', card1: 1, card2: 1}, response: 0 },
    { step: 31, action: {tool: 'F', card1: 1, card2: null}, response: 9 }, 
]

// rechtslesend, linksfixierend
const solutionPath3 = [
    { step: 1, action: {tool: 'L', card1: 5, card2: null}, response: 1 },
    { step: 2, action: {tool: 'M', card1: 5, card2: null}, response: 2 },
    { step: 3, action: {tool: 'L', card1: 4, card2: null}, response: 10 },
    { step: 4, action: {tool: 'M', card1: 4, card2: null}, response: 0 }, 
    { step: 5, action: {tool: 'L', card1: 3, card2: null}, response: 0 },
    { step: 6, action: {tool: 'L', card1: 2, card2: null}, response: 0 },
    { step: 7, action: {tool: 'L', card1: 1, card2: null}, response: 3 },
    { step: 8, action: {tool: 'T', card1: 1, card2: 4}, response: 4 },

    { step: 9, action: {tool: 'F', card1: 1, card2: null}, response: 5 },
    { step: 10, action: {tool: 'L', card1: 5, card2: null}, response: 0 },
    { step: 11, action: {tool: 'M', card1: 5, card2: null}, response: 0 },
    { step: 12, action: {tool: 'L', card1: 4, card2: null}, response: 0 },
    { step: 13, action: {tool: 'L', card1: 3, card2: null}, response: 0 },
    { step: 14, action: {tool: 'M', card1: 3, card2: null}, response: 0 }, 
    { step: 15, action: {tool: 'L', card1: 2, card2: null}, response: 0 },
    { step: 16, action: {tool: 'T', card1: 2, card2: 3}, response: 6 },

    { step: 17, action: {tool: 'F', card1: 2, card2: null}, response: 0 },
    { step: 18, action: {tool: 'L', card1: 5, card2: null}, response: 0 },
    { step: 19, action: {tool: 'M', card1: 5, card2: null}, response: 0 },
    { step: 20, action: {tool: 'L', card1: 4, card2: null}, response: 0 },
    { step: 21, action: {tool: 'L', card1: 3, card2: null}, response: 0 },
    { step: 22, action: {tool: 'T', card1: 3, card2: 5}, response: 7 },

    { step: 23, action: {tool: 'F', card1: 3, card2: null}, response: 0 },
    { step: 24, action: {tool: 'L', card1: 5, card2: null}, response: 0 }, 
    { step: 25, action: {tool: 'M', card1: 5, card2: null}, response: 0 },
    { step: 26, action: {tool: 'L', card1: 4, card2: 1}, response: 0 },
    { step: 27, action: {tool: 'T', card1: 4, card2: 5}, response: 0 },

    { step: 28, action: {tool: 'F', card1: 4, card2: null}, response: 8 },
    { step: 29, action: {tool: 'L', card1: 5, card2: null}, response: 0 },
    { step: 30, action: {tool: 'M', card1: 5, card2: null}, response: 0 },
    { step: 31, action: {tool: 'T', card1: 5, card2: 5}, response: 0 }, 
    { step: 31, action: {tool: 'F', card1: 5, card2: null}, response: 9 }, 
]

// rechtslesend, rechtsfixierend
const solutionPath4 = [
    { step: 1, cardId: 1, action: 1 },
    { step: 2, cardId: 1, action: 2 },
    { step: 3, cardId: 2, action: 1 },
    { step: 4, cardId: 2, action: 2 },
]

export function getSolutionPath(actionCounter, selectedCard, selectedAction) {
    console.log("getSolutionPath() \nactionCounter:" + actionCounter + ", selectedCard: " + selectedCard + ", selectedAction: " + selectedAction)
}

export function getResponse(curStep, solutionPath){
    switch (solutionPath){
        case 1: 
            return responses[solutionPath1.find((solStep) => solStep.step === curStep).response]
        case 2: 
            return responses[solutionPath2.find((solStep) => solStep.step === curStep).response];
        case 3: 
            return responses[solutionPath3.find((solStep) => solStep.step === curStep).response];
        case 4: 
            return responses[solutionPath4.find((solStep) => solStep.step === curStep).response];
        default:
            console.log("no valid solution path")
            throw new Error("No valid solution Path detected");
    }; 
}

