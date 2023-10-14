<template>
  <AppTemplate></AppTemplate>
</template>

<script>
import AppTemplate from './components/AppTemplate.vue';

export default {
  name: 'App',
  components: {
    AppTemplate,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  border: 1px black solid;
  /* margin-top: 60px; */
  width: 1000px;
  //height: 500px;
}
</style>
