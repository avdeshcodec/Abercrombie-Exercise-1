// Handle bar pipe
Handlebars.registerHelper('convertTimestamp', function(timestamp) {
    return new Date(timestamp).toLocaleDateString();
});

// Handlbar common parser method
function parseHtmlTemplate(templateName, templateData) {
    var template = document.querySelector(templateName).innerHTML;
    var templateScript = Handlebars.compile(template);
    return templateScript(templateData);
}

// Common API Url Method
function getAPIEndPoints(key) {
    const API_URL = "https://5dc588200bbd050014fb8ae1.mockapi.io";

    const API_ENDPONTS = {
        GETUSERS: "/assessment"
    };
    return API_URL + API_ENDPONTS[key];
}


// Show/Hide loader methods
function showLoader() {
    document.querySelector('#loader').classList.add('show');
}

function hideLoader() {
    document.querySelector('#loader').classList.remove('show');
}

// Error message method
function showErrorMessage(message) {
    if (!message) message = "Something went wrong. Please try again later.";

    const errorDiv = document.createElement("div");
    errorDiv.classList.add("item-error");
    errorDiv.classList.add("show");
    errorDiv.innerText = message;
    document.body.append(errorDiv);
    setTimeout(function () { 
        errorDiv.classList.remove("show"); 
    }, 3000);
}
