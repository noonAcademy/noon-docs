<template>
  <div class="form-container">
    <h2>Form</h2>
    <p>Forms allow users to enter data that is used by the application, or to configure options. Designing forms well requires decisions about its structure and sequence, as well as its interface elements, field labels and offered help and feedback.<br/>
    1- Form labels: Use sentence case only. Default alignment is right aligned. Long labels should wrap and should not be truncated. <br/>
    2- Required field labels: Mark required fields with a *. If all fields in the form are mandatory, don't provide any indication. <br/>
    3- Form fields: The length of the field should communicate the intended length of content. These lengths also apply for other form controls of a similar shape, like drop-down menus and text boxes. </p>
    <div class="form-item">
      <span class="form-wrapper"><input type="text" class="form-control" placeholder="إسم الطالب"></span>
    </div>
    <div class="form-item">
      <span class="form-wrapper"><input type="text" class="form-control active" placeholder="إسم الطالب"></span>
    </div>
    <div class="form-item">
      <span class="form-wrapper phone"><input type="text" class="form-control" placeholder="إسم الطالب"></span>
    </div>
    <!-- Don't add 'for' to the outer label in case of toggle button -->
    <div class="form-item">
      <span class="form-wrapper toggle">
        <input type="radio" name="toggle" id="yesToggle" class="form-control" placeholder="إسم الطالب">
        <label for="yesToggle">نعم</label>
        <input type="radio" name="toggle" id="noToggle" class="form-control" placeholder="إسم الطالب">
        <label for="noToggle">لا</label>
      </span>
    </div>
    <div class="form-item">
      <span class="form-wrapper dropdown">
        <select type="text" class="form-control" placeholder="إسم الطالب">
          <option value="hello">hello</option>
          <option value="hello2">hello 2</option>
          <option value="hello3">hello 3</option>
        </select>
      </span>
    </div>
    <div class="form-item">
      <span class="form-wrapper correct"><input type="text" class="form-control" placeholder="إسم الطالب"></span>
    </div>
    <div class="form-item">
      <span class="form-wrapper incorrect"><input type="text" class="form-control" placeholder="إسم الطالب"></span>
    </div>
    <div class="form-item">
      <span class="form-wrapper textarea"><textarea class="form-control" placeholder="إسم الطالب"></textarea></span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.form-container {
  margin: 50px auto;
  text-align: center;
  h2,
  p {
    text-align: left;
    direction: ltr;
  }
  .form-item {
    margin: 10px;
  }
}
</style>
