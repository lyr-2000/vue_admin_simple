<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
   <router-view />
<!--   <home> </home>-->
</template>
<script lang="ts">
  import {Options, Vue} from "vue-class-component";
  // import Home from "@/views/Home.vue";
  // import Home from "@/views/Home.vue";

  @Options({
      components:{

      }

  })
  export default class App extends Vue {


  }
</script>
<style lang="scss">

</style>
