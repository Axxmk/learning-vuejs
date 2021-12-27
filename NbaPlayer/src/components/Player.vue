<template>
  <div id="players">
    <div class="info" v-for="(player, index) in selectTeam" :key="index">
      <img :src="getPath(player.name)" width="50%" />
      {{ player.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selectTeam: Array,
  },
  methods: {
    getPath(name) {
      let data = name.split(" ");
      return `https://nba-players.herokuapp.com/players/${data[1]}/${data[0]}`;
    },
  },
};
</script>

<style>
#players {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 2rem 0;
}

.info img {
  margin-bottom: 20px;
}
</style>