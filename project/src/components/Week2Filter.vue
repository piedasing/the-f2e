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
            option Taiwan
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
            .checkbox
              input(type="checkbox" id="all")
              label(for="all") ALL
            .checkbox
              input(type="checkbox" id="Entertainment")
              label(for="Entertainment") Entertainment
            .checkbox
              input(type="checkbox" id="Food")
              label(for="Food") Food
            .checkbox
              input(type="checkbox" id="Learning")
              label(for="Learning") Learning
            .checkbox
              input(type="checkbox" id="Outdoors")
              label(for="Outdoors") Outdoors
      .contents(v-on:click="showSidebar = false")
        h3.title Showing {{ items.length }} results by...
        .items
          .item_row(v-for="item in items")
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
      showSidebar: false
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
        for (let i = 0; i < 10; i++) {
          that.items.push(data[i])
        }
        console.log(that.items)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="sass">

</style>
