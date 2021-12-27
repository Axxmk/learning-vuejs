<template>
  <div id="add-comment">
    <input
      :id="`addComment${index}`"
      @keydown.enter="addComment"
      type="text"
      placeholder="Add a comment..."
      v-model="newComment"
    />
    <button @click="addComment">Post</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newComment: "",
    };
  },
  props: {
    index: Number,
  },
  methods: {
    addComment() {
      if (this.newComment) {
        this.$emit("addCommentHandler", {
          value: this.newComment,
          userId: this.index,
        });
        this.newComment = "";
      }
    },
  },
};
</script>

<style scoped>
#add-comment {
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid rgba(207, 205, 205, 0.253);
  padding: 0.9rem;
  margin: 0 0.5rem;
}

#add-comment input {
  border: none;
}

#add-comment input:focus {
  outline: none;
}

#add-comment input::placeholder {
  opacity: 0.7;
}

#add-comment button {
  border: none;
  font-weight: bold;

  background-color: white;
  color: rgb(5, 143, 235);
  opacity: 0.6;

  cursor: pointer;
}

#add-comment button:focus {
  outline: none;
  opacity: 1;
}
</style>