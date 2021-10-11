<template>
  <div class="flex-container">
    <div class="header-container">
      <Header
        @restart-intro="restartIntro"
        :showRestartIntro="!showIntro"
      ></Header>
    </div>
    <div class="main-content">
      <div class="intro-container" v-if="showIntro">
        <Intro
          @skip-intro="setSkipIntro"
          @finish-intro="setIntroFinished"
        ></Intro>
      </div>

      <!--<div v-if="true" class="cards-container"><Assignment></Assignment></div> -->
      <div class="assignment-container" v-if="showAssignment">
        <AssignmentV2
          @card-fixed="increaseFixActions"
          @card-read="increaseReadActions"
          @card-saved="increaseSaveActions"
          @card-swap="increaseSwapActions"
        ></AssignmentV2>
      </div>
    </div>
    <!--
    <div v-if="true" class="cards-container">
      <draggable
      v-model="cardList"
        @start="dragStart"
        @end="dragEnd"
        item-key="id"        
      >
        <template #item="{ element }">
          <Card
            class="card"
            :number="numbers[element.id]"
            @cardFixed="increaseFixActions"
            @cardRead="increaseReadActions"
            @cardSaved="increaseSaveActions"
          ></Card>
        </template>
      </draggable>
    </div>-->
    <div class="debugArea">
      <div>Lesen: {{ readActions }}</div>
      <div>Merken: {{ saveActions }}</div>
      <div>Fixieren: {{ fixActions }}</div>
      <div>Tauschen: {{ swapActions }}</div>
      <div>Intro übersprungen: {{ introSkipped }}</div>
      <div>Intro abgeschlossen: {{ introFinished }}</div>
      <div>Intro Neustarts: {{ introRestarts }}</div>
      <div style="width: 100%; background-color: white; margin: 20px">
        LOGGING
      </div>
      <Log></Log>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Assignment from "./components/Assignment.vue";
import AssignmentV2 from "./components/AssignmentV2.vue";
import Log from "./components/Log.vue";

export default {
  name: "App",
  components: {
    Header,
    Intro,
    Assignment,
    AssignmentV2,
    Log,
  },
  data() {
    return {
      showIntro: true,
      showAssignment: false,
      showRestartIntro: false,
      readActions: 0 /*lesen*/,
      saveActions: 0 /*merken*/,
      fixActions: 0 /*fixieren*/,
      swapActions: 0 /*tauschen*/,
      introSkipped: false,
      introFinished: false,
      introRestarts: 0,
    };
  },
  methods: {
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
      this.saveActions++;
    },
    increaseReadActions() {
      this.readActions++;
    },
    increaseSwapActions() {
      this.swapActions++;
    },
    setSkipIntro() {
      this.showIntro = false;
      this.showAssignment = true;
      this.introSkipped = true;
    },
    restartIntro() {
      this.showIntro = true;
      this.showAssignment = false;
      this.introRestarts++;
    },
    setIntroFinished() {
      this.introFinished = true;
      this.showIntro = false;
      this.showAssignment = true;
    },
  },
};
</script>

<style>
.flex-container {
  display: flex;
  flex-flow: column nowrap;
}

.main-content {
  display: flex;
  justify-content: center;
  align-self: center;
  margin-top: 5%;
  width: 75%;
}
</style>
