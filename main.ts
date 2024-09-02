import { fetchDeezer } from './index'


export const main = async() => {

    try {
        
        const data = await fetchDeezer();
        const artistData = {
            picture: data.picture,
            name: data.name
        };
        
        return artistData

    } 
    
    catch (error) {
        
        console.error("failed to fetch: ", error)

    }

}

