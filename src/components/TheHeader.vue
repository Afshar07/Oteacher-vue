<template>
  <header class="header col-12">
    <nav class="header__nav">
      <div class="header__nav--contact">
        <img :src="phoneImg" alt="blue phone" class="blue-phone" />
        <div class="header__nav--btns">
          <the-button class="signup-btn">ثبت نام</the-button>
          <the-button class="login-btn">ورود</the-button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import TheButton from "./utilities/MainButton.vue";
export default {
  components: { TheButton },
  data() {
    return {
      phoneImg: require("../assets/blue-phone.svg"),
    };
  },
  methods: {},
};
</script>
<style scoped>
.header__nav--contact {
  display: flex;
  align-items: center;
  margin: 2.5rem;
}
.blue-phone {
  cursor: pointer;
  margin: 0 6rem;
}
.header__nav--btns {
  width: 100%;
}
.signup-btn {
  border: 1px solid #3f9eff;
  border-radius: 9px;
  color: #3f9eff;
  width: 10rem;
  transition: all 0.3s;
}
.signup-btn:hover {
  background-color: rgba(63, 158, 255, 0.2);
}
.login-btn {
  border: none;
  color: #3f9eff;
  width: 10rem;
  transition: all 0.3s;
}
.login-btn:hover {
  border-radius: 9px;
  background-color: rgba(63, 158, 255, 0.2);
}
</style>
