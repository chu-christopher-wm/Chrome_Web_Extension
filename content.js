/**
 * Created by session2 on 2/23/16.
 */
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.google.com/', true);
xhr.responseType = 'blob';
xhr.onload = function(e) {
    var img = document.createElement('img');
    img.src = window.URL.createObjectURL(this.response);
    document.body.appendChild(img);
};

xhr.send();