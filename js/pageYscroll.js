document.addEventListener('scroll', () => {
    let topo = document.getElementById('container')

    if (window.pageYOffset >  80){
        topo.style.boxShadow = '-5px -4px 14px black'
    }else{
        topo.style.boxShadow = '0 0 0 0'
    }
})  