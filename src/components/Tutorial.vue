<template>
  <div class="tutorial-container">
    <div class="card-container">
      <AssignmentTutorial :tutorialStep="pageNumber"></AssignmentTutorial>
    </div>

    <div class="slide" v-if="pageNumber === 1">
      <div class="main-text">
        Die Werte aller Karten sind während der Bearbeitung der Aufgabe
        grundsätzlich verdeckt.
      </div>
      <div class="additional-text">
        Diese Ausgangssituation ist kennzeichnend für ein Computerprogramm, für
        das die Werte zu Beginn nicht bekannt sind und das Hilfsmittel benötigt,
        um diese verarbeiten zu können.
      </div>
    </div>

    <div class="slide" v-else-if="pageNumber === 2">
      <div class="main-text">
        Für das Sortieren der Karten stehen Ihnen deshalb verschiedene
        Hilfsmittel zur Verfügung.
      </div>
      <div class="additional-text"></div>
    </div>

    <div class="slide" v-else-if="pageNumber === 3">
      <div class="main-text">
        Das Hilfsmittel Lesen verwenden Sie, indem Sie auf das (Auge-)Symbol
        unterhalb einer Karte klicken. Sie richten damit den Lesezeiger auf die
        Karte und können deren Wert lesen. Probieren Sie es aus, indem Sie auf
        das Auge unter verschiedenen Karten klicken.
      </div>
      <div class="additional-text">
        Die meisten Menschen würden wahrscheinlich zuerst alle Karten umdrehen,
        um sich einen Überblick zu verschaffen. Ein Computerprogramm kann das
        jedoch nicht. Deswegen wird in dieser Aufgabe ein Lesezeiger eingesetzt,
        der die Vorgehensweise eines Computerprogrammes beim Lesen einer Karte
        simuliert.
      </div>
    </div>

    <div class="navigation">
      <div class="prev" @click="previousPage">&#10094;</div>
      <span class="page-number">{{ pageNumber }}</span>
      <span v-for="i in pages" :key="i"
        ><div class="dot" :class="{ 'active-dot': pageNumber == i }"></div
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
    };
  },
  emits: ["tutorial-finished"],
  methods: {
    nextPage() {
      this.pageNumber++;
      this.pageNumber = Math.min(this.pages, this.pageNumber);
    },
    previousPage() {
      this.pageNumber--;
      this.pageNumber = Math.max(1, this.pageNumber);
    },
  },
};
</script>

<style scoped>
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
  padding: 16px;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* The dots/bullets/indicators */
.dot {
  height: 5px;
  width: 10px;
  margin: 0 2px;
  background-color: #bbb;
  transition: background-color 0.6s ease;
}

.active-dot {
  background-color: #717171;
}
</style>