<template>
  <div class = "item1">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Sisig',
      message: 'I LOVE SISIG SO MUCCHHH'
    }
  }
};
</script>

<style>
  .item1 #app > div {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>