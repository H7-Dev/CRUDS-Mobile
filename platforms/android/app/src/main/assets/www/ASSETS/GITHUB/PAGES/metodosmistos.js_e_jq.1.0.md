# MÉTODOS JAVASCRIPT & JQUERY

>     - ✅[Javascript Convert an URL to a BASE64 Image](https: //stackoverflow.com/questions/41778434/javascript-convert-an-url-to-a-base64-image)
>         -👉⚡Amostra
>
> ``` js
>    // convert to base64
>    function getBase64Image(imgUrl, callback) {
>        var img = new Image();
>        // onload fires when the image is fully loadded, and has width and height
>
>        img.onload = function(){
>
>          var canvas = document.createElement("canvas");
>          canvas.width = img.width;
>          canvas.height = img.height;
>          var ctx = canvas.getContext("2d");
>          ctx.drawImage(img, 0, 0);
>          var dataURL = canvas.toDataURL(),
>              dataURL = dataURL
>
>          callback(dataURL); // the base64 string
>        };
>
>        // set attributes and src
>        img.setAttribute('crossOrigin', 'anonymous'); //
>        img.src = imgUrl;
>
>    }
>    // obter to base64
>    getBase64Image(imageData, function(base64image){
>        console.log('base64image');
>        $('#in_imgDataBase64').val(base64image);
>        $('.imgSrc').css('background-image', 'url('+imageData+')');
>    })
> ```
