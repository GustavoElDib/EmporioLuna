document.addEventListener('scroll', () =>{
    if(window.pageYOffset > 5 ){
        document.getElementById('container').style.display = 'none'
    }else{
        document.getElementById('container').style.display = 'flex'
    }
})