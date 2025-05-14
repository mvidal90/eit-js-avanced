
const xhr = new XMLHttpRequest;
console.log(xhr.readyState) // 0 --> UNSENT (Solo fue creado)

xhr.open("GET", "../data/movies.json")
console.log(xhr.readyState) // 1 --> OPENED (El metodo open se llamó)

// 2 --> HEADERS_RECEIVED (Se llama un mentodo send)
// 3 --> LOADING (Downloading)


// 4 --> DONE (La operación se completó satisfactoriamente)
xhr.addEventListener( "readystatechange", () => {
    console.log("El valor del readystate es:", xhr.readyState)
    if (xhr.readyState === 4) {
        console.log(JSON.parse(xhr.response))
    }
} )

xhr.send()