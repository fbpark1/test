<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
li.checked {
  background: #bbb;
  color: #fff;
  text-decoration: line-through;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>

<template>
  <section>
    <transition-group name="list" tag="ul">
      <li
        v-for="item in todoItems"
        v-bind:class="item.done ? 'checked' : null"
        v-bind:key="item.id"
        v-on:click="(e) => doneToggle(e, item.id)"
      >
        <i aria-hidden="true" class="checkBtn fas fa-check"></i>
        {{ item.todo }}
        <span
          type="button"
          class="removeBtn"
          v-bind:data-id="item.id"
          v-on:click="removeTodo(todoItem.id)"
        >
          <i aria-hidden="true" class="far fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  /* pdtmc^2w */
  props: ['todoItems'],
  methods: {
    checked(done) {
      debugger;
      console.log(done);
    },
    doneToggle(e, id) {
      console.log(e.target, id);
      //파라미터 없이 받음. 콘솔에 id속성 출력됨(이벤트 객체 정보 알 수 있음)
      debugger;
      // 자식이 부모에게 이벤트 발생시킴
      this.$emit('doneToggle', e, id);
    },
    removeTodo(id) {
      debugger;
      console.log(id);
      //id를 파라미터로 받음
      // 자식이 부모에게 이벤트 발생시킴
      this.$emit('removeTodo', id);
    },
  },
};
</script>
