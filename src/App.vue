<template>
  <div id="app">
    <div class="header-outer">
      <header>
        <h1 class="site-title">
          <router-link to="/">cube's portfolio</router-link>
        </h1>
      </header>
      <hnav></hnav>
    </div>
    <transition name="fade">
      <router-view>(:data="myData")</router-view>
    </transition>
    <fnav></fnav>
    <div class="sns-box">
      <a href="https://twitter.com/fisherman3110se" target="_blank" class="sns-link">
          <i class="fab twitter-icon"></i>
      </a>
      <a href="https://github.com/stkzk3110" target="_blank" class="sns-link">
          <i class="fab github-icon"></i>
      </a>
      <a href="https://instagram.com/stkzk_aioaui" target="_blank" class="sns-link">
          <i class="fab instagram-icon"></i>
      </a>
      <a href="https://qiita.com/fisherman3110se" target="_blank" class="sns-link">
          <i class="fab qiita-icon"></i>
      </a>
      <a href="https://note.mu/fisherman0825" target="_blank" class="sns-link">
          <i class="fab note-icon"></i>
      </a>
    </div>
    <footer>
      <div class="copyright-box">©️ 2019 cube</div>
    </footer>
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