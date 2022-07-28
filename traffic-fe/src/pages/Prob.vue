<template>
    <div> 
        <selected></selected>
        <div class="content">
            <div class="left">
                <car-type-all></car-type-all>
            </div>
            <div class="right">
                <road-type-all></road-type-all>
            </div>
        </div>

    </div>
</template>

<script>
import Selected from '../components/Selected.vue';
import CarTypeAll from '../components/CarTypeAll.vue';
import RoadTypeAll from '../components/RoadTypeAll.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Selected, CarTypeAll, RoadTypeAll
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