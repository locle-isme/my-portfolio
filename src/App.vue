<template>
  <template v-if="!isLoading">
    <VHeader @scrollMeTo="scrollMeTo"/>
    <main class="container">
      <IntroSection :me="me"/>
      <SkillSection :skills="skills"></SkillSection>
      <TimelineSection :timeline="timeline"/>
      <ProjectSection :projects="projects"/>
      <GallerySection :gallery="gallery"/>
    </main>
    <VFooter :me="me" @scrollMeTo="scrollMeTo"/>
  </template>
  <IntroLoading v-if="isLoading"></IntroLoading>
</template>

<script>
import VHeader from "./components/VHeader";
import IntroSection from "./components/IntroSection";
import SkillSection from "./components/SkillSection";
import TimelineSection from "./components/TimelineSection";
import ProjectSection from "./components/ProjectSection";
import GallerySection from "./components/GallerySection";
import VFooter from "./components/VFooter";
import IntroLoading from "./components/IntroLoading";
import ScrollReveal from "scrollreveal";
import json from "./data.json"
export default {
  data() {
    return json
  },

  methods: {
    scrollMeTo(refName) {
      let element = document.getElementById(refName);
      if (element) {
        element.scrollIntoView({behavior: 'smooth'});
      }
    },

    reveal() {
      const sr = ScrollReveal({
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
    loadIntro() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.isLoading = false;
          resolve(true);
        }, this.timeIntro);
      })
    }
  },

  mounted() {
    const {title} = this;
    document.title =  title;
    this.loadIntro()
        .then(() => {
          this.reveal();
        })
  },
  name: 'App',
  components: {
    VHeader,
    IntroSection,
    SkillSection,
    TimelineSection,
    ProjectSection,
    GallerySection,
    VFooter,
    IntroLoading,
  }
}
</script>

<style lang="scss">
</style>
