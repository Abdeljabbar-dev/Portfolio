<template>
    <div class="wrapper">
        <h1>My Tech Stack</h1><br>
        <h3>
            Technologies I’ve been working with recently
        </h3>
        <div class="items-stack">
            <img class="tech_image" src="../../assets/vue.png" alt="">
            <img class="tech_image" src="../../assets/react.png" alt="">
            <img class="tech_image" src="../../assets/node.png" alt="">
            <img class="tech_image" src="../../assets/css.png" alt="">
            <img class="tech_image" src="../../assets/html.png" alt="">
            <img class="tech_image" src="../../assets/bootstrap.png" alt="">
            <img class="tech_image" src="../../assets/tailwind.png" alt="">
            <img class="tech_image" src="../../assets/Git-Icon-1788C.png" alt="">
            <img class="tech_image" src="../../assets/vscode.png" alt="">
            <img class="tech_image" src="../../assets/sass.png" alt="">
        </div>
    </div>
</template>

<script>

export default {
  setup () {
    return {
    }
  }
}
</script>

<style scoped>

.items-stack{
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  justify-items: center;
}

.tech_image{
  width: 80px;
  height: 80px;
  margin: 20px;
}

p{
  text-align: left;
  font-size: xx-large;
  font-weight: bold;
}

</style>
