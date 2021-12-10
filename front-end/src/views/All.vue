<template>
  <div class="all">
    <h2 class="text-white my-5 section-header">Browse Cookies</h2>
    <div class="input-group rounded search-cookie-container">
      <input class="form-control search-cookie-input" type="text" placeholder="Search.." v-model="searchText">
      <span class="btn border-0 text-white bg-dark" id="search-addon">
        <i class="fa fa-search"></i>
      </span>
    </div>
    <CookieList :cookies="cookies"/>
  </div>
</template>

<script>
import axios from 'axios';
import CookieList from "@/components/CookieList.vue";
export default {
  name: 'All',
  components: {
    CookieList
  },
  data() {
    return {
      cookies: [],
      searchText: '',
    }
  },
  computed: {
    // cookies() {
    //   return this.$root.$data.cookies.filter(cookie => (cookie.title + cookie.description + cookie.user).toLowerCase().search(this.searchText.toLowerCase()) >= 0).sort((a, b) => (a.avgRating < b.avgRating) ? 1 : -1);
    // }
  },
  created() {
    this.getCookies();
  },
  methods: {
    async getCookies() {
        try {
          this.response = await axios.get("/api/cookies");
          this.cookies = this.response.data;
        } catch (error) {
          this.error = error.response.data.message;
        }
      },
  },
}
</script>

<style scoped>
.all {
  width: 80%;
  margin: auto auto;
}

.input-group {
  width: clamp(220px, 50%, 700px);
  margin: auto auto;
}
</style>
