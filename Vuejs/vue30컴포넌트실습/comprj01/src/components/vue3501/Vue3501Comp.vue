<style scoped>
input:focus {
  background-color: lightskyblue;
  border: 3px solid #555;
}
</style>

<template>
  <div id="app">
    <p>
      ref 사용 예제<br />
      페이지가 로딩되면 myinput1에 포커스를 주시오 <br />
      버튼을 클릭하면 myinput2에 포커스를 주시오 <br />
    </p>
    <div>
      <div>
        <label>myinput1</label>
        <input type="text" ref="myinput1" v-model="message" />
      </div>
      <div>
        {{ message }}
      </div>
    </div>
    <div>
      <label>myinput2</label>
      <input type="text" ref="myinput2" />
    </div>
    <button v-on:click="handlerMyinput1">포커스 이동</button>
  </div>
</template>

<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default {
  /* pdtmc^2w */
  props: [
    /*부모로부터 받은 것 없음*/
  ],
  data() {
    /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
    return { message: null };
  },
  //template: ``,
  methods: {
    handlerMyinput1(e) {
      console.log(e.target);
      this.$refs.myinput2.focus();
    },
  },
  components: {
    /* 전역 컴포넌트인 경우는 등록하지 않는다. 전역 컴포넌트는 프로토타입 체인으로 찾을 수 있기 때문에 */
    /* 지역 컴포넌트나 파일 컴포넌트만 등록 한다. 예시) "태그명" : 컴포넌트명 */
  },
  mounted() {
    console.log('mounted');
    // 페이지가 로딩되면 myinput1에 포커스 주기
    this.$refs.myinput1.focus();
  },
};
</script>
