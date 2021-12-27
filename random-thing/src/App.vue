<template>
  <div id="part">
    <Add @addHandler="addNew"></Add>
    <Random :thingsHandler="things"></Random>
  </div>
</template>

<script>
import Add from "./components/Add.vue";
import Random from "./components/Random.vue";

export default {
  components: {
    Add,
    Random,
  },
  data() {
    return {
      things: [],
    };
  },
  methods: {
    addNew(value) {
      this.things.push(value);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;

  font-family: "Source Serif Pro", serif;
}

#part {
  display: flex;
  height: 100vh;
}
</style>