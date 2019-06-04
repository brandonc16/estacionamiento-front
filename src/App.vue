<template>
  <div id="app" class="">
    <div v-if="$router.history.current.path !=='/login'" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btn-accent{
  background-color: #448aff;
  color: #fff;
}
.btn-accent:hover {
  background-color: #376ac2;
  color: #fff !important;
}

.centered {
    margin: 0 auto;
  }

.logo{
  width: 250px;
  max-width: 300px;
  height: auto;
  margin: 10px;
}

.bg-yellow {
  background-color:#FF9800;
}

a {
  text-decoration: underline !important;
}

a:hover {
  text-decoration: underline !important;
}
</style>
