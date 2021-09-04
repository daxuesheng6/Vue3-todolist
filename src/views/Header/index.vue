<template>
  <div class="header-box">
    <input
      type="text"
      name=""
      v-model="name"
      placeholder="请输入任务,按enter添加"
      @keyup.enter="hanlderEnter"
    />
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Header",
  emits: ["hanlderBoforeAdd"],
  setup(props, { emit }) {
    const name = ref("");

    const hanlderEnter = () => {
      emit("hanlderBoforeAdd", name.value);
      name.value = "";
    };
    return {
      name,
      hanlderEnter,
    };
  },
};
</script>

<style scoped>
.header-box {
  height: 30px;
}
.header-box input {
  background-color: #f1f3f4;
  box-sizing: border-box;
  padding: 0 10px;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
}
</style>
