<template>
  <div class="colors-container">
    <div class="color-section" v-bind:key="group.group_id" v-for="group in colorGroups">
      <h2 class="color-group-name">{{ group.group_name }}</h2>
      <p class="color-group-name">{{ group.description }}</p>
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
export default {
  name: "MyColors",
  data() {
    return {
      colorGroups: [
        {
          group_name: "Brand Colors",
          group_id: 1,
          description:
            "The brand color was designed to reflect a lighter and brighter percepetion than the previous solid color. It’s applications includes the main call to actions, backgrounds and splash screens.<br/>A solid degree is also provided for typography and border color.",
          shades: [
            {
              id: 101,
              type: "gradient",
              hex1: "#01c3f9",
              hex2: "#40f6c8",
              hex1_name: "brand-color-1",
              hex2_name: "brand-color-2"
            },
            {
              id: 102,
              type: "solid",
              hex1: "#1bd8e5",
              hex1_name: "brand-color"
            }
          ]
        },
        {
          group_name: "Primary Color Pallette",
          group_id: 2,
          description:
            "The Noon Academy User Interface was primarily designed to accomodate a portal based segmentation. This means that each subject is defined as a seperate portal or entity that has its own color identification.<br/>These colors have been selected based on their high visibility/contrast and adherance to accessibility standards.<br/>The light Grey gradient is primarily used for the flash card background.<br/>When applying any gradient, the lighter shade should always be on the top left and the darkest on the bottom right in a 45 degree angle",
          shades: [
            {
              id: 201,
              type: "gradient",
              hex1: "#ed5568",
              hex2: "#d62739",
              hex1_name: "primary-red-1",
              hex2_name: "primary-red-2"
            },
            {
              id: 202,
              type: "gradient",
              hex1: "#fc6e51",
              hex2: "#db391f",
              hex1_name: "primary-dark-orange-1",
              hex2_name: "primary-dark-orange-2"
            },
            {
              id: 203,
              type: "gradient",
              hex1: "#ffd97c",
              hex2: "#f6a742",
              hex1_name: "primary-orange-1",
              hex2_name: "primary-orange-2"
            },
            {
              id: 204,
              type: "gradient",
              hex1: "#a0d468",
              hex2: "#6eaf27",
              hex1_name: "primary-green-1",
              hex2_name: "primary-green-2"
            },
            {
              id: 205,
              type: "gradient",
              hex1: "#48cfad",
              hex2: "#19a784",
              hex1_name: "primary-dark-green-1",
              hex2_name: "primary-dark-green-2"
            },
            {
              id: 206,
              type: "gradient",
              hex1: "#4fc1e9",
              hex2: "#0b9bd0",
              hex1_name: "primary-blue-1",
              hex2_name: "primary-blue-2"
            },
            {
              id: 207,
              type: "gradient",
              hex1: "#5d9cec",
              hex2: "#0e65d7",
              hex1_name: "primary-indigo-1",
              hex2_name: "primary-indigo-2"
            },
            {
              id: 208,
              type: "gradient",
              hex1: "#ac92ec",
              hex2: "#7455c3",
              hex1_name: "primary-voilet-1",
              hex2_name: "primary-voilet-2"
            },
            {
              id: 209,
              type: "gradient",
              hex1: "#c9a684",
              hex2: "#986dad",
              hex1_name: "primary-brown-1",
              hex2_name: "primary-brown-2"
            },
            {
              id: 210,
              type: "gradient",
              hex1: "#ec87c0",
              hex2: "#bf4c90",
              hex1_name: "primary-pink-1",
              hex2_name: "primary-pink-2"
            },
            {
              id: 211,
              type: "gradient",
              hex1: "#656d78",
              hex2: "#2f3640",
              hex1_name: "primary-dark-grey-1",
              hex2_name: "primary-dark-grey-2"
            },
            {
              id: 212,
              type: "gradient",
              hex1: "#f7f7f7",
              hex2: "#dedad7",
              hex1_name: "primary-light-grey-1",
              hex2_name: "primary-light-grey-2"
            }
          ]
        },
        {
          group_name: "Supplementary Gradients",
          group_id: 3,
          description:
            "These are extra resources that might or might not be used in new occassions or scenarios of a promotional nature",
          shades: [
            {
              id: 301,
              type: "gradient",
              hex1: "#1bcedf",
              hex2: "#5b247a",
              hex1_name: "secondary-blue-gradient-1",
              hex2_name: "secondary-blue-gradient-2"
            },
            {
              id: 302,
              type: "gradient",
              hex1: "#5e2563",
              hex2: "#6579cb",
              hex1_name: "secondary-black-gradient-1",
              hex2_name: "secondary-black-gradient-2"
            },
            {
              id: 303,
              type: "gradient",
              hex1: "#f030c1",
              hex2: "#6094ea",
              hex1_name: "secondary-pink-gradient-1",
              hex2_name: "secondary-pink-gradient-2"
            },
            {
              id: 304,
              type: "gradient",
              hex1: "#57ca85",
              hex2: "#194f68",
              hex1_name: "secondary-green-gradient-1",
              hex2_name: "secondary-green-gradient-2"
            }
          ]
        },
        {
          group_name: "Supplementary Gradients",
          group_id: 4,
          description:
            "Each degree reflects the priority of the text, please be mindful to portray heirarchy between text headlines using variant degrees.<br/>The 2 lightest shades are usually used for backgrounds and secondary buttons.",
          shades: [
            {
              id: 401,
              type: "solid",
              hex1: "#2e2a2a",
              hex1_name: "grey-color-darkest"
            },
            {
              id: 402,
              type: "solid",
              hex1: "#717171",
              hex1_name: "grey-color-dark"
            },
            {
              id: 403,
              type: "solid",
              hex1: "#b1b2b5",
              hex1_name: "grey-color"
            },
            {
              id: 404,
              type: "solid",
              hex1: "#c7c7c9",
              hex1_name: "grey-color-light"
            },
            {
              id: 405,
              type: "solid",
              hex1: "#f6f6f6",
              hex1_name: "grey-color-lightest"
            }
          ]
        }
      ]
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
