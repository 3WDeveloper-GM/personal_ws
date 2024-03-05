<template>
   <div :id="href" class="header-custom">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i>
         <h2 class="ibm-plex-mono-bold" :style="{ color: color, textDecoration: decoration }" style="margin-bottom: 0;">
            {{ title }}
         </h2>
         <div class="underline ibm-plex-mono-bold" :style="{borderTop: `${borderProps.size} ${borderProps.style} ${barcolor}`}"></div>
      </i>
      <i></i>
   </div>
</template>

<script>
export default {
   data() {
      return {
         borderProps: {
            size: "3px",
            style: "solid"
         }
      }
   } ,
   props: {
      title: {
         type: String,
         default: "my_title",
      },
      decoration: {
         type: String,
         default: "none"
      },
      color: {
         type: String,
         default: "#4c566a"
      },
      href: {
         type: String,
         default: ""
      },
      barcolor: {
         type: String,
         default: "#d8dee9"
      }
   }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Rosarivo:ital@0;1&display=swap');

.underline {
   color: #d8dee9;
   border-top: 3px solid #d8dee9;
}

.ibm-plex-mono-bold {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 400;
   font-style: normal;
}

.header-custom {
   display: grid;
   grid-template-columns: 2fr 1fr 2fr;
   grid-template-rows: 200px 100px;
   text-align: center;
   align-items: center;
}
</style>