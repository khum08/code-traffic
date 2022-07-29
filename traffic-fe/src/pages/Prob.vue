<template>
    <div> 
        <selected></selected>
        <div class="content">
            <div class="left">
                <prob-table
                    :columns="carColumns"
                    :data="carData"
                ></prob-table>
            </div>
            <div class="right">
                <prob-table
                    :columns="roadColumns"
                    :data="roadData"
                ></prob-table>
            </div>
        </div>

    </div>
</template>

<script>
import Selected from '../components/Selected.vue';
import { defineComponent } from 'vue';
import ProbTable from '../components/ProbTable.vue';
import { mapState, mapGetters } from "vuex";

export default defineComponent({
    components: {
        Selected, ProbTable
    },
    setup() {
        return {};
    },

    computed: {
        ...mapState({
            carColumns: state => state.prob.carColumns,
            roadColumns: state => state.prob.roadColumns
        }),
        ...mapGetters('prob', {
            carData: 'carData',
            roadData: 'roadData'
        })
    },

    created() {
        this.$store.dispatch('prob/initData');
    },
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