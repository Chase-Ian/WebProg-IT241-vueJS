<template>
  <div class = "item2">
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Burger',
      message: 'I like burger'
    }
  }
};
</script>

<style>
  .item2 {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: orange;
  }
</style>