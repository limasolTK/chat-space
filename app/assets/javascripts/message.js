$(function() {
  function buildHTML(message){

    image = message.image ? `<img src="${message.image}">`: ``;
    
    var html = `<div class="message" data-message-id="${message.id}">
                  <div class="message__upper-info">
                    <div class="message__upper-info__talker">
                      ${message.user_name}
                    </div>
                    <div class="message__upper-info__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="message__text">
                    ${message.content ? `${message.content}` : ``}
                    ${ image }
                </div>
                </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $(".messages").animate({
        scrollTop: $(".messages")[0].scrollHeight
      }, 1500);
    })
    .fail(function(){
      alert('error');
    })
    .always(function(){
      $('.submit').removeAttr("disabled")
      $('.new_message').get(0).reset();
    })
  })
  var reloadMessages = function () {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      var last_message_id = $('.message:last').data("message-id"); 
      $.ajax({ 
        url: "api/messages",
        type: 'get',
        dataType: 'json', 
        data: {last_id: last_message_id} 
      })
      .done(function (messages) { 
        var insertHTML = '' 
        messages.forEach(function (message) {
          insertHTML = buildHTML(message); 
          $('.messages').append(insertHTML);
        })
        $('.messages').animate(
          {scrollTop: $('.messages')[0].scrollHeight
        }, 1500);
      })
      .fail(function () {
        alert('自動更新に失敗しました');
      });
    }
  };
  setInterval(reloadMessages, 5000);
});