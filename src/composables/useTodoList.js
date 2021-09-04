import { ref, reactive, computed, watchEffect } from "vue";

export default function useTodoList () {
    const todoList = reactive({
        todo: [
            { name: '1', flag: true },
            { name: '2', flag: true },
            { name: '3', flag: true },
        ]
    })
    const checkAll = ref(false)

    // 添加
    const todoListAdd = (val) => {
        todoList.todo.push({ name: val, flag: false })
    }
    // 删除
    const todoListDel = (val) => {
        console.log(val)
        todoList.todo.splice(val, 1)
    }
    // 勾选
    const toadoListChange = val => {
        todoList.todo[val].flag = !todoList.todo[val].flag
    }
    // 全选
    const todoListCheckAll = () => {
        todoList.todo.forEach(v => v.flag = !checkAll.value)
    }
    //已完成的数量
    const checknum = computed(() => {
        return todoList.todo.reduce((p,c)=>p+(c.flag===true?1:0),0)
    })
    //这里使用计算属性最好,这里只是为了测试watchEffect API
    watchEffect(() => {
        if (todoList.todo.length === 0) return checkAll.value = false
        checkAll.value = !todoList.todo.filter(v => !v.flag).length
    })

    //清除已完成
    const todoListAllCheck = () => {
        todoList.todo = todoList.todo.filter(v=>v.flag!==true)
    }

    return {
        todoList,
        checknum,
        checkAll,
        todoListAdd,
        todoListDel,
        toadoListChange,
        todoListCheckAll,
        todoListAllCheck,
        
    }
}