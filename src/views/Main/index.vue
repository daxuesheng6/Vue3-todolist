<template>
  <div class="main-box">
    <Item
      v-for="(item, index) in todo"
      :key="index"
      :item="item"
      :index="index"
    />
  </div>
</template>

<script>
import Item from "../Item/index.vue";
export default {
  name: "Main",
  components: { Item },
  props: {
    todo: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
