<template>
    <div class="wrapper">
        <h1>Projects</h1>
        <h3>
            Things I’ve built so far
        </h3>
        <br>
        <div class="cards">
            <div v-for="project of projectData.projects" :key="project.index" class="card_item">
                <project-item :title="project.title" :description="project.description" :url="project.url" :src="project.image" :techStack="project.techStack"></project-item>
            </div>
        </div>
    </div>
</template>
<script>
import projectItem from './projectItem.vue'
import projectData from './projects'

export default {
  components: { projectItem },

  setup () {
    return {
      projectData
    }
  }

}

</script>

<style scoped>
.cards{
    display: grid;
    grid-template-columns: repeat(3, auto);
    align-items: center;
    justify-items: center;
}
/* Project Tile goes here */
.card_item{
    position: relative;
    width: 350px;
    height: 500px;
    box-shadow: #d11bff42 0 15px 40px -5px;
    border-radius: 21px;
    margin-bottom: 40px;
    text-decoration: none;
};

</style>
