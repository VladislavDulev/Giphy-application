// All requests to giphy api

const API_URL = "https://api.giphy.com/v1";
const UPLOAD_URL = "https://upload.giphy.com/v1/gifs";
const API_KEY = "E5Uz2LAhZwidVdoCs06butLFPPKDNcQ3";

import { appendGifs, emptyGifs } from "./gif-list.js";
import { displayGifDetails } from "./gif-details.js";
import { getItem, hasItem, setItem } from './storage-manager.js'

//link for trending gifs
// https://api.giphy.com/v1/gifs/trending?api_key=E5Uz2LAhZwidVdoCs06butLFPPKDNcQ3&limit=25&rating=G


// GET request to receive top trending gifs
export const getTrendingGifs = async (limit, offset) => {
 
  try {
    const responseData = await fetch(
      `${API_URL}/gifs/trending?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=G`
    );
    
    const gifsData = await responseData.json();
    appendGifs(gifsData);

  } catch (err) {
    console.error(err);
  }
};

// GET request to receive gifs with a keyword
export const getSearchedGifs = async (limit, offset, keyword) => {

  try {
    const responseData = await fetch(
      `${API_URL}/gifs/search?api_key=${API_KEY}&limit=${limit}&offset=${offset}&q=${keyword}&rating=G`
    );

    const gifsData = await responseData.json();
    appendGifs(gifsData);

  } catch (err) {
    console.error(err);
    return;
  }
};

// GET request to receive specific GIF object
export const getGifDetails = async (gif_id) => {

  try {
    const responseData = await fetch(
      `${API_URL}/gifs/${gif_id}?api_key=${API_KEY}`
    );

    const gifData = await responseData.json();
    displayGifDetails(gifData);

  } catch (err) {
    console.error(err);
  }
};

// POST request to upload gif to Giphy's server
export const uploadGifReq = async (file) => {
  // set options for fetch 
  const options = {
    method: "POST",
    body: file,
  };
  // try to send request
  try {
    const responseData = await fetch(`${UPLOAD_URL}?api_key=${API_KEY}`, options);
    const jsonResponseData = await responseData.json();
    const gifId = await jsonResponseData.data.id;
    
    toastr["success"]("Successfully upload"); // pop up status 
    getGifDetails(gifId); // open Modal
    // update localStorage
    let uploaded = hasItem('uploaded') ? JSON.parse(getItem('uploaded')) : {};

    uploaded[gifId] =  gifId;
    setItem('uploaded', JSON.stringify(uploaded));

  } catch (error) {
    // notify if fail
    console.log(error);
    toastr["error"]("Unsuccessfully uploaded");
    return;
  }

};

// GET request to receive specific Gifs
export const getAllUploadedGifs = async () => {

  // check if there any uploaded files
  let uploaded = JSON.parse(getItem('uploaded'));
  if (!uploaded == {}) {
    toastr.info("You haven't uploaded any GIFs yet.");
    return;
  }

  // set up the ids paramater
  let gifsIdParametar = '';
  for (const id in uploaded) {
    gifsIdParametar += uploaded[id] + ',';
  }

  try {
    const responseData = await fetch(`${API_URL}/gifs?api_key=${API_KEY}&ids=${gifsIdParametar}`);
    const jsonResponseData = await responseData.json();
    
    appendGifs(jsonResponseData);

  } catch (err) {
    console.error(err);
    return;
  }

}

export const getFavoritesGifs = async () => {
  // check if there any liked gifs
  

  if( !hasItem('liked') ){
    toastr.info("You haven't like any GIFS yet.");
    return;
  }
  
   // set up the ids paramater
  let liked = JSON.parse(getItem('liked'));
  let gifsIdParametar = '';
  for (const id in liked) {
    gifsIdParametar += liked[id] + ',';
  }

  try {
    const responseData = await fetch(`${API_URL}/gifs?api_key=${API_KEY}&ids=${gifsIdParametar}`);
    const jsonResponseData = await responseData.json();
    
    appendGifs(jsonResponseData);

  } catch (err) {
    console.error(err);
    return;
  }
}

export const api = {
  getTrendingGifs,
  getSearchedGifs,
  getGifDetails,
  getAllUploadedGifs,
  uploadGifReq,
  getFavoritesGifs
};
