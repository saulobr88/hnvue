// Este arquivo apenas contem os endereços dos endpoints

// Base da API
// const base = 'http://hnl5.dev.br/api'
const base = 'https://hnl5.herokuapp.com/api'

const news = `${base}/news`
const tops = `${base}/tops`
const bests = `${base}/bests`
const user = `${base}/user/`

module.exports = {
  base,
  news,
  tops,
  bests,
  user
}
