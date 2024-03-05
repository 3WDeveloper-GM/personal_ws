<template>
   <SectionHeader href="skills" title="skills" color="#d8dee9" barcolor="#4c566a"></SectionHeader>
   <div class="section-wrapper">
      <i></i>
      <i>
         <div class="inter-text-sections text-sections-bg-dark text-sections-bg-dark-ending">
            In the classic sense, I think that most of my skills come from the things that interest me.
            Following from the previous point, I do think that in this day and age, most, if not all of
            the new discoveries and techniques discovered in science and technology go hand in hand with
            the advent of computers. That's why they interested me in the first place. You can build all
            your wildest dreams with them.
         </div>
      </i>
      <i></i>
   </div>
   <div class="skills-wrapper">
      <i></i>
      <i>
         <div class="container-custom">
            <i>
               <div class="language-list">
                  <i v-for="(field, index) in languageIcons" :key="index" @mouseover="onHover(index)"
                     @mouseleave="offHover(index)">
                     <h6 v-show="field.isHovered || pressedIndex(index)" :class="setClassName(pressedIndex(index))"
                        @click="IsButtonPressed(index)">
                        {{ "< " + field.field + ' /> ' }}
                     </h6>
                     <h6 v-show="!(field.isHovered || pressedIndex(index))"
                           :class="setClassName(pressedIndex(index))">
                           {{ field.field }}
                     </h6>
                  </i>
               </div>
            </i>
            <div class="logo-container">
               <i></i>
               <i>
                  <h1 v-show="currentIcon.isHovered" :class="`${currentIcon.class}`" ref="iconCard"
                     :style="{ opacity: currentIcon.opacity, filter: 'blur(' + currentIcon.blur + 'px)' }">
                  </h1>
               </i>
               <i></i>
            </div>
            <i>
               <div>
                  <skillGraph :display="iconPass" :key="iconPass.currentIndex"></skillGraph>
               </div>
            </i>
         </div>
      </i>
      <i></i>
   </div>
   <div style="margin-bottom: 100px; height: 100px;"> <span></span></div>
</template>

<script>
import skillGraph from './skillGraph.vue';
import SectionHeader from './SectionHeader.vue';
import { unBlurIterative, BlurIterative } from '@/scripts/utils';
import SkillGraph from './skillGraph.vue';
export default {
   components: {
      SectionHeader,
      skillGraph,
      SkillGraph
   },
   data() {
      return {
         languageIcons: [
            { field: "DevOps", isHovered: false },
            { field: "WebWev", isHovered: false },
            { field: "Languages", isHovered: false },
            { field: "Programming", isHovered: false },
            { field: "Miscellaneous", isHovered: false },
         ],
         iconsArray: [
            "bi bi-box-seam",
            "bi bi-browser-firefox",
            "bi bi-translate",
            "bi bi-braces",
            "bi bi-puzzle"
         ],
         currentIcon: {
            currentIndex: null,
            isPressed: false,
            isHovered: false,
            isBlurOn: false,
            isBlurOff: true,
            class: "",
            opacity: 0.2,
            blur: 20
         },
         iconPass: {
            currentIndex: 0
         }
      }
   },
   mounted() {
   },
   methods: {
      onHover(key) {
         this.addCodingStyle(key)
         this.currentIcon.isHovered = true

         this.currentIcon.isBlurOn = true
         this.currentIcon.isBlurOff = false

         this.unBlurIcon()
      },
      offHover(key) {
         this.removeCodingStyle(key)

         this.currentIcon.isHovered = false

         this.currentIcon.isBlurOn = false
         this.currentIcon.isBlurOff = true

         this.BlurIcon()
      },
      addCodingStyle(key) {
         this.languageIcons[key].isHovered = true
         this.currentIcon.class = this.iconsArray[key]
      },
      removeCodingStyle(key) {
         this.languageIcons[key].isHovered = false
         this.currentIcon.class = ""
      },
      unBlurIcon() {
         let timeStep = 50
         let iterations = 15
         unBlurIterative(this.currentIcon, timeStep, iterations)
      },
      BlurIcon() {
         let timeStep = 10
         let iterations = 40
         BlurIterative(this.currentIcon, timeStep, iterations)
      },
      IsButtonPressed(index) {
         this.currentIcon.isPressed = !this.currentIcon.isPressed
         this.currentIcon.currentIndex = index
         this.iconPass.currentIndex = index
      },
      pressedIndex(key) {
         return this.currentIcon.currentIndex === key
      },
      setClassName(isActive) {
         return (isActive)
            ? 'saira-condensed skills-section skills-section-active'
            : 'saira-condensed skills-section'
      }
   }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('./styles.css');

* {
   background-color: #2e3440;
}

.underline {
   color: #d8dee9;
   border-bottom: 3px solid #4c566a;
}



.section-wrapper {
   display: grid;
   grid-template-columns: 1fr 1.5fr 1fr;
}

@media (max-width: 1300px) {
   .section-wrapper {
      grid-template-columns: 1fr 3fr 1fr;
   }
}

.skills-wrapper {
   display: grid;
   grid-template-columns: 1fr 6.25fr 1fr;
   grid-template-rows: 510px;
   align-items: center;
}

@media (max-width: 1300px) {
   .skills-wrapper {
      grid-template-columns: 1fr 6.25fr 1fr;
   }
}

.logo-container {
   display: grid;
   grid-template-rows: 1fr 1fr 1fr;
   color: #4c566a;
}

.container-custom {
   margin: 20px;
   display: grid;
   grid-template-columns: 2fr 1fr 6fr;
   row-gap: 1fr;
   align-items: center;
}

.text-sections-bg-dark {
   color: #eceff4;
   padding: 10px;
   text-align: justify;
   transition: transform 1s ease-out;
}

.text-sections-bg-dark-ending {
   margin-bottom: 5px;
}

.miniheader-section {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 200;
   font-style: normal;
   color: #eceff4;
   text-align: center;
   margin-bottom: 50px;
}

.skills-section {
   font-weight: 200;
   font-size: 21px;
   color: #eceff4;
   text-align: center;
}

.skills-section:hover {
   font-weight: 500;
   color: #d8dee9;
}

.skills-section-active {
   font-weight: 500;
   color: #d8dee9;
}

.text-section-nm {
   margin-top: 2px;
}

.text-sections-bg-dark:hover {
   transform: scale(1.05);
   transition: transform .4s ease-out;
}

.language-list {
   display: grid;
   grid-template-rows: repeat(5, 1fr);
   row-gap: 20px;
   align-items: center;
   text-align: center;
}
</style>