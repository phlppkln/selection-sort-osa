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

  <FeedbackField :feedbackMessage="feedbackMessage" :lastActionValid="lastActionValid" :action="lastAction">
  </FeedbackField>
</template>

<script>
import * as sorting from "../assets/scripts/sorting-algorithm.js";
import Card from "./Card.vue";
import FeedbackField from "./FeedbackField.vue";

export default {
  components: {
    Card,
    FeedbackField,
  },
  emits: ["card-fixed", "card-saved", "card-read", "card-swap"],
  data() {
    return {
      cardList: [
        {
          id: 1,
          number: 5,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
        {
          id: 2,
          number: 4,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
        {
          id: 3,
          number: 2,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
        {
          id: 4,
          number: 1,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
        {
          id: 5,
          number: 3,
          lesenActive: false,
          merkenActive: false,
          fixActive: false,
          cardFlipped: false,
        },
      ],
      grabbedCard: null,
      feedbackMessage: "",
      lastActionValid: true,
      lastAction: null
    };
  },
  methods: {
    getCard(cardId) {
      return this.cardList.find((card) => card.id === cardId);
    },
    dragstartHandler(e, card) {
      this.grabbedCard = card;
    },
    dropHandler(e, card) {
      e.preventDefault();
      // swap cards
      let tmpNumber = card.number;
      card.number = this.grabbedCard.number;
      this.grabbedCard.number = tmpNumber;
      let smallerId = Math.min(card.id, this.grabbedCard.id);
      let biggerId = Math.max(card.id, this.grabbedCard.id);
      this.performAction("T", smallerId, biggerId);
      this.unreadCards();
      this.unsaveCards();
      this.$emit("card-swap");
    },
    fixCard(cardId) {
      const card = this.getCard(cardId);
      //TODO: change to distinction between if card is already fixed
      if (!card.fixActive) {
        //card was not fixed
        this.performAction("F", cardId, null);
      } else {
        //card was fixed
        //TODO: do something
      }
      card.fixActive = !card.fixActive;
      this.$emit("card-fixed");
    },
    readCard(cardId) {
      const card = this.getCard(cardId);
      this.unreadCards();
      if (!card.lesenActive) {
        // karte wird nicht gelesen
        this.performAction("L", cardId, null);
      } else {
        //karte wird bereits gelesen --> nicht erfassen?
        // TODO: what happens when card is already read
      }
      card.lesenActive = !card.lesenActive; // lesenActive umkehren
      this.flipCard(card); // karte umdrehen
      this.$emit("card-read");
    },
    unreadCards() {
      this.cardList.forEach((card) => {
        if (card.lesenActive) {
          card.lesenActive = false;
          this.flipCard(card);
        }
      });
    },
    saveCard(cardId) {
      const card = this.getCard(cardId);
      if (card.lesenActive) {
        this.unsaveCards();
        if (!card.merkenActive) {
          // karte wird nicht gelesen
          this.performAction("M", cardId, null);
        } else {
          //karte wird bereits gemerkt --> nicht erfassen?
          // TODO: what happens when card is already saved
          this.feedbackMessage = "Bereits gemerkte karte wird wieder umgedreht";
        }

        card.merkenActive = !card.merkenActive;
        this.flipCard(card);
        this.$emit("card-saved");
      } else {
        //TODO: error
        this.feedbackMessage = "Karte wird nicht gelesen";
      }
    },
    unsaveCards() {
      this.cardList.forEach((card) => {
        if (card.merkenActive) {
          card.merkenActive = false;
          this.flipCard(card);
        }
      });
    },
    flipCard(card) {
      if (card.lesenActive || card.merkenActive) {
        card.cardFlipped = true;
      } else if (!card.lesenActive && !card.merkenActive) {
        card.cardFlipped = false;
      }
    },
    performAction(tool, card1, card2) {
      let action = { tool: tool, card1: card1, card2: card2 }; //create action
      console.log(this.lastAction);
      if (sorting.actionPerformed(action)) {
        //valid action
        this.lastActionValid = true;
        this.lastAction = action;
        console.log(this.lastAction);
      } else{
        this.lastActionValid = false;
      }
      //set feedbackMessage
      this.feedbackMessage = sorting.getFeedbackMessage();
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