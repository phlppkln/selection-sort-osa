<template>
    <div class="feedback-field">
    <p>{{ feedbackMessage }}</p>

    <button v-if="!lastActionValid" @click="undoLastAction">Letzen Schritt rückgängig machen</button>
  </div>
</template>

<script>
export default {
  props: {
    feedbackMessage: String, 
    lastActionValid: Boolean,
  },
  emits: ["undo-clicked"],
  data() {
    return {
    };
  },
  methods: {
    undoLastAction(){
      this.$emit("undo-clicked");
    }
  }
}
</script>

<style scoped>
.feedback-field {
  border: 1px solid black;
  height: 200px;
  width: 100%;
}
</style>