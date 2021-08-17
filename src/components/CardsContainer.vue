<template>
  <div class="card-container" :class="isCardFixed()">
    <div class="fixieren-container" @click="fixCard">
      <p class="fix">FIX</p>
    </div>
    <div class="number">
      <component :is="number_component"></component>
    </div>
    <div class="btn-container">
      <div class="btn lesen-btn" :class="isCardRead()" @click="readCard">
        Lesen
      </div>
      <div class="btn merken-btn" :class="isCardSaved()" @click="saveCard">
        Merken
      </div>
    </div>
  </div>
</template>
        
<script>
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
    };
  },
  methods: {
    
    fixCard() {
      this.cardFixed = !this.cardFixed;
      this.$emit("cardFixed");
    },
    readCard() {
      this.lesenActive = !this.lesenActive;
      this.flipCard();
      this.$emit("cardRead");
    },
    saveCard() {
      this.merkenActive = !this.merkenActive;
      this.flipCard();
      this.$emit("cardSaved");
    },
    isCardFixed() {
      if (this.cardFixed) {
        return "cardFixed";
      }
    },
    isCardRead() {
      if (this.lesenActive) {
        return "cardLesen";
      }
    },
    isCardSaved() {
      if (this.merkenActive) {
        return "cardMerken";
      }
    },
    flipCard() {
      if (this.lesenActive || this.merkenActive) {
        this.cardFlipped = true;
      } else if (!this.lesenActive && !this.merkenActive) {
        this.cardFlipped = false;
      }
    },
  },
};
</script>

<style scoped>

</style>
