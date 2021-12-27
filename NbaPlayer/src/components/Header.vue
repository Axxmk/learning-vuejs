<template>
  <div id="head">
    <div id="topic">NBA Players</div>
    <select id="selectTeam" @change="selectTeam">
      <option v-for="(team, index) in teams" :key="index" :value="teams[index]">
        {{ team }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    teams: Array,
  },
  methods: {
    selectTeam(event) {
      // console.log(event.target.value);
      this.$emit("selected", event.target.value);
    },
  },
};
</script>

<style>
#head {
  text-align: center;
  width: 100vw;
  padding: 2rem 0;

  color: rgb(255, 192, 127);
  background-color: rgb(241, 81, 86);
  box-shadow: 0 5px 10px 0 rgb(243, 155, 155);
}

#topic {
  font-size: 4rem;
  padding: 1rem;
}

#selectTeam {
  padding: 0.7rem;
  width: 30vw;

  border: 1.5px solid rgb(255, 192, 127);
}
</style>