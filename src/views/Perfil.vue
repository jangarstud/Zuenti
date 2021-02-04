<template>
<div class="font-zuenti d-flex justify-content-center page-bg">
  <div class="card">
    <el-dialog width="90%" title="Modify profile" :visible="openModal" :before-close="beforeClosed">
      <ModalForm />
    </el-dialog>
    <el-dialog width="90%" title="Upload Image" :visible="openModalImage" :before-close="beforeClosed">
      <ModalImage />
    </el-dialog>
    <el-dialog width="90%" :title="actualTitle" :visible="openModalPicture" :before-close="beforeClosed">
      <ModalPictureDescription :picture="actualImage" :title="actualTitle" />
    </el-dialog>
    <h1 class="margin-userName font-weight-bold">{{getAuthName}}</h1>
    <h6 class="low-margin-top font-weight-bold" v-if="fullNameExist"> {{getFullName}} </h6>
    <div class="margin-top block">
        <img class="image--cover"
          :src="getImage"
        />
    </div>
    <div class="margin-top font-weight-bold">
      <el-tag type="success" effect="dark">Followers: 500</el-tag>
      <el-tag type="info" effect="dark">Following: 223</el-tag>
    </div>
    <div class="lower-margin-top font-weight-bold">
      <el-button @click="changeProfile" class="input-bg">Modify Profile </el-button>
      <el-button @click="uploadImage" class="input-bg">Upload Image </el-button>
    </div>

    <div class="d-flex flex-column justify-content-center  margin-top lower-margin-bot">
      <h2 font-weight-bold>{{getYears}}</h2>
      <div class="d-flex justify-content-center lower-margin-top">
        <p class="presentation text-justify h5">{{getProfile}}</p>
      </div>
    </div>
    <el-divider><i class="el-icon-star-on"></i></el-divider>
    <div class="lower-margin-top" v-if="getImages === false">
      <h4>Click on Upload Image to insert your first image!!</h4>
    </div>
    <div class="d-flex flex-wrap justify-content-center" v-if="getImages">
      <div v-for="image in JSON.parse(this.imageData)" :key="image.dataUrl">
            <input :name="image.title" type="image" @click="openPicture($event)" class="image--cover-profile"
            :src="JSON.parse(image.image).dataUrl"
        />
       </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ModalForm from '../components/Modal/ModalForm'
import ModalImage from '../components/Modal/ModalImage'
import ModalPictureDescription from '../components/Modal/ModalPictureDescription'

export default {
  name: 'Perfil',
  components: {
    ModalForm,
    ModalImage,
    ModalPictureDescription
  },
  computed: {
    ...mapGetters(['imageData']),
    ...mapGetters(['auth']),
    ...mapGetters(['profile']),
    getImages: function () {
      if (JSON.parse(this.imageData) === null) {
        return false
      } else {
        return true
      }
    },
    getAuthName: function () {
      return JSON.parse(this.auth).userName
    },
    getFullName: function () {
      return JSON.parse(this.auth).fullName
    },
    fullNameExist: function () {
      if (JSON.parse(this.auth).fullName &&
          JSON.parse(this.auth).fullName !== '') {
        return true
      }
      return false
    },
    getProfile: function () {
      if (JSON.parse(this.profile) &&
          JSON.parse(this.profile).profilePresentation) {
        return JSON.parse(this.profile).profilePresentation
      }
      return ''
    },
    getYears: function () {
      if (this.profile !== 'undefined' &&
          JSON.parse(this.profile).birthday !== null &&
          JSON.parse(this.profile).birthday !== '') {
        const difference = new Date() - new Date(JSON.parse(this.profile).birthday)
        const age = Math.floor(difference / 31557600000)
        return age + ' years'
      }
      return ''
    },
    getImage: function () {
      const image = JSON.parse(JSON.parse(this.profile).profileImage)
      if (image !== null && image !== '') {
        return image.dataUrl
      }
      return this.url
    }
  },
  data () {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      openModal: false,
      openModalImage: false,
      openImages: false,
      openModalPicture: false,
      actualTitle: '',
      actualImage: ''
    }
  },
  methods: {
    ...mapActions(['modifyUserName']),
    changeProfile: function () {
      this.openModal = true
    },
    beforeClosed: function () {
      this.openModal = false
      this.openModalImage = false
      this.openModalPicture = false
    },
    uploadImage: function () {
      this.openModalImage = true
    },
    openPicture: function (event) {
      this.actualTitle = event.target.name
      this.actualImage = event.target.src
      this.openModalPicture = true
    }
  }
}
</script>

<style>
@import url(//db.onlinewebfonts.com/c/e21b142f4c2c98e694d7dd65fb159c9a?family=Novecento+Wide+Light);
.font-zuenti {
  font-family: 'Novecento';
}
.page-bg {
  background: rgb(17,138,178,0.1);
}
.circle {
  border-radius: 50%
}
#info {
  margin: 20px;
}
.lower-margin-top {
  margin-top: 25px;
}
.lower-margin-bot {
  margin-bottom: 10px;
}
.margin-top {
  margin-top: 75px;
}
#medio {
  margin: 20px;
}
.card {
  width: 80%;
  border: 1px solid #073b4c;
}
.presentation {
  width: 80%
}
#fotos {
  margin: 20px;
}
.image--cover {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center right;
}
.image--cover-profile {
  width: 250.4px;
  height: 250.4px;
  object-fit: cover;
  object-position: center right;
  box-shadow: 0 2px 4px rgba(7,59,76, .12), 0 0 6px rgba(7,59,76, 12)
}
.input-bg {
  background: #073b4c;
  color: white;
}
.margin-userName {
  margin-top: 90px;
}
</style>
