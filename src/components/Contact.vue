<template>
<div id="contact">
  <section class="contact_section">
    <div class="container">
      <form action="https://script.google.com/macros/s/AKfycbw_dXkx2oASgp4fJKsUeQQnHKVFDmVAVJKZB0QjsQcn3We5MxJX/exec" class="form-box">
        <input name="SPREADSHEET_ID" type="hidden" value="1qMaKeCA5VYCJSm3WFgUK-WZh7b-i0Iuc9qIYEsK7bJg">
        <input name="SHEET_NAME" type="hidden" value="フォームデータ">
        <h2 class="contact_h2">Contact</h2>
        <div class="form-item-box">
          <label class="control-label">Name</label>
          <div class="">
            <input type="text" class="form-control" name="your-name" placeholder="Name">
          </div>
        </div>
        <div class="form-item-box">
          <label class="control-label">Email</label>
          <div class="">
            <input type="email" class="form-control" name="your-email" placeholder="example@email.com">
          </div>
        </div>
        <div class="form-item-box">
          <label class="control-label">Message<span class="label-required">必須</span></label>
          <div class="">
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
    description: 'べこ（becolomochi）へのお問い合わせページ',
    methods: {
      sendMessage() {
        var form = $('form');
        var submitBtn = form.find('button[type=submit]');
        if(getElementById('message') === '') {
          alert('メッセージを入力してください');
          return false;
        }
        $.ajax({
          url: form.attr('action'),
          dataType: 'jsonp',
          data: form.serialize(),
          beforeSend: function() {
            return submitBtn.prop('disabled', true);
          },
          complete: function() {
            return submitBtn.prop('disabled', false);
          },
          success: function(response) {
            return console.log(response);
          },
          error: function(response) {
            return console.log(response);
          }
        });
      }
    }
  }
</script>

<style lang="scss">
#contact {
  margin-top: 40px;
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