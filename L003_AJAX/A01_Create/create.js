//AJAX -Asynchronous Javascript and XML /Json

$(document).ready(function(){

    var API ='https://jsonplaceholder.typicode.com';

    var $userId =$('#userId');  
    var $title = $('#title');
    var $body = $('#body');

    var $posts = $('#posts');


    function addPost(post)
    {
        $posts.append(JSON.stringify(post));  
        console.log(post);
    }



    $('#add_post').on('click', function () {   

        var post ={
                title:  $title.val(),
                body:   $body.val(),
                userId: $userId.val()         
        };


        $.ajax({
            type: 'POST',

            url: API + '/todo',

            data: post,

            success: function (newPost) {
                addPost(newPost);
            },
            error: function () {
                console.log('error saving order');
            }
        });

    });


});
