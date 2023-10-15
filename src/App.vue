<template>
  <div id="appContainer">
    <SideMenu></SideMenu>
    <TodoArea></TodoArea>
  </div>
</template>

<script>
import TodoArea from './components/TodoArea.vue';
import SideMenu from "@/components/SideMenu.vue";

export default {
  name: 'App',

  components: {
    SideMenu,
    TodoArea,
  },
};
</script>

<style>
#appContainer {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: grid;
  grid-template-columns: 2fr 8fr;

  height: 800px;
  width: 1000px;
  padding: 10px;

  text-align: center;
  color: #2c3e50;

  background: #aaaaaa;
}
</style>
