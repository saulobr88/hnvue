<template>
  <div id="best">
    <h1>{{ name }}</h1>
    <h2>{{ msg }}</h2>

    <div v-show="isLoading">
      Carregando ...
      <div>
        <img v-bind:src="'/static/green_loading.gif'" width="64px" height="64px">
      </div>
    </div>
    <div v-show="failed">
      Falha ao conectar com o servidor :(
    </div>
    <div id="dados">
      <template v-for="(storie, i) in dados">
        <storie v-bind:key="i" v-bind:storie="storie"></storie>
      </template>
    </div>
  </div>
</template>

<script>
import storie from '@/components/Storie.vue'
import { bests } from '@/api'
export default {
  name: 'Best',
  components: {
    'storie': storie
  },
  data () {
    return {
      name: 'Best',
      msg: 'Melhores histórias em Hacker News',
      isLoading: true,
      failed: false,
      dados: []
    }
  },
  mounted () {
    this.$http.get(bests).then(response => {
      if (response.body !== 'undefined') {
        this.dados = response.body
      }
      this.isLoading = false
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
</style>
