<template>
    <div v-for="item in views">
        <router-link :to="item.to">{{item.name}}</router-link>
    </div>
</template>

<script setup>

import { ref, defineProps } from 'vue'

let props = defineProps({
    views: {
        type: Array,
        default: []
    }
})

let views = ref(props.views);
</script>