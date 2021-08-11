<template>
  <div class="flex-container">
    <div class="header-container">
      <Header></Header>
    </div>
    <div class="intro-container" v-if="showIntro">
      <Intro @closeIntro="closeIntro"></Intro>
    </div>
    <div v-if="showAssignment" class="cards-container">
      <Card
        class="card"
        :number="numbers[0]"
        draggable="true"
        @cardFixed="increaseFixActions"
        @cardRead="increaseReadActions"
        @cardSaved="increaseSaveActions"
      />
      <Card
        class="card"
        :number="numbers[1]"
        draggable="true"
        @cardFixed="increaseFixActions"
        @cardRead="increaseReadActions"
        @cardSaved="increaseSaveActions"
      />
      <Card
        class="card"
        :number="numbers[2]"
        draggable="true"
        @cardFixed="increaseFixActions"
        @cardRead="increaseReadActions"
        @cardSaved="increaseSaveActions"
      />
      <Card
        class="card"
        :number="numbers[3]"
        draggable="true"
        @cardFixed="increaseFixActions"
        @cardRead="increaseReadActions"
        @cardSaved="increaseSaveActions"
      />
      <Card
        class="card"
        :number="numbers[4]"
        draggable="true"
        @cardFixed="increaseFixActions"
        @cardRead="increaseReadActions"
        @cardSaved="increaseSaveActions"
      />
    </div>
  </div>
  <div class="actions">
    <p>Lesen: {{ readActions }}</p>
    <p>Merken: {{ saveActions }}</p>
    <p>Fixieren: {{ fixActions }}</p>
    <p>Tauschen: {{ swapActions }}</p>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Card from "./components/Card.vue";
import Intro from "./components/Intro.vue";

export default {
  name: "App",
  components: {
    Header,
    Card,
    Intro,
  },
  data() {
    return {
      showIntro: true,
      showAssignment: false,
      numbers: [],
      readActions: 0 /*lesen*/,
      saveActions: 0 /*merken*/,
      fixActions: 0 /*fixieren*/,
      swapActions: 0 /*tauschen*/,
      startTime: null,
      endTime: null,
    };
  },
  mounted() {
    for (var i = 0; i <= 5; i++) {
      this.numbers.push(Math.floor(Math.random() * 5));
    }
  },
  methods: {
    /* get random integer */
    getNumber(max) {
      return;
    },
    toggleShowIntro() {
      this.showIntro = !this.showIntro;
    },
    toggleShowAssignment() {
      this.showAssignment = !this.showAssignment;
    },
    increaseFixActions() {
      this.fixActions++;
    },
    increaseSaveActions() {
      console.log("saveActionsinreased");
      this.saveActions++;
    },
    increaseReadActions() {
      this.readActions++;
    },
    closeIntro(){
      this.showIntro = false;
      this.showAssignment = true;
    }
  },
};
</script>

<style>
#app {
}

.card {
  margin: 20px;
}

.flex-container {
  display: flex;
  flex-flow: column wrap;
}
.cards-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 10px;
  margin: 10px;
}
</style>
