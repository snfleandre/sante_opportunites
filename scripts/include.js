const load = async (id, url) => {
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('Echec de telechargement du header')
        }
        const data = await response.text();
        document.querySelector(id).innerHTML = data;
        
    }catch(error){
        window.location.assign("./erreur.html")
        console.log('error : ',error)

    }

    if(id === '#header'){
        const links = document.querySelectorAll('.navbar .nav-link');
        const currentPath = window.location.pathname;

        links.forEach(link => {
            link.classList.remove('active');

    
            if (link.pathname === currentPath) {
            link.classList.add('active');
            }
        });
    }
};



const main = async () => {
    await load('#header', './composants/header.html');
    await load('#footer', './composants/footer.html');

}

main();