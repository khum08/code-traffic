<template>
    <div class="container">
        <div class="left">
            <accident></accident>
        </div>
        <div class="right">Graphics</div>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import Accident from '../components/Accidents.vue'

export default defineComponent({
    components: {
        Accident
    },
    setup() {
        return {}
    }
})
</script>


<style>
.container {
    display: flex;
}
.left {
    flex: 2;
}

.right {
    flex: 3;

}
</style>
