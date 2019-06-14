$(document).on('turbolinks:load', function() {
  $(function(){
    var search_field = $('#user-search-field')

    function buildUsersHTML(user) {
      var html = `<div class="chat-group-user clearfix">
                    <p class="chat-group-user__name">${user.name}</p>
                    <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
                    </div>`
      $('#user-search-result').append(html);
    }

    function buildErrorHTML(msg) {
      var html = `<div class="chat-group-users clearfix">${msg}</div>`
      $('#user-search-result').append(html);
    }

    function addMemberHTML(member) {
      var html = `<div class='chat-group-user clearfix js-chat-member', id="chat-group-user-${ member.id }">
                    <input name='group[user_ids][]' type='hidden' value='${ member.id }'>
                    <p class='chat-group-user__name'>${ member.name }</p>
                    <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                  </div>`
      $('#chat-group-users').append(html);
    }

    $('#user-search-field').on('keyup', function(e){
      console.log("test")
      var inputName = search_field.val()
      if(inputName.length){
        e.preventDefault();
        var userName = $('#user-search-field').val();
        $.ajax({
          url: "/users",
          type: "GET",
          data: {members: userName},
          dataType: "json"
        })
        .done(function(user){
          $('#user-search-result').empty();
          if(user.length !== 0) {
            user.forEach(function(users) {
              buildUsersHTML(users);
            });
            
          } else {
            buildErrorHTML("一致するユーザーはいません。");
          }
        });
      } else {
        $('#user-search-result').empty();
      }
    });

    $(document).on("click", ".user-search-add.chat-group-user__btn.chat-group-user__btn--add", function () {
      var member = {};
      member.id = $(this).attr("data-user-id");
      member.name = $(this).attr("data-user-name");
      $(this).parent().remove();
      addMemberHTML(member);
    })
    $(document).on("click", ".user-search-remove.chat-group-user__btn.chat-group-user__btn--remove.js-remove-btn", function() {
      $(this).parent().remove();
    })
  });
});