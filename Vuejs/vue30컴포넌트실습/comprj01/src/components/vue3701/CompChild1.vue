<style scoped>
.main {
  border: 1px solid black;
  background-color: yellow;
}
</style>

<template>
  <div class="main">
    {{ msg }}
    <child11 />
    {{ msg }}
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import CompChild11 from './CompChild11.vue';
export default {
  /* pdtmc^2w */
  props: [
    /*부모로부터 받은 변수 없어서 data에 변수 설정*/
  ],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return { msg: 'child1' };
  },
  //template: ``,
  methods: {},
  components: {
    child11: CompChild11,
  },
  computed: {},
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    /* store의 actions 호출 */
    // this.$store.dispatch('액션명', payload);
  },
  updated() {
    console.log('updated');
  },
};
</script>
