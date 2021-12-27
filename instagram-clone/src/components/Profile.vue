<template>
  <div>
    <h1>{{ user.profileName }} + {{ user.caption }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    user: Object,
  },
};
</script>

<style>
</style>