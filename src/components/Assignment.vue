<template>
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
</template>

<script>
import Card from "./Card.vue";
import draggable from "vuedraggable";

export default {
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
      fixActions: 0,
      saveActions: 0,
      readActions: 0,
      swapActions: 0,
    };
  },
  methods: {
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
  },
};
</script>

<style>
</style>