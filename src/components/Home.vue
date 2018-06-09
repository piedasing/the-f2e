<template lang="pug">
  v-ons-page
    .home
      v-ons-toolbar
        .center
          h5 {{ msg }}
      .works
        template(v-for="week in weeks")
          a(@click="push(week.name)")
            .title {{ week.title }}
            hr
            .name {{ week.name }}
</template>

<script>
const weeks = [
  {
    title: 'week1',
    name: 'TodoList'
  },
  {
    title: 'week2',
    name: 'TodoList'
  },
  {
    title: 'week3',
    name: 'TodoList'
  },
  {
    title: 'week4',
    name: 'TodoList'
  },
  {
    title: 'week5',
    name: 'TodoList'
  },
  {
    title: 'week6',
    name: 'TodoList'
  },
  {
    title: 'week7',
    name: 'TodoList'
  },
  {
    title: 'week8',
    name: 'TodoList'
  },
  {
    title: 'week9',
    name: 'TodoList'
  }
]

export default {
  name: 'Home',
  data () {
    return {
      msg: 'the F2E works',
      weeks: weeks
    }
  },
  methods: {
    push (Page) {
      this.$emit('push-page', Page)
    }
  }
}
</script>

<style lang="sass">

</style>
