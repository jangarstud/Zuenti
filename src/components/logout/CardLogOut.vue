<template>
    <div class="font-zuenti d-flex justify-content-center align-items-center">
        <div class="card">
            <div class="card-body">
                <h2 class="card-title margin-top">Logged out successfully!!</h2>
                <p class="card-text">If you wanna join again, click on the bottom below</p>
                <router-link class="btn input-bg" to="/">Login</router-link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <router-link class="btn input-bg" to="/register">Register</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url(//db.onlinewebfonts.com/c/e21b142f4c2c98e694d7dd65fb159c9a?family=Novecento+Wide+Light);
.font-zuenti {
  font-family: 'Novecento';
}
.input-bg {
  background: #073b4c;
  color: white;
}
.margin-top {
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>
