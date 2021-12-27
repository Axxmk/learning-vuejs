<template>
  <div id="app-bar">
    <h2 @click="goToHome" id="logo">TAstagram</h2>
    <input
      @keydown.enter="onSearch"
      type="text"
      v-model="search"
      placeholder="Search"
    />
    <div>
      <img @click="goToHome" src="../assets/house.png" />
      <img src="../assets/messenger.png" />
      <img src="../assets/compass.png" />
      <img src="../assets/heart(black).png" />
      <img
        @click="goToMyProfile"
        id="img-profile"
        src="https://instagram.fbkk9-2.fna.fbcdn.net/v/t51.2885-19/s150x150/132043450_1287732991603729_2387050357215596972_n.jpg?_nc_ht=instagram.fbkk9-2.fna.fbcdn.net&_nc_ohc=DKFtKvDeFUgAX-n1cl0&tp=1&oh=1f6d4eee03faedd6a30394c75e17d9ab&oe=60286168"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    onSearch() {
      if (this.search) {
        this.search = "";
      }
    },
    goToHome() {
      if (this.$route.name != "home") {
        this.$router.push({ name: "home" });
      }
    },
    goToMyProfile() {
      if (this.$route.name != "profile") {
        this.$router.push({
          name: "profile",
          params: {
            user: {
              userId: 1,
              profileImg: "https://wwwii.bsthun.com/folder/ta/ann_profile.jpg",
              profileName: "annmtr_",
              photo: "https://wwwii.bsthun.com/folder/ta/ann_photo1.jpg",
            },
            userName: "annmtr_",
          },
        });
      }
    },
  },
};
</script>

<style scoped>
#app-bar {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  position: fixed;
  margin-top: -5.5rem;
  z-index: 10;

  height: 3.5rem;
  width: 100%;

  background-color: white;
  box-shadow: 1px 0 2px 0 grey;
}

#app-bar #logo {
  color: black;

  font-family: "Lobster", cursive;
  font-size: 1.5rem;
  font-weight: 400;

  cursor: pointer;
}

#app-bar input {
  width: 12rem;
  height: 0.8rem;
  padding: 0.4rem;
  text-align: center;

  border: 1px solid rgb(218, 218, 218);
  border-radius: 5px;
  background-color: rgb(250, 250, 250);
}

#app-bar input:focus {
  outline: none;
  text-align: left;
}

#app-bar img {
  width: 1.2rem;
  height: 1.2rem;
  margin: 0.8rem;

  transition: 0.1s;
  cursor: pointer;
}

#app-bar #img-profile {
  width: 1.3rem;
  height: auto;
  border-radius: 50%;
}

#app-bar img:hover {
  transform: translateY(-3px);
}
</style>