//Here are all events - From navigation.js just change the name in the html section and add an id to the element 

import { api } from './components/api.js'
import { emptyGifs } from './components/gif-list.js'
import { uploadFile } from './components/gif-upload.js'
import { hasItem, setItem, getItem } from './components/storage-manager.js'


export const attachEvents = () => {
    const limit = 15;
    let offset = 0;

    // When the document is ready load trending gifs
    $('#trending-gifs').ready(() => {
        api.getTrendingGifs(limit, offset);
    });

    // navbar on click treanding 
    $('#trending-gifs').on('click', (event) => {
        emptyGifs();
        offset = 0;
        api.getTrendingGifs(limit, offset);
    });

    // navbar on click search button
    $('#search-button').click(() => {
        const keyword = $('#search-input').val()
        emptyGifs();
        offset = 0;
        api.getSearchedGifs(limit, offset, keyword);
    });

    // navbar on eneter search input
    $("#search-input").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#search-button").click();
        }
    });

    // navbar on click uploaded gifs
    $('#uploaded-page-btn').on('click', (event) => {
        emptyGifs();
        api.getAllUploadedGifs();
    });

    // git-item on click
    $('#gif-list').on('click', '.gif-item', (event) => {
        api.getGifDetails(event.currentTarget.id);
    });

    // navbar on click upload button
    $('#upload-file-btn').click(() => {
        uploadFile();
    });

    // hearth btn event listener 
    $('#gifDisplayDetailsModal').on('click', '#heart-button-id', (event) => {
        let liked = hasItem('liked') ? JSON.parse(getItem('liked')) : {};
        const gifId = $('.modal-header')[0].id;
        if(liked.length == 0){
            toastr.info('This GIF is already in your favorites');
            return;
        }
        liked[gifId] = gifId;
        setItem('liked',JSON.stringify(liked));
            

        toastr["success"]("This GIF saved to your faveorites")
    });

    $('#favorites-page-btn').on('click', (event) => {
        emptyGifs();
        api.getFavoritesGifs();
    });

};