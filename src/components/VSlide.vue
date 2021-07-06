<template>
  <div class="slide-container">
    <template v-for="(list, index) in transformList" :key="'items' + index">
      <div class="slide-container__content" :class="classSlideContent(index)">
        <template v-for="(item,itemChild) in list" :key="'project' + itemChild">
          <slot :classN="classSlideDetail(itemChild)" :item="item" :index="(itemChild+1)*index"
                :currentSlideIndex="currentSlideIndex"
                name="item"></slot>
        </template>
        <span class="slide__previous-button" @click="changeSlide(-1)"><i class="fa fa-chevron-left"></i></span>
        <span class="slide__next-button" @click="changeSlide(1)"><i class="fa fa-chevron-right"></i></span>
      </div>
    </template>
    <div class="slide__dot-container">
      <template v-for="(dot,index) in lengthTransformList" :key="'dot' + dot">
        <slot name="dot" :classN="classDot(index)" :index="index" :changeCurrentSlide="changeCurrentSlide"></slot>
      </template>
    </div>
  </div>
</template>
<script>
import _ from "lodash"

export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    limit: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      currentSlideIndex: 0,
    }
  },
  methods: {
    changeSlide(n) {
      const {currentSlideIndex, lengthTransformList} = this;
      let temp = n + currentSlideIndex;
      if (temp < 0) this.currentSlideIndex = lengthTransformList - 1;
      if (temp > lengthTransformList - 1) this.currentSlideIndex = 0;
      if (temp >= 0 && temp <= lengthTransformList - 1) this.currentSlideIndex = temp;
    },

    changeCurrentSlide(index) {
      const {lengthTransformList} = this;
      if (index >= 0 && index <= lengthTransformList - 1) this.currentSlideIndex = index;
    },
    classSlideContent(index) {
      const {currentSlideIndex} = this;
      return {
        active: index === currentSlideIndex
      }
    },

    classSlideDetail(index) {
      const {currentSlideIndex} = this;
      return {
        active: index === currentSlideIndex
      }
    },

    classDot(index) {
      const {currentSlideIndex} = this;
      return {
        active: index === currentSlideIndex
      }
    }

  },

  computed: {
    lengthTransformList() {
      const {transformList} = this;
      return transformList.length || 0;
    },

    transformList() {
      const {limit, items} = this;
      return _.chunk(items, limit);
    }


  },
}
</script>

<style lang="scss">
$width-image: 230px;
.slide-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: auto;

  .slide-container__content {
    position: relative;
    width: 100%;
    height: 200px;
    margin: var(--m-05) 0;
    display: none;

    &.active {
      display: flex;
    }

    /*
        .content-slide__detail {
          padding: 0 var(--p-2);
          display: flex;

          .img-thumbnail {
            display: flex;
            width: $width-image;
            height: calc(#{$width-image} - 30px);
            border-radius: 4px;
            overflow: hidden;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

            img {
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
          }

          .description {
            width: calc(100% - #{$width-image});
            padding-left: var(--p-1);

            .short-description {
              display: inline-block;
              padding: 1rem 0;
              font-size: $smaller-font-size;
            }
          }
        }
    */

    @mixin button_change_state {
      position: absolute;
      top: 50%;
      font-size: 2em;
      padding: 0.5rem 0.3rem;
      transform: translateY(-50%);
      cursor: pointer;
      transition: all 300ms;

      &:hover {
        color: $third-colour;
        background: rgba(0, 0, 0, 0.5);
      }
    }

    .slide__previous-button {
      @include button_change_state;
      left: -1.2rem;
      @include md{
        left: 0;
      }
    }

    .slide__next-button {
      @include button_change_state;
      right: -1.2rem;
      @include lg{
        right: 0;
      }
    }
  }

  .slide__dot-container {
    display: flex;
    column-gap: 1rem;

    .dot {
      display: inline-block;
      cursor: pointer;
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      background-color: $third-colour;

      &:hover, &.active {
        background-color: $first-colour;
      }
    }
  }
}
</style>