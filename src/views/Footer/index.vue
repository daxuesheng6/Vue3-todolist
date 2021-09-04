<template>
  <div class="footer_box">
    <div class="left">
      <label>
        <input type="checkbox" :checked="checkAll" @change="checkboxChange" />
        <span>全选</span>
      </label>
      <div class="context">
        <span>已完成:{{ checknum }}</span>
        <span>共有:{{ allnum }}</span>
      </div>
    </div>
    <button @click="clearBeforeHanlder">清空已完成</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: ["allnum", "checkAll", "checknum"],
  emits: ["todoListCheckAll", "todoListAllCheck"],
  setup(props, { emit }) {
    const checkboxChange = (v) => {
      emit("todoListCheckAll");
    };
    const clearBeforeHanlder = () => {
      emit("todoListAllCheck");
    };
    return {
      checkboxChange,
      clearBeforeHanlder,
    };
  },
};
</script>

<style scoped>
.footer_box {
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
}
.footer_box .left {
  display: flex;
}
.footer_box .left .context {
  margin-left: 15px;
}
</style>
