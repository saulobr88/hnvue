<template>
  <div id="about">
    <h1>About</h1>

    <loading v-bind:isLoading="isLoading" v-bind:failed="failed"></loading>

    <div>
      <p>Hacker News com VueJs & Laravel</p>
      <p>A versão da API: {{version}}</p>
      <p>O Status da API: {{status}}</p>
    </div>
    <hr>
    <div>
      <p>Autor: Saulo Gomes</p>
      <p>
        Github:
        <a href="https://github.com/saulobr88" target="_blank">
          https://github.com/saulobr88
        </a>
      </p>
      <p>
        Api:
        <a v-bind:href="base" target="_blank">
          {{ base }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import loading from '@/components/Loading.vue'
import { base } from '@/api'
export default {
  name: 'About',
  components: {
    'loading': loading
  },
  data () {
    return {
      version: '',
      status: '',
      isLoading: true,
      failed: false,
      base: ''
    }
  },
  mounted () {
    this.base = base
    this.$http.get(base).then(response => {
      this.version = response.body.data.version
      this.status = response.body.data.status
      this.isLoading = false
    }, error => {
      console.error(error)
      this.isLoading = false
      this.failed = true
    })
  }
}
</script>
