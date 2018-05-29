<template>
  <div id="app">
    <div class="router-container clearfix">
      <router-link to="/"> <button class="btn btn--sm">Home</button></router-link>
      <router-link to="/detail"><button class="btn btn--sm btn--outline">Detail</button></router-link>
    </div>
    <hr>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" >
@import "css/combined.scss";
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  .router-container {
    width: 100%;
    text-align: right;
    padding-top: 10px;
    .btn {
      margin: 0px 10px;
    }
  }
}
</style>
