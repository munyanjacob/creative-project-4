<template>
  <div class="add">
    <h2 class="text-white my-5 section-header">Add a New Cookie <span>to the Database</span></h2>

    <div class="d-flex justify-content-center">

      <form class="bg-dark p-3 w-75 main-section new-cookie-form">
        <div class="form-group row" >
          <div class="col-sm-6 d-flex flex-column align-items-center">
            <!-- <label for="inputImage">Cookie Picture</label> -->
            <!-- <input type="file" class="form-control-file" id="inputImage" v-on:click.prevent="" >  -->
            <fieldset>
            <div class="imageInput" @click="chooseImage">
              <img v-if="url" :src="url" />
              <div v-if="!url" class="placeholder">
                Choose an Image
              </div>
              <input class="fileInput" ref="fileInput" type="file" @input="fileChanged">
            </div>
          </fieldset>
          </div>
          <div class="col-sm-6 d-flex flex-column text-center justify-content-center">
            <label for="rating">Rating: {{addRating}}</label>
            <input type="range" id="rating" name="rating" min="1" max="10" v-model="addRating">
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
            <textarea class="form-control" id="inputCookieRecipe" placeholder="Recipe" v-model="addDescription"></textarea>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-12 pt-3 align-self-center">
            <button type="button" class="btn btn-primary" @click.prevent="upload">Submit</button>
            <p v-if="error" class="error">{{error}}</p>
          </div>
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Add',
  data: function () {
    return {
      addTitle: "",
      addName: "",
      addDescription: "",
      addRating: 1,
      url: "",
      error: '',
      file: null,
    }
  },
  methods: {
    chooseImage() {
      this.$refs.fileInput.click()
    },
    fileChanged(event) {
      this.file = event.target.files[0];
      this.url = URL.createObjectURL(this.file);
    },
    async upload() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name);
        formData.append('title', this.addTitle);
        formData.append('description', this.addDescription);
        formData.append('name', this.addName);
        formData.append('rating', this.addRating);
        await axios.post("/api/cookies", formData);
        this.file = null;
        this.url = "";
        this.addTitle = '';
        this.addName = '';
        this.addDescription = '';
        this.error = "";
      } catch (error) {
        this.error = "Error: " + error.response.data.message;
      }
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

.placeholder {
  background: #F0F0F0;
  width: 200px;
  height: 125px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-size: 14px;
  cursor: pointer;
}

.placeholder:hover {
  background: #E0E0E0;
}

.fileInput {
  display: none;
}

img {
  width: 200px;
}
</style>