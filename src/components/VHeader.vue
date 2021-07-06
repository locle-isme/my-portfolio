<template>

  <header class="header" ref="header">
    <nav class="nav">
      <a href="#" class="nav__logo">#locle > isme</a>
      <div class="nav__menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="" class="nav__link" @click.prevent="$emit('scrollMeTo','intro')">
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="" class="nav__link" @click.prevent="$emit('scrollMeTo','intro')">
              About
            </a>
          </li>
          <li class="nav__item">
            <a href="" class="nav__link" @click.prevent="$emit('scrollMeTo','skills')">
              Skills
            </a></li>
          <li class="nav__item">
            <a href="" class="nav__link" @click.prevent="$emit('scrollMeTo','timeline')">
              Timeline
            </a></li>
          <li class="nav__item">
            <a href="" class="nav__link" @click.prevent="$emit('scrollMeTo','projects')">
              Projects
            </a>
          </li>
          <li class="nav__item">
            <a href="" class="nav__link" @click.prevent="$emit('scrollMeTo','gallery')">
              Gallery
            </a>
          </li>
        </ul>
      </div>
      <div class="nav__change-button">
        <i class="fa fa-moon-o"></i>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ['scrollMeTo'],
  mounted() {
    document.addEventListener('scroll', this.scrollNav);
  },
  methods: {
    scrollNav() {
      const element = this.$refs.header;
      document.addEventListener('scroll', function () {
        let lastKnownScrollPosition = window.scrollY;
        if (lastKnownScrollPosition > 80) {
          if (element) element.classList.add('scroll-view');
        } else {
          if (element) element.classList.remove('scroll-view');
        }
      });
    },
  }
}
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

  }
}
</style>