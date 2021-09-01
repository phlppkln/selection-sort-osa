<template>
  <div class="tutorial-container">
    <div class="main-text"></div>
    <div class="additional-text"></div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            pageNumber: 0,
        }
    },
    emits: ['tutorial-finished'],
    methods:{        
    nextPage(){
      //maximum page number
      Math.min(10, this.pageNumber++)
    },
    previousPage(){
      Math.max(0, this.pageNumber--)
    }
    }

}
</script>

<style>

</style>