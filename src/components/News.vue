<template>
  <div id="news">
    <h1>{{ name }}</h1>
    <h2>{{ msg }}</h2>

    <loading v-bind:isLoading="isLoading" v-bind:failed="failed"></loading>

    <div id="dados">
      <template v-for="(storie, i) in dados">
        <storie v-bind:key="i" v-bind:storie="storie"></storie>
      </template>
    </div>
  </div>
</template>

<script>
import storie from '@/components/Storie.vue'
import loading from '@/components/Loading.vue'
import { news } from '@/api'
export default {
  name: 'News',
  components: {
    'storie': storie,
    'loading': loading
  },
  data () {
    return {
      name: 'News',
      msg: 'Novas histórias em Hacker News',
      isLoading: true,
      failed: false,
      dados: []
    }
  },
  mounted () {
    this.$http.get(news).then(response => {
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
