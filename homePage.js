var readMore = document.getElementById('middleButton');
var popUpDiv = document.getElementById('popUpDiv');
var dialogBox = document.querySelector("dialog");
var closeDialog = document.getElementById("closePopUpImg");
var bigDiv = document.getElementById('bigDiv')


readMore.addEventListener('click', function () {
    dialogBox.showModal();


    bigDiv.classList.add('bigDivNew');
})

closeDialog.addEventListener('click', function () {
    dialogBox.close();

    bigDiv.classList.remove("bigDivNew");

})