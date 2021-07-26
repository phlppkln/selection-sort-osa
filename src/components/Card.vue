<template>
  <div class="card">
      <div class="fixieren">
          <div class="number">{{ number }}</div>
          <div class="lesen-btn" >Lesen</div>
          <div class="merken-btn">Merken</div>
      </div>
  </div>
</template>

<script>
export default {
     props: ['number'],

}
</script>

<style>
.card{
    background-color: gray;
    width: 100px;
    height: 100px;
}
</style>