<template>
  <a-table 
  :bordered="true"
  :columns="columns" :data-source="data" :pagination="false"
  size="small"
  >
    <template #headerCell="{ column }" :fixed="true">
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'RoadType'">
        <a>
          {{ record.name }}
        </a>
      </template>
      <template v-else-if="column.key === 'probability'">
        <a-statistic
            :value="record.probability * 100"
            :precision="2"
            suffix="%"
            :value-style="{
              color: record.probability > 0.1 ? '#cf1322' : '#3f8600',
              fontSize: '18px' }"
            style="margin-right: 50px"
          >
          </a-statistic>
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
      columns: state => state.traffic.roadColumns
    }),
    ...mapGetters('traffic', {
      data: 'roadTypeData'
    })
  }
});
</script>
