<template>
  <div>
    <Header :teams="teams" @selected="selected"> </Header>
    <div id="teamName">{{ selectTeam[0].team_name }}</div>
    <Players :selectTeam="selectTeam"> </Players>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header.vue";
import Players from "./components/Player.vue";
export default {
  data() {
    return {
      teams: [],
      selectTeam: [],
    };
  },
  methods: {
    selected(value) {
      axios
        .get(`https://nba-players.herokuapp.com/players-stats-teams/${value}`)
        .then(({ data }) => {
          console.log(data);
          this.selectTeam = data;
          console.log(this.selectTeam);
        });
      // console.log(this.selectTeam);
    },
  },
  components: {
    Header,
    Players,
  },
  created() {
    axios.get("https://nba-players.herokuapp.com/teams").then(({ data }) => {
      console.log(data);
      this.teams = data;
      axios
        .get(
          `https://nba-players.herokuapp.com/players-stats-teams/${this.teams[0]}`
        )
        .then(({ data }) => {
          console.log(data);
          this.selectTeam = data;
          console.log(this.selectTeam);
        });
    });
  },
};
</script>

<style>
body {
  font-family: "Oswald", sans-serif;
  margin: 0;
  padding: 0;
  width: 100vw;
}

#teamName {
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 700;
  margin: 2rem 0;
}
</style>