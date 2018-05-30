<template>
  <div class="colors-container">
    <div class="color-section" v-bind:key="group.group_id" v-for="group in colorGroups">
      <h2 class="color-group-name">{{ group.group_name }}</h2>
      <p class="color-group-name" v-html="group.description"></p>
      <div class="color-item" v-bind:key="color.id" v-for="color in group.shades">
        <div class="color-box" v-if="color.hex2" v-bind:style="{background:'linear-gradient(-45deg,' + color.hex1 + ',' + color.hex2 + ')'}"></div>
        <div class="color-box" v-if="!color.hex2" v-bind:style="{background:color.hex1}"></div>
        <div class="color-text clearfix">
          <span class="left">{{ color.hex1 }}</span> 
          <span class="right">{{ color.hex2 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import allColors from "../data/colors.json";
export default {
  name: "MyColors",
  data() {
    return {
      colorGroups: allColors
    };
  }
};
</script>

<style lang="scss" scoped>
.colors-container {
  text-align: left;
  direction: ltr;
  .color-section {
    .color-item {
      display: inline-block;
      box-shadow: 0 3px 14px 0 rgba(0, 0, 0, 0.11);
      border-radius: 0.8rem;
      margin: 20px;
      .color-box {
        width: 110px;
        height: 100px;
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
      }
      .color-text {
        padding: 20px 10px;
        border-bottom-left-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
        background: #faf9f2;
        span {
          font-size: 10px;
          color: #2e2a2a;
        }
        .left {
          float: left;
        }
        .right {
          float: right;
        }
      }
    }
  }
}
</style>
