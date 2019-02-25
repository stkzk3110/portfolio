<template>
  <div id="app">
    <div class="header-top">
      <hnav></hnav>
    </div>
    <transition name="fade">
      <router-view>(:data="myData")</router-view>
    </transition>
    <fnav></fnav>
  </div>
</template>

<script>
import HeaderNav from './components/parts/HeaderNav'
import FooterNav from './components/parts/FooterNav'
import myData from '../static/data.json'
export default {
  name: "app",
  components: {
    hnav: HeaderNav,
    fnav: FooterNav
  },
  data () {
    return {
      myData: myData
    }
  }
};
</script>