<template>
    
    <div class="card bg-dark">
        <div class="row gx-0">
            <div class="col-sm-12 col-lg-5 px-0">
            <div class="card-body d-flex justify-content-center">
                <img :src="cookie.path" class="cookie-image" :class="{ 'cookie-image-emphasis': emphasis }" alt="Image of cookie.">
            </div>
            </div>
            <div class="col-sm-12 col-lg-7 px-0 align-self-center">
            <div class="card-body cookie-card-details px-1">
                <div class="d-flex justify-content-center mb-4">
                <div class="cookie-title-wrapper">
                    <h3 class="px-2"><strong>{{cookie.title}}</strong></h3>
                    <h5> by {{cookie.name}}</h5>
                </div>
                </div>
                <p>{{cookie.description}}</p>
                <div class="d-flex justify-content-center cookie-description-wrapper">
                <p>Rated: <strong>{{cookie.rating}}</strong></p>
                </div>
            </div>
            </div>
        </div>
    </div>
           
</template>

<script>
export default {
    name: "CookieCard",
    props: {
        cookie: Object,
        emphasis: Boolean,
    },
    created(){
    },
}
</script>

<style scoped>
.cookie-image {
  height: 350px;
  max-width: 300px;
  object-fit: cover;
}

.cookie-image-emphasis {
  height: 450px;
  max-width: 500px;
}

.cookie-title-wrapper {
  vertical-align: top;
  line-height: 28px;
}

.cookie-description-wrapper {
  vertical-align: top;
  line-height: 1rem;
}

.cookie-card {
  margin-bottom: 1rem;
  
}

.card {
    max-width: 950px;
    margin: 10px auto
}

@media (min-width: 992px) {
  .cookie-card-details {
    border-left: 1px solid gray;
  }
}
</style>