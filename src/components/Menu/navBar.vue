<template>
    <div class="container-nav-bar" >
        <!-- <img class="logo" src="../../assets/logo-dark.png" alt=""> -->
        <p class="logo">{JsDev}</p>
        <nav>
            <!-- <router-link class="nav-bar-item" to="/">Home</router-link> -->
            <router-link class="nav-bar-item" :to="{name:'home'}">Home</router-link>
            <router-link class="nav-bar-item" :to="{name:'about'}">About</router-link>
            <router-link class="nav-bar-item" :to="{name:'about'}">Stack Tech</router-link>
            <router-link class="nav-bar-item" :to="{name:'about'}">Projects</router-link>
            <router-link class="nav-bar-item" :to="{name:'about'}">Contact</router-link>
            <!-- <router-link class="nav-bar-item"  to="/techStack">Tech Stack</router-link>
            <router-link class="nav-bar-item"  to="/projects">Project</router-link> -->
            <!-- <router-link class="nav-bar-item"  to="/contact">Contact</router-link> -->
        </nav>
        <nav class="container-nav-bar">
            <img class="contact__image" src="../../assets/github.png" alt="">
            <img class="contact__image" src="../../assets/linkedin.png" alt="">
            <img class="contact__image" src="../../assets/twitter.png" alt="">
            <them-button class="contact__image"/>
        </nav>

    </div>
</template>

<script>
import themButton from '../themButton.vue'
export default {
  components: { themButton },
  setup () {
    return {}
  }
}
</script>

<style scoped>
.logo{
    font-weight: bold;
    background: #00C0FD;
    background: linear-gradient(to right, #00C0FD 0%, #E70FAA 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.container-nav-bar{
    /* margin-left: 100px;
    margin-right: 100px;
    display: flex;
    justify-content: space-between; */
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
    align-items: center;
    justify-items: center;
}

.nav-bar-item{
    margin-left: 40px;
    color: #666666;
    text-decoration: none;
    font-size: medium;
    font-weight: 20px;
}

nav {
    padding: 30px;
    width: auto;

}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  /* color: black ; */
  background: #00C0FD;
  background: linear-gradient(to right, #00C0FD 0%, #E70FAA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.contact__image{
  width: 30px;
  height: 30px;
  margin-left: 5px;
}

</style>
