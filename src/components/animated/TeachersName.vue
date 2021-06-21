<template>
  <div class="teacher-container">
    <div class="name-pic d-flex align-items-center">
      <p class="teacher-name">{{ name }}</p>
      <img :src="img" alt="Teacher pic" class="teacher-pic" />
    </div>
    <main-dividers dir="rtl"></main-dividers>
  </div>
</template>
<script>
import MainDividers from "../utilities/MainDividers.vue";
export default {
  components: { MainDividers },
  props: ["img", "name"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.teacher-container {
  width: 20rem;
}
.teacher-pic {
  width: 6rem;
  margin: 1rem;
}
.teacher-name {
  font-size: 1.3rem;
  font-weight: bold;
}
</style>
