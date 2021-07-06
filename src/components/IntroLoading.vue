<template>
  <div class="loading-container">
    <div class="loading">
      <div class="square"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const container = document.querySelector('.loading');
    const square = document.querySelector('.square');
    const circles = document.querySelectorAll('.circle');
    const radius = 155;
    const diameter = radius * 2;
    const edge = 128; //size square
    const text = "IKGUYZ"; //text circle
    container.style.width = `${diameter}px`;
    container.style.height = `${diameter}px`;
    square.style.width = `${edge}px`;
    square.style.height = `${edge}px`;
    square.style.top = `${radius - edge / 2}px`;
    square.style.left = `${radius - edge / 2}px`;

    const distance = -120 / 2;
    const positions = [
      {x: radius, y: -distance},
      {x: diameter + distance, y: radius},
      {x: radius, y: diameter + distance},
      {x: 0 - distance, y: radius},
    ];
    circles.forEach((circle, index) => {
      const {x, y} = positions[index];
      circle.style.top = `${x}px`;
      circle.style.left = `${y}px`;
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

.loading {
  position: relative;

  .square {
    position: absolute;
    background: url('/assets/images/avatar/KT1K99.jpg');
    background-size: cover;

  }

  .circle {
    position: absolute;
    color: #fff;
    font-size: 0.6em;
    animation: spin 3s ease-in infinite;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 5px 5px;
    pointer-events: none;
    /*width: 4px;*/
    /*height: 4px;*/
    /*background: red;*/
    span {
      display: inline-block;
      position: absolute;
      text-transform: uppercase;
    }
  }
}


@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}


</style>