<template>
  <div class="loading-container">
    <div class="loading-block">
      <div class="square-shape"></div>
      <div class="circle-shape"></div>
      <div class="circle-shape"></div>
      <div class="circle-shape"></div>
      <div class="circle-shape"></div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  props: {
    circleText: {
      type: String,
      default: 'IKIGUYZ',
    }
  },

  mounted() {
    const container = document.querySelector<HTMLElement>('.loading-block');
    const square = document.querySelector<HTMLElement>('.square-shape');
    const circles = document.querySelectorAll<HTMLElement>('.circle-shape');
    const radius = 150;
    const diameter = radius * 2;
    const edge = 80; //size square
    const text = this.circleText; //text circle
    if (container && square) {
      container.style.width = `${diameter}px`;
      container.style.height = `${diameter}px`;
      square.style.width = `${edge}px`;
      square.style.height = `${edge}px`;
      square.style.top = `${radius - (edge / 2)}px`;
      square.style.left = `${radius - (edge / 2)}px`;
      const distance = edge / 2;
      //circle center coordinates
      const positions = [
        {x: distance, y: radius},
        {x: radius, y: diameter - distance},
        {x: diameter - distance, y: radius},
        {x: radius, y: distance},
      ];
      circles.forEach((circle, index) => {
        const {x, y} = positions[index];
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        const characters = Array.from({length: 22}, () => {
          return text
        }).join(" ").split('');
        characters.forEach((character, index) => {
          let spanElement = document.createElement('span');
          spanElement.style.transformOrigin = `0 ${radius}px`;
          spanElement.style.top = `-${radius}px`;
          spanElement.innerText = character;
          spanElement.style.transform = `rotate(${index * (360 / characters.length)}deg)`
          circle.appendChild(spanElement);
        });
      })
    }
  }
})
</script>

<style lang="scss">
.loading-container {
  background: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-block {
  position: relative;

  .square-shape {
    position: absolute;
    background: url('/assets/images/avatar/KT1K99.jpg');
    background-size: cover;
  }

  .circle-shape {
    position: absolute;
    color: #fff;
    font-size: 0.6em;
    animation: spinAnimate 3s ease-in infinite;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.02) 0 5px 5px;
    pointer-events: none;

    span {
      display: inline-block;
      position: absolute;
      text-transform: uppercase;
    }
  }
}


@keyframes spinAnimate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}


</style>