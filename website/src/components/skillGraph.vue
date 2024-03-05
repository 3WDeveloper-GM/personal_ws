<template>
   <div v-show="isElementSelected(keysArray[0])" ref="devops">
      <svg width="1015" height="510" viewBox="0 0 1015 510" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g>
            <rect width="1015" height="510" fill="#2E3440" />
            <g class="content">
               <rect class="fade-in" y="80" width="152.25" height="30" fill="#D8DEE9" />
               <rect class="slide" x="152" y="80" width="671" height="30" fill="url(#paint0_linear_1_2)" />
               <rect class="slide" x="823" y="80" width="192" height="30" fill="#4C566A" />
               <text class="fade-in" id="Github" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="55.9353" y="99.6136">Github</tspan>
               </text class="fade-in">
            </g>
         </g>
         <defs>
            <linearGradient id="paint0_linear_1_2" x1="152" y1="95" x2="823" y2="95" gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
         </defs>
      </svg>
   </div>

   <div v-show="isElementSelected(keysArray[1])" ref="webdev">
      <svg width="1015" height="510" viewBox="0 0 1015 510" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g>
            <rect width="1015" height="510" fill="#2E3440" />
            <g class="content">
               <rect class="fade-in" y="190" width="152.25" height="30" fill="#D8DEE9" />
               <rect class="slide" x="152" y="190" width="505" height="30" fill="url(#paint2_linear_1_2)" />
               <rect class="slide" x="657" y="190" width="358" height="30" fill="#4C566A" />
               <text class="fade-in" id="VueJS" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="56.9698" y="209.614">VueJS</tspan>
               </text class="fade-in">
            </g>
            <g class="content">
               <rect class="fade-in" y="135" width="152.25" height="30" fill="#D8DEE9" />
               <rect class="slide" x="152" y="135" width="601" height="30" fill="url(#paint2_linear_1_2)" />
               <rect class="slide" x="753" y="135" width="262" height="30" fill="#4C566A" />
               <text class="fade-in" id="HTML" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="58.1469" y="154.614">HTML</tspan>
               </text class="fade-in">
            </g>
            <g class="content">
               <rect class="fade-in" y="80" width="152.25" height="30" fill="#D8DEE9" />
               <rect class="slide" x="152" y="80" width="561" height="30" fill="url(#paint3_linear_1_2)" />
               <rect class="slide" x="713" y="80" width="302" height="30" fill="#4C566A" />
               <text class="fade-in" id="CSS" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="63.2939" y="99.6136">CSS</tspan>
               </text class="fade-in">
            </g>
         </g>
         <defs>
            <linearGradient id="paint1_linear_1_2" x1="152" y1="205" x2="657" y2="205" gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paint2_linear_1_2" x1="152" y1="150" x2="753" y2="150" gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paint3_linear_1_2" x1="152" y1="95" x2="713" y2="95" gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
         </defs>
      </svg>
   </div>

   <div v-show="isElementSelected(keysArray[2])" ref="languages">
      <svg width="1015" height="510" viewBox="0 0 1015 510" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g>
            <rect width="1015" height="510" fill="#2E3440" />
            <g class="content">
               <rect class="fade-in" y="80" width="152.25" height="30" fill="#D8DEE9" />
               <rect class="slide" x="152" y="80" width="671" height="30" fill="url(#paint4_linear_1_2)" />
               <rect class="slide" x="823" y="80" width="192" height="30" fill="#4C566A" />
               <text class="fade-in" id="English" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="54.6839" y="99.6136">English</tspan>
               </text class="fade-in">
            </g>
            <g class="content">
               <rect class="fade-in" y="135" width="152.25" height="29.9208" fill="#D8DEE9" />
               <rect class="slide" x="152" y="135" width="777" height="30" fill="url(#paint5_linear_1_2)" />
               <rect class="slide" x="929" y="135" width="86" height="30" fill="#4C566A" />
               <text class="fade-in" id="Spanish" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="52.3607" y="154.574">Spanish</tspan>
               </text class="fade-in">
            </g>
         </g>
         <defs>
            <linearGradient id="paint4_linear_1_2" x1="152" y1="95" x2="823" y2="95" gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paint5_linear_1_2" x1="152" y1="150" x2="929" y2="150" gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
         </defs>
      </svg>
   </div>

   <div v-show="isElementSelected(keysArray[3])" ref="programming">
      <svg width="1015" height="510" viewBox="0 0 1015 510" fill="none" xmlns="http://www.w3.org/2000/svg">
         <rect width="1015" height="510" fill="#2E3440" />
         <g class="content">
            <rect class="fade-in" y="80" width="152.25" height="30" fill="#D8DEE9" />
            <rect class="slide" x="152.25" y="80" width="776.757" height="30" fill="url(#paint6_linear_1_2)" />
            <rect class="slide" x="929" y="80" width="86" height="30" fill="#4C566A" />
            <text class="fade-in" fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter"
               font-size="12.6875" letter-spacing="0em">
               <tspan x="8.77841" y="99.6136"> Wolfram Mathematica</tspan>
            </text>
         </g>
         <g class="content">
            <rect class="fade-in" y="135" width="152.25" height="29.9208" fill="#D8DEE9" />
            <rect class="slide" x="152.25" y="135.237" width="731.444" height="29.7625"
               fill="url(#paint7_linear_1_2)" />
            <rect class="slide" x="884" y="135" width="131" height="30" fill="#4C566A" />
            <text class="fade-in" fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter"
               font-size="12.6875" letter-spacing="0em">
               <tspan x="54.9441" y="154.574">Python</tspan>
            </text>
         </g>
         <g class="content">
            <rect class="fade-in" y="190.234" width="152.25" height="29.5312" fill="#D8DEE9" />
            <rect class="slide" x="152.25" y="190" width="703.25" height="30" fill="url(#paint8_linear_1_2)" />
            <rect class="slide" x="856" y="190" width="159" height="30" fill="#4C566A" />
            <text class="fade-in" fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter"
               font-size="12.6875" letter-spacing="0em">
               <tspan x="67.6254" y="209.614">Go</tspan>
            </text>
         </g>
         <g class="content">
            <rect class="fade-in" y="245" width="152.25" height="30" fill="#D8DEE9" />
            <rect class="slide" x="152.25" y="245" width="603.361" height="30" fill="url(#paint9_linear_1_2)" />
            <rect class="slide" x="756" y="245" width="259" height="30" fill="#4C566A" />
            <text class="fade-in" fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter"
               font-size="12.6875" letter-spacing="0em">
               <tspan x="45.3355" y="264.614">Javascript</tspan>
            </text>
         </g>
         <g class="content">
            <rect class="fade-in" y="300" width="152.25" height="30" fill="#D8DEE9" />
            <rect class="slide" x="152.25" y="300" width="647.062" height="30" fill="url(#paint10_linear_1_2)" />
            <rect class="slide" x="799" y="300" width="216" height="30" fill="#4C566A" />
            <text class="fade-in" fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter"
               font-size="12.6875" letter-spacing="0em">
               <tspan x="72.0672" y="319.614">R</tspan>
            </text>
         </g>
         <g class="content">
            <rect class="fade-in" y="355" width="152.25" height="30" fill="#D8DEE9" />
            <rect class="slide" x="152.25" y="355" width="776.757" height="30" fill="url(#paint11_linear_1_2)" />
            <rect class="slide" x="929" y="355" width="86" height="30" fill="#4C566A" />
            <text class="fade-in" fill="black" xml:space="preserve" style="white-space: pre" font-family="Inter"
               font-size="12.6875" letter-spacing="0em">
               <tspan x="50.3907" y="374.614">MATLAB</tspan>
            </text>
         </g>
         <defs>
            <linearGradient id="paint6_linear_1_2" x1="152.25" y1="95" x2="929.007" y2="95"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paint7_linear_1_2" x1="152.25" y1="150.119" x2="883.694" y2="150.119"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paint8_linear_1_2" x1="152.25" y1="205" x2="855.5" y2="205"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paint9_linear_1_2" x1="152.25" y1="260" x2="755.611" y2="260"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paint10_linear_1_2" x1="152.25" y1="315" x2="799.312" y2="315"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paint11_linear_1_2" x1="152.25" y1="370" x2="929.007" y2="370"
               gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
         </defs>
      </svg>

   </div>

   <div v-show="isElementSelected(keysArray[4])" ref="miscellaneous">
      <svg width="1015" height="510" viewBox="0 0 1015 510" fill="none" xmlns="http://www.w3.org/2000/svg">
         <g>
            <rect width="1015" height="510" fill="#2E3440" />
            <g class="content">
               <rect class="fade-in" y="245" width="152.25" height="30" fill="#D8DEE9" />
               <rect class="slide" x="152" y="245" width="731" height="30" fill="url(#paint12_linear_1_2)" />
               <rect class="slide" x="883" y="245" width="132" height="30" fill="#4C566A" />
               <text class="fade-in" id="Office Suite" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="40.874" y="264.614">Office Suite</tspan>
               </text class="fade-in">
            </g>
            <g class="content">
               <rect class="fade-in" y="190" width="152.25" height="30" fill="#D8DEE9" />
               <rect class="slide" x="152" y="190" width="700" height="30" fill="url(#paint13_linear_1_2)" />
               <rect class="slide" x="852" y="190" width="163" height="30" fill="#4C566A" />
               <text class="fade-in" id="Matplolib" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="48.495" y="209.614">Matplolib</tspan>
               </text class="fade-in">
            </g>
            <g class="content">
               <rect class="fade-in" y="135" width="152.25" height="30" fill="#D8DEE9" />
               <rect class="slide" x="152" y="135" width="744" height="30" fill="url(#paint14_linear_1_2)" />
               <rect class="slide" x="896" y="135" width="119" height="30" fill="#4C566A" />
               <text class="fade-in" id="Markdown" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="44.7656" y="154.614">Markdown</tspan>
               </text class="fade-in">
            </g>
            <g class="content">
               <rect class="fade-in" y="80" width="152.25" height="30" fill="#D8DEE9" />
               <rect class="slide" x="152" y="80" width="797" height="30" fill="url(#paint15_linear_1_2)" />
               <rect class="slide" x="949" y="80" width="66" height="30" fill="#4C566A" />
               <text class="fade-in" id="LaTeX" fill="black" xml:space="preserve" style="white-space: pre"
                  font-family="Inter" font-size="12.6875" letter-spacing="0em">
                  <tspan x="57.8175" y="99.6136">LaTeX</tspan>
               </text class="fade-in">
            </g>
         </g>
         <defs>
            <linearGradient id="paint12_linear_1_2" x1="152" y1="260" x2="883" y2="260" gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paint13_linear_1_2" x1="152" y1="205" x2="852" y2="205" gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paint14_linear_1_2" x1="152" y1="150" x2="896" y2="150" gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
            <linearGradient id="paint15_linear_1_2" x1="152" y1="95" x2="949" y2="95" gradientUnits="userSpaceOnUse">
               <stop stop-color="#5E81AC" />
               <stop offset="0.502468" stop-color="#81A1C1" />
               <stop offset="1" stop-color="#88C0D0" />
            </linearGradient>
         </defs>
      </svg>
   </div>
