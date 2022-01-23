const tile = document.querySelectorAll(".project-tile");

for (let i=0; i < tile.length; i++){
    tile[i].addEventListener('mouseenter', (e) => {        
        const span = tile[i].getElementsByClassName("spanLink");

        for(let val of span){  
            val.style.opacity = "1";
            val.style.transitionDuration = "0.6s"; 
        }
    });
}

for (let i=0; i < tile.length; i++){
    tile[i].addEventListener('mouseleave', (e) => {
        const span = tile[i].getElementsByClassName("spanLink");       

        for (let val of span){
            val.style.opacity = "0"; 
            val.style.transitionDuration = "0.3s";     
        }
    });
}
