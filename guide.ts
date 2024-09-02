// // api.ts
// import axios from 'axios';

// export const fetchData = async () => {
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     throw error;
//   }
// };




// // main.ts
// import { fetchData } from './api';

// const displayData = async () => {
//   try {
//     const data = await fetchData();
//     console.log('Fetched Data:', data);
//   } catch (error) {
//     console.error('Error in displayData:', error);
//   }
// };

// displayData();


// import axios from 'axios';

// // Define TypeScript interfaces for the data structure
// interface Track {
//   title: string;
//   artist: {
//     name: string;
//   };
//   album: {
//     title: string;
//   };
//   preview: string;
// }

// interface ApiResponse {
//   tracks: {
//     data: Track[];
//   };
// }

// Use the provided API URL
// const API_URL = "https://api.deezer.com/radio";

// // Function to fetch top tracks
// async function fetchTopTracks() {
//   try {
//     const response = await axios.get<ApiResponse>(API_URL);
//     const data = response.data;

//     console.log('Top Tracks:');
//     data.tracks.data.forEach((track) => {
//       console.log(`Title: ${track.title}`);
//       console.log(`Artist: ${track.artist.name}`);
//       console.log(`Album: ${track.album.title}`);
//       console.log(`Preview: ${track.preview}`);
//       console.log('---------------------');
//     });
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       console.error('Error fetching top tracks:', error.message);
//     } else {
//       console.error('Unexpected error:', error);
//     }
//   }
// }

// fetchTopTracks();
