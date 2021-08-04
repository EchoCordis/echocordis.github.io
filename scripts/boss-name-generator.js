var templateData;   // Stores JSON data of all name templates
var prevTemplate;   // Stores previously used name template
fetch("./data/boss-templates.json")
    .then(response => response.json())
    .then(data => {
        templateData = data.templates;
        console.log(templateData);
    });

// Generate boss name using templates + user name input
function generate() {
    if (document.querySelector('#nameField').value.length > 0) {
        var name = capitaliseName(document.querySelector('#nameField').value);
        var template = templateData[Math.floor(Math.random() * templateData.length)];

        // Reselects a new name template if it is the same as the previous template
        while (template == prevTemplate) {
            template = templateData[Math.floor(Math.random() * templateData.length)];
        }
        prevTemplate = template;

        // Used function to load string and template literal
        //var command = "console.log(" + template.replace('${name}', name) + ")";
        var command = "document.getElementById('name').innerHTML = " + template.replace('${name}', name);
        new Function(command)();
    }   
}

// Capitalises the words in the name
function capitaliseName(name) {
    if (name.split(' ').length >= 2) {
        var nameArray = name.split(' ');
        var capName = "";
        // Loop through all parts of the name and capitalise the words
        for (i = 0; i < nameArray.length; i++) {
            capName += nameArray[i].charAt(0).toUpperCase();
            capName += nameArray[i].slice(1);
            // Prevents a space being added to end of final word
            if (i < nameArray.length - 1) {
                capName += " ";
            }
        }
        return capName;
    }
    else {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}