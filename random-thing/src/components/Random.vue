<template>
  <div id="right">
    <div id="list">
      <h1>List</h1>
      <div
        v-for="(thing, index) in thingsHandler"
        :key="index"
        @click="remove(index)"
      >
        {{ thing }}
      </div>
    </div>

    <div id="random">
      <h1>Random</h1>
      <div>
        <div id="show">{{ randomThing }}</div>
        <button @click="random">Random</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomThing: "Random First!",
    };
  },
  props: {
    thingsHandler: Array,
  },
  methods: {
    remove(index) {
      this.thingsHandler.splice(index, 1);
    },
    random() {
      if (this.thingsHandler.length == 0) {
        return;
      }
      this.randomThing = this.thingsHandler[
        Math.floor(Math.random() * (this.thingsHandler.length - 1))
      ];
    },
  },
};
</script>

<style>
#right {
  width: 50vw;
  padding: 1rem;

  display: flex;
  flex-direction: column;
}

#list,
#random {
  margin: 2rem 4rem 0 2rem;
}

#list h1,
#random h1 {
  margin: 1rem 0;
  padding: 0.3rem 1rem;
  width: fit-content;

  font-size: 3rem;

  color: rgba(193, 70, 224, 0.842);
  border-radius: 20px;

  transition: 0.2s;
}

#list h1:hover,
#random h1:hover {
  transform: scale(1.1);
  box-shadow: 1px 2px 6px 0 rgb(255, 217, 255);
}

#list div {
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem 0.7rem;

  background-color: rgba(253, 208, 253, 0.767);
  border-radius: 15px;

  transition: 0.2s;
}

#list div:hover {
  transform: scale(1.1);
}

#random div {
  margin: 0.5rem;
  display: flex;
  align-items: center;
}

#show {
  margin: 0 2rem;
  padding: 0.7rem 2rem;
  font-size: 1.25rem;

  background-color: rgba(253, 208, 253, 0.767);
  border-radius: 20px;
}

#random button {
  padding: 0.7rem;
  height: 2rem;

  border: none;
  border-radius: 20px;
}

#random button:focus {
  outline: none;
}
</style>