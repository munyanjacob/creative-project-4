<template>
    <div class="row gx-0">
        <div class="col-lg-12">

            <CookieCard v-for="cookie in cookies" :cookie="cookie" :key="cookie.id"/>

        </div>
    </div>

</template>

<script>
import CookieCard from "@/components/CookieCard.vue"
export default {
    name: "CookieList",
    props: {
        cookies: Array
    },
    components: {
        CookieCard
    }
}
</script>