<template>
  <a-table
    :columns="columns"
    :bordered="true"
    :data-source="data"
    :pagination="false"
    size="small"
  >
    <template #headerCell="{ column }"> </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'CarType'">
        <a>
          {{ record.name }}
        </a>
      </template>
    </template>
  </a-table>
</template>
<script>
import {
  SmileOutlined,
  DownOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";

export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
  },

  computed: {
    ...mapState({
      columns: state => state.allTraffic.columns
    }),
    ...mapGetters('allTraffic', {
      data: 'carTypeData'
    })
  }
});
</script>
