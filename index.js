// From free Dictionary Api
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById('result');
const sound = document.getElementById('sound')
const btn = document.getElementById('search-btn')
const errorText = document.querySelector('.error-text')

btn.addEventListener('click', ()=>{
    let inpword = document.getElementById('inp-word').value;

    fetch(`${url}${inpword}`)
    .then((response => response.json()))
    .then((data) => {
        console.log(data);
        result.innerHTML = ` <div class="word">
        <h3>${inpword}</h3>
        <button onclick="playSoundFn()" >
            <span><i class="fa-solid fa-volume-high"></i></span>
        </button>
    </div>
    <div class="details">
        ${data[0].meanings[0].partOfSpeech}
          ${data[0].phonetic} 
    </div>
    <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
    </p>
    <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
    </p>`
    sound.setAttribute("src",`${data[0].phonetics[0].audio}` )
    console.log(sound)
    })
    .catch( ()=>{
        result.innerHTML = `<h3 class= "error">No Definitions Found</h3> <br>`
        errorText.innerHTML = `<p>Check Word Spelling or Internet Connection</p>`
       
    } )
})



function playSoundFn(){
    sound.play()
}