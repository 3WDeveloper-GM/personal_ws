<template>
   <div class="container-center" :class="`${navbarPos.top}`">
      <nav class="navbar navbar-expand-lg navbar-custom p-3" :style="{ opacity: opacityValues }">
         <div class="container-custom">
            <i></i>
            <i v-for="item in navBarCategories">
               <a :href="item.href" class="ibm-plex-mono-light" style="text-decoration: none;" :key="item.uid">{{ item.name }}</a>
            </i>
            <i></i>
         </div>
      </nav>
   </div>
</template>

<script>
export default {
   data() {
      return {
         navBarCategories: [
            { uid: "dfe71bc9-6010-44b1-8ef1-14c7f7a0085d", name: "Home", href:"#front"},
            { uid: "36fcf141-5a21-4ebc-8ca9-d274b7ee6102", name: "About", href:"#about"},
            { uid: "72ca40a5-e239-4b90-97c6-a9193cd2720e", name: "Skills", href:"#skills"},
            { uid: "4375ec20-e7c3-4024-9ae0-3848f641ccbe", name: "Projects", href:"#"},
            { uid: "420b9c5f-944d-4184-89db-d13adf4db428", name: "Contact", href:"#"}
         ],
         opacityValues: 0.6,
         navbarPos: {
            top: ""
         }
      };
   },
   mounted() {
      window.addEventListener('scroll', this.navbarBlur)
      window.addEventListener('scroll', this.navbarPosition)
   },
   unmounted() {
      window.removeEventListener('scroll', this.navbarBlur)
      window.removeEventListener('scroll', this.navbarPosition)
   },
   methods: {
      navbarBlur() {
         const scrollPosition = window.scrollY
         const maxScroll = 1000
         this.opacityValues = (scrollPosition > maxScroll)
            ? 0.8
            : 0.8 * (scrollPosition / maxScroll)
      },
      navbarPosition() {
         const scrollPosition = window.scrollY
         const maxScroll = 700
         this.navbarPos.top = (scrollPosition > maxScroll)
            ? "sticky-top"
            : ""
      }
   }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Rosarivo:ital@0;1&display=swap');

.container-center {
   margin: 0;
   margin-top: 0;
   max-width: 100%;
}

.navbar-custom {
   background-color: #2e3440;
   color: #d8dee9;
   max-width: 100%;
   justify-content: center;
}

.container-custom {
   display: grid;
   grid-template-columns: 2fr 2fr 1fr 2fr 1fr 2fr 2fr;
   column-gap: 50px;
   text-align: center;
   margin-left: 200px;
   margin-right: 200px;
}

.ibm-plex-mono-thin {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 100;
   font-style: normal;
   color: #d8dee9;
}

.ibm-plex mono-thin-italic {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 100;
   font-style: italic;
}

.ibm-plex mono-extralight {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 200;
   font-style: normal;
}

.ibm-plex mono-extralight-italic {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 200;
   font-style: italic;
}

.ibm-plex-mono-light {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 300;
   font-style: normal;
   color: #d8dee9;
}

.ibm-plex mono-light-italic {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 300;
   font-style: italic;
}

.ibm-plex mono-regular {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 400;
   font-style: normal;
}

.ibm-plex mono-regular-italic {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 400;
   font-style: italic;
}

.ibm-plex mono-medium {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 500;
   font-style: normal;
}

.ibm-plex mono-medium-italic {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 500;
   font-style: italic;
}

.ibm-plex mono-semibold {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 600;
   font-style: normal;
}

.ibm-plex mono-semibold-italic {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 600;
   font-style: italic;
}

.ibm-plex mono-bold {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 700;
   font-style: normal;
}

.ibm-plex mono-bold-italic {
   font-family: "IBM Plex Mono", monospace;
   font-weight: 700;
   font-style: italic;
}
</style>