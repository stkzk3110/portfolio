<template>
<div id="profile">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand text-warning" href="/">CUBE's Portfolio</a>
    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="ナビゲーションの切替">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul class="navbar-nav ml-auto">
        <router-link tag="li" to="/"><a class="nav-item nav-link text-warning">HOME</a></router-link>
        <router-link tag="li" to="/profile" exact><a class="nav-item nav-link active text-warning"><span class="nav_default">PROFILE</span></a></router-link>
        <router-link tag="li" to="/works"><a class="nav-item nav-link text-warning">WORKS</a></router-link>
        <router-link tag="li" to="/contact"><a class="nav-item nav-link text-warning">CONTACT</a></router-link>
      </ul>
    </div>
  </nav>
</div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {
    }
  }
};
</script>

<style lang="scss">
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.nav_default {
  padding-bottom: 2px;
  border-bottom: solid 3px #ffffff;
}
</style>