</template>

<script>

import { setDelayTimes } from '@/scripts/utils';

export default {
   props: {
      display: {
         type: Object,
      }
   },
   mounted() {

      this.setFocusedIndex(this.display.currentIndex)
      this.keySwap(this.display.currentIndex)

      this.namesArray = this.getReferences()
      this.getElementsArray()

      this.addDelayTimes()

   }
   ,
   data() {
      return {
         elementsArray: null,
         focusedIndex: null,
         keysArray: [0, 1, 2, 3, 4],
         namesArray: null
      }
   },
   methods: {
      getElementsArray() {
         let index = this.focusedIndex
         let elementsArray = this.namesArray[index].getElementsByClassName("content")
         this.elementsArray = elementsArray
      },
      addDelayTimes() {
         let offset = 500
         let delayStep = 500
         let elementNumber = this.elementsArray.length
         for (let index = 1; index <= elementNumber; index++) {
            let newOffset = setDelayTimes(this.elementsArray[elementNumber - index].children, delayStep, offset)
            offset = newOffset
         }
      },
      setFocusedIndex(index) {
         this.focusedIndex = index
      },
      isElementSelected(key) {
         return key === 0
      },
      keySwap(offset) {
         let skillsAmount = 5
         for (let index = 0; index < skillsAmount; index++) {
            this.keysArray[index] = (((index - offset) % skillsAmount) + skillsAmount) % skillsAmount
         }
      },
      getReferences() {
         return [
            this.$refs.devops,
            this.$refs.webdev,
            this.$refs.languages,
            this.$refs.programming,
            this.$refs.miscellaneous,
         ]
      },
      setClassSlider(key) {
         return (this.isElementSelected(key))
            ? 'slide'
            : ''
      },
      setClassFade(key) {
         return (this.isElementSelected(key))
            ? 'fade-in'
            : ''
      }
   }
}
</script>

<style lang="scss" scoped>
svg {
   display: block;
   font-family: initial;
}

.slide {
   width: 0;
   animation-name: slide;
   animation-duration: 3s;
   animation-iteration-count: 1;
   animation-fill-mode: forwards;
   animation-delay: 5s;
}

@keyframes slide {
   from {
      display: block;
      width: 0%;
   }

   to {
      width: 100%;
   }
}

.fade-in {
   opacity: 0;
   animation: fade-slide-down;
   animation-duration: 3s;
   animation-timing-function: ease-in-out;
   animation-fill-mode: forwards;
   animation-delay: 5s;
}

.fade-in:hover {
   filter: brightness(150%);
   font-weight: 400;
}

@keyframes fade-slide-down {
   from {
      opacity: 0;
      transform: translateY(-20px);
   }

   to {
      opacity: 1;
      transform: translateY(0px);
   }
}
</style>