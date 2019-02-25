<template>
<div id="profile">
  <div>
    <section class="profile_section">
      <div class="container">
        <h2 class="profile_h2">PROFILE</h2>
        <p class="text_box">
          都内にてSE(システムエンジニア)をしてます。<br>
          2016年4月から新卒枠で地元愛知の独立系IT企業にSEとして入社。<br>
          仕事の幅を広げる為に、2017年8月末で退職し、上京。<br>
          2017年11月からSEとして現在の会社へ。<br>
          現在はweb系開発に興味があり、SI業界からWEB業界に転職するために活動中です。<br>
        </p>
        <div class="profile_box">
          <p class="profile_img flexbox-left">
            <img src="../assets/img/profile_img.png" alt="">
          </p>
          <div class="flexbox-right">
            <dl class="detail-profile">
              <dt>Name：</dt>
              <dd>齋藤 一輝 Saito Kazuki</dd>
              <dt>Location：</dt>
              <dd>東京都内</dd>
              <dt>Github:</dt>
              <dd></dd>
              <dt>Twitter:</dt>
              <dd></dd>
              <dt>Instagram:</dt>
              <dd></dd>
              <dt>Facebook:</dt>
            </dl>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: "profile",
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

.profile_section {
  padding: 20px 10px 10px 20px;
}
.profile_h2 {
  margin: 0 0 40px 0;
}
.profile_box {
  display: flex;
}
</style>