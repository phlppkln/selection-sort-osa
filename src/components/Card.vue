<template>
  <div class="card-container" :class="isCardFixed()">
    <div class="fixieren-container"  @click="fixCard">
      FIX
      <div class="number">{{ number }}</div>
      <div class="btn-container">
        <div class="btn lesen-btn">Lesen</div>
        <div class="btn merken-btn">Merken</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["number"],
  data() {
      return{
          cardFixed: false,
          lesenActive: false,
          merkenActive: false,
          numberVisiable: false
      }
  },
  methods: {
      fixCard(){
          console.log("fixCard");
          this.cardFixed = !this.cardFixed;
          this.$emit('cardFixed')
      },
      isCardFixed(){
          console.log("isCardFixed");
          if(this.cardFixed){
              return "cardFixed";
          }
      }
  }
};
</script>

<style scoped>
.card-container {
  border-radius: 10px;
  border: 2px solid black;
  height: 210px;
  width: 150px;
  display: flex;
  justify-content: center;
}
.fixieren-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.cardFixed{
    background-color: #ECFAFF;
}

.fixieren-container:hover{
    text-decoration: underline;
}

.number {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #006BAC;
    color: black;
  height: 100px;
  width: 120px;
  border: 2px solid black;
  border-radius: 10px;
}
.btn-container {
  display: flex;
  justify-content: space-evenly;
  background-color: red;
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
  background-color: green;
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