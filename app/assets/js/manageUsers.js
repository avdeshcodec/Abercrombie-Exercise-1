function loadUsers() {
    showLoader(); // Loader indicator

    fetch(getAPIEndPoints("GETUSERS"), {
        method: 'GET'
    }).then(response => response.json()).then(function (users) {
        debugger;
        const templateData = { users: users };
        const html = parseHtmlTemplate('#item-template', templateData);
        document.querySelector('#itemList').innerHTML = html;
    }).catch(function (error) {
        showErrorMessage(error); 
    }).finally(function() {
        hideLoader();
    });
}

function toggleContent(btnElement, userId) {
    const currentElement = document.querySelector(`#user_${userId} .item-more`);
    const btnText = btnElement.innerText === "More Details" ? "Less Details" : "More Details";

    currentElement.classList.toggle('hidden');
    btnElement.innerText = btnText;
}

(function () {
    loadUsers();
})();