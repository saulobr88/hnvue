<template>
    <nav>
        <span>Hacker News VueJs</span>
        <ul>
            <li><router-link to="/" exact>News</router-link></li>
            <li><router-link to="/top" exact>Top</router-link></li>
            <li><router-link to="/best" exact>Best</router-link></li>
            <li><router-link to="/about" exact>About</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {}
</script>

<style scoped>
span{
  color: #fff;
  text-align: center;
}
ul{
  list-style-type: none;
  text-align: center;
  margin: 15px 0 5px 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #fff;
  text-decoration: none;
  padding: 6px 8px;
  border-radius: 10px;
}
nav{
  background: #444;
  padding: 14px 0;
  margin-bottom: 40px;
}
.router-link-active{
  background: #eee;
  color: #444;
}
</style>
