import { apiKey } from '@/utils/api'

export const getData = async (endPoint) => {
    const response = await fetch(`https://api.themoviedb.org/3/${endPoint}?api_key=${apiKey}`);
    
  if (response.ok) { // if HTTP-status is 200-299
      const data = await response.json()
      return data
    } else {
      alert("HTTP-Error: " + response.status);
    }
  }