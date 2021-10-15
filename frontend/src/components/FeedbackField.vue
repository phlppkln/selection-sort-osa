<template>
    <div class="feedback-field">
    <p>{{ feedbackMessage }}</p>
    <p>{{ lastActionValid }}</p>
    <p>{{ action }}</p>

    <button v-if="!lastActionValid">Letzen Schritt rückgängig machen</button>
  </div>
</template>

<script>
export default {
  props: {
    feedbackMessage: String, 
    lastActionValid: Boolean,
    action: Object,
  },
  emits: ["undo-clicked"],
  data() {
    return {
    };
  },
  methods: {
  
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