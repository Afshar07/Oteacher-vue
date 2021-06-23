<template>
  <form class="input-form">
    <label for="phone-number" class="phone-label" ref="inputLabel"
      >شماره همراه</label
    >
    <input
      type="tel"
      name="phone-number"
      class="phone-number-input w-100"
      id="phone-number"
      @focusout="removeFocusClass"
      @focus="addFocusClass"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    addFocusClass() {
      this.$refs.inputLabel.classList.add("focused");
    },
    removeFocusClass() {
      this.$.refs.inputLabel.classList.remove("focused");
    },
  },
};
</script>
<style scoped>
.input-form {
  position: relative;
}
.phone-number-input {
  height: 4rem;
  outline: none;
}
.phone-label {
  position: absolute;
  bottom: 1rem;
  right: 0.8rem;
  font-size: 1.2rem;
  transition: all 0.5s;
  cursor: text;
}
.focused {
  transform: translateY(-1.2rem) scale(0.8) !important;
}
</style>
