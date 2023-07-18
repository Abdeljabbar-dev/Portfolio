<template>
    <div class="wrapper">
      <section>
        <h1>Contact</h1>
          <p>Whether you have a question, feedback, or a business inquiry, I would love to hear from you!</p>
      </section>
      <section class="contact">
        <!-- <div class="contact_element">
          <h3> Email</h3>
          <p>Send me an email at</p>
          <a class="conatct_element_item" href="mailto:jaddiabdeljabbar@gmail.com?subject = Feedback&body = Message" target="_blank">Jaddi.abdeljabbar@gmail.com</a>
        </div> -->
        <contact-element :href="'mailto:jaddiabdeljabbar@gmail.com?subject = Feedback&body = Message'" :contact_social="'Jaddi.abdeljabbar@gmail.com'" :contact_title="'Email'" :contact_descriptif="'Send me an email at'"></contact-element>
        <contact-element :href="'https://www.instagram.com/abdeljabbar_jaddi/'" :contact_social="'Instagram'" :contact_title="'Socials'" :contact_descriptif="'Follow me for updates or DM me!'"> <a href="https://twitter.com/Abdeljabbar_JAD" class="conatct_element_item">Twitter</a> </contact-element>
        <contact-element :href="'https://www.instagram.com/abdeljabbar_jaddi/'" :contact_social="'Calendly'" :contact_title="'Call'" :contact_descriptif="`Let's chat! Book a call with me`"></contact-element>
        <!-- <div class="contact_element">
          <h3>Socials</h3>
          <p>Follow me for updates or DM me!</p>
          <a class="conatct_element_item" href="https://www.instagram.com/abdeljabbar_jaddi/" target="_blank">Instagram</a> <a class="conatct_element_item" href="https://twitter.com/Abdeljabbar_JAD">Twitter</a>
        </div> -->
        <!-- <div class="contact_element">
          <h3>Call</h3>
          <p>Let's chat! Book a call with me</p>
          <a class="conatct_element_item" href="https://calendly.com/ajaddi" target="_blank">Calendly</a>
        </div> -->
      </section>
      </div>
</template>

<script>
import contactElement from './contactElement.vue'
export default {
  components: { contactElement },
  setup () {
    return {}
  }
}
</script>

<style scoped>

.wrrapper{
  display: grid;
  grid-auto-flow: column;
  gap: 4px;
  align-items: center;
  justify-items: center;
}

.contact{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 4rem;
  text-align: left;
}

section{
  margin: 50px;
}
</style>
