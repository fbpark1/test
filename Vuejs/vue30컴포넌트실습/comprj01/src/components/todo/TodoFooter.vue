<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>

<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn">Clear All</span>
  </div>
</template>

<script>
export default {
  /* pdtmc^2w */
  props: [],
  methods: {
    clearAll(e) {
      console.log(e.target);
      // 부모 컴포넌트에게 clearAll 이벤트 발생시킨다.
      this.$emit('clearAll', e);
    },
  },
};
</script>
