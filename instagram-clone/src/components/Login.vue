<template>
  <div id="part-row">
    <img src="../assets/kannaIgclone.png" width="230px" />

    <div id="login">
      <h1 id="logo">TAstagram</h1>

      <div class="login-input">
        <label for="username">Username</label>
        <input
          @focus="handleFocus"
          @blur="handleBlur"
          type="text"
          id="username"
          v-model="username"
        />
      </div>

      <div class="login-input">
        <label for="password">Password</label>
        <input
          @focus="handleFocus"
          @blur="handleBlur"
          type="password"
          id="password"
          v-model="password"
        />
        <div id="show"><button @click="showPass">Show</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      isShowPass: false,
    };
  },
  methods: {
    handleFocus(e) {
      const target = e.target;
      target.parentNode.classList.add("active");
    },
    handleBlur(e) {
      const target = e.target;
      if (!target.value) {
        target.parentNode.classList.remove("active");
      }
    },
    showPass() {
      const target = document.getElementById("password");
      if (!this.isShowPass) {
        target.setAttribute("type", "text");
        this.isShowPass = true;
      } else {
        target.setAttribute("type", "password");
        this.isShowPass = false;
      }
    },
  },
};
</script>

<style scoped>
#part-row {
  display: flex;
  justify-content: center;
  align-items: center;
}

#login {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 2rem;
  margin: 0 2rem;

  background-color: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px 0 rgb(167, 165, 165);
}

#login #logo {
  margin-bottom: 2.3rem;

  font-family: "Lobster", cursive;
  font-weight: 400;
  color: rgb(56, 56, 56);
}

#login .login-input {
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  position: relative;

  width: 15rem;
  height: 2.3rem;
  margin-bottom: 0.5rem;

  background-color: rgb(243, 243, 243);
  border: 1px solid rgb(219, 212, 212);
  border-radius: 3px;
}

#login label {
  position: absolute;
  padding-top: 0.2rem;
  padding-left: 0.4rem;

  font-size: 0.7rem;
  color: rgb(167, 165, 165);
  background: none;

  cursor: text;

  transform-origin: top left;
  transform: translate(0, 0) scale(1);
  transition: all 0.15s ease-in-out;
}

#login div.active label {
  transform: translate(0, -0.4rem) scale(0.73);
  color: rgb(81, 183, 243);
}

#login input {
  width: 12rem;
  padding: 1.1rem 0 0.3rem 0.4rem;

  font-size: 0.75rem;
  border: none;
  background: none;
}

#login input:focus {
  outline: none;
}

.login-input #show {
  height: 100%;
  width: 20%;

  background-color: white;
}

.login-input #show button {
  font-weight: 600;
  font-size: 0.75rem;
  padding-top: 0.8rem;

  color: rgb(82, 80, 80);
  background: none;
  border: none;

  cursor: pointer;
  opacity: 0.6;
  transition: 0.1s;
}

button:focus {
  outline: none;
}
</style>