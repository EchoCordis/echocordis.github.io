var templateData;
fetch("./data/boss-templates.json")
    .then(response => response.json())
    .then(data => {
        templateData = data.templates;
        console.log(templateData);
    });

// Generate boss name using templates + user name input
function generate() {
    var name = document.querySelector('#nameField').value
    var template = templateData[Math.floor(Math.random() * templateData.length)];
    // Used function to load string and template literal
    var command = "console.log(" + template.replace('${name}', name) + ")";
    new Function(command)();
}