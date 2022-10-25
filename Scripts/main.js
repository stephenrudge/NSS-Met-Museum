import { fetchArtX5, renoirArray } from "./data.js"


const displayArtist = async () => {
    const array = await fetchArtX5 (renoirArray)
    let html = ""
    
    for (const obj of array){
        html+= `
        <article id ="card">
        <p>${obj.artistDisplayName}</p>
        <p><img src ="${obj.primaryImageSmall}"></p>
        <p>${obj.title}</p>
        
        </article>`
    }

    document.getElementById("app").innerHTML = html
}
displayArtist()