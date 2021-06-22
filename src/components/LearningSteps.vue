<template>
  <div class="learning-container d-flex">
    <div class="left-section col-md-5 col-sm-12">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam fuga nam,
      consequuntur sit molestiae enim? Sapiente harum sit officiis distinctio!
    </div>
    <div class="right-section col-md-7">
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
      removeBlur: false,
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
  animation: left-right 6s ease infinite, removeBlur 18s ease 3s infinite;
}
.teacher-rated {
  position: absolute;
  top: 8rem;
  right: 0;
  animation: up-down 8s ease infinite, removeBlur 10s ease 5s infinite;
}
.session-reservation {
  position: absolute;
  top: 31rem;
  right: -1rem;
  animation: right-left 6s ease infinite, removeBlur 13s ease infinite;
}
.session-calendar {
  position: absolute;
  top: 43rem;
  left: 4rem;
  animation: left-right 6s ease infinite, removeBlur 15s ease 7s infinite;
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
@keyframes up-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3rem);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes left-right {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-3rem);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes right-left {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5rem);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes removeBlur {
  0% {
    filter: blur(0.25rem);
  }
  20% {
    filter: blur(0);
  }
  40% {
    filter: blur(0);
  }
  60% {
    filter: blur(0.25rem);
  }
  80% {
    filter: blur(0.25rem);
  }
  100% {
    filter: blur(0.25rem);
  }
}
</style>
