<template>
  <div id="loading">
    <div v-show="isLoading">
      Carregando ...
      <div>
        <img v-bind:src="'/static/green_loading.gif'" width="64px" height="64px">
      </div>
    </div>
    <div v-show="failed">
      Falha ao conectar com o servidor :(
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['isLoading', 'failed']
}
</script>
