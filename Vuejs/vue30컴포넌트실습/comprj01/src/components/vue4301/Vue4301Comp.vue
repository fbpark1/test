<style scoped></style>

<template>
  <div id="app">
    <h1>{{ header }}</h1>
    <h2>{{ welcome }}</h2>
    <h3>{{ counter }}</h3>
    <div><input type="checkbox" v-model="callapi" />외부 api 호출</div>
    <button v-on:click="handlerIncrement">더해줘</button>
    <button v-on:click="handlerDecrement">빼줘</button>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: [],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return {
      header: 'Vuex 사용 앱',
      welcome: 'HELLO WORLD',
      counter: 0,
      callapi: false,
    };
  },
  //template: ``,
  methods: {
    /* vuex 를 사용하는 경우
      mapActions 는 store의 actions 를 가져오는 헬퍼 메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 actions 를 가져오는 2가지 방식
      1) store.모듈명.actions 이름 바꾸어 사용하기(추천방식)
         ...mapActions('모듈명', { dispatch액션명1: '액션명1', dispatch액션명2: '액션명2' }),
      2) store.모듈명.actions 이름 그대로 사용하기
         ...mapActions('모듈명', ['액션명1', '액션명2']),
      */

    handlerIncrement(e) {
      console.log(e.target);
      //this.$data.counter = this.$data.counter + 1;
      // 버튼을 누르면 store의 action 호출
      // this.$store.dispatch("액션명", 액션값)
      this.dispatchSetCounter(+1);
    },
    handlerDecrement(e) {
      console.log(e.target);
      // this.$data.counter = this.$data.counter - 1;
      this.dispatchSetCounter(-1);
    },

    // store.counterStore.actions 가져오기.
    ...mapActions('counterStore', {
      dispatchSet: 'set',
      dispatchGet: 'get',
      dispatchSetCounter: 'setCounter',
    }),
  },
  components: {},
  computed: {
    /* 자동처리 + 동기식. 메서드로 작성. return 필수. data 와 공존 불가 */

    /* vuex 를 사용하는 경우
      mapGetters 는 store의 getters 를 가져오는 헬퍼메서드입니다.
      namespaced: true를 설정한 경우 네임스페이스를 사용하기 때문에 store의 모듈 명을 적어주어야 합니다.
      store 모듈에서 getters 를 가져오는 2가지 방식
      1) store.모듈명.getters 이름 바꾸어 사용하기
         ...mapGetters('모듈명', { get게터명1: '게터명1', get게터명2: '게터명2' }),
      2) store.모듈명.getters 이름 그대로 사용하기(추천방식)
         ...mapGetters('모듈명', ['게터명1', '게터명2']),
      */

    ...mapGetters('counterStore', ['welcome', 'counter']),
  },
};
</script>
