
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
        // sliceExample(data)
        // spliceExample(data)
        // shiftExample(data)
        // unshiftExample(data)
        // pushExample(data)
        // findIndexExample(data)
        // findExample(data)
        // filterExample(data)
        mapExample(data)
        sortExample(data)
        reduceExample(data)
        spreadArrayFunction(data)
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

// Map
const mapExample = array => {
    const mapArray = array.map(
        (movie) => ({
            id: movie.id,
            title: movie.titulo,
            year: movie.anio
        })
    )
    console.log(mapArray)
}

// Sort
const sortExample = array => {
    // Caso descendente
    array.sort(
        (movieA, movieB) => movieB.anio - movieA.anio
    )
    console.log(array)
}

// Reduce
const reduceExample = array => {
    const additionDuration = array.reduce(
        (acc, movie) => acc + movie.duracion,
        0 // Valor inicial
    )
    console.log("total:", additionDuration)
}

// Desestructuración

const { anio, titulo,  } = newMovie; 
console.log("Titulo: ", titulo)
console.log("Año: ", anio)

// para desesctructurar un array usamos [] - y se debe tener en cuenta la posición
const arr = [ "Manzana", "Banana", "Pera", "Uva"]

const [ , , fruit ] = arr;
console.log("Fruta", fruit)

// Operador Spread
const newObj = {
    ...newMovie,
    calificacionIMDB: 9
}

console.log(newObj)

const spreadArrayFunction = array => {
    const newArray = [
        ...array,
        newObj
    ]
    console.log(newArray)
}
