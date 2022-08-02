<template>
  <a-layout class="layout">
    <a-layout-header>
      <span class="logo" @click="goHome()">Traffic Accident Platform</span>
      <a-menu
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">Accidents of Year</a-menu-item>
        <a-menu-item key="2">All Vehicles</a-menu-item>
        <a-menu-item key="3">Probability</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 20px">
      <!-- <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>List</a-breadcrumb-item>
        <a-breadcrumb-item>App</a-breadcrumb-item>
      </a-breadcrumb> -->
      <div class="padding-height"></div>

      <div :style="{ background: '#fff', padding: '12px', minHeight: '800px' }">
        <template v-if="selectedKeys.includes('1')">
          <statistic></statistic>
        </template>
        <template v-else-if="selectedKeys.includes('2')">
          <all-traffic></all-traffic>
        </template>
        <template v-else-if="selectedKeys.includes('3')">
          <probability></probability>
        </template>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Traffic Statistics of England.
    </a-layout-footer>
  </a-layout>
</template>
<script>
import { defineComponent} from "vue";
import Statistic from "./Statistic.vue";
import AllTraffic from "./AllTraffic.vue";
import Probability from './Prob.vue';

export default defineComponent({
  components: {
    Statistic,
    AllTraffic,
    Probability
  },
  data() {
    return {
      selectedKeys: [this.$route.params.type || '1']
    }
  },
  created() {
    this.$store.dispatch('traffic/initData')
    this.$store.dispatch('allTraffic/initData')
  },
  methods: {
    goHome: function() {
      this.$router.push('/')
    }
  }
});
</script>
<style lang="less">
.site-layout-content {
  min-height: 280px;
  padding: 24px;
  background: #fff;
}
.logo {
  height: auto;
  float: left;
  color: white;
  font-weight: 700;
  font-size: 26px;
  font-style: italic;
  padding-right: 12px;
  &:hover {
    cursor: pointer;
    color: rgb(196, 197, 196);
  }
}

[data-theme="dark"] .site-layout-content {
  background: #141414;
}
.padding-height {
  height: 24px;
}
</style>
