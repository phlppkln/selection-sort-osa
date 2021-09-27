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
      <table border="1" width="100%" height="100%">
        <thead>
          <th>ID</th>
          <th>PersonID</th>
          <th>Datum</th>
          <th>Lösungsweg</th>
          <th>SchrittID</th>
          <th>Soll-Werkzeug ID</th>
          <th>Ist-Werkzeug ID</th>
          <th>Soll-Karten ID</th>
          <th>Ist-Karten ID</th>
          <th>Anzahl Fehler Lösungsschritt</th>
          <th>Anzahl Fehler Gesamt</th>
          <th>Kommentar</th>
        </thead>
        <tr v-for="item in log" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.personID }}</td>
          <td>{{ item.date }}</td>
          <td>{{ item.solutionPath }}</td>
          <td>{{ item.stepID }}</td>
          <td>{{ item.targetToolID }}</td>
          <td>{{ item.realToolID }}</td>
          <td>{{ item.targetCardID }}</td>
          <td>{{ item.realCardID }}</td>
          <td>{{ item.errorCountStep }}</td>
          <td>{{ item.errorCountTotal }}</td>
          <td>{{ item.comment }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Intro from "./components/Intro.vue";
import Assignment from "./components/Assignment.vue";
import AssignmentV2 from "./components/AssignmentV2.vue";

export default {
  name: "App",
  components: {
    Header,
    Intro,
    Assignment,
    AssignmentV2,
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
      startTime: null,
      endTime: null,
      log: [
        {
          id: 0,
          personID: 0,
          date: "2021-09-01, 15:01:05",
          solutionPath: 1,
          stepID: 1,
          targetToolID: 1,
          realToolID: 1,
          targetCardID: 1,
          realCardID: 1,
          errorCountStep: 0,
          errorCountTotal: 0,
          comment: "Rückmeldung für richtige Lösung wird ausgegeben",
        },
      ],
      nextLogID: 1,
      selectedSolutionPath: 0,
      
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
    addNewLogEntry: function(){
      this.log.push({
        id: this.nextLogID++,
        personID: 0,
        date: new Date.toLocaleString(),
        solutionPath: this.selectedSolutionPath,
      })
    }
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
