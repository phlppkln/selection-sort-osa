<template>
  <div class="card-container" :class="isCardFixed()">
    <div class="fixieren-container" @click="fixCard">
      <p class="fix unselectable">FIX</p>
    </div>
    <div class="number" draggable="true" :class="{ readCard: cardFlipped }" @dragstart="handleDragStart($event, this)">{{ !cardFlipped ? "" : number }}</div>
    <div class="btn-container">
      <div class="btn lesen-btn unselectable" :class="isCardRead()" @click="readCard">
        Lesen
      </div>
      <div class="btn merken-btn unselectable" :class="isCardSaved()" @click="saveCard">
        Merken
      </div>
    </div>
  </div>
</template>

<script>
import Eye from "./IconsHelper/Eye.vue";
import Pin from "./IconsHelper/Pin.vue";
import Arrow from "./IconsHelper/Arrow.vue";

export default {
  components: {
    Eye,
    Pin,
    Arrow,
  },
  props: ["number"],
  data() {
    return {
      cardFixed: false,
      lesenActive: false,
      merkenActive: false,
      cardFlipped: false,
    };
  },
  methods: {
    handleDragStart(e, item){
      console.log("dragStart" + e + item)
    },
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
* {
  /* border: 1px solid red; */
}

.card-container {
  border-radius: 10px;
  border: 2px solid black;
  height: 210px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.fixieren-container {
  display: flex;
  cursor: pointer;
}

.cardFixed {
  background-color: #c2ebfa;
}

.cardLesen {
  color: #f28705;
}

.cardMerken {
  color: #1ea983;
}

.fixieren-container:hover {
  text-decoration: underline;
}

.number {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #006bac;
  color: black;
  height: 100px;
  width: 120px;
  border: 2px solid black;
  border-radius: 10px;
}
.btn-container {
  display: flex;
  justify-content: space-evenly;
}

.btn {
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
}
.readCard{
  background-color: white;
}
/*
.read-btn{
    background-color: white;
    background: url('../assets/eye_gray.svg');
    height: 21px;
    width: 28px;
    display: inline-block;
    background-size: cover;
}
.read-btn:hover{
    background: url('../assets/eye_orange.svg');
    height: 0;
    width: 0;
    display: inline-block;
    background-size: cover;
}
.save-btn{
    background-color: white;
    background: url('../assets/pin_gray.svg');
    height: 32px;
    width: 22px;
    display: inline-block;
    background-size: cover;
}
.save-btn:hover{
    background: url('../assets/pin_green.svg');
    height: 0;
    width: 0;;
    display: inline-block;
    background-size: cover;
}*/
</style>