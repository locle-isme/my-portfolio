<template>
  <div class="timeline__content">
    <div class="content__data">
      <h4 class="timeline__title">{{timeline.title}}</h4>
      <div class="timeline__sub-title">{{ timeline.description }}</div>
      <div class="timeline__calender">
        <i class="fa fa-calendar-alt" aria-hidden="true"></i>
        <span>{{timeline.date}}</span>
        <a v-if="timeline.backlink" target="_blank" :href="timeline.backlink">
          <i class="fa fa-link" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class="content__line">
      <span class="line__rounder"></span>
      <span class="line__pipe"></span>
    </div>
    <div class="content__empty"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import Timeline from "@/types/Timeline";
export default defineComponent({
  props:{
    timeline: {
      required: true,
      type: Object as PropType<Timeline>,
    }
  },
})
</script>

<style lang="scss">

</style>