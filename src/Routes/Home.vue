<template>
  <div class="home-page">
    <MyColors></MyColors>
    <Typography></Typography>
    <Buttons></Buttons>
    <Form></Form>
  </div>
</template>

<script>
import Buttons from "../components/Buttons.vue";
import MyColors from "../components/Colors.vue";
import Typography from "../components/Typography.vue";
import Form from "../components/Form.vue";

export default {
  name: "app",
  components: {
    Buttons,
    MyColors,
    Typography,
    Form
  }
};
</script>