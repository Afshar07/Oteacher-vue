<template>
  <the-header class="header-nav" :class="stickyNav"></the-header>
  <oteacher-intro></oteacher-intro>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import OteacherIntro from "./components/OteacherIntro.vue";
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  name: "App",
  components: { TheHeader, OteacherIntro },
  data() {
    return {
      isSticky: false,
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 10) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  computed: {
    stickyNav() {
      return this.isSticky ? "nav-sticky" : "";
    },
  },
};
</script>

<style>
@import url(//db.onlinewebfonts.com/c/2789580ebf164367a902a50203debe13?family=B+Yekan+);
@font-face {
  font-family: iranyekan;
  font-style: normal;
  font-weight: normal;
  src: url("./assets/fonts/IranYekan/eot/IRANYekanWebRegular.eot");
  src: url("./assets/fonts/IranYekan/eot/IRANYekanWebRegular.eot?#iefix")
      format("embedded-opentype"),
    url("./assets/fonts/IranYekan/woff/IRANYekanWebRegular.woff") format("woff"),
    url("./assets/fonts/IranYekan/woff2/IRANYekanWebRegular.woff2")
      format("woff2"),
    url("./assets/fonts/IranYekan/ttf/IRANYekanWebRegular.ttf")
      format("truetype");
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: "iranyekan", sans-serif;
  font-weight: 100;
}
html {
  font-size: 62.5%;
}
body {
  box-sizing: border-box;
  height: 100%;
}
.header-nav {
  /* position: sticky; */
  /* top: 5px;   */
  margin-bottom: 10rem;
  background-color: #fff;
}
.nav-sticky {
  position: sticky;
  top: 0;
  box-shadow: 0 0.1rem 0.8rem rgb(95, 175, 238, 0.1);
}
</style>
