<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">查看所有</router-link> |
      <router-link to="/add">添加任务</router-link>|
      <router-link to='/achieve'>查看已完成</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
