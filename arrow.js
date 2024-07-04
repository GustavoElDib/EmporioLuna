document.addEventListener('scroll', () => {
    let arrow = document.getElementById('top')

    if(window.pageYOffset > 20){
        arrow.style.display = 'flex'
    }else{
        arrow.style.display = 'none'
    }
})