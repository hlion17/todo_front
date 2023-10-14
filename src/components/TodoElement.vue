<template>
  <div>
    <div class="container">

      <!-- 체크박스 -->
      <div class="item">
        <input
            type="checkbox"
            @change="$emit('change-completed', todo)"
            :checked="isDone"
        />
      </div>

      <!-- 투두 내용 -->
      <div
          class="item"
          v-if="!editable"
          :class="{ cancelText: isDone }"
      >
        {{ this.todo.content }}
      </div>
      <input
          v-else
          type="text"
          v-model="this.content"
          @keyup.enter="sendEditEvent"
      />

      <!-- 투두날짜 -->
      <div class="item">
        {{ this.todo.todoEntrTime }}
      </div>

      <!-- 수정버튼 -->
      <button
          class="item btn info"
          v-if="!editable"
          @click="changeEditable"
      >
        Edit
      </button>
      <button
          v-else
          class="item btn danger"
          @click="changeEditable"
      >
        Cancel
      </button>

      <!-- 삭제아이콘 -->
      <div class="item">
        <font-awesome-icon
            class="delete_item"
            @click="$emit('delete-todo')"
            icon="fa-regular fa-trash-can"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {

  /**
   * 투두 entity
   * todoId
   * content
   * todoStus
   * deadLine
   * todoEntrTime
   */

  // 상속 데이터
  props: {
    todo: Object
  },

  // 컴포넌트 데이터
  data: function () {
    return {
      editable: false,  // 수정여부 플레그 변수
      content: this.todo.content
    };
  },

  // 계산속성
  computed: {
    isDone() {
      return this.todo.todoStus === 'DONE';
    },
  },

  // 메소드
  methods: {
    // 편집속성 변경
    changeEditable() {
      this.editable = !this.editable;
    },

    // 변경된 이벤트 전달
    sendEditEvent() {
      this.$emit('edit-todo', this.todo.todoId, this.content);
      this.editable = !this.editable;
    },

  }

};
</script>

<style>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-shadow: 1px 4px 12px rgba(0, 0, 0, 0.08);
  width: 60%;
}

.container:hover {
  box-shadow: 1px 4px 20px rgba(0, 0, 0, 0.2);
}

.item {
  padding: 5px;
  margin: 5px;
}

.delete_item:hover {
  color: red;
}

.cancelText {
  text-decoration: line-through;
}

.btn {
  border: none;
  border-radius: 4px;
}

.danger {
  background-color: #DC3444;
  color: white;
}

.info {
  background-color: #228bec;
  color: white;
}
</style>
