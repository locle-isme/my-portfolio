<template>
  <section class="gallery" id="gallery">
    <h2 class="section__title">Album Gallery</h2>
    <small class="section__description">My moments in life</small>
    <div class="gallery__container">
      <template v-for="(galleryItem,index) in album.slice(0,6)" :key="'image' + index">
        <div class="image__container">
          <div class="img-detail">
            <img :src="galleryItem.image" alt="">
            <div class="show-more">
              <button class="btn btn-show-more" @click="changeShowModal(true, index)">Show more</button>
            </div>
          </div>
        </div>
      </template>
    </div>
    <VModal v-if="showModal" @close="changeShowModal(false)" :item="currentImage">
      <template #gallery_body="{item}">
        <div class="image__container">
          <div class="image-detail">
            <img class="item" :src="item.image" alt="">
            <div class="description">
              {{ item.description }}
            </div>
            <div v-if="item.date" class="date">{{ item.date }}</div>
          </div>
        </div>
        <span class="slide__previous-button" @click="changeCurrentImage(-1)"><i class="fa fa-chevron-left"></i></span>
        <span class="slide__next-button" @click="changeCurrentImage(1)"><i class="fa fa-chevron-right"></i></span>
        <div class="slide-image-container">
          <div class="slide__frame" :style="styleSlideFrame">
            <template v-for="(galleryItem,index) in album" :key="'windowSlide' + index">
              <div class="thumbnail-image" :class="classActiveSlideImage(index)" @click="changeShowModal(true, index)">
                <img :src="galleryItem.image" alt="">
              </div>
            </template>
          </div>
        </div>
      </template>
    </VModal>
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import VModal from "./VModal.vue";
import GalleryItem from "@/types/GalleryItem";

export default defineComponent({
  props: {
    gallery: {
      type: Array as PropType<GalleryItem[]>,
      required: true
    }
  },

  data: () => {
    return {
      currentImageIndex: 0 as number,
      showModal: false as boolean
    }
  },

  methods: {
    changeShowModal(status: boolean, index: number = 0): void {
      this.currentImageIndex = index;
      this.showModal = status;
    },

    classActiveSlideImage(index: number): object {
      const {currentImageIndex} = this;
      return {
        active: currentImageIndex === index
      }
    },

    changeCurrentImage(n: number): void {
      const {lengthGallery} = this;
      let _currentImageIndex = this.currentImageIndex;
      _currentImageIndex += n;
      if (_currentImageIndex > lengthGallery - 1) {
        _currentImageIndex = 0;
      }
      if (_currentImageIndex < 0) {
        _currentImageIndex = lengthGallery - 1;
      }
      this.currentImageIndex = _currentImageIndex;
    }
  },

  computed: {
    currentImage(): object {
      const {currentImageIndex} = this;
      return this.gallery[currentImageIndex] || {};
    },

    lengthGallery(): number {
      return this.gallery.length || 0;
    },

    styleSlideFrame(): string {
      const {currentImageIndex} = this;
      let temp = currentImageIndex + 1;
      let transform = temp > 10 ? (temp - 10) * 10 : 0;
      return `transform: translateX(-${transform}%); `;
    },

    album(): any{
      const {gallery} = this;
      return gallery.reverse();
    }
  },

  components: {
    VModal
  }
})
</script>

<style lang="scss">
$max-width-gallery: 968px;
.gallery {
  .gallery__container {
    width: $max-width-screen;

    @include lg {
      width: auto;
    }
    @include md {
      width: auto;
    }

    @include sm {
      width: $sm-width-screen;
    }
    display: flex;
    flex-wrap: wrap;

    .image__container {
      display: flex;
      transition: 300ms;
      flex: calc(100% / 3);
      @include md() {
        flex: calc(100% / 1);
        height: 400px;
      }

      height: 200px;
      padding: 2.5px 2.5px;

      .img-detail {
        width: 100%;
        height: 100%;
        position: relative;
        transition: 300ms;
        overflow: hidden;

        img {
          object-position: 100% 10%;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .show-more {
          display: flex;
          width: 100%;
          height: 100%;
          transition: all 0.3s ease-in-out;
        }

        .btn-show-more {
          display: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.48);
          color: $third-colour;
          font-weight: $font-semi-bold;
          padding: 12px 15px;
          border-radius: 0;
          border: 3px #fff solid;
          text-transform: uppercase;
          z-index: $z-tooltip;
          user-select: none;
        }


        &:hover {
          .show-more {
            top: 0;
            position: absolute;
            background: rgba(0, 0, 0, .5);
          }

          .btn-show-more {
            display: block;
          }
        }
      }

    }
  }

  .modal {
    .modal-body {
      flex-direction: column;
      align-items: center;

      .image__container {
        display: flex;
        justify-content: center;

        .image-detail {
          position: relative;
          width: auto;
          height: auto;
          font-family: "Courier New", Courier, monospace;
          /*
          background lo-fi chill
          https://i.imgur.com/5LSZIMV.gif
          https://i.imgur.com/X1cxga4.gif
          */
          background-image: url("https://i.imgur.com/5LSZIMV.gif");
          background-size: auto;
          background-position: center;

          img {
            user-select: none;
            max-width: 100%;
            max-height: 400px;
            transition: 300ms;

            &.background {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 11;
              opacity: 0.3;
              object-fit: cover;

              &:hover {
                opacity: 0;
              }
            }

            &.item {
              opacity: 0.8;
              z-index: 10;

              &:hover {
                opacity: 1;
              }
            }
          }

          .description {
            position: absolute;
            bottom: 10px;
            left: 10px;
            right: 10px;
            color: #fff;
            font-size: $smaller-font-size;
            text-shadow: -1px -1px 0 #000,
            1px -1px 0 #000,
            -1px 1px 0 #000,
            1px 1px 0 #000;
          }

          .date {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: $smallest-font-size;
            color: #000;
            user-select: none;
          }
        }

      }

      .slide-image-container {
        position: absolute;
        bottom: -5rem;
        width: 100%;
        overflow: hidden;

        .slide__frame {
          display: flex;
          justify-content: center;
          white-space: nowrap;

          .thumbnail-image {
            display: inline-block;
            width: 10%;
            height: 75px;
            padding: 4px;

            &.active {
              box-shadow: $four-colour 0 0 0 4px inset;
            }

            img {
              object-fit: cover;
              width: 100%;
              height: 100%;
            }
          }
        }
      }

      @mixin button_change_state {
        position: absolute;
        top: 50%;
        font-size: 2em;
        padding: 0.5rem 0.3rem;
        transform: translateY(-50%);
        cursor: pointer;
        transition: all 300ms;
        z-index: 1000;
        &:hover {
          color: $third-colour;
          background: rgba(0, 0, 0, 0.5);
        }
      }

      .slide__previous-button {
        @include button_change_state;
        left: 0;
      }

      .slide__next-button {
        @include button_change_state;
        right: 0;
      }
    }
  }
}
</style>