<template>
    <div class="feedback-field">
    <p>{{ feedbackMessage }}</p>
    <div style="font-weight: bold">Was last performed action valid?</div><div>{{ lastActionValid }}</div>
    <div style="font-weight: bold">Last valid action:</div><div>{{ action }}</div>

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