<template>
  <div class="sidebar-container">
    <div class="inner-wrapper">
      <div class="section-item" v-bind:key="section.id" v-for="section in menuItems">
        <h4 v-on:click="section[key].expanded = !section[key].expanded">{{ section.title }}</h4>
        <ul v-if="section[key].expanded == true">
          <li class="subsection-item" v-bind:key="subsection.id" v-for="subsection in section.subsection">
            <h5>{{ subsection.title }}</h5>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import sections from "../data/sidebar_list.json";
export default {
  name: "Sidebar",
  data() {
    return {
      menuItems: sections
    };
  }
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: 250px;
  height: 100%;
  padding: 20px;
  .inner-wrapper {
    .section-item {
      h4 {
        cursor: pointer;
      }
      .subsection-item {
        h5 {
          cursor: pointer;
          margin-top: 0px;
        }
      }
    }
  }
}
</style>

