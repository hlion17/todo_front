<template>
  <div id="appTemplate">

    <!-- 투두 등록 컴포넌트 -->
    <TodoAdd
        @add-todo="addTodo"
    ></TodoAdd>

    <!-- 투두 표시 컴포넌트 -->
    <div v-for="todo in todoList" :key="todo.id">
      <TodoElement
          :todo="todo"
          @edit-todo="editTodo"
          @delete-todo="deleteTodo(todo.id)"
          @change-completed="changeTodoComplete(todo.id)"
      ></TodoElement>
    </div>

  </div>
</template>

<script>
import TodoAdd from './TodoAdd.vue';
import TodoElement from './TodoElement.vue';
import uniqueId from 'lodash.uniqueid';

export default {
  name: 'AppTemplate',
  // 데이터
  data: function () {
    return {
      todoList: [],
    };
  },
  // 컴포넌트
  components: {
    TodoAdd,
    TodoElement,
  },
  // 메소드
  methods: {
    // 투두 등록
    addTodo: function (title, date) {
      if (date === '') date = new Date().toLocaleString();
      this.todoList.push({
        id: uniqueId('todo-'),
        title: title,
        date: date.replace('T', ' '),
        completed: false,
      });
    },
    // 투두 수정
    editTodo: function (todoId, newTitle) {
      const findTodo = this.todoList.find((todo) => todo.id === todoId);
      findTodo.title = newTitle;
    },
    // 완료여부 변경
    changeTodoComplete: function (todoId) {
      const findTodo = this.todoList.find((todo) => todo.id === todoId);
      findTodo.completed = !findTodo.completed;
    },
    // 투두 삭제
    deleteTodo: function (todoId) {
      const findIndex = this.todoList.findIndex(
          (todo) => todo.id === todoId
      );
      this.todoList.splice(findIndex, 1);
    },
  },

};
</script>

<style>
#appTemplate {
  width: 90%;
  margin: 100px auto;
}
</style>
