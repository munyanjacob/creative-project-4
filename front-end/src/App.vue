<template>
  <div id="app" :style="heroImage">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  computed: {
    heroImage() {
      return {
        backgroundImage: `url(${require('@/assets/space-background.jpg')})`
      };
    }
  }
}
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
}
html, body {
  width: 100%;
  height: 100%;
}

h1, h2, h3, h4, h5 {
  padding-bottom: 0px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.section-header {
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  -webkit-text-stroke: 1px black;
}

</style>
