<template>
  <div id="react">
    <div id="react-bar">
      <img
        @click="clickLike"
        v-show="postLiked"
        src="../assets/heart(pink).png"
      />
      <img
        @click="clickLike"
        v-show="!postLiked"
        src="../assets/heart(black).png"
      />

      <svg @click="HandleComment" fill="#262626" viewBox="0 0 48 48">
        <path
          d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
        ></path>
      </svg>

      <svg fill="#262626" viewBox="0 0 48 48">
        <path
          d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"
        ></path>
      </svg>
    </div>

    <div id="save">
      <img
        @click="postSaved = false"
        v-show="postSaved"
        src="../assets/bookmark(filled).png"
      />
      <img
        @click="postSaved = true"
        v-show="!postSaved"
        src="../assets/bookmark.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postLiked: false,
      postSaved: this.isSaved,
    };
  },
  props: {
    isSaved: Boolean,
    index: Number,
  },
  methods: {
    HandleComment() {
      document.getElementById(`addComment${this.index}`).focus();
    },
    clickLike() {
      if (this.postLiked) {
        this.$emit("unlikeHandler", this.index);
        this.postLiked = false;
      } else {
        this.$emit("likeHandler", this.index);
        this.postLiked = true;
      }
    },
  },
};
</script>

<style scoped>
#react {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#react-bar img,
#react-bar svg {
  width: 1.2rem;
  height: 1.2rem;
  margin: 1rem 1rem 0 0;

  cursor: pointer;
  transition: 0.2s;
}

#react-bar img:active,
#react-bar svg:active,
#save img {
  transform: scale(1.2);
}

#save img {
  width: 1rem;
  height: 1rem;
  margin-top: 1rem;

  cursor: pointer;
  transition: 0.2s;
}
</style>