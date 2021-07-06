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

export default {
  data() {
    return {
      title:"Portfolio | Loc Le",
      isLoading: true,
      timeIntro: 1500,
      me: {
        fullName: 'Lộc Lê',
        major: 'Web Developer',
        phone: '+8435 877 1364',
        email: 'locle.isme@gmail.com',
        description: "Contact for work: (+84) 35 877 1364 " +
            "- Email: locle.isme@gmail.com " +
            "- SkypeID: live:.cid.377afd09ce1ddf6e\n\"" +
            "A young man on the way to self-improvement.\"\n" +
            "I used to ask myself that \"How to make a website like this?\" when I access a website, and this is the way me become a web developer. I'm always eager to learn new things, willing to embrace emerging technology. I hope to have the opportunity to work with your company in the future.",
        socials: [
          {
            icon: 'fa fa-facebook-official',
            type: 'facebook',
            url: 'https://www.facebook.com/LocLe.isme',
          },

          {
            icon: 'fa fa-github-alt',
            type: 'github',
            url: 'https://github.com/locle-isme/',
          },
          {
            icon: 'fa fa-twitter',
            type: 'twitter',
            url: 'https://twitter.com/LocLe_isme',
          },
        ]
      },
      skills: {
        frontend: ['VueJS', 'SCSS', 'Axios', 'HTML', 'CSS', 'Javascript'],
        backend: ['PHP', 'Laravel'],
        database: ['MySQL'],
        "Version Control": ['Git'],
      },
      timeline: [
        {
          title: "Ho Chi Minh City University of Transport",
          description: "GPA: 3.27/4.0",
          date: "08/2017 - Present",
          backlink: "https://bit.ly/2U9PP1E",
        },
        {
          title: "HCMC Skills Test 2019",
          description: "The second prize in website design and development",
          date: "12/2019",
          backlink: "https://bit.ly/3w7E0Gz",
        },
        {
          title: "Transport Industry Skills Test 2019",
          description: "The second prize in website design and development",
          date: "12/2019",
          backlink: "https://bit.ly/3w7E0Gz",
        },
        {
          title: "Vietnam National Skills Competition 2020",
          description: "The first prize in website design and development",
          date: "10/2020",
          backlink: "https://bit.ly/364h806",
        },
      ],
      projects: [
        {
          title: 'Graduation essay: Marketplace integrate collaborative filtering',
          image: 'https://i.imgur.com/Nluk0ZP.png',
          shortDescription: 'E-commerce website integrates smart features - product recommendations for users.\nPlease read file README.md into source code to known detail this project!',
          source: 'https://github.com/locle-isme/marketplace-project-client',
          demo: 'https://github.com/locle-isme/marketplace-project-client',
          details: [
            {
              label: 'role',
              value: 'Fullstack Developer',
            },
            {
              label: 'Technology',
              value: 'VueJS, Laravel, Bootstrap, SCSS, MySQL, Axios, Vuex, Vue router, Font Awesome.',
            },
            {
              label: 'Time start',
              value: '03/01/2021'
            },
            {
              label: 'Time end',
              value: '06/25/2021'
            },
            {
              label: 'Members',
              value: 2
            },
            {
              label: 'description',
              value: "Client - Building an e-marketplace website with the following functions:\n" +
                  "        + Recommend products to customers (use Collaborative Filtering/User-based)\n" +
                  "        + Login, register, edit personal information.\n" +
                  "        + Search products, view product details, filter products.\n" +
                  "        + Add products to cart, remove products from cart.\n" +
                  "        + Add discount code into cart.\n" +
                  "        + View store details.\n" +
                  "        + Review purchased products, edit reviews.\n" +
                  "        + Order products.\n" +
                  "        + View orders history, cancel a order.\n" +
                  "        + Add products to favorites.\n" +
                  "Admin - Build an e-marketplace system administration page with the following functions:\n" +
                  "        + Login, register, edit store information.\n" +
                  "        + Overview report.\n" +
                  "        + Orders management.\n" +
                  "        + Products management.\n" +
                  "        + Stores management.\n" +
                  "        + Categories management.\n" +
                  "        + Brands management.\n" +
                  "        + Discounts management."
            },
          ]
        },
        {
          title: 'Event Booking Platform',
          image: 'https://i.imgur.com/79ehH5u.png',
          shortDescription: 'Web application helping them to manage the events and allowing attendees to sign up and see all information they need.\nPlease read file README.md into source code to known detail this project!',
          source: 'https://github.com/locle-isme/event-booking-platform-server',
          demo: 'https://locle-isme.github.io/event-booking-platform-client/',
          details: [
            {
              label: 'role',
              value: 'Fullstack Developer',
            },
            {
              label: 'Technology',
              value: 'VueJS, Laravel, Bootstrap, MySQL, Axios, Vue Router',
            },
            {
              label: 'Time start',
              value: '04/12/2020'
            },
            {
              label: 'Time end',
              value: '04/15/2020'
            },
            {
              label: 'Members',
              value: 1
            },
            {
              label: 'description',
              value: "" +
                  "Client: \n" +
                  "    Building a event booking platform with the following functions:\n" +
                  "        + Login, Register, Logout.\n" +
                  "        + View events upcoming, browser event agenda, register for once event.\n" +
                  "        + Browser detail session, speaker detail.\n" +
                  "        + Show list events registered.\n" +
                  "Admin:\n" +
                  "    Building a event booking platform with the following functions:\n" +
                  "        + Login, logout\n" +
                  "        + Events management.\n" +
                  "        + Tickets management.\n" +
                  "        + Channels management.\n" +
                  "        + Rooms management.\n" +
                  "        + Sessions management.\n" +
                  "        + Speakers Management.\n" +
                  "        + Room overview report."
            },
          ]
        },
        {
          title: 'Crawl album stickers',
          image: 'https://i.imgur.com/aFridku.png',
          shortDescription: 'Using SimpleHtmlDom191 to crawl stickers form line.me & tlgrm.eu.\nPlease read file README.md into source code to known detail this project!',
          source: 'https://github.com/locle-isme/crawl-sticker',
          demo: 'https://github.com/locle-isme/crawl-sticker',
          details: [
            {
              label: 'role',
              value: 'Fullstack Developer',
            },
            {
              label: 'Technology',
              value: 'VueJS, PHP, SimpleHtmlDom_1_9_1.',
            },
            {
              label: 'Time start',
              value: '12/30/2020'
            },
            {
              label: 'Time end',
              value: '01/04/2021'
            },
            {
              label: 'Members',
              value: 1
            },
            {
              label: 'description',
              value: "" +
                  "Using SimpleHtmlDom191 to crawl stickers form line.me & tlgrm.eu. I just make it in free time of last year",
            },
          ]
        },
        {
          title: 'My portfolio',
          image: 'https://i.imgur.com/41CEkKt.png',
          shortDescription: 'Use knowledge I have learned to make a website introduce myself .\nPlease read file README.md into source code to known detail this project!',
          source: 'https://github.com/locle-isme/my-portfolio',
          demo: 'https://flamboyant-northcutt-497073.netlify.app/',
          details: [
            {
              label: 'role',
              value: 'Developer',
            },
            {
              label: 'Technology',
              value: 'VueJS, SCSS, ScrollReveal, Font Awesome.',
            },
            {
              label: 'Time start',
              value: '06/29/2021'
            },
            {
              label: 'Time end',
              value: '07/06/2021'
            },
            {
              label: 'Members',
              value: 1
            },
            {
              label: 'description',
              value: "" +
                  "Use knowledge I have learned to make a website introduce myself",
            },
          ]
        },
      ],
      gallery: [
        {
          image: 'https://i.imgur.com/lmlxaIH.jpg',
          description: 'The second time I went to HN. I hope to visit here as soon as possible to discover more places.',
          date: '10/2020',
        },
        {
          image: 'https://ut.edu.vn/public/img_2019/images/2020/Tay%20nghe.jpg',
          description: 'Me, my friends and teachers took photos together after finishing the National Skills Competition 2020.',
          date: '10/2020',
        },
        {
          image: 'https://i.imgur.com/27qMsE7.jpg',
          description: 'Tan - my partner (also my roommate)- took a photo together.',
          date: '10/2020',
        },
        {
          image: 'https://i.imgur.com/1Bnt38s.jpg',
          description: 'Me, my friends and teachers took a photo together after finishing the Skill Test Competition 2019 organized by Ministry of Transport.',
          date: '12/2019',
        },
        {
          image: 'https://i.imgur.com/m2pDDpc.jpg',
          description: 'The first time I went to the cinema. This time, I saw "Annabelle: Creation" movie.',
          date: '2017',
        },
        {
          image: 'https://i.imgur.com/dRFwIrU.jpg',
          description: 'Me attend a cosplay festival.',
          date: '2018',
        },
      ]
    }
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
