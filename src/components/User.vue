<template>
  <div id="user">
    <h1>Usuário {{ $route.params.id }}</h1>

    <loading v-bind:isLoading="isLoading" v-bind:failed="failed"></loading>

    <div v-if="show" id="dados">
      <div class="card">
        <div class="item"><b>Sobre</b>: <span v-html="about"></span></div>
        <div class="item"><b>Membro desde</b>: {{ created | formatDate }} </div>
      </div>
      <template v-for="(storie, i) in dados">
        <storie v-bind:key="i" v-bind:storie="storie"></storie>
      </template>
    </div>
  </div>
</template>

<script>
import storie from '@/components/Storie.vue'
import loading from '@/components/Loading.vue'
import { user } from '@/api'
export default {
  name: 'News',
  components: {
    'storie': storie,
    'loading': loading
  },
  data () {
    return {
      about: '',
      created: '',
      show: false,
      isLoading: true,
      failed: false,
      dados: []
    }
  },
  mounted () {
    var id = this.$route.params.id
    this.$http.get(`${user}${id}`).then(response => {
      if (response.body !== 'undefined') {
        this.about = response.body.about
        this.created = response.body.created
        this.dados = response.body.stories
        this.show = true
      }
      this.isLoading = false
      this.show = true
    }, error => {
      console.error(error)
      this.isLoading = false
      this.failed = true
    })
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
.card {
  text-align: justify;
  padding: 15px;
  margin: 5px;
}
.item {
  margin-top: 5px;
}
</style>
