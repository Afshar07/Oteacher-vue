<template>
  <div class="register-container d-flex flex-column align-items-center">
    <img :src="logoUrl" alt="Oteacher logo" class="logo" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoUrl: require("../../assets/logo-signup.png"),
    };
  },
};
</script>

<style scoped>
.register-container {
  background: url("../../assets/register-background.png") no-repeat center;
  background-size: 50rem;
  height: 100vh;
}
.logo {
    width: 15rem;
}
</style>
