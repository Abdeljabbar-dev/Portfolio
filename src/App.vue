<template>
  <nav-bar/>
  <router-view/>
</template>
<script>
import navBar from './components/Menu/navBar.vue'
export default {
  components: { navBar },
  setup () {
    return {}
  }
}
</script>
<style>

body{
  margin: 10px 200px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--background-color-primary);
}

:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 3.3rem;
}

p {
  color: var(--text-primary-color);
}

/* Define styles for the root window with dark - mode preference */
:root.dark-theme {
  --background-color-primary: #1e1e1e;
  --background-color-secondary: #2d2d30;
  --accent-color: #3f3f3f;
  --text-primary-color: #ddd;
}

</style>
