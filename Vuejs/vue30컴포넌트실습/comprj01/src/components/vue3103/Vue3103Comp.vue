<style scoped></style>
<!--vue fc로 컴포넌트 생성-->

<template>
  <div>
    파일 컴포넌트가 등록되었습니다!
    <span v-on:click="lclick">
      {{ localmsg }}
    </span>
  </div>
</template>

<script>
export default {
  props: ['localmsg'],
  /*부모의 변수는 자식의 props에 넣는다*/
  data() {
    return {
      //localmsg: null, (동일 변수명 중복 사용 불가)
    };
  },

  methods: {},
  components: {},
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
