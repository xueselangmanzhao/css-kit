<template>
  <div class="css-water-box">
    <div class="water_wave1"></div>
    <div class="water_wave2"></div>
    <div class="water_wave3"></div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.css-water-box {
  width: 88px;
  height: 88px;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin: auto;
  position: relative;
}
.css-water-box {
  overflow: hidden;
}
.water_wave1 {
  background: linear-gradient(183deg, #15FFE1, #00DAA9);;
  position: absolute;
  width: 200%;
  height: 200%;
  top: 40%;
  left: -25%;
  opacity: 0.7;
  border-radius: 40%;
}
.water_wave2 {
  position: absolute;
  width: 200%;
  height: 200%;
  background-color: #0eaffe;
  top: 45%;
  left: -35%;
  border-radius: 35%;
  opacity: 0.5;
}
.water_wave3 {
  position: absolute;
  width: 200%;
  height: 200%;
  top: 50%;
  left: -35%;
  opacity: 0.3;
  background-color: #0f7ae4;
  border-radius: 33%;
}

@keyframes water-waves {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.css-water-box {
  animation: water-waves linear infinite;
}
.water_wave1 {
  animation: inherit;
  animation-duration: 5s;
}
.water_wave2 {
  animation: inherit;
  animation-duration: 7s;
}
.water_wave3 {
  animation: inherit;
  animation-duration: 11s;
}
</style>
