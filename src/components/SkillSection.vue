<template>
  <section class="skill" id="skills">
    <h2 class="section__title">SKILLS</h2>
    <!--      <small class="section__description">Some projects me participate</small>-->
    <div class="skill__container">
      <div class="skill__background">
        <img src="@/assets/images/skills/bg.jpg" alt="">
        <button class="btn btn-download-cv" @click="downloadCV()">
          DOWNLOAD CV <i class="fa fa-download" aria-hidden="true"></i>
        </button>
      </div>
      <div class="skill__box">
        <div v-for="(skill,index) in skills" class="box__detail" :key="'sktt' + index">
          <h3 class="box-title">{{ index }}</h3>
          <div class="detail">
            <template v-for="(name,index) in skill" :key="'skname' + name + index">
              <div class="skill-name">{{ name }}</div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    skills: {
      type: Object,
      required: true
    }
  },

  methods: {
    downloadCV() {
      const url = "/assets/cv/CV_LocLe.pdf";
      const fileName = "CV-LocLe.pdf";
      const element = document.createElement('a');
      element.setAttribute('href', url);
      element.setAttribute('download', fileName);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  },
  components: {}
}
</script>

<style lang="scss">
.skill {
  .skill__container {
    padding: 1rem 0px;
    display: flex;
    width: $max-width-screen;
    @include md {
      width: auto;
    }

    @include lg {
      width: auto;
    }

    justify-content: center;
    @include sm {
      width: $sm-width-screen;
      flex-direction: column-reverse;
    }


    .skill__box {
      display: flex;
      padding: 0 1rem;
      flex-direction: column;
      width: 50%;
      @include sm {
        width: 100%;
      }

      .box__detail {
        margin-left: 0.5rem;
        @include sm {
          margin-left: 0;
        }

        .box-title {
          text-transform: uppercase;
          text-align: left;
          @include sm {
            text-align: center;
          }
        }

        .detail {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          justify-content: flex-start;
          @include sm {
            justify-content: center;
          }

          .skill-name {
            cursor: pointer;
            color: #fff;
            padding: 2px 6px;
            background: rgba(62, 62, 62, 0.85);
            margin-right: 1rem;
            margin-bottom: 0.5rem;
            margin-top: 0.5rem;
            border-radius: 4px;
            transition: 300ms;
            user-select: none;

            &:hover {
              transform: scale(1.2);
              background: rgb(62, 62, 62);
            }
          }
        }
      }
    }

    .skill__background {
      position: relative;
      display: flex;
      height: auto;
      box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;
      width: 50%;
      @include sm {
        margin-top: 1.5rem;
        width: 100%;
      }

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }

      .btn-download-cv {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 12px 15px;
        background: $first-colour;
        color: #fff;
        font-weight: $font-semi-bold;
      }
    }
  }
}
</style>