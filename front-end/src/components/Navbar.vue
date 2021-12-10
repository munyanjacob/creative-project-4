<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid px-3">
            <b-link class="navbar-brand my-0 pr-3 py-1 text-white" v-bind:to="'/'" replace>Best Cookies Inc.</b-link>
            <b-navbar-toggle target="navbarSupportedContent"></b-navbar-toggle>
            <b-collapse id="navbarSupportedContent" is-nav>
                <b-navbar-nav class="navbar-nav">
                    <b-nav-item active-class="active" class="nav-item nav-link" :to="'/all'" replace>All Recipes</b-nav-item>
                    <b-nav-item active-class="active" class="nav-item nav-link" :to="'/add'" replace>New Cookie</b-nav-item>
                    <b-nav-item active-class="active" class="nav-item nav-link" :to="'/about'" replace>About</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style>


header, main, footer {
  flex-shrink: 1;
  color: rgba(255, 255, 255, .8);
}

.navbar-brand {
  font-family: 'Montserrat', sans-serif;
  vertical-align: -.125em;
  user-select: none;
}

.navbar-nav a {
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 13px;
  padding: 0.45rem 1rem;
  margin: 0.15rem 0;
}

.navbar-nav a:hover {
  font-weight: 700;
  background: #394550;
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, .8);
  margin-left: auto;
  padding: 4px 4px;
}

.active {
  background: #394550;
  color: white;
}

@media (min-width: 992px) {
  .navbar-nav a {
    border-left: 1px solid gray;
    
  }

  .navbar-nav .nav-link {
    padding-left: 0px;
      padding-right: 0px;
  }
}
</style>