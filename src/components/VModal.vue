<template>
  <div class="modal">
    <div class="modal-content">
      <div class="modal-head"><span class="close" @click="$emit('close', false)">&times;</span></div>
      <div class="modal-body">
        <slot name="project_body" :item="item"></slot>
        <slot name="gallery_body" :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  },

  data() {
    return {}
  }
}
</script>

<style lang="scss">
$width-image: 300px;
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
  color: #fff;
  z-index: $z-modal;
  overflow: auto;

  .modal-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 3rem 8rem;
    @include lg() {
      padding: 1rem;
    }
  }

  .modal-head {
    .close {
      cursor: pointer;
      font-size: 2rem;
      float: right;
      user-select: none;
    }
  }

  .modal-body {
    position: relative;
    display: flex;
    width: 100%;
    height: auto;

    @include lg() {
      flex-direction: column-reverse;
    }
  }

}


</style>