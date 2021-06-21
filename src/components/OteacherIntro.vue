<template>
  <section class="main-container d-flex">
    <div class="right-section col-6">
      <h1 class="heading-primary">
        آموزش آنلاین زبان در اُتیچر
        <br />

        <mark class="highlighted">
          همیشه و همه‌جا،
        </mark>
         با استادی که دوست داری
      </h1>
      <div class="description">
        <p class="description-text">
          همسوترین استاد با اهداف و نیازهایت را از بین صدها استاد ارزیابی‌شده،
          انتخاب کن و در زمان‌های دلخواه، در کلاس زبان آنلاین شرکت کن
        </p>
      </div>
    </div>
    <div class="left-section col-6">
      <img :src="introImg" alt="" class="main-img" />
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      introImg: require("../assets/mainintro.webp"),
    };
  },
};
</script>
<style scoped>
* {
  margin-left: 1rem;
  direction: rtl;
}
.main-container {
  margin: 3rem;
}
.heading-primary {
  margin-bottom: 3rem;
}
.highlighted {
  padding-bottom: 1.7rem;
  background-color: transparent;
  background-image: url("../assets/text-marker.svg");
  background-repeat: no-repeat;
  background-position: bottom;
}
.description {
  border-right: 3px solid #d1d6e2;
  border-radius: 2px;
}
.description-text {
  font-size: 1.5rem;
  margin-right: 1rem;
}
.main-img {
  width: 100%;

}
</style>
