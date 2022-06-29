<template>
    首页
    <ListView :views="viewsData"></ListView>
</template>

<script setup>
import { ref } from 'vue';
import ListView from '../components/ListView.vue';
const viewsData = ref([
    { 
        name: 'line',
        to: '/line-charts'
    },
    { 
        name: 'table',
        to: '/table-charts'
    }
]);
</script>