<style scoped></style>
<!--vue fc로 컴포넌트 생성-->

<template>
  <div id="app">
    <h2>컴포넌트 등록</h2>
    <Vue3103Comp v-bind:localmsg="localmsg1"></Vue3103Comp>
    <Vue3103Comp v-bind:localmsg="localmsg2"></Vue3103Comp>
  </div>
</template>

<script>
import Vue3103Comp from '../components/vue3103/Vue3103Comp.vue';

export default {
  props: [],
  data() {
    return {
      localmsg1: '부모자식 msg1',
      localmsg2: '부모자식 msg2',
    };
  },

  methods: {},
  components: {
    Vue3103Comp: Vue3103Comp,
  },
  computed: {},
  watch: {},
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
  },
  updated() {
    console.log('updated');
  },
};
</script>
