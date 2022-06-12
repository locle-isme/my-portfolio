<template>
  <section class="timeline" id="timeline">
    <h2 class="section__title">Timeline</h2>
    <small class="section__description">My journey <i class="fa fa-heart text-heart"></i></small>
    <template v-for="(timeline, index) in timeLineList" :key="'tl' + index">
      <TimeLineContent :timeline="timeline"/>
    </template>
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import TimeLineContent from "./TimeLineContent.vue";
import Timeline from "@/types/Timeline";

export default defineComponent({
  props: {
    timelines: {
      required: true,
      type: Array as PropType<Timeline[]>,
    }
  },

  computed: {
    timeLineList(): any {
      const {timelines} = this;
      return timelines.reverse();
    }
  },

  components: {
    TimeLineContent
  }
})
</script>

<style lang="scss">
.timeline {
  width: 700px;
  @include md {
    width: auto;
  }

  @include sm {
    width: 300px;
  }

  .text-heart {
    color: $second-colour;
  }

  .timeline__content {
    display: flex;
    width: 80%;
    @include md {
      width: 100%;
    }

    &:nth-child(even) {
      text-align: left;
      flex-direction: row-reverse;
      @include sm {
        text-align: center;
      }
    }

    &:nth-child(odd) {
      text-align: right;

      @include sm {
        text-align: center;
      }
    }


    @mixin w-data() {
      display: inline-block;
      //max-width: #{$w}px;
      width: calc((100% - 2rem - 13px) / 2);
      @include sm {
        width: 100%;
      }
      padding: var(--m-05) 0;
    }

    .content__empty {
      @include w-data();
      @include sm {
        display: none;
      }
    }

    .content__data {
      @include w-data();

      .timeline__title {
        margin-top: -0.2rem;
        margin-bottom: 0.2rem;
      }

      .timeline__sub-title {
        font-size: $small-font-size;
      }

      .timeline__calender {
        margin-top: var(--m-05);

        span {
          margin: 0 var(--m-05);
          font-size: $smallest-font-size;
        }
      }

    }

    .content__line {
      padding: 0 var(--m-1);
      display: flex;
      flex-direction: column;
      align-items: center;
      @include sm {
        display: none;
      }

      .line__rounder {
        display: block;
        width: 13px;
        height: 13px;
        background: $first-colour;
        border-radius: 50%;
      }

      .line__pipe {
        height: 100%;
        width: 1px;
        background: $first-colour;

      }
    }
  }
}
</style>