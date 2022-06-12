<template>
  <template v-if="!isLoading">
    <VHeader @scrollMeTo="scrollMeTo"/>
    <main class="container">
      <MyselfSection :me="me" :meSelfStyle="meSelfStyle"/>
      <SkillSection :skills="skills"/>
      <TimelineSection :timelines="timelines"/>
      <ProjectSection :projects="projects"/>
      <GallerySection :gallery="gallery"/>
    </main>
    <VFooter :me="me" @scrollMeTo="scrollMeTo"/>
  </template>
  <IntroLoading :circleText="circleText" v-if="isLoading"/>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import informationJson from "./information.json";
import configJson from "./config.json";
import IntroLoading from "./components/IntroLoading.vue";
import VHeader from "./components/VHeader.vue";
import MyselfSection from "./components/MyselfSection.vue";
import SkillSection from "./components/SkillSection.vue";
import TimelineSection from "./components/TimelineSection.vue";
import ProjectSection from "./components/ProjectSection.vue";
import GallerySection from "./components/GallerySection.vue";
import VFooter from './components/VFooter.vue';
import ScrollReveal from "scrollreveal";

export default defineComponent({
  components: {
    IntroLoading,
    VHeader,
    MyselfSection,
    SkillSection,
    TimelineSection,
    ProjectSection,
    GallerySection,
    VFooter
  },
  data() {
    const initVariables = {
      isLoading: true,
      turnoffReveal: false,
      title: '',
      circleText: '',
      timeLoadingIntroAnimation: 0,
      meSelfStyle: 1,
      me: {},
      skills: [],
      timelines: [],
      projects: [],
      gallery: [],
    };
    return {...initVariables, ...informationJson, ...configJson}
  },

  methods: {
    scrollMeTo(refName: string): void {
      let element = document.getElementById(refName);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    },
    loadFirstAnimation(): any {
      return new Promise((resolve) => {
        if (!this.isLoading) {
          resolve(true);
        }
        setTimeout(() => {
          this.isLoading = false;
          resolve(true);
        }, this.timeLoadingIntroAnimation);
      })
    },
    revealAnimate(): void {
      let sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: false,
      });
      //all title
      sr.reveal('.section__title', {});
      sr.reveal('.section__description', {delay: 200, origin: 'left'});
      //intro section
      sr.reveal('.intro__banner', {delay: 200, origin: 'top'});
      sr.reveal('.intro__avatar', {delay: 200, origin: 'bottom'});
      sr.reveal('.box__name', {delay: 250, origin: 'top'});
      sr.reveal('.box__sub-name', {delay: 250, origin: 'bottom'});
      sr.reveal('.box__description', {delay: 250, origin: 'left'});
      //skills section
      sr.reveal('.skill__background', {delay: 250, origin: 'left'});
      sr.reveal('.skill .box-title', {delay: 250, origin: 'right'});
      sr.reveal('.skill-name', {distance: '1rem', delay: 50, origin: 'right', interval: 100});
      //timeline section
      sr.reveal('.content__line', {delay: 300, origin: 'top', interval: 200});
      sr.reveal('.content__data', {delay: 300, origin: 'top', interval: 200});
      //project section
      sr.reveal('.slide-container', {delay: 250});
      //gallery section
      sr.reveal('.gallery .image__container', {delay: 250, interval: 200});
      //footer
      sr.reveal('.container__info', {delay: 200});
      sr.reveal('.footer__social .fa', {delay: 50, interval: 250});
      sr.reveal('.footer__title .email', {delay: 250, origin: 'left'});
      sr.reveal('.footer__title .phone', {delay: 250, origin: 'right'});
      sr.reveal('.footer__menu .nav-item', {delay: 50, interval: 150});
      sr.reveal('.copyright', {delay: 200, origin: 'right'});
    },
  },

  mounted() {
    const {title} = this;
    document.title = title;
    this.loadFirstAnimation()
        .then(() => {
          if (!this.turnoffReveal) {
            this.revealAnimate();
          }
        })
  }
})
</script>

<style lang="scss">
#app {
  transition: 300ms;

  &.dark-mode {
    background: $dark-colour;
    color: $five-colour !important;
    a{
      color: $five-colour !important;
    }
  }
}
</style>
