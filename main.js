const password = 'qwerty'

let name = 'Jan'

// stara deklaracja zminnych jest to jednocześnie const jak i let
var sName = "Kowaslki"
// nie moge tego zrobić 
// password = 'poiuyt'

name= 'Adam'
name = 5

const workers = []
// workers = [] lub new Array() deklarują pustą tablicę 
const workers2 = new Array()

const workers3 = ['Jan', 'Maria', 'Rokita']

const workers4 = new Array('Marian', "Andrzej", `Zenek`)

const worker = {
    name: 'Jan',
    sName: 'Kowalski',

}

worker.name // zwraca 'Jan'
worker['name'] // zwraca 'Jan'

console.log(worker.name , workers2)

// // porównania 
// = przypisanie wartości

//  2 znaki == 
const a = 5
const b = '5'
a == b // zwróci true
//  3 znaki === 
a === b // zwróci false

// !=
a != b // false 

// !== spawdza czy wartość i typ są różne




const num = 10
if(num === 4) {
    // jak num równa się 4 to coś się stanie 
} else {
//    wykona się zawsze gdy num nie jest równy 4 
}

if(num === 4) {
   // jak num równa się 4 to coś się stanie  
} else if(num === 5) {
    // jak num równa się 5 to coś się stanie 
} else if (num === 6 ) {
    // jak num równa się 6 to coś się stanie 
} else {
    //    wykona się zawsze gdy num nie jest równy 4, 5 , 6 
}

if(num === 4) {
       // jak num równa się 4 to coś się stanie
}

switch(num) {
    case 4:
       // jak num równa się 4 to coś się stanie 
    break;
    case 5: 
    // jak num równa się 5 to coś się stanie
    break;
    default: 
       //    wykona się zawsze gdy num nie jest równy 4, 5 
}

const str1 = "Jan"

const str2 = 'Adam'

const str3 = "Jan 'xd' Kowalski"

const str4 = 'Jan "pędzący Koń" Nowak'

const str5 = `${str1} Kowalski`

const str6 = str1 + str2 //JanAdam
const str7 = str1 + ' ' + str2 //Jan Adam
const str8 = `${str1} ${str2}` //Jan Adam

const tab = [5,6,82,55]

tab.push(404) // tablica tab [5,6,82,55, 404]
 tab.pop() // usuwa ostatni element z tablicy
const zwrotZPop = tab.pop() // zwróci usuniętą wartość


tab.unshift(1) // doda na poczatek tablicy 
tab.shift() // usuwa i zwraca wartość usuniętą 

tab.join('&') // 5&6&82&55
tab.join() //5,6,82,55
tab.reverse() // [55,82,6,5]

const names = ['Jan', 'Adam', 'Łukasz']
names.sort() // ['Adam', 'Jan', 'Łukasz']

tab.sort() // 5, 55, 6 , 82
const tab2 = [5,55,66,6,87,98,1,52]
tab2.sort((a,b) => {
    console.log(a, b , tab2)
    return a - b 
}) // 1, 5, 6, 52, 55, 66, 87, 98
for(let i = 0; i < tab2.length; i++) {
    console.log(tab2[i])
}

for(const element in tab2) {
    console.log(element)
}

tab2.forEach(item => {
    console.log(item)
})

const tabAfterMap = tab.map((item, index, orgArr ) => {
    return item * 2;
}) 
console.log(tabAfterMap) // 10, 110, 12, 164


// orginalna tablica 5, 55, 6 , 82
const tabAfterMapWithUndefined = tab.map(item => {
    if(item > 10) {
        return item * 2
    }
}) // undefined , 110, undefined, 164


const tabAfterFilrer = tab.filter(item => {
    if(item > 10) {
        return item
    }
}) // 55, 82

const tabAfterFilrerAndMap = tab.filter(item => {
    if(item > 10) {
        return item
    }
}).map(item => {
    return item * 2
})


const fraza = "zegarek dla chłopca 8-13"

// szukana franza zeg

fraza.split(' ') // tablica ['zegarek', 'dla', 'chłopca', '8-13']
 
tab.map(function (item) {
    return item * 2 
})

tab.map(item => {
    return item * 2
})

tab.map(item => item * 2)
do {
if(num > 5) {
    break
}
} while(numm > 5)


for(let i =0; i < 4; i++) {
    if(i === 2)  {
        continue
    } 
    console.log( i)
}

const obj = {
    name: '45',
    works: ['xd', 'januszex'],
    showWorks: ()=> {
        console.log(this.works)
    }
}
const obj2 = new Object()
obj2.age = 54

function NewWorker(name, sName, age) {
    this.name = name
    this.sName = sName
    this.age = age
    this.workTime = age - 26
}
const newWoker = new NewWorker('Jan', "Nowak", 40)
console.log(newWoker)
const keysObj = Object.keys(newWoker) // tworzy array stringów z kluczy obiektu
console.log(keysObj)

keysObj.forEach(item => {
    console.log(item)
    console.log(newWoker[item], 'wartość z klicza ' + item )
})

function sum(a, b) {
    const wynik = a + b 
}

// console.log(wynik) // undefined

function sum2(a , b) {
    const wynik = a + b
    return wynik 
}

const policz = sum(4, 6)

console.log(policz) // wypisze 10


const wynik3 = 0
function sum3(a , b) {
    // console.log(this) zasięg tylko w funkcji
    wynik3 = a + b
}





async function kolejka() {
    await sum(5,5)
    await sum2(10, 40)
    await sum3(4,88)
}

const trener = {
    age: 40,
    techo: "FE",
    works : {
        namecompany: [1]
    }
}

const trenerCopy = {...trener}
trener.sName = 5

const sum4 = (a, b) => {
    // console.log(this) globalny this
    return a + b
}

sum4(4 , 5)

// console.log("document", document) zasięg dokument HTML

// console.log('window', window) zasię całego okna przeglądarki 


const liNav = document.getElementsByClassName('li-nav')
console.log(liNav)


const liNavArry = Array.from(liNav)

console.log(liNavArry)

liNavArry.forEach((item, index) => {
    // item.innerText = 'item--- ' + index  // dodakje tekst
    // item.style.color = 'red' zmina wartość css
        // item.innerHTML = '<a href="https://wp.pl/"> link do wp</a>'
})

const paragraf = document.createElement('p')
paragraf.setAttribute('class', 'title1')
paragraf.innerText = "Stworzony przez JS"
console.log(paragraf)
const divWithH = document.getElementById('addh1')
console.log(divWithH)

divWithH.appendChild(paragraf)

const poTagHTML = document.getElementsByTagName('p')  // pobiera wszystkie el. p z pliku HTML

// const poSelectora = document.querySelector('type="text"') // pobiera pierszy napotkany element

// const poSelevtorAll = document.querySelectorAll('type="text"')


const obj8 = {
    name: "Jan"
}
// można 
obj8.name = "Adam"
// nie można 
// obj8 = {
//     age: 8
// }

// tworzenie drzewka widoku 
    {/* <div>
            <section>   
                <p></p>
                <p></p>
            </section>
        </div> */}

const div1 = document.createElement('div')
const section1 = document.createElement('section')
const p1 = document.createElement('p')
const p2 = document.createElement('p')

section1.appendChild(p1)
section1.appendChild(p2)
div1.appendChild(section1)

console.log(div1)


const mainHeader = document.getElementById('main-header')
const children = mainHeader.children.length // spawdzam ile dzieci ma pobrany element 
console.log(children)

mainHeader.removeChild(mainHeader.children[children -1])