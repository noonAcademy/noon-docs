<template>
  <div class="buttons-container">
    <h2>Buttons</h2>
    <div class="normal-buttons">
      <button class="btn">تفعيل الإشتراك</button>
      <button class="btn btn--sm">small button</button>
      <button class="btn btn--md">medium button</button>
      <button class="btn btn--lg">large button</button>
      <button class="btn btn--outline">outline button</button>
      <button class="btn btn--link" >link button</button>
    </div>
    <div class="toggle-button-group">
      <button class="btn left active">male</button>
      <button class="btn right">female</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  props: {
    msg: String
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
}
</style>