// Navigation Bar template 

export const navigation =`
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark m-0">
    <a class="navbar-brand" href="#"><i id="logo" class="fas fa-icons"></i>Giphy </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a id="trending-gifs" class="nav-link" href="#"><i class="fas fa-meteor"></i>Trending</a>
                </li>
                <li class="nav-item">
                    <a id="uploaded-page-btn" class="nav-link" href="#">Your uploaded GIFs</a>
                </li>
                <li class="nav-item">
                    <a id="favorites-page-btn" class="nav-link" href="#">Favorites</a>
                </li>
                <li class="nav-item">
                <label for="upload-file">Choose file...</label>
                <input id="upload-file" type=file accept="image/gif"></input>
                </li>
                <li class="nav-item">
                <button id="upload-file-btn" class="btn btn-primary" ><i class="fas fa-cloud-upload-alt"></i></button>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
            <input id="search-input" class="form-control mr-sm-2" type="text" placeholder="Search for a gif...">
            <button id="search-button" class="btn btn-secondary my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
            </form>
        </div>
    </nav>
    <hr></hr>
    <br>
    <br>`;

