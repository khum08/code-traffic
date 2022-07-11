<template>
  <a-table :columns="columns" :data-source="data" :pagination="false">
    <template #headerCell="{ column }">
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
            :value-style="{ color: record.probability > 0 ? '#3f8600': '#cf1322' }"
            style="margin-right: 50px"
          >
            <template #prefix v-if="record.probability>0">
              <arrow-up-outlined />
            </template>
            <template #prefix v-else-if="record.probability<=0">
              <arrow-down-outlined />
            </template>
          </a-statistic>
      </template>
    </template>
  </a-table>
</template>
<script>
import { SmileOutlined, DownOutlined, ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
const columns = [
  {
    title: "RoadType",
    dataIndex: "name",
    key: "RoadType",
  },
  {
    title: "Probability",
    dataIndex: "probability",
    key: "probability",
  },
];

const data = [
  {
    key: "1",
    name: "Motorways",
    probability: "-25.3",
  },
  {
    key: "2",
    name: "'A'Roads",
    probability: "-23.2",
  },
  {
    key: "3",
    name: "Minor Roads",
    probability: "-17.2",
  },
];
export default defineComponent({
  components: {
    SmileOutlined,
    DownOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
  },

  setup() {
    return {
      data,
      columns,
    };
  },
});
</script>
