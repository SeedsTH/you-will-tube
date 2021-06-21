import axios from 'axios'
console.log(process.env.REACT_APP_YT_API_KEY)
const request = axios.create({
   baseURL: 'https://youtube.googleapis.com/youtube/v3/',
   params: {
      key: 'AIzaSyBJedKzAozE0IvBsb4EpuK1_3Fj6Fi6BXw',
   },
})

export default request
