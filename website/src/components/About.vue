<template>
   <SectionHeader href="about" title="about"></SectionHeader>

   <div class="section-wrapper">
      <i></i>
      <i>
         <div class="container-custom">
            <i>
               <div class="inter-text-sections text-sections-bg-light">
                  Hi there! My name is Gabriel López. Based on Latin America, particularly in Honduras, I'm a recent
                  electrical engineering and physics graduate from the <strong> Universidad Nacional Autónoma de
                     Honduras</strong>, currently working on research that explores the frontier between physics and
                  computing. Due to this fact alone, I can safely attest that I'm passionate about exploring new
                  technologies
                  and science related topics.
               </div>

               <div class="inter-text-sections text-sections-bg-light text-section-bg-light-et ">
                  Aside from my academic background, I'm quite the cinephile, and I've been this way since I entered
                  college
                  due
                  to film recommendations by some of my colleages. My favorite directors are: <em>Nicholas Winding Refn,
                     Bong
                     Joon-ho, Park Chan-wook and Ingmar Bergman.</em> I am also fond of music and literature, particularly
                  the
                  latter, with philosophy being one of my favorite genres, although I must admit that most of their ideas
                  pose
                  a challenge to understand at times.
               </div>
            </i>
            <i>
               <div class="about-links">
                  <div>
                     <a href="https://github.com/3WDeveloper-GM" class="h3">
                        <i class="bi bi-github"></i>
                     </a>
                  </div>
                  <div>
                     <a href="https://www.linkedin.com/in/3wgm/" class="h3">
                        <i class="bi bi-linkedin"></i>
                     </a>
                  </div>
                  <div>
                     <a href="mailto:glopezmad@gmail.com" class="h3">
                        <i class="bi bi-envelope"></i>
                     </a>
                  </div>
               </div>
            </i>
         </div>
      </i>
      <i></i>
   </div>
   <slot>
      no content
   </slot>
</template>

<script>
import SectionHeader from './SectionHeader.vue';
import TextSection from './TextSection.vue';
export default {
   components: {
      TextSection,
      SectionHeader
   },
   data() {
      return {
         aboutSectionText: {
            text: `Hello, my name is <em> Gabriel López </em> `
         },
      }
   },

}
</script>

<style lang="scss" scoped>


@import url("./styles.css");
.section-wrapper {
   display: grid;
   grid-template-columns: 1fr 1.5fr 1fr;
}

@media (max-width: 1300px) {
   .section-wrapper {
      grid-template-columns: 1fr 2fr 1fr;
   }
}

.container-custom {
   display: grid;
   grid-template-columns: 7fr 1fr;
   column-gap: 1fr;
   align-items: center;
}

.text-sections-bg-light {
   font-weight: 200;
   color: #2e3440;
   padding: 10px;
   text-align: justify;
   transition: transform 1s ease-out;
}

.text-section-bg-light-et {
   margin-top: 2px;
   margin-bottom: 100px;
}

.text-sections-bg-light:hover {
   transform: scale(1.05);
   transition: transform .4s ease-in-out;
}



.about-links {
   margin-top: auto;
   display: grid;
   grid-template-rows: 2fr 1fr 2fr;
   margin-bottom: auto;
   align-items: center;
   padding: 10px;
   grid-row: auto;
   transition: transform 1s ease-out;
   text-align: center;
}

.about-links:hover {
   transform: scale(1.2);
   transition: transform .4s ease-out;
}
</style>