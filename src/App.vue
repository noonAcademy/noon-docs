<template>
  <div id="app">
    <header class="main-header clearfix">
      <div class="header-wrapper">
        <div class="branding-area">
          <div class="logo">
            <img src="./assets/logo-en.svg" alt="">
          </div>
        </div>
        <div class="secondary-area">
          <router-link to="/"> <button class="btn btn--sm">Styles</button></router-link>
          <router-link to="/icons"><button class="btn btn--sm btn--link">Icons</button></router-link>
        </div>
      </div>
    </header>
    <div class="router-container clearfix">
      <div class="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div class="main-area">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
export default {
  components: {
    Sidebar
  }
};
</script>


<style lang="scss" >
@import "css/combined.scss";
#app {
  .main-header {
    width: 100%;
    padding: 10px;
    position: fixed;
    background: $white;
    border-bottom: 1px solid #ddd;
    top: 0px;
    left: 0px;
    .header-wrapper {
      max-width: 1350px;
      margin: 0px auto;
      .branding-area {
        float: left;
        .logo {
          height: 30px;
          img {
            height: 100%;
          }
        }
      }
      .secondary-area {
        float: right;
        text-align: right;
        .btn {
          margin: 0px 10px;
          box-shadow: none;
        }
      }
    }
  }
  .router-container {
    overflow: hidden;
    height: calc(100% - 50px);
    position: absolute;
    top: 50px;
    .sidebar {
      position: relative;
      width: 250px;
      float: left;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .main-area {
      width: calc(100% - 250px);
      height: 100%;
      float: right;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
.code-block {
  position: relative;
  display: block;
  pre,
  pre[class*="language-"] {
    margin: 0px;
    padding: 0px;
  }
  .btn--copy {
    position: absolute;
    top: 10px;
    right: 5px;
    min-width: 40px;
  }
  figcaption {
    display: none;
  }
}
</style>
