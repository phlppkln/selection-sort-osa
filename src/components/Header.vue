<template>
  <div class="header">
    <img class="logo" alt="tu-logo" src="../assets/tu-logo.svg" />
    <div class="header-right">
      <a href="#osa" target="_blank">Zurück zum Online Self Assessment</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header{
    padding: 20px;
    border-bottom: 1px solid black;
}

.header a:hover {
  color: black;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}
</style>