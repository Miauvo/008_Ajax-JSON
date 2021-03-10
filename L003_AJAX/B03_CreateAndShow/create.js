//AJAX -Asynchronous Javascript and XML /Json

document.addEventListener("DOMContentLoaded", ready);
function ready(){  

  var postTemplate = document.getElementById('order-template').innerHTML;
    function addPost(post)
    {  
        document.getElementById('posts').innerHTML = Mustache.render(postTemplate, post);
        console.log(post);
    }

    document.getElementById('add_post').onclick = function() {
        var userid = document.getElementById("userId").value;
        var new_title = document.getElementById("title").value;
        var new_body = document.getElementById("body").value;
       
        fetch('https://jsonplaceholder.typicode.com/posts', {
      
        method: 'POST',
        body: JSON.stringify({
              title: new_title,
              body: new_body,
              userId: userid
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(response => response.json())
          .then(json => {
            addPost(json);
            console.log('response: ' + JSON.stringify(json));
          })
      }
}
