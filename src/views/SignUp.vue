<template>
  <div class="signup">
    <form>
      <h3 class="text">Sign Up</h3>

      <div class="form-group">
        <label class="text">Username </label>
        <input type="text" class="textbar" placeholder="Username" />
      </div>

      <div class="form-group">
        <label class="text">Email Address </label>
        <input type="email" class="textbar" placeholder="Email Address" />
      </div>

      <div class="form-group">
        <label class="text">Password </label>
        <input type="password" class="textbar" placeholder="Password" />
      </div>

      <div class="form-group">
        <label class="text">Password Again </label>
        <input type="password" class="textbar" placeholder="Password Again" />
      </div>

      <button type="submit" class="Submitbutton">Sign Up</button>

      <p class="forgot-password text-right">
        Already registered
        <router-link to="/signin">sign in?</router-link>
      </p>
    </form>
  </div>
</template>

<style>
.text {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
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
  height: 1em;
  margin-top: 15px;
  margin-bottom: 15px;
  border-radius: 15px;
  display: inline-block;
  text-align: right;
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
  margin-left: 2em;
  margin-right: 2em;
}
</style>