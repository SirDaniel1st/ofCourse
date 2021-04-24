<template>
  <div class="signin">
    <form>
      <h3 class="text">SIGN IN</h3>

      <div class="form-group">
        <label class="text">USERNAME </label>
        <input
          class="textbar"
          type="email"
          placeholder="Username / Email Address"
        />
      </div>

      <div class="form-group">
        <label class="text">PASSWORD </label>
        <input class="textbar" type="password" placeholder="Password" />
      </div>

      <button type="submit" class="Submitbutton">Sign In</button>
    </form>
  </div>
</template>

<script>
</script>

<style>
.text {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #4fc0b8;
  font-size: 2em;
}

::placeholder {
  font-family: inherit;
  text-align: center;
}

.textbar {
  font-size: 2em;
  font-family: inherit;
  background-color: #8a8a8a;
  width: 500px;
  height: 1empx;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 15px;
}

.Submitbutton {
  color: #4fc0b8;
  border: 5px solid black;
  height: 70px;
  width: 200px;
  font-size: 30px;
  font-family: inherit;
  background-color: transparent;
  border-color: #4fc0b8;
  border-radius: 10px;
  margin-top: 2em;
}
</style>

