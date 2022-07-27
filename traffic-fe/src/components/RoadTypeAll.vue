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
            :value="record.probability"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#cf1322' }"
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
      columns: state => state.allTraffic.roadColumns
    }),
    ...mapGetters('allTraffic', {
      data: 'roadTypeData'
    })
  }
});
</script>
