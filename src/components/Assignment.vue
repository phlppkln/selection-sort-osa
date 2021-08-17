<template>
  <div v-if="true" class="cards-container">
    <Card
      class="card"
      :number="numbers[0]"
      @cardFixed="increaseFixActions"
      @cardRead="increaseReadActions"
      @cardSaved="increaseSaveActions"
    />
    <Card
      class="card"
      :number="numbers[1]"
      @cardFixed="increaseFixActions"
      @cardRead="increaseReadActions"
      @cardSaved="increaseSaveActions"
    />
    <Card
      class="card"
      :number="numbers[2]"
      @cardFixed="increaseFixActions"
      @cardRead="increaseReadActions"
      @cardSaved="increaseSaveActions"
    />
    <Card
      class="card"
      :number="numbers[3]"
      @cardFixed="increaseFixActions"
      @cardRead="increaseReadActions"
      @cardSaved="increaseSaveActions"
    />
    <Card
      class="card"
      :number="numbers[4]"
      @cardFixed="increaseFixActions"
      @cardRead="increaseReadActions"
      @cardSaved="increaseSaveActions"
    />
  </div>

  <div class="feedback-field"></div>
</template>

<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      drag: false,
      //cardList: [
      //  { number: 5, slotPosition: 0 },
      //  { number: 6, slotPosition: 1 },
      //  { number: 7, slotPosition: 2 },
      //  { number: 8, slotPosition: 3 },
      //  { number: 9, slotPosition: 4 },
      //],
      numbers: [5, 6, 7, 8, 9],
      fixActions: 0,
      saveActions: 0,
      readActions: 0,
      swapActions: 0,
    };
  },
  mounted() {
    // create random numbers on startup
    for (var i = 0; i <= 4; i++) {
      //this.numbers[i] = (Math.floor(Math.random() * 5))
    }
  },
  methods: {
    getNumber(cardId){
      return this.cardList.find(number => number.slotPosition === cardId).number;
    },
    increaseFixActions() {
      this.fixActions++
    },
    increaseSaveActions() {
      console.log("saveActionsinreased");
      this.saveActions++
    },
    increaseReadActions() {
      this.readActions++
    },
    dragStart(){
      this.drag = true
    },
    dragEnd(){
      this.drag = false
    }
  },
};
</script>

<style scoped>

.card {
  margin: 40px;
}

.feedback-field{
  border: 1px solid black;
  height: 200px;
  width: 100%;
}

</style>