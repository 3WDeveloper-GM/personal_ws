<template>
   <div>
     <div v-for="field in languageIcons" :key="field.field" @mouseover="showKey(field.field)" @mouseleave="hideKey">
       {{ field.description }}
     </div>
     <div v-if="currentKey !== null">
       Hovered Key: {{ currentKey }}
     </div>
   </div>
 </template>
 
 <script>
 export default {
   data() {
     return {
       languageIcons: [
         { name: "bi bi-gear", field: "devops", description: "DevOps" },
         { name: "bi bi-link", field: "webdev", description: "WebDev" },
         { name: "bi bi-globe", field: "languages", description: "Languages" },
         { name: "bi bi-code", field: "programming", description: "Programming" },
         { name: "bi bi-file-code", field: "markup languages", description: "Miscellaneous" },
       ],
       currentKey: null
     }
   },
   methods: {
     showKey(key) {
       console.log("Hovered key:", key);
       this.currentKey = key;
     },
     hideKey() {
       this.currentKey = null;
     }
   }
 }
 </script>
 