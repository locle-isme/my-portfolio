<template>
  <section class="intro" id="intro">
    <div class="intro__banner">
      <img class="banner__image" src="@/assets/images/banner/bien_ho.jpg" alt="">
      <div class="intro__avatar" :style="avatarImagePosition">
        <div class="avatar-box">
          <img class="avatar__image" src="@/assets/images/avatar/KT1K99.jpg">
        </div>
        <span class="active-status" :class="activeStatus"></span>
      </div>
      <div v-if="meSelfStyle === 2" class="me__box">
        <div class="me__box-info">
          <p class="me__box-name">{{ me.fullName }}</p>
          <p class="me__box-major">({{ me.major }})</p>
        </div>
        <h4><i class="fa fa-map-marker"></i> {{ me.location }}</h4>
        <div class="contact-box">
          <small>
            <a :href="'tel:' + me.phone"><i class="fa fa-phone"></i> {{ phoneText(me.phone) }}</a>
          </small>
          <small>
            <a :href="'mailto:' + me.email"><i class="fa fa-envelope"></i> {{ me.email }}</a>
          </small>
        </div>
      </div>
    </div>
    <div class="intro__box">
      <template v-if="meSelfStyle === 1">
        <h2 class="box__name">{{ me.fullName }}</h2>
        <small class="box__sub-name">({{ me.major }})</small>
      </template>
      <div class="box__description" :style="boxDescriptionPosition">{{ me.description }}</div>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent, PropType} from "vue";
import Myself from "@/types/Myself";
import PhoneText from "@/mixins/PhoneText";

export default defineComponent({
  props: {
    me: {
      required: true,
      type: Object as PropType<Myself>
    },
    meSelfStyle: {
      type: Number,
      default: 1,
    }
  },

  mixins: [PhoneText],

  computed: {
    avatarImagePosition(): object {
      let styleAdditional = {
        left: "50%",
        bottom: "0",
        transform: "translate(-50%, 15%)",
      }
      if (this.meSelfStyle === 2) {
        styleAdditional.left = "0";
        styleAdditional.bottom = "0";
        styleAdditional.transform = "translate(10%, 38%)";
      }
      return styleAdditional;
    },

    boxDescriptionPosition(): object {
      let styleAdditional = {
        marginTop: "0"
      }
      if (this.meSelfStyle === 2) {
        styleAdditional.marginTop = "100px";
      }
      return styleAdditional;
    },

    activeStatus(): object {
      const d = new Date();
      let hour = d.getUTCHours();
      let classAdditional = {};
      if (hour > 16 || hour < 2) {
        classAdditional = Object.assign(classAdditional, {off: true})
      } else {
        classAdditional = Object.assign(classAdditional, {on: true})
      }
      return classAdditional;
    }
  }
})
</script>

<style lang="scss">
.intro {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  .intro__banner {
    position: relative;
    width: 100%;
    height: 250px;
    @include sm {
      height: 200px;
    }

    .me__box {
      display: block;
      margin-left: 220px;
      @include sm {
        margin-left: 110px;
      }

      .me__box-info, .contact-box {
        display: flex;
        align-items: center;
      }

      .me__box-info {
        column-gap: 0.5rem;
      }

      .contact-box {
        margin-top: 0.22rem;
        column-gap: 2rem;
        @include sm {
          flex-direction: column;
          align-items: flex-start;
        }

        a {
          color: $dark-colour;
        }
      }

      .me__box-name {
        font-weight: 600;
        line-height: 1.2;
        font-size: 1.5rem;
      }

      .me__box-major {
        font-weight: 500;
        line-height: 1.2;
        font-size: 0.8rem;
      }
    }

    .banner__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .intro__avatar {
      position: absolute;
      width: 189px;
      height: 189px;
      @include sm {
        width: 100px;
        height: 100px;
      }

      .avatar-box {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 4px #fff solid;
        overflow: hidden;
      }

      .avatar__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .active-status {
        z-index: 9999;
        position: absolute;
        bottom: 6%;
        right: 6%;
        border: 4px #fff solid;
        width: 18%;
        height: 18%;
        border-radius: 50%;

        &.on {
          background: $active-colour;
        }

        &.off {
          background: $inactive-colour;
        }
      }

    }
  }

  .intro__box {
    padding-top: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .box__name {
      font-size: 1.9em;
      font-weight: bold;
      margin-top: 1.25rem;
      margin-bottom: -0.2rem;
    }

    .box__description {
      white-space: pre-wrap;
      width: auto;
      font-size: $smaller-font-size;
      text-align: center;
      @include sm() {
        text-align: justify;
      }
    }
  }
}

</style>