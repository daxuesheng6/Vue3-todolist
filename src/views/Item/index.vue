<template>
  <div class="item-box">
    <label>
      <input type="checkbox" :checked="flag" @change="checkboxChange" />
      <span>{{ name }}</span>
    </label>
    <button @click="checkboxDel">删除</button>
  </div>
</template>

<script>
import { toRefs } from "vue";
export default {
  name: "Item",
  props: ["item", "index"],
  emits: ["toadoListChange", "todoListDel"],
  setup(props, { emit }) {
    const { flag, name } = toRefs(props.item);

    const checkboxChange = () => {
      console.log(props.index);
      emit("toadoListChange", props.index);
    };
    const checkboxDel = () => {
      emit("todoListDel", props.index);
    };
    return {
      flag,
      name,
      checkboxChange,
      checkboxDel,
    };
  },
};
</script>

<style scoped>
.item-box {
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  border: 1px solid red;
}
</style>
