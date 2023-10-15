<template>
  <input id="todoAddInput" type="text" placeholder="작업 추가" @keypress.enter="createTodo" v-model="content"/>
  <input type="datetime-local" v-model="date"/>
</template>

<script>
export default {
  name: 'TodoAdd',

  // 컴포넌트 데이터
  data: function () {
    return {
      content: '',
      date: '',
    };
  },

  // 메소드
  methods: {
    // 투두 생성
    createTodo: function () {
      /**
       * 한글로 입력시 두 번 호출되는 현상 확인
       *  vue.js 에서 keyup.enter 사용시 함수가 두 번 호출됨
       *  keyup.enter -> keypress.enter 변경
       */
      if (this.content === '') {
        alert('내용을 입력해주세요');
        return;
      }
      this.$emit('add-todo', this.content, this.date);
      this.content = '';  // 생성 후 입력창 초기화
    },
  },

};
</script>

<style>
#todoAddInput {
  width: 300px;
  height: 30px;

  padding: 5px;
  margin: 10px;

  border: none;
  border-radius: 10px;

  background: white;
}
</style>
