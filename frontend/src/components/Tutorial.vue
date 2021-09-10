<template>
  <div class="tutorial-container">
    <div class="card-container">
      <AssignmentTutorial
        :tutorialStep="pageNumber"
        @fix-tutorial-finished="fixTutorialFinished"
        @read-tutorial-finished="readTutorialFinished"
        @save-tutorial-finished="saveTutorialFinished"
        @swap-tutorial-finished="swapTutorialFinished"
      ></AssignmentTutorial>
    </div>

    <div class="slides-container">
      <div class="slide" v-if="pageNumber === 1">
        <div class="slide-left-container">NONE</div>
        <div class="slide-text-container">
          <div class="main-text">
            Die Werte aller Karten sind während der Bearbeitung der Aufgabe
            grundsätzlich verdeckt.
          </div>
          <div class="additional-text">
            Diese Ausgangssituation ist kennzeichnend für ein Computerprogramm,
            für das die Werte zu Beginn nicht bekannt sind und das Hilfsmittel
            benötigt, um diese verarbeiten zu können.
          </div>
        </div>
      </div>

      <div class="slide" v-else-if="pageNumber === 2">
        <div class="slide-left-container">NONE</div>
        <div class="slide-text-container">
          <div class="main-text">
            Für das Sortieren der Karten stehen Ihnen deshalb verschiedene
            Hilfsmittel zur Verfügung.
          </div>
          <div class="additional-text"></div>
        </div>
      </div>

      <div class="slide" v-else-if="pageNumber === 3">
        <div class="slide-left-container">NONE</div>
        <div class="slide-text-container">
          <div class="main-text">
            Das Hilfsmittel Lesen verwenden Sie, indem Sie auf das (Auge-)Symbol
            unterhalb einer Karte klicken. Sie richten damit den Lesezeiger auf
            die Karte und können deren Wert lesen. Probieren Sie es aus, indem
            Sie auf das Auge unter verschiedenen Karten klicken.
          </div>
          <div class="additional-text">
            Die meisten Menschen würden wahrscheinlich zuerst alle Karten
            umdrehen, um sich einen Überblick zu verschaffen. Ein
            Computerprogramm kann das jedoch nicht. Deswegen wird in dieser
            Aufgabe ein Lesezeiger eingesetzt, der die Vorgehensweise eines
            Computerprogrammes beim Lesen einer Karte simuliert.
          </div>
          <div class="error-text" v-html="errorMessage"></div>
        </div>
      </div>

      <div class="slide" v-else-if="pageNumber === 4">
        <div class="slide-left-container">NONE</div>
        <div class="slide-text-container">
          <div class="main-text">
            Bedenken Sie, dass die Werte verdeckter Karten für ein
            Computerprogramm unbekannt sind, auch wenn sie schon einmal gelesen
            wurden.
          </div>
          <div class="additional-text">
            Das „Vergessen“ der Zahlenwerte bereits gesehener Karten ist für uns
            Menschen schwer nachvollziehbar, da wir uns solche Werte spontan
            merken und nicht vergessen können.
          </div>
        </div>
      </div>

      <div class="slide" v-else-if="pageNumber === 5">
        <div class="slide-left-container">NONE</div>
        <div class="slide-text-container">
          <div class="main-text">
            Mit einem Klick auf das Hilfsmittel Merken können Sie den Wert einer
            sichtbaren Karte sichtbar halten, auch wenn der Lesezeiger nicht
            mehr auf diese Karte gerichtet ist. Wird der Merkzeiger auf eine
            andere Karte gesetzt, steht der Wert nicht mehr zur Verfügung.
            Setzen Sie nun den Merkzeiger auf die Karte, deren Wert Sie sehen
            und stellen Sie anschließend den Lesezeiger auf eine andere Karte.
            Wie Sie sehen, können Sie durch die Kombination der Hilfsmittel
            Lesen und Merken die Werte zweier Karten sichtbar machen.
          </div>
          <div class="additional-text">
            Wir Menschen merken uns viele Dinge – ob wir wollen oder nicht. Ein
            Computerprogramm „merkt“ sich nur Dinge, die ihm explizit vorgeben
            werden. Daher sind die Werte verdeckter Karten für ein
            Computerprogramm immer unbekannt. Für den Vergleich von Zahlenwerten
            werden jedoch zwei „sichtbare“ Karten benötigt. Mit Hilfe des
            Merkzeigers ist es jetzt möglich, zwei Kartenwerte gleichzeitig
            sehen zu können.
          </div>
          <div class="error-text" v-html="errorMessage"></div>
        </div>
      </div>
      <div class="slide" v-else-if="pageNumber === 6">
        <div class="slide-left-container">NONE</div>
        <div class="slide-text-container">
          <div class="main-text">
            Um die Reihenfolge der Karten zu ändern, tauschen Sie jeweils zwei
            Karten durch Klicken und Ziehen mit der Maus (Drag &#38; Drop).
            Versuchen Sie es! Klicken Sie auf eine der beiden Karten mit
            sichtbarem Wert, halten Sie die Maustaste gedrückt und ziehen Sie
            die Karte auf jene, mit der Sie tauschen möchten. Den Tausch
            schließen Sie ab, indem Sie auf das grüne Häkchen klicken. Der Klick
            auf „x“ bricht den Tausch ab.
          </div>
          <div class="additional-text"></div>
          <div class="error-text" v-html="errorMessage"></div>
        </div>
      </div>
      <div class="slide" v-else-if="pageNumber === 7">
        <div class="slide-left-container">NONE</div>
        <div class="slide-text-container">
          <div class="main-text">
            Aber beachten Sie: Werden zwei Karten in ihrer Position verändert
            (= Sortierschritt), muss zumindest eine der beiden Karten nach
            Abschluss der Tauschoperation an ihrem endgültigen Platz zu liegen
            kommen.
          </div>
          <div class="additional-text"></div>
        </div>
      </div>
      <div class="slide" v-else-if="pageNumber === 8">
        <div class="slide-left-container">NONE</div>
        <div class="slide-text-container">
          <div class="main-text">
            Und zuletzt: Mit dem Hilfsmittel Fixieren grenzen Sie den Bereich
            bereits sortierter Zahlen vom Bereich noch zu sortierender Zahlen
            ab. Klicken Sie dazu auf das Wort „FIX“ auf dem jeweiligen
            Speicherplatz. Mit jeder sortierten Karte muss der Fixierbereich
            erweitert werden. Im fixierten Bereich sind dann auch keine
            Operationen mehr möglich. Versuchen Sie, die Aufgabe möglichst
            effizient, d. h. mit wenigen Schritten zu lösen.
          </div>
          <div class="additional-text">
            Damit das Programm nicht „vergisst“, welche Zahlen schon sortiert
            sind und wo noch zu sortieren ist, verwendet es die Fixierfunktion.
          </div>
          <div class="error-text" v-html="errorMessage"></div>
        </div>
      </div>
      <div class="slide" v-else-if="pageNumber === 9">
        <div class="slide-left-container">NONE</div>
        <div class="slide-text-container">
          <div class="main-text">
            Der Arbeitsbereich enthält die (noch) zu sortierenden Zahlen. Der
            Lesezeiger und der Merkzeiger können nur im Arbeitsbereich
            angewendet werden!
          </div>
          <div class="additional-text"></div>
        </div>
      </div>
      <div class="slide" v-else-if="pageNumber === 10">
        <div class="slide-left-container">NONE</div>
        <div class="slide-text-container">
          <div class="main-text">
            Der Fixierbereich umfasst die bereits auf ihren Endpositionen
            liegenden korrekt sortierten Zahlen. In diesem Bereich sind keine
            Operationen mehr möglich.
          </div>
          <div class="additional-text"></div>
        </div>
      </div>
      <div class="slide" v-else-if="pageNumber === 11">
        <div class="slide-left-container">NONE</div>
        <div class="slide-text-container">
          <div class="main-text">
            Und zum Schluss: Werden zwei Kärtchen in ihrer Position verändert
            (= Sortierschritt), muss zumindest eines der beiden Kärtchen nach
            Abschluss der Tauschoperation an seinem endgültigen Platz zu liegen
            kommen. Der Fixierbereich wird dadurch größer und der Arbeitsbereich
            kleiner.
          </div>
          <div class="additional-text"></div>
        </div>
      </div>
    </div>
    <div class="navigation">
      <div class="prev" @click="previousPage">&#10094;</div>
      <span class="page-number">{{ pageNumber }}</span>
      <span v-for="i in pages" :key="i"
        ><div class="dot" :class="{ 'active-dot': pageNumber >= i }"></div
      ></span>
      <span class="page-number">11</span>
      <div class="next" @click="nextPage">&#10095;</div>
    </div>
  </div>
</template>

<script>
import AssignmentTutorial from "./AssignmentTutorial.vue";

export default {
  components: {
    AssignmentTutorial,
  },
  data() {
    return {
      pageNumber: 1,
      pages: 11,
      readFinished: false,
      saveFinished: false,
      fixFinished: false,
      swapFinished: false,
      errorMessage: "",
    };
  },
  emits: ["tutorial-finished"],
  methods: {
    nextPage() {
      //check if read tutorial is finished
      if (this.pageNumber == 3 && !this.readFinished) {
        //set error message
        this.errorMessage =
          "Führen Sie drei Leseoperationen durch um fortzufahren.";
        return;
      }
      if (this.pageNumber == 5 && !this.saveFinished) {
        //show error message
        this.errorMessage =
          "Führen Sie drei Merkoperationen durch um fortzufahren.";
        return;
      }
      if (this.pageNumber == 6 && !this.swapFinished) {
        //show error message
        this.errorMessage =
          "Führen Sie drei Tauschoperationen durch um fortzufahren.";
        return;
      }
      if (this.pageNumber == 8 && !this.fixFinished) {
        //show error message
        this.errorMessage =
          "Führen Sie drei Fixieroperationen durch um fortzufahren.";
        return;
      }
      if(this.pageNumber == 11){
        console.log("tutorial finsihed")
        this.$emit("tutorial-finished");
        return;
      }
      this.pageNumber++;
      this.pageNumber = Math.min(this.pages, this.pageNumber);
      this.errorMessage = "";
    },
    previousPage() {
      this.pageNumber--;
      this.pageNumber = Math.max(1, this.pageNumber);
    },
    readTutorialFinished() {
      this.readFinished = true;
    },
    saveTutorialFinished() {
      this.saveFinished = true;
    },
    fixTutorialFinished() {
      this.fixFinished = true;
    },
    swapTutorialFinished() {
      this.swapFinished = true;
    },
  },
};
</script>

<style scoped>
.slide {
  display: flex;
  flex-flow: row nowrap;
  min-height: 300px;
}

.slide-text-container {
  border: 1px solid black;
  border-radius: 10px;
  min-width: 80%;
  max-width: 80%;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 20px;
}
.slide-left-container {
  border: 1px solid black;
  border-radius: 10px;
  width: 20%;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}

.additional-text {
  padding-top: 10px;
  font-style: italic;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}

.error-text{
  padding-top: 10px;
  font-weight: bold;
  color: red;
}

/* ----- NAVIGATION ------ */
.navigation {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}

.prev,
.next {
  cursor: pointer;
  width: auto;
  padding: 15px;
  font-weight: bolder;
  font-size: 30px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  color: #006bac;
}

/* The dots/bullets/indicators */
.dot {
  height: 5px;
  width: 10px;
  margin: 0 2px;
  background-color: #006bac;
  opacity: 0.3;
  transition: background-color 0.6s ease;
}

.active-dot {
  background-color: #006bac;
  opacity: 1;
}
</style>