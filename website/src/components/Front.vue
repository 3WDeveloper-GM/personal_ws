<template>
   <div class="container-basic" :style="{ opacity: blurValues.opacity, filter: 'blur(' + blurValues.blur + 'px)' }"
      id="front">
      <div class="basic-grid">
         <i></i>
         <i></i>
         <i></i>
         <i></i>
         <i>
            <TypingText></TypingText>
         </i>
         <i></i>
      </div>

      <div class="more-grid">
         <i></i>
         <i>
            <a href="#about" class="hello-world hello-world-href">
               <h6 class="hello-world blinking" style="margin-bottom: 0px;">more</h6>
               <h6 style="margin-top: 0;"><i class="hello-world bi bi-chevron-down blinking"></i></h6>
            </a>
         </i>
         <i></i>
      </div>
   </div>
</template>

<script>

import TypingText from "./TypingText.vue";
import * as utils from "../scripts/utils"

export default {
   components: {
      TypingText,
   },
   data() {
      return {
         blurValues: {
            opacity: 0.5, // Initial opacity value
            blur: 20,
         },
      };
   },
   mounted() {
      if (typeof window !== 'undefined') {
         window.addEventListener('load', this.handleSplashAnimation, { once: true })
         window.addEventListener('scroll', this.handleScroll);
      }
   },
   beforeUnmount() {
      if (typeof window !== 'undefined') {
         window.removeEventListener('scroll', this.handleScroll);
      }
   },
   methods: {
      handleScroll() {
         if (typeof window !== 'undefined') {
            // Calculate the opacity based on scroll position
            const scrollPosition = window.scrollY;
            const maxScroll = 700; // Adjust this value according to your needs
            this.blurValues.opacity = (scrollPosition < maxScroll)
               ? 1 - (scrollPosition / maxScroll)
               : 0

            this.blurValues.blur = (scrollPosition > maxScroll)
               ? 20
               : Math.floor(20 * (scrollPosition / maxScroll))
         }
      },
      handleSplashAnimation() {
         utils.unBlur(this.blurValues, 75)
      }
   }
};
</script>

<style lang="scss"  scoped>
@import url('https://fonts.googleapis.com/css2?family=Rosarivo:ital@0;1&display=swap');

.container-basic {
   display: grid;
   grid-template-rows: 90vh 10vh;
   background-image: url("../assets/img/stefan-cosma-mKUf-oI125g-unsplash.jpg");
   background-size: cover;
   background-repeat: no-repeat;
   height: 100vh;
   width: 100%;
   object-fit: cover;
   transition: opacity 0.3s ease;
}

.hello-world {

   font-family: "Rosarivo", cursive;
   font-weight: 400;
   font-style: normal;
   color: white;
}

.hello-world-href {
   text-decoration: none;
}

.basic-grid {
   display: grid;
   grid-template-columns: 7fr 2fr 1fr;
   grid-template-rows: 280px 300px;
   align-items: center;
   text-align: center;
}

.more-grid {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr;
   grid-template-rows: 100px;
   align-items: center;
   vertical-align: bottom;
   text-align: center;
}

.blinking {
   animation: blink 2s linear infinite;
}

@keyframes blink {

   0%,
   100% {
      opacity: 1;
   }

   50% {
      opacity: 0;
   }

}
</style>