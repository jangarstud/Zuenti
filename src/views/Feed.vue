<template>
  <div class="font-zuenti container page-bg">
    <el-row :gutter="10" style="background= white">
      <el-col :span="8" style="height: 80vh">
        <div class="perfil d-flex flex-column justify-content-center align-items-center">
          <img class="image--cover margin-bottom "
          :src="getImage"
        />
        <h2 class="margin-top">{{getAuthName}}</h2>
        </div>
      </el-col>
      <el-col :span="16">
        <div class="list-group-wrapper">
          <transition name="fade">
            <div class="loading" v-show="loading">
              <span class="fa fa-spinner fa-spin"></span> Loading
            </div>
          </transition>
          <ul class="list-group" id="infinite-list">
            <div class="list-group-item" v-for="item in items" :key="item">
              <div class="imagen">
                <div>Item {{item}} </div>
                <img class="fotoitem" :src="itemImage[item]">
              </div>
              <div class="comentarios">
                Comments
                <div class="item-comentario">
                  <div class="nombre-comentario">User</div>
                  <div class="comment"> {{comments[item].title}} </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'Auth',
  components: {
  },
  data () {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      loading: false,
      nextItem: 1,
      items: [],
      itemImage: [],
      comments: [],
      id: 1
    }
  },
  computed: {
    ...mapGetters(['profile']),
    ...mapGetters(['auth']),
    getAuthName: function () {
      return JSON.parse(this.auth).userName
    },
    getImage: function () {
      const image = JSON.parse(JSON.parse(this.profile).profileImage)
      if (image !== null && image !== '') {
        return image.dataUrl
      }
      return this.url
    }
  },
  mounted () {
    // Detect when scrolled to bottom.
    const listElm = document.querySelector('#infinite-list')
    listElm.addEventListener('scroll', e => {
      if (listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.loadMore()
      }
    })
    // Initially load some items.
    this.loadMore()
  },
  methods: {
    loadMore () {
      this.loading = true
      setTimeout(e => {
        for (var i = 0; i < 15; i++) {
          this.items.push(this.nextItem)
          this.itemImage.push(`https://picsum.photos/id/${this.nextItem++}/200/200/`)
          const parar = this.id + 3
          for (var j = this.id; j < parar; j++) {
            const data = fetch(`https://jsonplaceholder.typicode.com/todos/${j}`)
              .then(response => response.json())
              .then(json => json)
            data.then((comentario) => {
              this.comments.push(comentario)
            })
            this.id++
          }
        }
        this.loading = false
      }, 200)
      /**************************************/
    }
  }
}
</script>

<style scoped>
@import url(//db.onlinewebfonts.com/c/e21b142f4c2c98e694d7dd65fb159c9a?family=Novecento+Wide+Light);
.font-zuenti {
  font-family: 'Novecento';
}
.container {
  padding: 40px 100px 15px 100px;
  background-color: rtransparent;
  border-radius: 8px;
  max-width: 100%;
}
.page-bg {
  background: rgb(17,138,178,0.1);
  height: 94vh;
}
.list-group-wrapper {
  position: relative;
}
.list-group {
  overflow: auto;
  height: 80vh;
  border: 2px solid #dce4ec;
  border-radius: 5px;
}
.list-group-item {
  margin-top: 1px;
  border-left: none;
  border-right: none;
  border-top: none;
  border-bottom: 2px solid #dce4ec;
  align-content: center;
  display: flex;
}
.loading {
  text-align: center;
  position: absolute;
  color: #fff;
  z-index: 9;
  background: purple;
  padding: 8px 18px;
  border-radius: 5px;
  left: calc(50% - 45px);
  top: calc(50% - 18px);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

.circle {
  border-radius: 50%
}
.margin-bottom {
  margin-bottom: 10px;
}
.imagen{
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
}
.image--cover {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center right;
}
.comentarios{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 10px;
  font-size: 40px;
}

.item-comentario{
  display: flex;
  padding: 10px;
  border-bottom: 2px solid #dce4ec;
  font-size: 15px;
}

.nombre-comentario{
  width: 30%;
  border-right: #dce4ec;
  font-weight: bolder;
}

.perfil {
    background: lightgrey;
    height: 100%;
    border-radius: 4%;
    padding: 20px 10px 20px 10px;
}

.fotoitem {
  margin-top: 4px;
  height: 200px;
  width: 200px;
  background: black;
}
</style>
