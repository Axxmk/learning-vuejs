<template>
  <div id="user">
    <div>
      <img @click="clickProfile" :src="profileImg" />

      <span @click="clickProfile" class="user-name">
        {{ profileName }}
      </span>
    </div>

    <p>•••</p>
  </div>
</template>

<script>
export default {
  props: {
    profileImg: String,
    profileName: String,
  },
  methods: {
    clickProfile() {
      this.$emit("profileHandler", this.profileName);
    },
  },
};
</script>

<style scoped>
#user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5em;
}

#user div {
  display: flex;
  align-items: center;
}

#user div span {
  color: black;
  font-size: 0.8rem;
  cursor: pointer;
}

#user div img {
  width: 1.8rem;
  height: auto;
  margin: 1rem;
  border-radius: 50%;
  cursor: pointer;
}

#user p {
  letter-spacing: -8px;
  padding-right: 1rem;
}
</style>