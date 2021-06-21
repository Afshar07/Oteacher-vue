<template>
  <div class="country-container d-flex flex-column align-items-center" dir="rtl">
    <img :src="flagImg" alt="" class="country-flag" />
    <p class="country-name">{{ name }}</p>
  </div>
</template>
<script>
export default {
  props: ["flag", "name"],
  data() {
    return {
      flagImg: require(`../assets/flags/${this.flag}`),
    };
  },
};
</script>
<style scoped>
.country-container {
  margin-left: 4rem;
  width: 10rem;
  border-radius: 10px;
  transition: all 0.3s;
}
.country-container:hover {
  box-shadow: 0px 2px 10px 2px rgb(95, 175, 238, 0.1);
}
.country-flag {
  width: 4rem;
  margin-top: 2rem;
}
.country-name {
  margin-top: 1rem;
  font-size: 1.3rem;
}
</style>
