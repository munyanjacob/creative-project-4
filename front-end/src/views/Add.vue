<template>
  <div class="add">
    <h2 class="text-white my-5 section-header">Add a New Cookie <span>to the Database</span></h2>

    <div class="d-flex justify-content-center">

      <form class="bg-dark p-3 w-75 main-section new-cookie-form">
        <div class="form-group row" >
          <div class="col-sm-12 d-flex flex-column text-start" v-on:click.prevent="importPic">
            <label for="inputImage">Cookie Picture</label>
            <input type="file" class="form-control-file" id="inputImage" v-on:click.prevent="" > 
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12">
            <input type="text" class="form-control" id="inputCookieName" placeholder="Cookie Name" v-model="addTitle">
          </div>
        </div>

        <div class="form-group row">
          <div class="col-sm-12">
            <input type="text" class="form-control" id="inputUserName" placeholder="Your Name (public)" v-model="addName">
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12">
            <textarea class="form-control" id="inputCookieRecipe" placeholder="Recipe" v-model="addRecipe"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12 pt-3 align-self-center">
            <button type="button" class="btn btn-primary" @click="submitItem">Submit</button>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Add',
  components: {
  },
  data: function () {
    return {
      addTitle: "",
      addName: "",
      addRecipe: ""
    }
  },
  methods: {
    importPic() {
      alert("This function will be added in a later version. For now, a placeholder pic will be uploaded when you submit.");
    },
    submitItem() {
      this.$root.$data.cookies.push({
        id: this.$root.$data.cookies.length,
        imgName: "placeholder.jpg",
        title: this.addTitle,
        user: this.addName,
        description: this.addRecipe,
        avgRating: 0,
        numRatings: 0
    },)

    this.addTitle = '';
    this.addName = '';
    this.addRecipe = '';
    }
  }
}
</script>

<style scoped>
.new-cookie-form .form-group {
  margin-bottom: 8px;
}
.add {
  width: min(100%, 1200px);
  margin: 0px auto;
}
</style>