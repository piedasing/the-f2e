<template lang="pug">
  #app
    v-ons-navigator(
      swipeable
      :page-stack="pageStack"
      :options="options"
    )
      component(
        v-for="page in pageStack"
        @push-page="onPush"
        :is="page"
        :key="page.name"
        :page-stack="pageStack"
      )
</template>

<script>
import Home from './components/Home'
import Week1TodoList from './components/Week1TodoList'
import Week2Filter from './components/Week2Filter'

export default {
  name: 'App',
  components: {
    Home, Week1TodoList, Week2Filter
  },
  data () {
    return {
      options: {
        animation: 'slide',
        animationOptions: {
          duration: 0.5,
          timing: 'ease-in'
        }
      },
      pageStack: [Home]
    }
  },
  methods: {
    onPush (value) {
      if (this.pageStack[this.pageStack.length - 1] === value) {
        return
      }
      this.pageStack.push(value)
      console.log('push: ', value)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
