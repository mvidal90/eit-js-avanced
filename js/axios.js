
const BASE_URL = "https://pokeapi.co/api/v2"

axios.get(`${BASE_URL}/pokemon/?limit=30&offset=0`) // Query (?limit=30&offset=0)
    .then(
        data => console.log(data)
    )
    .catch(
        err => console.error(err)
    )

axios.get(`${BASE_URL}/pokemon/1`) // Param (1)
    .then(
        data => console.log(data)
    )
    .catch(
        err => console.error(err)
    )
