<template>
    <div style="margin-bottom: 10px;">
        <span class="label">Select Year:</span>
        <a-select 
            placeholder="year"
            v-model:value="selectedYear" label-in-value style="width: 180px" :options="options" @change="handleChange">
        </a-select>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import {mapState} from 'vuex';
export default defineComponent({
    computed: mapState({
        selectedYear: state => state.traffic.selectedYear,
        options: state => state.traffic.yearList
    }),
    setup: () => {},
    methods: {
        handleChange(item) {
            this.$store.dispatch('traffic/selectYear', item.value)
        },
    }
});
</script>

<style scoped>
.label {
    padding: 8px;
}
</style>
