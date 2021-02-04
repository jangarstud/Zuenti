<template>
  <div class="hello">
    <div class="my-8">
      <el-input
        class="margin-bottom"
        type="textarea"
        autosize
        placeholder="Title of picture"
        v-model="title"
      />
      <image-uploader
        class="d-flex flex-column justify-content-center align-items-center"
        :preview="isReady"
        :className="['fileinput', { 'fileinput--loaded': hasImage }]"
        capture="environment"
        :debug="1"
        :autoRotate="true"
        outputFormat="verbose"
        @input="setImage"
        :maxWidth="200"
      >
        <label for="fileInput" slot="upload-label">
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                class="path1"
                d="M9.5 19c0 3.59 2.91 6.5 6.5 6.5s6.5-2.91 6.5-6.5-2.91-6.5-6.5-6.5-6.5 2.91-6.5 6.5zM30 8h-7c-0.5-2-1-4-3-4h-8c-2 0-2.5 2-3 4h-7c-1.1 0-2 0.9-2 2v18c0 1.1 0.9 2 2 2h28c1.1 0 2-0.9 2-2v-18c0-1.1-0.9-2-2-2zM16 27.875c-4.902 0-8.875-3.973-8.875-8.875s3.973-8.875 8.875-8.875c4.902 0 8.875 3.973 8.875 8.875s-3.973 8.875-8.875 8.875zM30 14h-4v-2h4v2z"
              />
            </svg>
          </figure>
          <span class="upload-caption">{{
            hasImage ? "Replace" : "Click to upload"
          }}</span>
        </label>
      </image-uploader>
      <el-button type="primary" @click="onSubmit">Modify profile</el-button>
      <el-button @click="resetForm()">Clear</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ModalImage',
  data () {
    return {
      hasImage: false,
      image: null,
      title: ''
    }
  },
  computed: {
    isReady: function () {
      return this.showImage
    }
  },
  methods: {
    ...mapActions(['uploadImage']),
    setImage: function (output) {
      this.hasImage = true
      this.image = output
    },
    onSubmit: function () {
      console.log(this.image)
      this.uploadImage({
        imageData: this.image,
        title: this.title
      })
    },
    resetForm: function () {
      this.image = null
      this.title = ''
      this.hasImage = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#fileInput {
  display: none;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.my-8 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.margin-bottom {
    margin-bottom: 30px;
}
</style>
