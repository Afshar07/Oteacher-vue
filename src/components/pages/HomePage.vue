<template>
  <oteacher-intro class="col-md-12 col-lg-12"></oteacher-intro>
  <div
    class="supported-langs d-flex flex-wrap col-md-12 col-lg-12"
    dir="rtl"
    v-if="loadMore"
  >
    <supported-langs
      v-for="country in countryData"
      :key="country.id"
      :name="country.name"
      :flag="country.flag"
    ></supported-langs>
    <div
      class="load-container d-flex flex-column align-items-center"
      @click="loadMoreFlags"
    >
      <img :src="loadMoreImg" alt="" class="load-img" />
      <p class="show-text">مخفی کردن</p>
    </div>
  </div>
  <div
    class="supported-langs d-flex flex-wrap col-12 col-md-12"
    dir="rtl"
    v-else
  >
    <supported-langs
      v-for="country in countryData.slice(0, 8)"
      :key="country.id"
      :name="country.name"
      :flag="country.flag"
    ></supported-langs>
    <div
      class="load-container d-flex flex-column align-items-center"
      @click="loadMoreFlags"
    >
      <img :src="loadMoreImg" alt="" class="load-img" />
      <p class="show-text">دیگر زبان‌ها</p>
    </div>
  </div>
  <learning-steps class="col-md-9"></learning-steps>
</template>
<script>
import OteacherIntro from "../OteacherIntro.vue";
import SupportedLangs from "../SupportedLangs.vue";
import LearningSteps from "../LearningSteps.vue";
import data from "../../data.json";

export default {
  components: {
    OteacherIntro,
    SupportedLangs,
    LearningSteps,
  },

  data() {
    return {
      countryData: data,
      loadMore: false,
      loadMoreImg: require("../../assets/flags/showmore.svg"),
    };
  },
  methods: {
    loadMoreFlags() {
      this.loadMore = !this.loadMore;
    },
  },
};
</script>

<style scoped>
.supported-langs {
  margin-top: 8rem;
  margin-left: 0;
  margin-right: 0 !important;
}
</style>
