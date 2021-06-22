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
      <teacher-rated class="teacher-rated"></teacher-rated>
      <session-calendar class="session-calendar"></session-calendar>
      <session-reservation class="session-reservation"></session-reservation>
    </div>
  </div>
</template>

<script>
import TeachersName from "./animated/TeachersName.vue";
import TeacherRated from "./animated/TeacherRated.vue";
import SessionCalendar from "./animated/SessionCalendar.vue";
import SessionReservation from "./animated/SessionReservation.vue";
export default {
  components: {
    TeachersName,
    TeacherRated,
    SessionCalendar,
    SessionReservation,
  },
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
  background: url("../assets/orbit.svg") no-repeat 20rem 10rem;
  position: relative;
}
.teacher-name {
  position: absolute;
  top: 15rem;
  left: 10rem;
  width: 26rem;
  padding: 1rem 2rem 0 2rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.teacher-rated {
  position: absolute;
  top: 8rem;
  right: 0;
}
.session-reservation {
  position: absolute;
  top: 31rem;
  right: -1rem;
}
.session-calendar {
  position: absolute;
  top: 43rem;
}

.teacher-name,
.teacher-rated,
.session-calendar,
.session-reservation {
  filter: blur(0.25rem);
  transition: all 0.4s;
}
.teacher-name:hover,
.teacher-rated:hover,
.session-calendar:hover,
.session-reservation:hover {
  filter: blur(0);
}
</style>
