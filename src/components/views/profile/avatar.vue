<template>
  <div class="hello">
    <picture-input

        radius="50"
      ref="pictureInput"
      @change="onChange"
      width="180"
      height="180"
      margin="16"
      accept="image/jpeg,image/png"
      size="10"
      buttonClass="btn"
      :customStrings="{
        upload: '<h1>Bummer!</h1>',
        drag: 'Select photo'
      }">
    </picture-input>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'
/* eslint-disable */
export default {
  name: 'app',
  components: {
    PictureInput
  },
  methods: {
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>


