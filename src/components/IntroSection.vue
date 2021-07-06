<template>
  <section class="intro" id="intro">
    <div class="intro__banner">
      <img class="banner__image" src="@/assets/images/banner/bien_ho.jpg" alt="">
      <div class="intro__avatar">
        <img class="avatar__image" src="@/assets/images/avatar/KT1K99.jpg" alt="">
      </div>
    </div>
    <div class="intro__box">
      <h2 class="box__name">{{ me.fullName }}</h2>
      <small class="box__sub-name">({{ me.major }})</small>
      <div class="box__description">{{ me.description }}</div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    me: {
      type: Object,
      required: true
    }
  }
}
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
      border-radius: 50%;
      border: 4px #fff solid;
      overflow: hidden;
      left: 50%;
      bottom: 0;
      transform: translate(-50%, 15%);

      .avatar__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
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
      padding-top: 0.4rem;
      /*@include xl {
        padding-left: 1rem;
        padding-right: 1rem;
      }*/
      text-align: center;
    }
  }
}

</style>