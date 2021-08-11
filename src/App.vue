<template>
  <div class="flex-container">
    <div class="header-container">
      <Header></Header>
    </div>
    <div class="intro-container" v-if="false">
      <Intro @closeIntro="closeIntro"></Intro>
    </div>
    <div v-if="false" class="cards-container">
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

<div v-if="true" class="cards-container">
  <draggable
    v-model="cardList"
    @start="drag = true"
    @end="drag = false"
    item-key="id"
  >
    <template #item="{ element }">
      <Card
        class="card"
        :number="numbers[element.id]"
        draggable="true"
        @cardFixed="increaseFixActions"
        @cardRead="increaseReadActions"
        @cardSaved="increaseSaveActions"
      ></Card>
    </template>
  </draggable>
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
import draggable from "vuedraggable";

export default {
  name: "App",
  components: {
    draggable,
    Header,
    Card,
    Intro,
  },
  data() {
    return {
      drag: false,
      cardList: [
        { number: 2, id: 0 },
        { number: 2, id: 1 },
        { number: 2, id: 2 },
        { number: 2, id: 3 },
        { number: 2, id: 4 },
      ],
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
    closeIntro() {
      console.log("closeIntro in App");
      this.showIntro = false;
      this.showAssignment = true;
    },
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
