<template>
  <div id="appTemplate">

    <!-- 투두 등록 컴포넌트 -->
    <TodoAdd
        @add-todo="addTodo"
    ></TodoAdd>

    <!-- 투두 표시 컴포넌트 -->
    <div v-for="todo in todoList" :key="todo.todoId">
      <TodoElement
          :todo="todo"
          @edit-todo="editTodo"
          @delete-todo="deleteTodo(todo.todoId)"
          @change-completed="changeTodoComplete"
      ></TodoElement>
    </div>

  </div>
</template>

<script>
import TodoAdd from './TodoAdd.vue';
import TodoElement from './TodoElement.vue';
// import uniqueId from 'lodash.uniqueid';

export default {
  name: 'AppTemplate',

  // 초기화 모듈
  mounted() {
    this.getAllTodoList();
  },

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
    // 전체 투두 조회
    getAllTodoList: function () {
      this.axios
          .get('/todo/all')
          .then((res) => {
            if (res.status === 200) {
              this.todoList = res.data;
            } else {
              console.error('조회결과 서버 응답 not 200: ', res);
            }
          })
          .catch((error) => console.error('todo 목록 서버 조회 오류', error));
    },

    // 투두 등록
    addTodo: function (title, date) {
      this.axios
          .post('/todo', {
            content: title,
            deadLine: date !== '' ? date : this.$getCurrentDateTime,
          })
          .then((res) => {
            if (res.status === 200) {
              console.log('투두 등록 성공');
              this.getAllTodoList();  // 등록 후 목록 재조회
            } else {
              console.log('투두 등록 실패: ', res);
            }
          })
          .catch((error) => console.error(error))
    },

    // 투두 수정
    editTodo: function (todoId, newTitle) {
      this.axios
          .put('/todo/' + todoId, {
            content: newTitle
          })
          .then((res) => {
            if (res.status === 200) {
              console.log('투두 내용변경 처리 성공');
              this.getAllTodoList();  // 상태 업데이트 후 전체 재조회
            } else {
              console.error('투두 상태변경 처리 실패: ', res);
            }
          })
          .catch((error) => console.error(error));
    },

    // 완료여부 변경
    changeTodoComplete: function (todo) {

      let changeTodoStus
      if (todo.todoStus === 'DONE') changeTodoStus = 'CREATED'
      else if (todo.todoStus === 'CREATED') changeTodoStus = 'DONE'
      else changeTodoStus = '';

      this.axios
          .put('/todo/' + todo.todoId, {
            todoStus: changeTodoStus
          })
          .then((res) => {
            if (res.status === 200) {
              console.log('투두 상태변경 처리 성공: ', changeTodoStus);
              this.getAllTodoList();  // 상태 업데이트 후 전체 재조회
            } else {
              console.error('투두 상태변경 처리 실패: ', res);
            }
          })
          .catch((error) => console.error(error));
    },

    // 투두 삭제
    deleteTodo: function (todoId) {
      this.axios
          .delete('/todo/' + todoId)
          .then((res) => {
            if (res.status === 200) {
              console.log("투두 삭제 성공: ", todoId);
              this.getAllTodoList();  // 삭제 후 목록 재조회
            } else {
              console.log("투두 삭제 실패: ", todoId);
              console.error(res);
            }
          })
          .catch((error) => console.error(error));
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
