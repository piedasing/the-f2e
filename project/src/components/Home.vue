<template lang="pug">
  v-ons-page
    .home
      v-ons-toolbar
        .center
          h5 {{ msg }}
      .works
        template(v-for="(week, key) in weeks")
          a(@click="push(week.key)")
            .title {{ week.title }}
            hr
            .name {{ key < 2 ? week.name : 'unknown' }}
</template>

<script>
const weeks = [
  {
    title: 'week1',
    key: 'Week1TodoList',
    name: 'TodoList'
  },
  {
    title: 'week2',
    key: 'Week2Filter',
    name: 'Filter'
  },
  {
    title: 'week3',
    key: 'Week1TodoList',
    name: 'TodoList'
  },
  {
    title: 'week4',
    key: 'Week1TodoList',
    name: 'TodoList'
  },
  {
    title: 'week5',
    key: 'Week1TodoList',
    name: 'TodoList'
  },
  {
    title: 'week6',
    key: 'Week1TodoList',
    name: 'TodoList'
  },
  {
    title: 'week7',
    key: 'Week1TodoList',
    name: 'TodoList'
  },
  {
    title: 'week8',
    key: 'Week1TodoList',
    name: 'TodoList'
  },
  {
    title: 'week9',
    key: 'Week1TodoList',
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
