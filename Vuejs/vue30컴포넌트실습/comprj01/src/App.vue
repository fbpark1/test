<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/vue3103">Vue3103</router-link>
      <router-link to="/vue3104">Vue3104</router-link>
      <router-link to="/vue3403">Vue3403</router-link>
      <router-link to="/vue34ex">Vue34ex</router-link>
      <router-link to="/vue3501">Vue3501</router-link>
      <router-link to="/vue3701">Vue3701</router-link>
      <router-link to="/vue4301">Vue4301</router-link>
      <router-link to="/todo">todo</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
