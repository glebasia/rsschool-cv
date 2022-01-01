document.querySelector('.button-menu').addEventListener('click', (event) => {
    const left = document.querySelector('.menu-left');
    const nav = document.querySelector('.header-nav-700px');
    const button = document.querySelectorAll('.button-menu p');
    if (left){left.classList.remove('menu-left');
        for(i=0; i<button.length; i++){
            button[i].classList.add('active')
        }
    } else {
        {nav.classList.add('menu-left');
            for (i = 0; i < button.length; i++) {
                button[i].classList.remove('active')
            }}
    };
})

