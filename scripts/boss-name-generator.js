var templateData;
fetch("./data/boss-templates.json")
    .then(response => response.json())
    .then(data => {
        templateData = data.urls;
    });

function generate() {
    var name = document.querySelector('#nameField').value
    var template = templateData[Math.floor(Math.random() * templateData.length)];
    console.log(template);
}