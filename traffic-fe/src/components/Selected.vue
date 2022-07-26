<template>
    <div>
        <a-select 
            placeholder="year"
            v-model:value="defaultYear" label-in-value style="width: 180px" :options="options" @change="handleChange">
        </a-select>
        <button>OK</button>
    </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import {mapState} from 'vuex';
export default defineComponent({
    computed: mapState({
        defaultYear: state => state.traffic.defaultYear,
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
