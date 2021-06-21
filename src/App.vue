<template>
  <the-header class="header-nav" :class="stickyNav"></the-header>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
export default {
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  name: "App",
  components: { TheHeader },
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
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
  font-family: "B Yekan+", sans-serif;
  font-weight: 100;
}
html {
  font-size: 62.5%;
}
body {
  box-sizing: border-box;
  height: 200vh;
}
.header-nav {
  position: fixed;
  top: 0;
}
.nav-sticky {
  box-shadow: 0 4px 8px -3px rgba(0, 0, 0, 0.2) !important;
}
</style>
