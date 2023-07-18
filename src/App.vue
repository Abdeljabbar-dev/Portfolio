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

@import url('https://fonts.googleapis.com/css2?family=DM+Sans&family=Montserrat:wght@200;300&family=Playfair+Display:wght@500&family=Roboto:wght@100;300;400&display=swap');
.wrapper{
  margin-top: 150px;
}

body{
  margin: 10px 200px;
  font-family: 'DM Sans', sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Playfair Display', serif;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: var(--background-color-primary);
}

a {
  text-decoration: none;
}

:root {
  --background-color-primary: #ebebeb;
  --background-color-secondary: #fafafa;
  --accent-color: #cacaca;
  --text-primary-color: #222;
  --element-size: 3.3rem;
}

p,h1,h2,h6,h4,h5,h3,a {
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
