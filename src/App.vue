<template>
  <div class="todo_box">
    <Header @hanlderBoforeAdd="todoListAdd" />
    <div class="main-box">
      <Item
        v-for="(item, index) in todoList.todo"
        :item="item"
        :index="index"
        :key="item.name"
        @todoListDel="todoListDel"
        @toadoListChange="toadoListChange"
      />
    </div>
    <Footer
      :checkAll="checkAll"
      :checknum="checknum"
      :allnum="todoList.todo.length"
      @todoListCheckAll="todoListCheckAll"
      @todoListAllCheck="todoListAllCheck"
    />
  </div>
</template>

<script>
import Header from "./views/Header/index.vue";
import Footer from "./views/Footer/index.vue";
import Item from "./views/Item/index.vue";
import useTodoList from "./composables/useTodoList.js";
export default {
  name: "App",
  components: { Header, Item, Footer },

  setup() {
    const {
      todoList,
      checkAll,
      checknum,
      todoListAdd,
      todoListDel,
      toadoListChange,
      todoListCheckAll,
      todoListAllCheck,
    } = useTodoList();

    return {
      todoList,
      checkAll,
      checknum,
      todoListAdd,
      todoListDel,
      toadoListChange,
      todoListCheckAll,
      todoListAllCheck,
    };
  },
};
</script>
<style scoped>
.todo_box {
  margin: 0 auto;
  width: 500px;
  border: 1px solid red;
}
</style>
