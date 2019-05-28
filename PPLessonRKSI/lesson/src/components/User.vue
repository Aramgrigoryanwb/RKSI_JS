<template>
  <div>
    <h1>User c id: {{ $route.params.id }}</h1>
    <router-link :to="{ path: '/user/'+$route.params.id+'/profile'}">Профиль</router-link>
    <router-link :to="{ path: '/user/'+$route.params.id+'/posts'}">Посты</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'User',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
