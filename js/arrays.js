
console.log("Hello arrays")

const newMovie = {
    id: 100,
    titulo: "El eternauta",
    director: "Stagnaro",
    genero: "Sci-Fi",
    anio: 2025,
    duracion: 60,
    fuePremiada: false,
    calificacionIMDB: "-"
}

// Asincrónia

// Fetch API

const readMovies = async () => {
    const response = await fetch("../data/movies.json", { method: "GET" })
    const movies = await response.json()
    
    return movies
}

readMovies()
    .then( data => {
        sliceExample(data)
        spliceExample(data)
        shiftExample(data)
        unshiftExample(data)
        pushExample(data)
        findIndexExample(data)
        findExample(data)
        filterExample(data)
    })
    .catch( err => console.log(err) )

// Slice (Inmutable)
const sliceExample = array => {
    const newArray = array.slice(5, 8)
    console.log(array) 
    console.log(newArray) 
}

// Splice (Mutable)
const spliceExample = array => {
    const newArray = array.splice(4, 3, newMovie)
    console.log(array) 
    console.log(newArray) 
}

// Shift (Mutable)
const shiftExample = array => {
    const element = array.shift()
    console.log(array) // Array original sin el primer elemento
    console.log(element) // Primer elemento 
}

// Unshift (Mutable)
const unshiftExample = array => {
    const newArrayLength = array.unshift(newMovie, {})
    console.log(array) 
    console.log(newArrayLength) 
}

// Unshift (Mutable)
const pushExample = array => {
    const newArrayLength = array.push(newMovie)
    console.log(array) 
    console.log(newArrayLength) 
}

// FindIndex
const findIndexExample = array => {
    const index = array.findIndex( movie => movie.titulo === "Doctor Strange" )
    console.log("findIndexExample", index) 
}

// Find
const findExample = array => {
    const object = array.find( movie => movie.titulo === "Doctor Strange" )
    console.log("findExample", object) 
}

// Filter
const filterExample = array => {
    const arrayFiltered = array.filter( movie => movie.genero === "Sci-Fi" )
    console.log("filterExample", arrayFiltered) 
}