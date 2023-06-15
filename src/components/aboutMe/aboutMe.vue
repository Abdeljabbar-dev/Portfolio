<template>
    <div class="container">
        hello
    </div>
</template>

<script>
export default {
  setup () {
    const description = 'Hi, I am ABD-ELJABBAR, i am an engineer in intelligent systems, specialized in the design and development of web applications, with knowledge of networks and telecoms. Motivated, autonomous and adaptable are qualities that characterize me as much as a developer endowed with a strong sense of research and learning.ngineer in intelligent systems, specialized in the design and development of web applications, with knowledge of networks and telecoms. Motivated, autonomous and adaptable are qualities that characterize me as much as a developer endowed with a strong sense of research and learning'
    return { description }
  }
}
</script>

<style scoped>
.container{
    margin: 10px;
    display: flex;
    align-content: center;
}

.main_about{
  display: flex;
  align-content: center;
  margin: 100px;
}
.description-text{
  text-align: left;
  margin-left: 40px;
  line-height: 2rem;
  font-weight: 700;
  font-size: larger;
}

p::first-letter{
  /* color: yellow; */
  font-size: 8rem;
  text-transform: uppercase;
  font-weight: 700;
}

p::first-line{
  /* background: rgb(255 255 0/15%); */
}
.profile_image{
  width: 250px;
  height: 200;
  border-radius: 5%;
}

</style>
