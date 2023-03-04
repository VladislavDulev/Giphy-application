// Only place we append items to the root

import { navigation } from './components/modals/navigation.js'
import { gifList } from './components/gif-list.js'
import { attachEvents } from './events.js'
import { hasItem, setItem } from './components/storage-manager.js'


$(() => {
    // load navbar and giflist
    $('#root').append($('<div class="container-fluid"/>').append(navigation).append(gifList))
    
    // set up localStorage folders
    if(!hasItem('liked')) {
        setItem('liked', '{}');
    }
    if(!hasItem('uploaded')) {
        setItem('uploaded', '{}');   
    }
   // attach event listeners
   attachEvents()
})
 
