<template>
  <div class="buttons-container">
    <h2>Buttons</h2>
    <!-- NORMAL BUTTONS -->
    <div class="normal-buttons" v-html="newHTML"></div>
    <!-- Code block -->
    <figure class="code-block" role="img" aria-labelledby="toggle-button-caption">
      <pre>
        <Prism language="html">
          <div class="normal-buttons-wrapper" v-html="newHTML"></div>
        </Prism>
      </pre>
      <button class="btn btn--sm btn--copy btn--link" :data-clipboard-text="newHTML">copy</button>
      <figcaption id="normal-buttons-caption">
       These are noon buttons
      </figcaption>
    </figure>

    <!-- BUTTON GROUP -->
    <div id="buttonGroup" v-html="toggleButtonGroup"></div>

    <!-- Code block -->
    <figure class="code-block" role="img" aria-labelledby="toggle-button-caption">
      <pre>
        <Prism language="html">
          <div class="button-group-container" v-html="toggleButtonGroup"></div>
        </Prism>
      </pre>
      <button class="btn btn--sm btn--copy btn--link" :data-clipboard-text="toggleButtonGroup">copy</button>
      <figcaption id="toggle-button-caption">
       This is a toggle button
      </figcaption>
    </figure>
  </div>
</template>


<script>
import ClipboardJS from "clipboard";
import Prism from "vue-prismjs";
import "prismjs/themes/prism-summerfruit.light.css";
var clipboard = new ClipboardJS(".btn--copy");
clipboard.on("success", function(e) {
  console.log(e);
});
clipboard.on("error", function(e) {
  console.log(e);
});
export default {
  components: {
    Prism
  },
  name: "Buttons",
  props: {
    msg: String
  },
  data() {
    return {
      newHTML: `
        <!-- Copy from here -->
        <!-- this is normal button -->
        <button class="btn">تفعيل الإشتراك</button>

        <!-- this is small button -->
        <button class="btn btn--sm">small button</button>

        <!-- this is meidum button -->
        <button class="btn btn--md">medium button</button>

        <!-- this is large button -->
        <button class="btn btn--lg">large button</button>

        <!-- this is outline button -->
        <button class="btn btn--outline">outline button</button>
        
        <!-- this is link button -->
        <button class="btn btn--link" >link button</button>
        <!-- Copy till here -->`,
      toggleButtonGroup: `
        <!-- Copy from here -->
        <div class="toggle-button-group">
          <button class="btn left active">male</button>
          <button class="btn right">female</button>
        </div>
        <!-- Copy till here -->`
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.buttons-container {
  text-align: center;
  .normal-buttons {
    .btn {
      display: block;
      margin: 10px auto;
    }
  }
  pre {
    background: none;
  }
}
</style>