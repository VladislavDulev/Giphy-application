// GIF list functions

// get the gifList element 
export const gifList = `<div id="gif-list" class="row container-fluid" style="margin: 0px;"></div>`;


// gifItem elment filled with data from GIF Object
const gifItem = ({ images: { fixed_height: { url } }, title, id }) => {
  return (
    `<div id="${id}" #gif-item class="card col-2 gif-item" style="margin: 20px">
          <img clas="w-100" style="padding-top: 20px;" src="${url}"/>
          <h6 class="card-title text-center pt-3">${title}</h6>
      </div>`
  );
};

// append Gifs to gifList element
export const appendGifs = ({ data }) => {
  const gifItems = data.map( gifItem );
  $('#gif-list').append( gifItems );
};

// empty gifs from gifList element
export const emptyGifs = () => {
  $('#gif-list').empty()
};



