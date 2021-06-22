<template>
  <div
    class="main-container d-flex flex-column align-items-center m-0 p-0"
    dir="rtl"
  >
    <img :src="logoUrl" alt="Oteacher logo" class="logo mt-5 mb-3" />
    <div class="register-container d-flex flex-column align-items-center">
      <div
        class="title d-flex align-items-center justify-content-between w-100"
      >
        <h2>ثبت نام در اُتیچر</h2>
        <img :src="closeIcon" alt="close icon" />
      </div>
      <input type="text" class="w-75" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoUrl: require("../../assets/logo-signup.png"),
      closeIcon: require("../../assets/close.svg"),
    };
  },
};
</script>

<style scoped>
.main-container {
  background: url("../../assets/register-background.png") no-repeat 50%;
  background-size: 50rem;
  height: 100vh;
}
.logo {
  width: 15rem;
}
.register-container {
  width: 30%;
  background-color: #fff;
}
.title {
  padding: 1rem;
}
</style>
