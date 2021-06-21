<template>
  <div class="learning-container d-flex">
    <div class="left-section col-5">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam fuga nam,
      consequuntur sit molestiae enim? Sapiente harum sit officiis distinctio!
    </div>
    <div class="right-section col-7">
      <div class="teacher-name">
        <teachers-name :img="teacher1Pic" :name="teacher1Name"></teachers-name>
        <teachers-name :img="teacher2Pic" :name="teacher2Name"></teachers-name>
      </div>
      <teacher-rated></teacher-rated>
      <session-calendar></session-calendar>
    </div>
  </div>
</template>

<script>
import TeachersName from "./animated/TeachersName.vue";
import TeacherRated from "./animated/TeacherRated.vue";
import SessionCalendar from "./animated/SessionCalendar.vue";
export default {
  components: { TeachersName, TeacherRated, SessionCalendar },
  data() {
    return {
      teacher1Pic: require("../assets/teacher1.png"),
      teacher2Pic: require("../assets/teacher2.png"),
      teacher1Name: "استاد نگین معتضدی",
      teacher2Name: "استاد محمد عمرانی",
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
.teacher-name {
  width: 26rem;
  padding: 1rem 2rem 0 2rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
</style>
