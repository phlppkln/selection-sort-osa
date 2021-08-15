<template>
  <Start @startIntro="showTutorial" @skipIntro="closeIntro"></Start>
</template>

<script>
import Start from "./Start.vue";

export default {
  components: {
    Start,
  },
  data() {
    return {
      startTutorial: false,
    };
  },
  methods: {
    showTutorial() {
      console.log("showTutorial");
      this.showTutorial = true;
    },
    closeIntro(){
      console.log("closeIntro");
      this.$emit("closeIntro");
    }
  },
};
</script>

<style>
</style>