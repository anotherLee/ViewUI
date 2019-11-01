import Button from './button/Button.vue'
import ButtonGroup from './button/ButtonGroup.vue'
import Cascader from "./cascader/Cascader"
import CascaderItems from "./cascader/CascaderItems"
import Col from './row-col/Col'
import Collapse from "./collapse/Collapse"
import CollapseItem from "./collapse/CollapseItem"
import Content from "./layout/Content"
import Footer from "./layout/Footer"
import Header from "./layout/Header"
import Icon from './icon/Icon.vue'
import Input from './input/Input'
import Layout from "./layout/Layout"
import Popover from "./popover/Popover"
import Row from './row-col/Row'
import Sider from "./layout/Sider"
import Tabs from "./tabs/Tabs"
import TabsBody from "./tabs/TabsBody"
import TabsHead from "./tabs/TabsHead"
import TabsItem from "./tabs/TabsItem"
import TabsPane from "./tabs/TabsPane"
import Toast from "./toast/Toast"
import Slides from "./slide/Slides"
import SlideItem from "./slide/SlideItem"
import Nav from './nav/Nav'
import NavItem from "./nav/NavItem"
import NavSub from "./nav/NavSub"
import Pager from "./pager/Pager"
import Carousel from "./carousel/Carousel"
import CarouselItem from "./carousel/CarouselItem"
import DatePicker from "./datepicker/DatePicker"
import Uploader from "./uploader/Uploader"
import Sticky from "./sticky/Sticky"
import Scroll from "./scroll/Scroll"
import Vue from 'vue'
import db from './db'

import plugin from './toast/plugin'

Vue.component('s-button', Button)
Vue.component('s-button-group', ButtonGroup)
Vue.component('s-cascader', Cascader)
Vue.component('s-cascader-item', CascaderItems)
Vue.component('s-col', Col)
Vue.component('s-collapse', Collapse)
Vue.component('s-collapse-item', CollapseItem)
Vue.component('s-content', Content)
Vue.component('s-footer', Footer)
Vue.component('s-header', Header)
Vue.component('s-icon', Icon)
Vue.component('s-input', Input)
Vue.component('s-layout', Layout)
Vue.component('s-popover', Popover)
Vue.component('s-row', Row)
Vue.component('s-sider', Sider)
Vue.component('s-tabs', Tabs)
Vue.component('s-tabs-body', TabsBody)
Vue.component('s-tabs-head', TabsHead)
Vue.component('s-tabs-item', TabsItem)
Vue.component('s-tabs-pane', TabsPane)
Vue.component('s-toast', Toast)
Vue.component('s-slides', Slides)
Vue.component('s-slide-item', SlideItem)
Vue.component('s-nav', Nav)
Vue.component('s-nav-item', NavItem)
Vue.component('s-nav-sub', NavSub)
Vue.component('s-pager', Pager)
Vue.component('s-carousel', Carousel)
Vue.component('s-carousel-item', CarouselItem)
Vue.component('s-datepicker', DatePicker)
Vue.component('s-uploader', Uploader)
Vue.component('s-sticky', Sticky)
Vue.component('s-scroll', Scroll)
Vue.use(plugin)

function ajax(parent_id = 0) {
  return new Promise(function (resolve, reject) {
    window.setTimeout(() => {
      resolve(db.filter(item => item.parent_id === parent_id))
    }, 1000)
  })
}

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    inputValue: '',
    selectedTab: 'tab3',
    selectedItem: ['1'],
    source: [],
    cascaderSelected: [],
    itemSelected: "1",
    navSelected: "home",
    currentPage: 1,
    carouselSelected: '0',
    dateValue: new Date(),
    fileList: [],
    divVisible: false
  },
  created() {
    // ajax(0).then(res => {
    //   this.source = res
    // })

    // let n = 1
    // setInterval(() => {
    //   n++
    //   if (n === 4) {
    //     n = 1
    //   }
    //   this.itemSelected = n.toString()
    //   console.log(this.itemSelected)
    // }, 3000)
  },
  mounted() {

  },
  methods: {
    // inputChange(e) {
    //   console.log(1)
    //   console.log(e)
    // },
    // clickButton() {
    //   this.$toast('很很多文字很多', {
    //     closeButton: {}
    //   })
    // },
    // getNewSelected(newItem) {
    //   this.cascaderSelected = newItem
    // },
    // loadData(node, callback) {
    //   const { id } = node
    //   ajax(id).then(result => {
    //     // console.log(result)
    //     callback(result)
    //   })
    // },
    onError(error) {
      console.log(error)
    },
    onSuccess(response) {
      console.log('成功', response)
    },
    onComplete() {
      console.log('上传结束')
    }
  }
})
