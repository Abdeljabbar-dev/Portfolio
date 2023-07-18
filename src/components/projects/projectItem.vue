<template>
    <div>
        <img :src="src" style="width:100%">
        <h3>{{ title }}</h3>
        <article class="article_product">
            <p>{{ description }}</p>
            <p>Tech Stack : {{techStack}}</p>
        </article>
        <footer>
            <img class="project_image" src="../../assets/github_light.png" alt="">
            <a class="footer_Text" :href="url" target="_blank">View Code</a>
        </footer>
    </div>
</template>

<script>
export default {
  props: {
    src: String,
    description: String,
    techStack: String,
    url: String
  },
  setup () {

  }
}
</script>

<style scoped>
.article_product{
    text-align: left;
    margin: 15px
}

footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    text-align: center;
    display: grid;
    justify-content: center;
    grid-auto-flow: column;
}

.footer_Text{
    font-size: small;
    font-weight: bold;
    margin-top: 3px;
}

 .card_item_image{
    height: 10px;
    width: 10px;
    filter: grayscale(0);
 }
 .project_image{
  width: 20px;
  height: 20px;
  padding-right: 5px;
}
</style>
