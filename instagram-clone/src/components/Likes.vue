<template>
  <div v-if="likeLenght != 0">
    Liked by
    <span class="user-name">{{ likes[0] }}</span>
    <template v-if="likeLenght > 1">
      and <span class="user-name">others</span>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    likes: Array,
  },
  computed: {
    likeLenght() {
      return this.likes.length;
    },
  },
};
</script>

<style>
</style>