<template>
  <div class="storie">
    <a v-bind:href="storie.url" target="_blank">
      <h2>{{ storie.title }}</h2>
    </a>
    <p>
      <span>Pontos: {{ storie.score }}</span>
      <span>por: <router-link :to="{ name: 'User', params: {id: storie.by } }" exact>{{ storie.by }}</router-link></span>
      <span>em: {{ storie.time | formatDate }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Storie',
  props: ['storie'],
  data: function () {
    return {
      dados: this.storie
    }
  }
}
</script>

<style scoped>
.storie {
  text-align: justify;
  color: #2c3e50;
  padding: 10px;
  margin: 5px;
}
a {
  color: #2c3e50;
}
</style>
