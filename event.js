function event1() {
    console.log(123)
    // event1 przypisany do button bezpośrednio w HTML
}
const event3 = () => {
    console.log('event3')
    // event 3 i event2 pokzaują różnice między funkcja zapisnaną function name 
    // oraz funkcją strzałkową.
    // 2 sposób podpinania do pobranego tag html i przypisanego do zminnej btn2
}
const btn2 = document.getElementById('btn-2')

btn2.onclick = event3
btn2.onfocus = event2

function event2() {
    console.log('event2')
}
const event4 = ()=> {
  // zmina objektu JS na JSON
  const obj = {
      name: "Jan",
      age: 45
  }
  const objToJson = JSON.stringify(obj)  // zmina objektu w JSON
  const jsonToObj = JSON.parse(objToJson) // zmina JSON na objekt 
  console.log(objToJson, obj, jsonToObj)
}
const btn3 = document.getElementById('btn-3')

btn3.addEventListener('click', event4)

const inputName = document.getElementById('input-name')
console.log(inputName)

function eventChange(e) {
   e.preventDefault()
console.log(456)
}

const show = document.getElementById('show')
let isShow = false

const showOrHidden = () => {
    const hiddenDiv = document.getElementsByClassName('hidden')[0]
    console.log(document.getElementsByClassName('hidden'))
    if(isShow) {
        hiddenDiv.style.display = 'none'
    } else {
        hiddenDiv.style.display = 'block'
    }
    isShow = !isShow
}
show.addEventListener('click', showOrHidden)


const btnGet = document.getElementById('get')


const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => {
        // console.log(res)
        // możemy wyświetlać na stronie
        const postsEl = document.getElementById('posts')
        res.forEach(item => {
            const paragraf = document.createElement('p')
            paragraf.innerText = `Jestem postem numer ${item.id} o tytule: ${item.title}`
            postsEl.appendChild(paragraf) // dodaje przy każdej iteracji do div o id posts , tworzony wyżej paragraf
        });
    }).catch((error) => {
        console.log(error)
    })
}

btnGet.addEventListener('click', getPosts)




// const bezNawiasow = (res) =>  res.json()