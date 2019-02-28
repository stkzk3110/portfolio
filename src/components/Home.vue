<template>
<div id="home">

  <div id="main">
    <div class="home_title">
      <h1>Kazuki Saito</h1>
      <img src="../assets/img/chara_icon.png">
    </div>
    <section class="home_section">
      <article class="profile-box">
        <div class="common-box-inner">
          <div class="profile-content-box">
            <h1>PROFILE</h1>
            <div class="top-profile-box">
              <div class="profile-thumb-box">

              </div>
              <div class="common-text">

              </div>
            </div>
          </div>
        </div>
        <div class="common-more-box">
          <a href="/profile" class="more-link">もっと見る</a>
        </div>
      </article>
      <article class="skill-box">
        <div class="common-box-inner">
          <div class="skill-content-box">
            <h1>SKILLS</h1>
            <div class="top-skill-box">
              <div class="skill-thumb-box">

              </div>
              <div class="common-text">

              </div>
            </div>
          </div>
        </div>
        <div class="common-more-box">
          <a href="/skills" class="more-link">もっと見る</a>
        </div>
      </article>
      <article class="contact-box">
        <div class="common-box-inner">
          <div class="contact-content-box">
            <h1>CONTACT</h1>
            <div class="top-contact-box"></div>
          </div>
        </div>
        <div class="common-more-box">
          <a href="/contact" class="more-link">お問合わせフォームへ</a>
        </div>
      </article>
    </section>
  </div>
  <footer>

  </footer>
</div>
</template>

<script>
export default {
  name: 'home',
  title: 'top',
  description: `cube'sのポートフォリオサイト`,
  data() {
    return {
    }
  }
};
</script>

<style lang="scss">
#home {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.profile-box {
  padding-bottom: 140px;
  background-color: #0074bf;
}
.skill-box {
  padding-bottom: 140px;
  background-color: #f2cf01;
}
.contact-box {
  padding-bottom: 140px;
  background-color: #9460a0;
}
</style>