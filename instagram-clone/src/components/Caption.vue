<template>
  <div>
    <span class="user-name">{{ name }}</span> {{ caption }}
  </div>
</template>

<script>
export default {
  props: {
    caption: String,
    name: String,
  },
};
</script>

<style>
.user-name {
  font-family: "Noto Sans HK", sans-serif;
}
</style>