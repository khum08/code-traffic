<template>
    <div class="page">
        <div class="title">Traffic Statistic</div>
        
        <Selected></Selected>
        <div class="content">
            <div class="left"></div>
            <div class="right"></div>
        </div>

    </div>
</template>

<script>
import Selected from '../components/Selected.vue';
export default {
    components: {Selected},
    mounted: () => {
        console.log('mounted');
    }
}

</script>

<style scoped>
.page {
    width: 100vw;
    height: 100vh;
}
.title {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
}
.content {
    display: flex;
    height: 80vh;
}
.left {
    flex: 1;
    background-color: rgb(231, 157, 157);
}

.right {
    flex: 1;
    background-color: aquamarine;
}
</style>