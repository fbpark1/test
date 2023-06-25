<style scoped></style>

<template>
  <div id="app">
    <h2>vuex 를 사용하는 프로그램을 만들어 본다.</h2>
    <Vue4301Comp></Vue4301Comp>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import Vue4301Comp from '../components/vue4301/Vue4301Comp.vue';
export default {
  components: { Vue4301Comp: Vue4301Comp },
};
</script>
