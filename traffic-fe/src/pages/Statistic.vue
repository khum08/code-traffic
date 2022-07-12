<template>
    <div>        
        <selected></selected>
        <div class="content">
            <div class="left">
                <car-type></car-type>
            </div>
            <div class="right">
                <road-type></road-type>
            </div>
        </div>

    </div>
</template>

<script>
import Selected from '../components/Selected.vue';
import CarType from '../components/CarType.vue';
import RoadType from '../components/RoadType.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Selected, CarType, RoadType
    },
    setup() {
        return {};
    }
})

</script>

<style scoped>
.title {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
}
.content {
    display: flex;
}
.left {
    flex: 1;
}

.right {
    flex: 1;
}
</style>