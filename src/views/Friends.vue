<template>
    <div class="page-bg d-flex justify-content-center align-items-center">
        <el-card class="box-card">
            <div>
                <el-input class="search" placeholder="Find user" v-model="input" prefix-icon="el-icon-search"/>
            </div>
    <el-divider><i class="el-icon-search"></i></el-divider>
            <div v-for="o in this.usersArray" :key="o.userName" class="text item">
                <div class="d-flex">
                    <div class="d-flex align-items-center mr-auto">
                        <img v-if="o.profileImage" class="image--cover"
                        :src="JSON.parse(o.profileImage).dataUrl"
                        />
                        <img v-else class="image--cover"
                        :src="url"
                        />
                        <h5 class="margin-left">{{o.userName}}</h5>
                    </div>
                    <div>
                        <el-button type="info" icon="el-icon-check" class="bg-button" @click="sendAlert" circle></el-button>
                    </div>
                </div>
                <el-divider></el-divider>
            </div>
            </el-card>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'Friends',
  data () {
    return {
      input: '',
      usersArray: [],
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  created () {
    axios.get('http://localhost:3000/api/profile')
      .then(users => {
        console.log(users.data)
        users.data.forEach(element => {
          this.usersArray.push(element)
        })
      })
    console.log(this.usersArray)
  },
  methods: {
    sendAlert: function () {
      alert('Your follow was registered!!')
    }
  }
}
</script>

<style scoped>
.page-bg {
  background: rgb(17,138,178,0.1);
  height: 94vh;
}
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .box-card {
    width: 80%;
    height: 80%;
    box-shadow: 0 2px 4px rgba(7,59,76, 12), 0 0 6px rgba(7,59,76, 12)
  }
  .search {
      width: 80%;
  }
  .margin-left {
      margin-left: 10px;
  }
  .image--cover {
  width: 50px;
  height: 50px;
  border-radius: 90%;
  object-fit: cover;
  object-position: center right;
}
</style>
