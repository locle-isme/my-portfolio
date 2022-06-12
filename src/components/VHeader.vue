<template>

  <header class="header" ref="header">
    <nav class="nav">
      <a href="#" class="nav__logo" @click.prevent="$emit('scrollMeTo','intro')">#locle > isme</a>
      <div class="nav__menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#" class="nav__link" @click.prevent="$emit('scrollMeTo','intro')">
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link" @click.prevent="$emit('scrollMeTo','intro')">
              About
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link" @click.prevent="$emit('scrollMeTo','skills')">
              Skills
            </a></li>
          <li class="nav__item">
            <a href="#" class="nav__link" @click.prevent="$emit('scrollMeTo','timeline')">
              Timeline
            </a></li>
          <li class="nav__item">
            <a href="#" class="nav__link" @click.prevent="$emit('scrollMeTo','projects')">
              Projects
            </a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link" @click.prevent="$emit('scrollMeTo','gallery')">
              Gallery
            </a>
          </li>
        </ul>
      </div>
      <div ref="changeModeBtn" class="nav__change-button" @click="changeMode()" v-html="iconMode">
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  emits: ['scrollMeTo'],
  data() {
    return {
      mode: 'light',
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrollNav);
    const changeModeBtn = this.$refs.changeModeBtn;
    const app = document.getElementById('app');
    changeModeBtn.addEventListener('click', () => {
      const {mode} = this;
      if (mode === 'dark') {
        app.classList.add('dark-mode');
      } else {
        app.classList.remove('dark-mode');
      }
    })
  },
  methods: {
    changeMode(): void {
      this.mode = this.mode === 'light' ? 'dark' : 'light';
    },

    scrollNav(): void {
      const element = this.$refs.header;
      document.addEventListener('scroll', function () {
        let lastKnownScrollPosition = window.scrollY;
        if (lastKnownScrollPosition > 80) {
          if (element) {
            element.classList.add('scroll-view');
          }
        } else {
          if (element) {
            element.classList.remove('scroll-view');
          }
        }
      });
    },


  },

  computed: {
    iconMode(): string {
      const {mode} = this;
      return mode === 'light' ? '<i class="fa fa-moon-o"></i>' : '<i class="fa fa-sun-o"></i>';
    }
  }
})
</script>

<style lang="scss">

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: $z-fixed;
  background: #fff;


  &.scroll-view {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  .nav {
    width: $max-width-screen;
    height: 57px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    column-gap: 1rem;
    @include md {
      width: 720px;
    }

    @include sm {
      display: none;
    }

    .nav__logo {
      color: $dark-colour;

      &:hover {
        color: #000;
      }
    }

    .nav__menu {
      margin-left: auto;

      .nav__list {
        display: flex;
        column-gap: 2rem;

        .nav__link {
          font-size: $small-font-size;
        }
      }
    }

    .nav__change-button {
      text-align: right;
      min-width: 25px;
      cursor: pointer;
    }
  }
}

.dark-mode {
  .header {
    color: $five-colour;
    background: $dark-colour;

    .nav__logo {
      color: $five-colour;

    }

    a {
      color: $five-colour;
    }
  }
}
</style>