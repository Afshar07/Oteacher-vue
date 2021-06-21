<template>
  <section class="main-container d-flex">
    <div class="right-section col-6">
      <h1 class="heading-primary">
        آموزش آنلاین زبان در اُتیچر
        <br />

        <mark class="highlighted"> همیشه و همه‌جا </mark>
        ، با استادی که دوست داری
      </h1>
      <div class="description">
        <p class="description-text">
          همسوترین استاد با اهداف و نیازهایت را از بین صدها استاد ارزیابی‌شده،
          انتخاب کن و در زمان‌های دلخواه، در کلاس زبان آنلاین شرکت کن
        </p>
      </div>
      <main-button class="main-btn">اولین جلسه را مهمان ما باش!</main-button>
      <div class="desc-container">
        <div class="first-desc d-flex">
          <span class="magnifier-container ms-0"
            ><img
              :src="magnifierIcon"
              alt="Magnifier Icon"
              class="magnifier-icon"
          /></span>
          <p class="desc-text">
            جستجو و یافتن سریع استاد با فیلترهای متنوع
          </p>
        </div>
        <div class="second-desc d-flex">
          <span class="play-icon-container">
            <img :src="playIcon" alt="Play Icon" class="play-icon" />
          </span>
          <p class="desc-text">
            کلاس های زنده تصویری و تعاملی؛ تک‌نفره و گروهی
          </p>
        </div>
      </div>
    </div>
    <div class="left-section col-6">
      <img :src="introImg" alt="" class="main-img" />
    </div>
  </section>
</template>
<script>
import MainButton from "./utilities/MainButton.vue";
export default {
  components: { MainButton },
  data() {
    return {
      introImg: require("../assets/mainintro.webp"),
      magnifierIcon: require("../assets/search-outline.svg"),
      playIcon: require("../assets/play-circle-outline.svg"),
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
  margin: 8rem;
}
.heading-primary {
  margin-bottom: 3rem;
  font-weight: 1000;
  line-height: 5rem;
  font-size: 3.1rem;
}
.highlighted {
  color: inherit;
  padding-bottom: 1rem;
  background-color: transparent;
  background-image: url("../assets/text-marker.svg");
  background-repeat: no-repeat;
  background-position: bottom;
  font-weight: bold;
  margin: 0;
}
.description {
  border-right: 3px solid #d1d6e2;
  border-radius: 2px;
  margin-bottom: 3rem;
}
.description-text {
  font-size: 1.5rem;
  margin-right: 1rem;
}
.main-img {
  width: 100%;
}
.main-btn {
  background-image: linear-gradient(90deg, #378aff, #20b2ff);
  color: #fff;
  margin: 1rem;
  height: 5rem;
}
.magnifier-icon,
.play-icon {
  width: 2.4rem;
}
.desc-container {
  margin-top: 4rem;
}
.desc-text {
  font-size: 1.4rem;
  font-weight: 300;
}
.magnifier-container,
.play-icon-container {
  position: relative;
  margin-left: 0;
}
.magnifier-container::before,
.play-icon-container::before {
  position: absolute;
  top: 0.5rem;
  right: -1rem;
  content: " ";
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(32, 178, 255, 0.5);
  border-radius: 50%;
  z-index: -1;
}
</style>
