import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDg0MjM5NTYsImV4cCI6MTcwODUxMDM1Niwic3ViIjoiOTg2YjBjOTAtN2FmYi00ZTRhLWI1NjItM2VkNGM2MTE1OTNkIn0.MIiHyYkQu3zl6siCOPkikM1jO-GrySgbaTEdke2DW5Q'

export const conf = {
    baseURL: 'https://api-books.fly.dev/api/v1/',
    headers: {
        'Authorization': `Bearer ${token}`
    }
}

const api = axios.create(conf)
// api.interceptors.request.use(async (conf)=>{
//     const token2 = token
// })

export async function getCategories() {
    try {
        const response = await axios.get('books/categories', conf);
        return response
    } catch (error) {
        console.error(error);
    }
}



