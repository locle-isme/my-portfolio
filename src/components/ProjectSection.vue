<template>
  <section class="project" id="projects">
    <h2 class="section__title">Pet Projects</h2>
    <small class="section__description">Some projects me participate</small>
    <div class="slide-container">
      <template v-for="(project,index) in projects" :key="'pp' + index">
        <div class="slide-container__content">
          <div class="content-slide__detail">
            <div class="img-thumbnail">
              <img :src="project.image" alt="">
            </div>
            <div class="description">
              <h4 class="title">{{ project.title }}</h4>
              <div class="short-description">
                {{ project.shortDescription }}
              </div>
              <div class="btn-group">
                <button class="btn btn-sm btn-first btn-detail" @click="changeShowModal(true, index)">Detail
                  <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </button>
                <a target="_blank" class="btn btn-sm btn-secondary btn-detail" :href="project.source">
                  <i class="fa fa-github" aria-hidden="true"></i>
                  Source code
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
    <VModal v-if="showModal === true" :item="currentProject" @close="changeShowModal(false)">
      <template #project_body="{item}">
        <div class="img-thumbnail">
          <img :src="item.image" alt="">
        </div>
        <div class="description">
          <h3 class="title">{{ item.title }}</h3>
          <div class="source-demo">
            <div class="source">
              <a class="btn btn-detail" :href="item.source" target="_blank">
                <span>Source </span>
                <i class="fa fa-2x fa-github"></i>
              </a>
            </div>
            <div class="demo">
              <a class="btn btn-detail" :href="item.demo" target="_blank">
                <span>Demo here </span>
                <i class="fa fa-2x fa-link"></i>
              </a>
            </div>
          </div>
          <template v-for="(detail, index) in item.details" :key="'detail-attr' + index">
            <div class="row-attribute">
              <div class="label">{{ detail.label }}:</div>
              <div class="value">{{ detail.value }}</div>
            </div>
          </template>
        </div>
      </template>
    </VModal>
  </section>
</template>
<script lang="ts">
import {defineComponent, PropType} from "vue";
import VModal from './VModal.vue';
import Project from "@/types/Project";

export default defineComponent({
  props: {
    projects: {
      required: true,
      type: Array as PropType<Project[]>,
    }
  },

  data() {
    return {
      showModal: false,
      currentSlideIndex: 0,
    }
  },

  methods: {
    changeShowModal(status: boolean, index = 0): void {
      this.currentSlideIndex = index;
      this.showModal = status;
    },
  },

  computed: {
    currentProject(): object {
      const {currentSlideIndex} = this;
      return this.projects.find((item, index) => index === currentSlideIndex) || {};
    }
  },

  components: {
    VModal,
  }
})
</script>

<style lang="scss">
$width-image: 230px;
.project {
  .slide-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: $max-width-screen;
    @include md {
      width: auto;
    }

    @include lg {
      width: auto;
    }

    @include sm {
      width: $sm-width-screen;
    }


    .slide-container__content {
      position: relative;
      height: auto;
      width: 100%;
      margin: var(--m-05) 0;
      display: flex;

      &:nth-child(odd) .content-slide__detail {
        flex-direction: row-reverse;

        .description {
          padding-right: var(--p-1);
        }
      }

      &:nth-child(even) .content-slide__detail {
        flex-direction: row;

        .description {
          padding-left: var(--p-1);
        }
      }

      .content-slide__detail {
        width: 100%;
        display: flex;
        padding: 0 var(--p-2);
        @include sm {
          flex-direction: column;
        }


        .img-thumbnail {
          display: flex;
          width: $width-image;
          height: calc(#{$width-image} - 30px);
          @include sm {
            display: none;
          }
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
          /* display: flex;
           flex-direction: column;*/
          width: calc(100% - #{$width-image});
          @include sm {
            width: 100%;
            display: flex;
            flex-direction: column;
            padding: 0 var(--p-1);
          }

          .title {
            @include sm {
              text-align: center;
            }
          }

          .short-description {
            display: inline-block;
            white-space: pre-wrap;
            padding: 1rem 0;
            font-size: $smaller-font-size;

            @include sm {
              text-align: justify;
            }
          }

          .btn-group {

            @include sm {
              align-self: center;
            }

            .btn-detail {
              margin-right: 1rem;
            }
          }

        }
      }
    }
  }

  .modal {
    $width-image-modal: 560px;

    .modal-body {
      display: flex;
      width: 100%;
      height: auto;

      @include lg() {
        flex-direction: column-reverse;
      }


      .img-thumbnail {
        width: $width-image-modal;
        @include lg() {
          width: 100%;
        }

        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }

      .description {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
        width: calc(100% - #{$width-image-modal});
        @include lg() {
          width: 100%;
        }


        .row-attribute {
          padding: 0.5rem 0;

          .label {
            font-weight: $font-medium;
            text-transform: capitalize;
          }

          .value {
            white-space: pre-wrap;
            text-align: left;
          }
        }

        .source-demo {
          display: flex;
          column-gap: 1em;
          margin-top: 5px;
          font-size: 0.85em;
          font-weight: $font-semi-bold;
          color: #fff0f5;

          .btn-detail {
            padding: 4px 10px;
            transition: 300ms;
            color: #fff !important;
            background: $dark-colour !important;
          }

          .btn-detail:hover {
            background: #fff !important;
            color: $dark-colour !important;
          }
        }
      }
    }
  }


}
</style>