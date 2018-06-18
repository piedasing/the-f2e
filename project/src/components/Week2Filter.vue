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
          .radioboxs
            .radiobox(v-on:click="chosedStatus = 'all'")
              input(type="radio" name="choose" checked id="all")
              label(for="all") ALL
            .radiobox(v-on:click="chosedStatus = 'allDays'")
              input(type="radio" name="choose" id="allDays")
              label(for="allDays") 全天候開放
            .radiobox(v-on:click="chosedStatus = 'mondayNotOpen'")
              input(type="radio" name="choose" id="mondayNotOpen")
              label(for="mondayNotOpen") 每周一休館
            .radiobox(v-on:click="chosedStatus = 'forFree'")
              input(type="radio" name="choose" id="forFree")
              label(for="forFree") 免費參觀
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
  name: 'Week2Filter',
  data () {
    return {
      items: [],
      zones: [],
      showSidebar: false,
      choseOption: ['all', 'allDays', 'mondayNotOpen', 'forFree'],
      chosedStatus: 'all'
    }
  },
  methods: {
    push (Page) {
      this.$emit('push-page', Page)
    }
  },
  created () {
    // 憑證問題，所以改成用自己的json檔案方式去撈資料
    // const api = 'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97'
    const api = 'https://raw.githubusercontent.com/piedasing/json_test/master/json/api_week2.json'
    const that = this
    this.axios.get(api)
      .then((res) => {
        let data = res.data.result.records
        let zone = new Set()
        that.items = data
        that.newItems = data
        // console.log(that.items)
        // 抓出全部的區域有哪些地方，並且不重複
        data.forEach(item => {
          if (zone.has(item.Zone) !== -1) {
            zone.add(item.Zone)
          }
        })
        that.zones = [...zone] // 解構賦值
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
      that.choseOption.forEach(option => {
        if (that.chosedStatus === option) {
          that.items.forEach((item, inedx) => {
            switch (option) {
              case 'all':
                newItems = that.items
                break
              case 'allDays':
                if (item.Opentime.indexOf('全天候開放') !== -1) {
                  newItems.push(item)
                }
                break
              case 'mondayNotOpen':
                if (item.Opentime.indexOf('週一休館') !== -1) {
                  newItems.push(item)
                }
                break
              case 'forFree':
                if (item.Ticketinfo.indexOf('免費參觀') !== -1) {
                  newItems.push(item)
                }
                break
            }
          })
        }
      })
      return newItems
    }
  }
}
</script>

<style lang="sass">

</style>
