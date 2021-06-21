<template>
  <div class="learning-container d-flex">
    <div class="left-section col-5">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam fuga nam,
      consequuntur sit molestiae enim? Sapiente harum sit officiis distinctio!
    </div>
    <div class="right-section col-7">
      <teachers-name :img="teacher1Pic" :name="teacher1Name"></teachers-name>
    </div>
  </div>
</template>

<script>
import TeachersName from "./animated/TeachersName.vue";
export default {
  components: { TeachersName },
  data() {
    return {
      teacher1Pic: require("../assets/teacher1.png"),
      teacher1Name: "استاد نگین معتضدی",
    };
  },
};
</script>
<style scoped>
.learning-container {
  margin: 4rem;
}
.right-section {
  height: 100vh;
  background: url("../assets/orbit.svg") no-repeat center right;
}
</style>
