'use strict'

const modal = document.querySelector('.modal'),
    overlay = document.querySelector('.overlay'),
    btnCloseModal = document.querySelector('.close-modal'),
    btnsOpenModal = document.querySelectorAll('.show-modal');
    const closeModal = () => {
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    }
    const openModalHandler = () =>{
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }
    
    for(let i = 0; i < btnsOpenModal.length; i++){
        btnsOpenModal[i].addEventListener('click',openModalHandler)
    }
    
    btnCloseModal.addEventListener('click',closeModal);
    overlay.addEventListener('click',closeModal);
    
    document.addEventListener('keydown',function(e){
       if(!modal.classList.contains('hidden') && e.key === "Escape")closeModal();
    }); 

