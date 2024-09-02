import { main } from "./main";



async function URL() {

    try {
        
        const data = await main()
        console.log('Url picture: ', data)

    } 
    
    catch (error) {

        console.error("Failed to fetch: ", error)

    }

}

URL();