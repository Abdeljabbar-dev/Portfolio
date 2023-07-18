<template>
  <div class="wrapper">
    <article class="article-home">
          <img class="profile_image" src="../../assets/profile.png" alt="">
          <p> Hi 👋,<br>
              My name is
              <strong class="mayName"> Abdeljabbar JADDI </strong><br>
              I build things for Web and Mobile in a sophisticated way.
          </p>
      </article>
  </div>

</template>

<script>
export default {
  setup () {
    return {}
  }
}
</script>

<style scoped>

.profile_image{
  width: 250px;
  height: 250px;
  border: double 5px transparent;
  border-radius: 50%;
  background-image: linear-gradient(white, white), radial-gradient(circle at bottom,#00C0FD, #E70FAA);
  background-origin: border-box;
  background-clip: content-box, border-box;
  display: inline-block;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.mayName{
  background: linear-gradient(to right, #00C0FD 0%, #E70FAA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.article-home{
  display: grid;
  grid-auto-flow: column;
  /* gap: 300px; */
  font-size: x-large;
  font-weight: 100%;
  align-items: center;
  justify-items: center;
}

p{
  text-align: left;
  font-size: 30px;
}

</style>
