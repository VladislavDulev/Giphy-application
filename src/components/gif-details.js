// Display GIF details 

import { gifDetailsModal } from "./modals/gif-details-modal.js"

// Show up gifDetailsModal filled with GIF object details
export const displayGifDetails = (gifObject) => {

    let username = gifObject.data.username;
    // check if user is anonymous
    if(username == '') {
        username = 'Anonymous';
    }

    $('#gifDisplayDetailsModal').empty(); // remove pervious gifDetailsModal content from the container div
    $('#gifDisplayDetailsModal').append(gifDetailsModal); // Add new gif details template
    $('#gifDisplayModalLongTitle').append(gifObject.data.title); //add custom title to template
    
    $('#gifDisplayModal .modal-header')[0].id = gifObject.data.id; // add the id of the 
    // custom body for the template
    const modalBody = 
        `<div class="text-center"> 
            <img class="img-thumbnail" src="${gifObject.data.images.original.url}"/>
        </div>
        <span>Uploaded by - ${username}</span>
        <br>
        <span>Uploaded on - ${gifObject.data.import_datetime}</span>`;

    $('#gifDisplayModal .modal-body').append(modalBody); // add body to modal
    $('#gifDisplayModal').modal('toggle'); // open the modal
    
   
};