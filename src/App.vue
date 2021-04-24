<template>
  <div
    :style="{
      'background-image': 'url(https://i.ibb.co/bW5T1L1/background.png)',
    }"
    class="background"
    id="app"
  >
    <router-link to="/"
      ><img width="60%" src="./assets/logo.png"
    /></router-link>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-y: auto;
}
.background {
  background-color: #ccc;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  z-index: 1000;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>