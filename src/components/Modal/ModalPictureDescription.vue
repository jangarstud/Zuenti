<template>
    <div class="d-flex">
        <img :src="picture" class="image--cover-modal">
        <div class="box d-flex flex-column align-items-start">
            <h2 class="margin-left-modal">Coments</h2>
            <el-divider class="margin-fix"></el-divider>
            <div class="margin-left-modal"><h6>CarlosAntonio: Como vas pibe</h6></div>
            <el-divider class="margin-fix"></el-divider>
            <div class="margin-left-modal"><h6>EvaMaria: Que estilazo chaval</h6></div>
            <el-divider class="margin-fix"></el-divider>
            <div class="margin-left-modal"><h6>Daniela_Matinez: Pura magia</h6></div>
            <el-divider class="margin-fix"></el-divider>
            <div class="margin-left-modal"><h6>Vicente: jaja, que guay</h6></div>
            <el-divider class="margin-fix"></el-divider>
            <div class="margin-left-modal"><h6>Jose: Horrible la verdad</h6></div>
            <el-divider class="margin-fix"></el-divider>
            <div class="margin-left-modal"><h6>Andres: Pero bueno, menudo foton no tio?</h6></div>
            <el-divider class="margin-fix"></el-divider>
            <div class="margin-left-modal"><h6>JavierRodri7182: JAJAJA que bueno</h6></div>
        </div>
    </div>
</template>

<script>
export default ({
  props: {
    picture: String
  }
})
</script>

<style>
.box {
    margin-left: 30px;
    width: 50%;
    height: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 12), 0 0 6px rgba(0, 0, 0, 12)
}
.image--cover-modal {
    margin-left: 10px;
    width: 40%;
    height: 40%;
    object-fit: cover;
    object-position: center right;
    box-shadow: 0 2px 4px rgba(7,59,76, 12), 0 0 6px rgba(7,59,76, 12)

}
.margin-left-modal{
    margin-left: 4px;
}
.margin-fix {
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>
