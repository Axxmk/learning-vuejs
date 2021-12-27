<template>
  <div id="left">
    <h1>Let's Random !</h1>

    <input
      @keypress.enter="addHandler"
      type="text"
      v-model="newThing"
      placeholder="add something"
    />

    <button @click="addHandler">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newThing: "",
    };
  },
  methods: {
    addHandler() {
      if (this.newThing) {
        this.$emit("addHandler", this.newThing);
        this.newThing = "";
      }
    },
  },
};
</script>

<style>
#left {
  width: 50vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(
    180deg,
    rgb(203, 92, 218),
    rgb(249, 240, 252)
  );
}

#left h1 {
  margin: 1.25rem;
  font-size: 3rem;

  color: rgb(248, 242, 244);

  transition: 0.2s;
}

#left h1:hover {
  transform: scale(1.15);
}

#left input {
  padding: 0.5rem 1rem;

  height: 1.3rem;
  width: 12rem;

  border: none;
  border-radius: 20px;

  transition: 0.2s;
}

#left input:focus {
  outline: none;

  transform: scale(1.07);
  box-shadow: 0 2px 6px 0 rgb(243, 239, 240);
}

#left button {
  margin: 2%;

  font-size: 1.1rem;

  border: none;
  border-radius: 11px;
  background-color: rgb(245, 245, 245);
  color: plum;
}

#left button:focus {
  outline: none;
  box-shadow: 1px 2px 3px 0 rgb(243, 239, 240);
}
</style>