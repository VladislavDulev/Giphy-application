// GIF details modal template

export const gifDetailsModal = 
    `<div class="modal fade" id="gifDisplayModal" tabindex="-1" role="dialog" aria-labelledby="gifDisplayModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="gifDisplayModalLongTitle"></h5>
                    <button id="heart-button-id" type="button" class="btn btn-primary heart-btn">
                        <i class="fa fa-heart"></i>
                    </button>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>`;