<template>
  <Start @startIntro="showIntro"></Start>
  <Intro></Intro>
</template>

<script>
import Start from "./Start.vue";
import ToolBar from "./ToolBar.vue";

export default {
  components: {
    Start,
    ToolBar,
  },
  data() {
    return {
      startIntro: false,
    };
  },
  methods: {
    showIntro() {
      console.log("showIntro");
      this.startIntro = true;
    },
  },
};
</script>

<style>
</style>