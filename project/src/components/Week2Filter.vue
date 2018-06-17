<template lang="pug">
  v-ons-page
    v-ons-toolbar
      .left
        v-ons-back-button
      .center
        h5 Week2. Filter
    .filter
      .nav
        .sidebar-btn(v-on:click="showSidebar = !showSidebar")
          font-awesome-icon(:icon="['fas', 'bars']")
        h1.title HaveFun
        .search
          .icon
            font-awesome-icon(:icon="['fas', 'search']")
          input(type="text" placeholder="explore your activities")
      .sidebar(:class="{'slide-in': showSidebar}")
        .location
          p Location
          select
            option(v-for="zone in zones")
              span {{ zone }}
        .date
          p Date
          .from
            span from:
            input(type="datetime-local")
          .to
            span to:&nbsp&nbsp&nbsp&nbsp
            input(type="datetime-local")
        .categories
          p Categories
          .checkboxs
            .checkbox(v-on:click="checkStatus = 'all'")
              input(type="checkbox" checked id="all")
              label(for="all") ALL
            .checkbox(v-on:click="checkStatus = 'allDays'")
              input(type="checkbox" id="allDays")
              label(for="allDays") 全天候開放
            .checkbox(v-on:click="checkStatus = 'mondayNotOpen'")
              input(type="checkbox" id="mondayNotOpen")
              label(for="mondayNotOpen") 每周一休館
            .checkbox(v-on:click="checkStatus = 'forFree'")
              input(type="checkbox" id="forFree")
              label(for="forFree") 全天候開放
      .contents(v-on:click="showSidebar = false")
        h3.title Showing {{ filterItems.length }} results by...
        .items
          .item_row(v-for="item in filterItems")
            .img
              img(:src="item.Picture1")
            .details
              .name {{ item.Name }}
              .description {{ item.Description }}
              .info
                .location
                  font-awesome-icon(:icon="['fas', 'map-marker-alt']")
                  span {{ item.Add }}
                .opentime
                  font-awesome-icon(:icon="['far', 'calendar-alt']")
                  span {{ item.Opentime }}
</template>

<script>
export default {
  name: 'Week2_Filter',
  data () {
    return {
      items: [],
      zones: [],
      showSidebar: false,
      checkStatus: 'all'
    }
  },
  methods: {
    push (Page) {
      this.$emit('push-page', Page)
    }
  },
  created () {
    const api = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97'
    const that = this
    this.axios.get(api)
      .then((res) => {
        let data = res.data.result.records
        let zone = new Set()
        let repeat = new Set()
        that.items = data
        // console.log(that.items)
        data.forEach(item => {
          zone.has(item.Zone) ? repeat.add(item.Zone) : zone.add(item.Zone)
        })
        that.zones = [...zone]
        // console.log(that.zones)
        console.log('資料讀取完成!')
      })
      .catch((err) => {
        alert(err)
        console.log(err)
      })
  },
  computed: {
    filterItems () {
      let newItems = []
      const that = this
      if (that.checkStatus === 'all') {
        newItems = that.items
      } else if (that.checkStatus === 'alldays') {
        that.items.forEach((item, inedx) => {
          if (item.Opentime.indexOf('全天候開放') !== -1) {
            newItems.push(item)
          }
        })
      } else if (that.checkStatus === 'mondayNotOpen') {
        that.items.forEach((item, inedx) => {
          if (item.Opentime.indexOf('週一休館') !== -1) {
            newItems.push(item)
          }
        })
      } else if (that.checkStatus === 'forFree') {
        that.items.forEach((item, inedx) => {
          if (item.Opentime.indexOf('免費參觀') !== -1) {
            newItems.push(item)
          }
        })
      }
      return newItems
    }
  }
}
</script>

<style lang="sass">

</style>
