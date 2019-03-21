<template>
<div id="contact">
  <section class="contact_section">
    <div class="container">
      <form name="contact_form" action="https://script.google.com/macros/s/AKfycbw_dXkx2oASgp4fJKsUeQQnHKVFDmVAVJKZB0QjsQcn3We5MxJX/exec" class="form-box">
        <input name="SPREADSHEET_ID" type="hidden" value="1qMaKeCA5VYCJSm3WFgUK-WZh7b-i0Iuc9qIYEsK7bJg">
        <input name="SHEET_NAME" type="hidden" value="フォームデータ">
        <h2 class="contact_h2">Contact</h2>
        <div class="form-item-box">
          <label class="control-label">Name<span class="label-required">必須</span></label>
          <div class="contact_form_input">
            <input type="text" class="form-control" name="your-name" placeholder="Name" required id="name">
          </div>
        </div>
        <div class="form-item-box">
          <label class="control-label">Email<span class="label-required">必須</span></label>
          <div class="contact_form_input">
            <input type="email" class="form-control" name="your-email" placeholder="example@email.com" required id="email">
          </div>
        </div>
        <div class="form-item-box">
          <label class="control-label">Message<span class="label-required">必須</span></label>
          <div class="contact_from_input">
            <textarea class="form-control" name="your-message" placeholder="Message" rows="8" required id="message"></textarea>
          </div>
        </div>
        <div class="form-item-box">
          <div class="form-button-box">
            <button class="form-button" type="submit" v-on:click="sendMessage()">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</div>
</template>

<script>
  export default {
    title: 'Contact',
    description: 'きゅ〜ぶ（cube）へのお問い合わせページ',
    methods: {
      sendMessage() {
        var form = $('form');
        var submitBtn = form.find('button[type=submit]');
        if(document.getElementById('name').value === '') {
          alert('名前を入力してください');
          return false;
        }
        if(document.getElementById('email').value === '') {
          alert('メールアドレスを入力してください');
          return false;
        }
        if(document.getElementById('message').value === '') {
          alert('メッセージを入力してください');
          return false;
        }
        $.ajax({
          url: form.attr('action'),
          dataType: 'jsonp',
          data: form.serialize(),
          beforeSend: function() {
            console.log('beforeSend');
            return submitBtn.prop('disabled', true);
          },
          complete: function() {
            console.log('complete');
            return submitBtn.prop('disabled', false);
          },
          jsonpCallback: 'console.log',
          error: function(response) {
            console.log('error');
            return console.log(response);
          }
        });
      }
    }
  }
</script>

<style lang="scss">
#contact {
  margin-top: 100px;
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
article {
  padding: 40px 0;
}
.control-label {
  font-size: 1.4rem;
  font-weight: 700;
}
.form-control {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.6rem;
  padding: 4px 8px;
}
.form-item-box {
  margin-top: 20px;
}
.form-button {
  cursor: pointer;
  display: block;
  max-width: 400px;
  width: 80%;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1.6rem;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 0 #ddd;
}
.label-required {
  font-size: 1.2rem;
  color: #f44366;
  padding-left: 1em;
}
.contact_h2 {
  margin-bottom :60px;
}
</style>