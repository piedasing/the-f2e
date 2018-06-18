<template lang="pug">
  v-ons-page
    v-ons-toolbar
      .left
        v-ons-back-button
      .center
        h5 Week3. AdminOrder
    .adminorder
      .nav
        h1.title Shoptime
        .menubtn(v-on:click="showMenu = !showMenu")
          font-awesome-icon(:icon="['fas', 'bars']")
      ul.menu(:class="{'menu-slide-in': showMenu}")
        li.active
          a Home
        li
          a Orders
        li
          a Product
      .overview
        h4.title Overview
        .swiper-container
          .swiper-button-prev
          .swiper-button-next
          .swiper-wrapper
            .swiper-slide
              v-ons-card
                v-ons-list
                  v-ons-list-header
                    font-awesome-icon(:icon="['fas', 'coins']")
                    span TOTAL REVENUE
                  v-ons-list-item
                    span {{ revenue }}
            .swiper-slide
              v-ons-card
                v-ons-list
                  v-ons-list-header
                    font-awesome-icon(:icon="['fab', 'bitcoin']")
                    span TOTAL COST
                  v-ons-list-item
                    span {{ cost }}
            .swiper-slide
              v-ons-card
                v-ons-list
                  v-ons-list-header
                    font-awesome-icon(:icon="['fas', 'money-bill']")
                    span NET INCOME
                  v-ons-list-item
                    span {{ income }}
        .activity
          #myChart
        .transaction
          v-ons-card
            v-ons-list
              v-ons-list-header Transaction Website
              v-ons-list-item
                .col
                  i.fa.fa-facebook
                  span Facebook.com
                .col
                  i.fa.fa-google
                  span Google.com
                .col
                  i.fa.fa-book
                  span Shopify.com
                .col
                  i.fa.fa-wordpress
                  span Wordpress.com
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import echarts from 'echarts'

export default {
  name: 'Week3AdminOrder',
  data () {
    return {
      showMenu: false,
      revenue: 30000,
      cost: 20000,
      income: 10000
    }
  },
  methods: {
    push (Page) {
      this.$emit('push-page', Page)
    },
    initSwiper () {
      new Swiper('.swiper-container', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    },
    drawLine () {
      echarts.init(document.getElementById('myChart')).setOption({
        title: {
          text: 'Activity  (draw by echart)'
        },
        tooltip: {},
        toolbox: {
          feature: {
            dataView: {},
            saveAsImage: {
              pixelRatio: 2
            },
            restore: {}
          }
        },
        grid: {
          x: 40
        },
        xAxis: {
          axisLabel: {
            interval: 0, // 横轴信息全部显示
            rotate: -20 // -30度角倾斜显示
          },
          data: ['6 JUN', '7 JUN', '8 JUN', '9 JUN', '10 JUN', '11 JUN']
        },
        yAxis: {},
        series: [
          {
            type: 'line',
            // smooth: true,
            data: [['6 JUN', 800], ['7 JUN', 750], ['8 JUN', 2800], ['9 JUN', 3100], ['10 JUN', 2500], ['11 JUN', 1300]]
          },
          {
            type: 'line',
            // smooth: true,
            data: [['6 JUN', 1000], ['7 JUN', 1750], ['8 JUN', 3800], ['9 JUN', 2100], ['10 JUN', 500], ['11 JUN', 4000]]
          },
          {
            type: 'line',
            // smooth: true,
            data: [['6 JUN', 3000], ['7 JUN', 1600], ['8 JUN', 2400], ['9 JUN', 1650], ['10 JUN', 3850], ['11 JUN', 300]]
          }
        ]
      })
    }
  },
  mounted () {
    this.initSwiper()
    this.drawLine()
  }
}
</script>

<style lang="sass">

</style>
