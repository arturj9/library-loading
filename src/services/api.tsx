import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDc5OTg5NjAsImV4cCI6MTcwODA4NTM2MCwic3ViIjoiOTg2YjBjOTAtN2FmYi00ZTRhLWI1NjItM2VkNGM2MTE1OTNkIn0.8AvTnUTvvsFWkm2ld_lag2t3-CpmV7CaKK9GoCdCqUw'

const conf = {
    baseURL: 'https://api-books.fly.dev/api/v1/',
    headers: {
        'Authorization': `Bearer ${token}`
    }
}

const api = axios.create(conf)
// api.interceptors.request.use(async (conf)=>{
//     const token2 = token
// })

export async function requestAxios() {
    await axios.get('books/categories',conf).then((response)=>{
        console.log(response)
    }).catch((error)=>{
        console.error(error)
    })
}



