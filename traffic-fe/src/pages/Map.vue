<template>
  <div>
    <selected></selected>
    <div class="map-container">
      <img :src="src" alt="" class="map-image" />
    </div>
  </div>
</template>

<script>
import Selected from "../components/Selected.vue";
import { defineComponent } from "vue";
import image09 from "../assets/09.png";
import image10 from "../assets/10.png";
import image11 from "../assets/11.png";
import image12 from "../assets/12.png";
import image13 from "../assets/13.png";
import image14 from "../assets/14.png";
import image15 from "../assets/15.png";
import image16 from "../assets/16.png";

import { mapState } from "vuex";

const keyValue = {
  image09: image09,
  image10: image10,
  image11: image11,
  image12: image12,
  image13: image13,
  image14: image14,
  image15: image15,
  image16: image16,
};

export default defineComponent({
  components: {
    Selected,
  },
  computed: {
    ...mapState({
      src: (state) =>
        keyValue["image" + state.traffic.selectedYear.slice(2, 4)],
    }),
  },
});
</script>

<style>
.map-container {
  width: 80vw;
  height: 70vh;
  display: flex;
  justify-content: space-around;
}
.map-image {
  height: 70vh;
}
</style>
