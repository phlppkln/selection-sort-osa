<template>
  <div class="start-container" v-if="!showTutorial">  
    <h1>Sortierung mittels Algorithmen</h1>
  <p>
    Für uns Menschen sind Aufgaben, wie zum Beispiel das aufsteigende Sortieren
    von fünf Kärtchen, auf denen einstellige natürliche Zahlen aufgedruckt sind,
    keine große Sache. Wir übersehen die 5 Kärtchen auf einen Blick und
    identifizieren spontan jene mit der kleinsten Zahl – erledigt! Wir brauchen
    keinen Plan oder Algorithmus, um ein Problem dieser Größenordnung zu lösen.
    Weil wir uns vieles „im Vorübergehen“ merken und leicht unsere
    Lösungsstrategie anpassen können, sind wir sehr flexibel und schnell – in
    der Lösung kleiner Probleme. Ein „Computerprogramm“ benötigt schon vor
    Beginn der Bearbeitung einer solchen Aufgabe einen Plan, wie das Problem
    gelöst werden soll. Das mag bei einer geringen Zahl von Sortierobjekten sehr
    unökonomisch erscheinen. Ist dieser Plan aber einmal festgelegt, braucht ein
    Computer im Unterschied zum Menschen für 1 Million Kärtchen nicht merkbar
    länger als für fünf. Bei der Lösung der folgenden Aufgabe sollen Sie nach
    Regeln vorgehen, die jenen ähneln, nach denen auch Computerprogramme
    arbeiten. So werden im folgenden Beispiel alle „Dinge“, die wir Menschen uns
    merken, mittels „Zeigern“ realisiert. Die damit verbundene Denkweise scheint
    uns Menschen bisweilen etwas umständlich und fremd, aber sie entspricht den
    besonderen Voraussetzungen der „Denkmaschine“ Computer. Hat man diese einmal
    verstanden, lassen sich damit viele Probleme in einer überlegenen Weise
    lösen, zu der wir als Menschen ohne Computer nicht in der Lage wären.
  </p>
  <h2>Aber nun zur Aufgabe:</h2>
  <p>
    Vor Ihnen befindet sich eine Reihe von Karten, wobei nur deren (leere)
    Rückseiten zu sehen sind. Die Vorderseiten sind mit einer Zahl versehen, die
    sich in der Reihe in dieser Aufgabe nicht wiederholt. Die Karten sind
    zufällig angeordnet, und jede Karte nimmt genau eine Speicherposition ein.
    Ihre Aufgabe besteht darin, alle Karten nach der Größe ihres Zahlenwertes zu
    sortieren, sodass jene mit dem geringsten Wert ganz links und jene mit dem
    größten ganz rechts zu liegen kommt.
  </p>
  <div class="custom-btn" @click="startTutorial">Start</div>
  <div class="custom-btn" @click="skipIntro">Intro überspringen</div></div>
  <Tutorial v-if="showTutorial"></Tutorial>

  <slither-slider>
    <!-- Slide 1 -->
  <div :style="{backgroundColor: 'red', height:'1000px'}">Oh</div>

  <!-- Slide 2 -->
  <div>
    Mah
    <img src="https://picsum.photos/id/237/200/300" />
  </div>

  <!-- Slide 3 -->
  <div>Gawd</div>
  </slither-slider>
</template>

<script>
import Tutorial from "./Tutorial.vue"

export default {
  components: {
    Tutorial
  },
  emits: ['skip-intro', 'finish-intro'],
  data() {
    return {
      showTutorial: false,
    };
  },
  methods: {    
    startTutorial() {
      console.log("start Tutorial: " + this.showTutorial)
      this.showTutorial = true;
    },
    skipIntro() {
      this.$emit("skip-intro");
    },
    finishIntro(){
      this.$emit("finish-intro");
    },
  },
};
</script>

<style scoped>
</style>