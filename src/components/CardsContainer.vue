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
        
<script>
import Card from "./Card.vue";
import draggable from "vuedraggable";

export default {
  name: "App",
  components: {
    draggable,
    Card,
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
    dragStart() {
      this.drag = true;
    },
    dragEnd() {
      this.drag = false;
    },
  },
};
</script>

<style>
#app {
}

.card {
  margin: 40px;
}

.flex-container {
  display: flex;
  flex-flow: column nowrap;
}
.cards-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 10px;
  margin: 10px;
  border: 1px solid green;
}
.actions {
  color: gray;
  border: 1px dashed black;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
