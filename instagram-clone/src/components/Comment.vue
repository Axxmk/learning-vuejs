<template>
  <div>
    <div id="comment" v-for="(comment, index) in comments" :key="index">
      <div><span class="user-name"> someone_ </span> {{ comment }}</div>
      <img
        @click="commentLiked = false"
        v-show="commentLiked"
        src="../assets/heart(pink).png"
      />
      <img
        @click="commentLiked = true"
        v-show="!commentLiked"
        src="../assets/heart(black).png"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentLiked: false,
      // userComments: [
      //   {
      //     content: this.comments,
      //     commentLiked: false,
      //   },
      // ],
    };
  },
  props: {
    comments: Array,
  },
  methods: {
    likeComment() {},
  },
};
</script>

<style scoped>
#comment {
  display: flex;
  justify-content: space-between;
}

img {
  height: 0.7rem;
  width: auto;

  transition: 0.2s;
}

img:active {
  transform: scale(1.2);
}
</style>