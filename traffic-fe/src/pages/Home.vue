<template>
  <div class="container">
    <div class="left">
      <!-- <img src="../assets/home.jpg" alt="" /> -->
    </div>
    <div class="right">
      <div class="title">
        <div>UK road traffic Accident Platform</div>
        <div style="font-size: 24px; color: #17a472;">from 2009 to 2016</div>
      </div>
      <div class="btn-container">
        <button class="entry-btn" @click="goMain(1)">Accident of year</button>
        <button class="entry-btn"  @click="goMain(2)">All vehicles</button>
        <button class="entry-btn"  @click="goMain(3)">Probability</button>
        <button class="entry-btn"  @click="goMain(4)">Map</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    methods: {
        goMain(type) {
            this.$router.push({name: 'main', params: {type}});
        }
    }
})
</script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  width: 100vw;
  background-image: url(../assets/home.jpg);
  background-size: contain;

}
.left {
  flex: 3;
  position: relative;
}

.left img {
  position: absolute;
  height: 100vh;
  width: 60vw;
}

.right {
  flex: 2;
background: rgba(255, 255, 255, .3);
	-webkit-backdrop-filter: blur(4px);
	backdrop-filter: blur(4px);
}

.title {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-top: 30vh;
  color: #fff;
}

.btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
}
.entry-btn {
  text-align: center;
  font-size: 20px;
  width: 300px;
  background-color: #ffffffaa;
  margin-top: 30px;
  font-style: italic;
  border-radius: 6px;
  height: 44px;
}

.entry-btn:hover {
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}
</style>
