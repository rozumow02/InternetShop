<script setup lang="ts">
import Test from '~/pages/test.vue';
import MainHeader from './components/MainHeader.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
    <div class="gd-container font-spacegrotesk">
        <div>

            <MainHeader />
            <Navbar />
        </div>
        <main class="bg-[#F8F9FA] ">
            <NuxtPage />
        </main>
        <Footer />
    </div>
</template>

<style scoped>
.gd-container {
    display: grid;
    grid-template-rows: 4fr auto;
    min-height: 100vh;
}
</style>