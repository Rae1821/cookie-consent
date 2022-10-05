
const modal = document.getElementById('modal');
const modalX = document.getElementById('modal-close-btn');
const cookieForm = document.getElementById('cookie-form');
const modalText = document.getElementById('modal-text');
const declineBtn = document.getElementById('decline-btn');
const modalChoiceBtns = document.getElementById('modal-choice-btns');

//sets a delay of 1.5 seconds before the modal pops up
setTimeout(function(){
    modal.style.display = 'inline';
}, 1500);

//Closes modal when you click the X
modalX.addEventListener('click', function(){
    modal.style.display = 'none';
});

//Prevents reloading of form when it is closed and changes text inside the HTML
cookieForm.addEventListener('submit', function(e){
    e.preventDefault();

    const cookieFormData = new FormData(cookieForm);
    console.log(cookieFormData);

    const name = cookieFormData.get('fullName');

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">
            Uploading your data to the dark web...
        </p>
    </div>`
    setTimeout(function(){
        document.getElementById('upload-text').innerHTML = `
        Making the sale...`
    }, 1500);

    setTimeout(function(){
        document.getElementById('modal-inner').innerHTML = `
        <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
        <p>We just sold the rights to your eternal soul.</p>
        <div class="idiot-gif">
            <img src="images/pirate.gif">
        </div>`
        modalX.disabled = false
    }, 3000);
   

});

declineBtn.addEventListener("mouseover", function(){
    modalChoiceBtns.classList.toggle('reverse');
});
