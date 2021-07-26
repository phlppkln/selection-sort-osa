<template>
<ul>
  <li><Card :number="numbers[0]"/></li>
  <li><Card :number="numbers[1]"/></li>
  <li><Card :number="numbers[2]"/></li>
  <li><Card :number="numbers[3]"/></li>
  <li><Card :number="numbers[4]"/></li>
</ul>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  },
  data(){
    return{
      numbers: [],
      readActions: 0, /*lesen*/
      saveActions: 0, /*merken*/
      fixActions: 0, /*fixieren*/
      startTime: null,
      endTime: null
    };
  },
  created(){
    this.numbers.push(Math.random());
    this.numbers.push(Math.random());
    this.numbers.push(Math.random());
    this.numbers.push(Math.random());
    this.numbers.push(Math.random());
    console.log(this.numbers);
  },
  methods: {
    createRandomNumbers(){
      console.log("getRandomNumber()")
      return Math.random();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS';
}
</style>
