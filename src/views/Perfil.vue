<template>
  <div>
    <b-container fluid>
      <b-row class="justify-content-md-center d-none d-md-flex">
          <b-col>
            <PerfilInfo id="info"></PerfilInfo>
          </b-col>
          <b-col cols="7">
            <PerfilMedio id="medio"></PerfilMedio>
          </b-col>
          <b-col>
            <PerfilFotos id="fotos"></PerfilFotos>
          </b-col>
      </b-row>
      <b-row class="justify-content-md-center d-block d-md-none">
        <div class="accordion" role="tablist">
          <b-col>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1 variant="info">Información</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <PerfilInfo></PerfilInfo>
                </b-card-body>
              </b-collapse>
            </b-card>
          </b-col>
          <b-col>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2 variant="info">Tablón Personal</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <PerfilMedio></PerfilMedio>
                </b-card-body>
              </b-collapse>
            </b-card>
          </b-col>
          <b-col>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-3 variant="info">Fotos</b-button>
              </b-card-header>
              <b-collapse id="accordion-git3" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <PerfilFotos></PerfilFotos>
                </b-card-body>
              </b-collapse>
            </b-card>
          </b-col>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import PerfilInfo from '../components/perfil/PerfilInfo.vue'
import PerfilMedio from '../components/perfil/PerfilMedio.vue'
import PerfilFotos from '../components/perfil/PerfilFotos.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Perfil',
  components: {
    PerfilInfo,
    PerfilMedio,
    PerfilFotos
  },
  computed: {
    ...mapGetters(['auth'])
  }
}
</script>

<style>
#perfil {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  width: 100%;
}

#info {
  margin: 20px;
}

#medio {
  margin: 20px;
}

#fotos {
  margin: 20px;
}
</style>
