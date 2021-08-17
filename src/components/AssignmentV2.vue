<template>
  <div class="cards-container">
    <div v-for="card in cardList" :key="card.id">
      <div
        class="card"
        :class="{ cardFixed: card.fixActive }"
        @drop="dropHandler($event, card)"
        @dragover.prevent
        @dragenter.prevent
      >
        <div class="fixieren-container" @click="fixCard(card.id)">
          <p class="fix unselectable">FIX</p>
        </div>

        <div
          class="number"
          :class="{ readCard: card.cardFlipped }"
          draggable="true"
          @dragstart="dragstartHandler($event, card)"
        >
          {{ !card.cardFlipped ? "" : card.number }}
        </div>

        <div class="btn-container">
          <div
            class="btn unselectable"
            :class="{ cardLesen: card.lesenActive }"
            @click="readCard(card.id)"
          >
            Lesen
          </div>
          <div
            class="btn unselectable"
            :class="{ cardMerken: card.merkenActive }"
            @click="saveCard(card.id)"
          >
            Merken
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="feedback-field"></div>
</template>

<script>
import { ref } from "vue";
import Card from "./Card.vue";

export default {
  components: {
    Card,
  },
  emits: ["card-fixed", "card-saved", "card-read", "card-swap"],
  data() {
    return {
      cardList: [
        {
          id: 0,
          number: 5,
          slotPosition: 0,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
        {
          id: 1,
          number: 6,
          slotPosition: 1,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
        {
          id: 2,
          number: 7,
          slotPosition: 2,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
        {
          id: 3,
          number: 8,
          slotPosition: 3,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
        {
          id: 4,
          number: 9,
          slotPosition: 4,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
      ],
      grabbedCard: null,
    };
  },
  methods: {
    dragstartHandler(e, card) {
      this.grabbedCard = card
    },
    dropHandler(e, card) {
      e.preventDefault()
      // swap cards
      let tmpNumber = card.number
      card.number = this.grabbedCard.number
      this.grabbedCard.number = tmpNumber
      this.$emit("card-swap")
    },
    swapCards(cardDrag, cardTarget){
      console.log(cardDrag)
      console.log()
      console.log(cardTarget)
    },
    fixCard(cardId) {
      const card = this.cardList.find((card) => card.id === cardId);
      card.fixActive = !card.fixActive;
      this.$emit("card-fixed");
    },
    readCard(cardId) {
      const card = this.cardList.find((card) => card.id === cardId);
      card.lesenActive = !card.lesenActive;
      this.flipCard(card);
      this.$emit("card-read");
    },
    saveCard(cardId) {
      const card = this.cardList.find((card) => card.id === cardId);
      card.merkenActive = !card.merkenActive;
      this.flipCard(card);
      this.$emit("card-saved");
    },
    flipCard(card) {
      if (card.lesenActive || card.merkenActive) {
        card.cardFlipped = true;
      } else if (!card.lesenActive && !card.merkenActive) {
        card.cardFlipped = false;
      }
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 10px;
  border: 2px solid black;
  height: 250px;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

.feedback-field {
  border: 1px solid black;
  height: 200px;
  width: 100%;
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
  cursor: grab;
}

.number-grabbing {
  cursor: grabbing;
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
.readCard {
  background-color: white;
}
</style>