var urlData;

fetch("./data/insta-posts.json")
    .then(response => response.json())
    .then(data => {
        urlData = data.urls;
        console.log(urlData);
    });

function loadInstaPost(){

}