function getRandomInt(min, max) {
    /*Returns a random number, not including maximum (because lists... Like lists...) */
    return Math.floor(Math.random() * (max - min)) + min;
}
const possibleWords = [
    "jungle", "laptop", "guitar", "sunset", "vortex", "clouds", "matrix", "clocks", "frozen", "bottle",
    "flame", "breeze", "mango", "piano", "tiger", "storm", "script", "puzzle", "rocket", "flock",
    "shadow", "keyboard", "horizon", "cactus", "flicker", "whisper", "drums", "crystal", "wizard", "blink"
  ]

const wordToFind = possibleWords[getRandomInt(0, possibleWords.length)].toUpperCase()

let count = 0

document.getElementById('len').innerText = wordToFind.length

function divCreate (clss = null, idC = null, idP = null, txt = null, ) { // Tester
    const nameClass = clss
    const idParent = idP
    const idChild = idC
    const textContent = txt

    let newDiv = document.createElement('div')
    
    if (nameClass) {newDiv.classList.add(nameClass)}
    if (idChild) {newDiv.id = idChild}
    if (textContent) {newDiv.textContent = textContent}
    if (idParent) {let parentEle = document.getElementById(idParent); parentEle.appendChild(newDiv);}
    
}

function breakLine (idP) {
    let idParent = idP
    let parentEle = document.getElementById(idParent)
    parentEle.appendChild(document.createElement('br'))
}

function play (event) {
    event.preventDefault()
    let answer = document.getElementById("wordattempt").value.toUpperCase().replace(/\s/g,"")
    while (answer.length < wordToFind.length) {
        answer += "-"
    }
    count += 1
    const uniqueId = answer + count.toString()
    divCreate("attempt", uniqueId, "playground") // TEXTE OPTIONNEL, undefined, et class aussi, trouver comment faire des class="..."; text="..."
    for (let i=0; i < answer.length; i++) {
        if (answer[i] === wordToFind[i]) {
            divCreate("green-letter", null, uniqueId, answer[i]) // ICIIII Pour une nouvelle div
        }
        else if( wordToFind.includes(answer[i])) {
            divCreate("yellow-letter", null, uniqueId, answer[i]) // ICIIII Pour une nouvelle div 
        }
        else {
            divCreate("grey-letter", null, uniqueId, answer[i]) // ICIIII Pour une nouvelle div 
        }
    }
    if (answer === wordToFind) {
        alert("You did it !")
    }
    breakLine("playground")
}

for (let letter of "We are a hint ! Enter the word you would like to try:") {
    let formatLetter = document.createElement('z')
    formatLetter.innerText = letter
    if (wordToFind.includes(letter.toUpperCase())) {
        formatLetter.id = "yellow"
        formatLetter.style.color = "#FFBF00" // JAUNE
    } 
    else {
        formatLetter.id = "red"
        formatLetter.style.color = "#990000" // ROUGE
    }
    document.getElementById('labelWordAttempt').appendChild(formatLetter)
}
