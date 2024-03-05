<template>
  <Front>
  </Front>
  <NavBar></NavBar>
  <About>
    <div v-html="staticHtml"></div>
  </About>
  <Skills></Skills>
  <PlaceHolder>
  </PlaceHolder>
  <TextSection></TextSection>
</template>

<script>
import Front from './components/Front.vue'
import PlaceHolder from './components/Placeholder.vue'
import NavBar from './components/NavBar.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import TextSection from './components/TextSection.vue'
export default {
  data() {
    return {
      staticHtml: ""
    }
  },
  components: {
    Front,
    PlaceHolder,
    NavBar,
    About,
    Skills,
    TextSection,
    TextSection
},
}
</script>

<style scoped>
* {
  margin: 0px;
}
</style>