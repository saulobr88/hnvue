/* Este arquivo apenas contem os endereços dos endpoints
 * O mesmo somente é usado na Docker Machine via Localhost
 */

// Base da API
const base = 'http://localhost:8080/api'

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
