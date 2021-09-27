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

  <div class="feedback-field">Hier wird das Beispiel bearbeitet
    <p>{{ feedbackMessage }}</p>
  </div>
</template>

<script>
import * as sorting from "../assets/scripts/sorting-algorithm.js"
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
          id: 1,
          number: 5,
          slotPosition: 1,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
        {
          id: 2,
          number: 4,
          slotPosition: 2,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
        {
          id: 3,
          number: 2,
          slotPosition: 3,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
        {
          id: 4,
          number: 1,
          slotPosition: 4,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
        {
          id: 5,
          number: 3,
          slotPosition: 5,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
      ],
      grabbedCard: null,
      feedbackMessage: "",
      selectedSolutionPath: 0,
      actionCounter: 0,
    };
  },
  methods: {
    getCard(cardId){
      return this.cardList.find((card) => card.id === cardId);
    },
    dragstartHandler(e, card) {
      sorting.getSolutionPath(this.actionCounter, card.id, "swap");
      this.grabbedCard = card;
    },
    dropHandler(e, card) {
      e.preventDefault();
      // swap cards
      let tmpNumber = card.number;
      card.number = this.grabbedCard.number;
      this.grabbedCard.number = tmpNumber;
      this.$emit("card-swap");
    },
    swapCards(cardDrag, cardTarget) {
      console.log(cardDrag);
      console.log();
      console.log(cardTarget);
    },
    fixCard(cardId) {
      const card = this.getCard(cardId);
      card.fixActive = !card.fixActive;
      this.$emit("card-fixed");
    },
    readCard(cardId) {
      const card = this.getCard(cardId);
      card.lesenActive = !card.lesenActive;
      this.flipCard(card);
      this.$emit("card-read");
    },
    saveCard(cardId) {
      const card = this.getCard(cardId);
      if(this.isReadActive(card)){
      card.merkenActive = !card.merkenActive;
      this.flipCard(card);
      this.$emit("card-saved");
      }
      else{
        //error
        this.feedbackMessage = "Karte wird nicht gelesen"
      }
    },
    flipCard(card) {
      if (card.lesenActive || card.merkenActive) {
        card.cardFlipped = true;
      } else if (!card.lesenActive && !card.merkenActive) {
        card.cardFlipped = false;
      }
    },
    isReadActive(cardId) {
      const card = this.getCard(cardId);
      if (!card.lesenActive) return false;
      else return true;
    },
    isReadActive(card) {
      if (!card.lesenActive) return false;
      else return true;
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
}

.feedback-field {
  border: 1px solid black;
  height: 200px;
  width: 100%;
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

.cards-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border: 1px solid green;
}
</style>