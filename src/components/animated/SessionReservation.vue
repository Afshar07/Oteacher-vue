<template>
  <div class="main-container d-flex">
    <img :src="reserveIcon" alt="reservation icon" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      reserveIcon: require("../../assets/reservation.svg"),
    };
  },
};
</script>
