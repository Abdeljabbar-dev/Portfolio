<template>
    <div class="contact_element">
        <h3> {{ contact_title }}</h3>
        <p>{{contact_descriptif}}</p>
        <a class="conatct_element_item" :href="href" target="_blank">{{ contact_social }}</a>
        <slot style="margin-left: "></slot>
    </div>
</template>

<script>
export default {
  props: {
    contact_title: String,
    contact_descriptif: String,
    contact_social: String,
    href: String
  }
}
</script>

<style scoped>
.contact_element{
    border-top-width: 4px;
    border-top-style: solid;
    border-image: linear-gradient(to right, #00C0FD 0%, #E70FAA 100%) 1;
    width: 330px;
  }

</style>
<style>

.conatct_element_item{
  font-size: large;
  font-weight: bold;
  color: #0e99c4;
  margin-right: 10px;
}
</style>
