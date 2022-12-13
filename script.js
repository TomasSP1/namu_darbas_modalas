let openModal = document.querySelectorAll('.modal')
let modalContainer = document.getElementById('modal-container');
let closeBtn = document.getElementById('close-btn');

openModal.forEach((open) => {
    open.addEventListener('click', function(){

        modalContainer.style.display = 'block';
    })
  })

closeBtn.addEventListener('click', function(){

    modalContainer.style.display = 'none';
})

window.addEventListener('click', function(e) {
    console.log(e.target)
    console.log(modalContainer)

    if (e.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
})