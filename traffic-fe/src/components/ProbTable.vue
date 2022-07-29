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
      <template v-if="column.key === 'probability'">
        <a-statistic
          :value="record.number"
          :precision="6"
          suffix="%"
          :value-style="{
            color: '#cf1322',
            fontSize: '18px'
          }"
          style="margin-right: 50px;"
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

export default defineComponent({
  props: {
    columns: Array,
    data: Array
  },
  components: {
    SmileOutlined,
    DownOutlined,
    ArrowUpOutlined,
    ArrowDownOutlined,
  },

  computed: {
  }
});
</script>
