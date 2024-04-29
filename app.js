const boton = document.getElementById("boton");
const titulo = document.getElementById("titulo");
const songcont = document.getElementById("song-cont")

boton.addEventListener('click', () =>{
    datoscanciones();
})

async function datoscanciones(){
    const url = `https://shazam.p.rapidapi.com/auto-complete?term=${titulo.value}&locale=en-US`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20551f460fmsh9934765550508cdp1666ffjsn045b7373051c',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
	},
};

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        songcont.classList.remove("song-cont2");
        songcont.classList.add("songcont");
        songcont.innerHTML = `
        
        
            <p class="canciones">${result.hints[0].term}</p><br>
            <p class="canciones">${result.hints[1].term}</p><br>
            <p class="canciones">${result.hints[2].term}</p><br>
            <p class="canciones">${result.hints[3].term}</p><br>
            <p class="canciones">${result.hints[4].term}</p><br>
            <p class="canciones">${result.hints[5].term}</p><br>
            <p class="canciones">${result.hints[6].term}</p><br>
            <p class="canciones">${result.hints[7].term}</p><br>
            <p class="canciones">${result.hints[8].term}</p><br>
            <p class="canciones">${result.hints[9].term}</p><br>
        
        
        
        
        
        
        
        `
        //console.log(result.hints[0].term);
    } catch (error) {
        console.error(error);
    }
}
