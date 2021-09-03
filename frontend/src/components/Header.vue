<template>
  <div class="header">
    <img class="logo" alt="tu-logo" src="../assets/tu-logo.svg" />
    <div class="header-right">
      <div class="header-btn custom-btn" @click="openLMSCourse">
        Zurück zum Online Self Assessment
      </div>
      <div class="header-link" @click="restartIntro">
        <!--{{ !showRestartIntro ? " " : "Einführung neu starten" }}-->Einführung neu starten
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showRestartIntro'],
  emits: ["restart-intro"],
  methods: {
    restartIntro() {
      this.$emit("restart-intro")
    },
    openLMSCourse(){
      window.open('https://moodle.studienbeginn.tuwien.ac.at/course/view.php?id=190', '_blank')
    }
  },
};
</script>

<style scoped>
.header {
  padding: 20px;
  border-bottom: 1px solid black;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}

.header-right {
  text-align: right;
  display: flex;
  flex-flow: column nowrap;
}


.header-btn {
}

.header-link {
  padding-top: 20px;
  cursor: pointer;
}

.header-link:hover {
  text-decoration: underline;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}
</style>