<template>
  <div class="home">
    <div class="searchBar">
      <input
        class="Search"
        type="text"
        placeholder="Course Code / Professor's Name"
      />
      <router-link to="/search" tag="button" class="but">
        <img
          class="SearchImg"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png"
        />
      </router-link>
    </div>
    <div>
      <router-link to="/signin" tag="button" class="signin"
        >SIGN IN</router-link
      >
      <router-link to="/signup" tag="button" class="signin"
        >SIGN UP</router-link
      >
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.SearchImg {
  height: 50px;
  width: 50px;
}
.but {
  background-color: transparent;
  border-color: transparent;

}

.Search {
  font-size: 2em;
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #8a8a8a;
  width: 750px;
  height: 50px;
  margin-top: 15px;
  border-radius: 15px;
}
::placeholder {
  text-align: center;
}
.signin {
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