import { uploadGifReq } from './api.js';

// upload file
export const uploadFile = () => {
    let file = $('#upload-file').prop('files'); // get the file from imput
    // check if there is file uploaded
    if(!file || file.length == 0) {
        //notify before sending request
        toastr["error"]('Please, upload a file first');
        console.log('Please, upload a file first');
        return;
    }
    // prepering the body of the request
    let formFile = new FormData();
    formFile.append('file', file[0]);
    uploadGifReq(formFile);
}

