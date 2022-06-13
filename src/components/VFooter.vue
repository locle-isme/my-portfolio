<template>
  <footer class="footer" id="footer">
    <div class="footer__container">
      <div class="container__info">
        <div class="footer__menu">
          <h2 class="title">Explore</h2>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="" class="nav-link" @click.prevent="$emit('scrollMeTo','intro')">About</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link" @click.prevent="$emit('scrollMeTo', 'skills')">Skills</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link" @click.prevent="$emit('scrollMeTo', 'timeline')">Timeline</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link" @click.prevent="$emit('scrollMeTo', 'projects')">Projects</a>
            </li>
            <li class="nav-item">
              <a href="" class="nav-link" @click.prevent="$emit('scrollMeTo', 'gallery')">Gallery</a>
            </li>
          </ul>
        </div>
        <div class="footer__title">
          <h2 class="my-name">{{ fullName }}</h2>
          <h4 class="major">({{ major }})</h4>
          <div class="contact-me">
            <a :href="'mailto:' + email" class="email"><i class="fa fa-envelope-o" aria-hidden="true"></i>
              {{ email }}
            </a>
            <a :href="'tel:' + phone" class="phone"><i class="fa fa-phone" aria-hidden="true"></i>
              {{ phoneText(phone) }}
            </a>
          </div>
        </div>
        <div class="footer__social">
          <template v-for="(social,index) in socials" :key="'social' + index">
            <a :href="social.url" target="_blank"><i :class="social.icon"></i></a>
          </template>
        </div>
      </div>
      <div class="copyright"><i class="fa fa-copyright"></i> Copyright by <a
          href="https://www.facebook.com/LocLe.isme/" target="_blank">me</a> <i class="fa fa-heart"></i></div>
    </div>
  </footer>
</template>

<script lang="ts">

import {defineComponent, PropType} from "vue";
import Myself from "@/types/Myself";
import PhoneText from "@/mixins/PhoneText";

export default defineComponent({
  props: {
    me: {
      type: Object as PropType<Myself>,
      required: true,
    }
  },

  mixins: [PhoneText],

  computed: {
    socials(): any {
      const {socials} = this.me;
      return socials || [];
    },

    phone(): string {
      const {phone} = this.me;
      return phone || '';
    },

    email(): string {
      const {email} = this.me;
      return email;
    },
    fullName(): string {
      const {fullName} = this.me;
      return fullName || '';
    },
    major(): string {
      const {major} = this.me;
      return major || '';
    },
  },
})
</script>

<style lang="scss">
.footer {
  a {
    color: initial;
  }

  width: 100%;
  display: flex;
  justify-content: center;

  .footer__container {
    margin-top: 8rem;
    padding-top: 2rem;
    padding-bottom: 0.5rem;
    width: $max-width-screen;
    @include xl {
      width: $max-width-screen;
    }
    @include lg {
      width: auto;
    }

    @include md {
      width: auto;
    }

    @include sm {
      width: $sm-width-screen;
    }
    background: $first-colour;
    display: flex;
    flex-direction: column;

    .container__info {
      width: 100%;
      display: flex;
      justify-content: space-around;

      @include sm {
        flex-direction: column;
        align-items: center;
      }
      @mixin footer_item {
        display: flex;
        flex: 1;
      }

      .footer__menu {
        text-align: center;

        .nav-link {
          &:before {
            content: '#';
          }
        }
      }

      .footer__title {
        text-align: center;

        .my-name {
          text-transform: uppercase;
        }

        .major {
          text-transform: capitalize;
        }

        .contact-me {
          display: flex;
          flex-direction: column;
          font-size: 0.92em;
        }
      }

      .footer__social {


        .fa {
          font-size: 1.3rem;
          cursor: pointer;
          margin: 0 0.5rem;
          transition: 300ms;
          padding: 0.5rem;

          &:hover {
            border-radius: 10%;
            background: #fff;
            transform: scale(2);
          }

          &.fa-facebook-official:hover {
            color: $facebook-coulour;
          }

          &.fa-twitter:hover {
            color: $twitter-coulour;
          }

          &.fa-github:hover {
            color: $github-coulour;
          }
        }
      }
    }

    .copyright {
      font-size: $smallest-font-size;
      padding-top: 2rem;
      text-align: center;
      user-select: none;

      .fa-heart {
        color: $second-colour;
      }
    }
  }
}
</style>