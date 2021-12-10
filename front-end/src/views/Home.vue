<template>
  <div class="home">
    <h2 class="text-white my-5 section-header">Searching for the <span>Best Cookie in the Universe</span></h2>

    <h4 class="section-header">Current Leader:</h4>

    <div class="container">
      <CookieCard :cookie="bestCookie" :emphasis="true"/>
    </div>
  </div>
</template>

<script>
import CookieCard from '../components/CookieCard.vue'
import axios from 'axios';
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    CookieCard
  },
  data() {
    return {
      bestCookie: null,
    }
  },
  computed: {
    // maxCookie() {
    //   return this.$root.$data.cookies.reduce(function(prev, current){
    //     return (prev.avgRating > current.avgRating) ? prev : current
    //   });
    // }
  },
  created() {
    this.getBestCookie();
  },
  methods: {
    async getBestCookie() {
      try {
          this.response = await axios.get("/api/cookies/best");
          this.bestCookie = this.response.data[0];
        } catch (error) {
          this.error = error.response.data.message;
        }
    }
  }
}
</script>

<style scoped>
.main-section {
  max-width: 800px;
}
</style>