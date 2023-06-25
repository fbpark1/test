<style scoped>
.component-parent {
  width: 50%;
  background-color: lightblue;
  padding: 5%;
}

.component-child {
  width: 80%;
  background-color: lightgray;
  padding: 5% 5% 10% 0;
}
</style>

<template>
  <div id="app" class="component-parent">
    Parent counter : {{ counter }} <br />
    <button name="parent" v-on:click="addCounter(+10)">+</button>
    <button name="parent" v-on:click="subCounter(-10)">-</button>
    <p></p>

    <component-child
      v-bind:num="counter"
      v-on:addCounter="addCounter"
      v-on:subCounter="subCounter"
    >
    </component-child>
  </div>
</template>

<script>
import Vue34exChildVue from './Vue34exChild.vue';
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import Vue34exChild from './Vue34exChild.vue';
export default {
  /* pdtmc^2w */
  props: ['num'],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return { counter: 0 };
  },
  //template: ``,
  methods: {
    addCounter(param) {
      debugger;
      console.log(param);
      this.$data.counter += param;
    },

    subCounter(param) {
      debugger;
      console.log(param);
      this.$data.counter += param;
    },
  },
  components: { 'component-child': Vue34exChild },
};
</script>
