<template>
  <div class="timeline__content">
    <div class="content__data">
      <h4 class="timeline__title">{{item.title}}</h4>
      <div class="timeline__sub-title">{{ item.description }}</div>
      <div class="timeline__calender">
        <i class="fa fa-calendar-alt" aria-hidden="true"></i>
        <span>{{item.date}}</span>
        <a v-if="item.backlink" target="_blank" :href="item.backlink"><i class="fa fa-link" aria-hidden="true"></i>
        </a></div>
    </div>
    <div class="content__line">
      <span class="line__rounder"></span>
      <span class="line__pipe"></span>
    </div>
    <div class="content__empty"></div>
  </div>
</template>

<script>
export default {
  props:{
    item: {
      type: Object,
      required: true
    }
  },
}
</script>

<style lang="scss">

</style>