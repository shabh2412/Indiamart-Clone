let MainNavbar = ()=>{
  let bootstrapCss = document.createElement('link');
  bootstrapCss.href = `https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css`;
  bootstrapCss.rel = 'stylesheet';
  // console.log(bootstrapCss);

  let navbarCss = document.createElement('link');
  navbarCss.rel = 'stylesheet';
  navbarCss.href = `./styles/navbar.css`;

  let bootstrapScript = document.createElement('script');
  bootstrapScript.src = `https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js`;
  bootstrapScript.crossorigin = 'anonymous';
  document.head.append(bootstrapCss, navbarCss);
  document.body.append(bootstrapScript);
  // console.log(document.body);
  let nav = `<nav id="navbar-main" class="navbar navbar-expand bg-blue sticky-top">
      <div class="container-fluid w-100 mx-auto">
        <a href="./index.html" class="navbar-brand main-nav-brand site-logo"></a>
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-5">
              <div class="row align-items-center">
                <div class="col-3 d-flex align-items-center pe-0">
                  <div class="dropdown w-100">
                    <button class="btn text-blue bg-white dropdown-toggle w-100 fw-bold rounded-0" data-bs-toggle="dropdown">
                      <img src="./assets/location.svg" alt="location" class="blue-filter">
                      Mumbai
                    </button>
                    <div class="dropdown-menu">
                      <form class="px-2">
                        <div class="form-floating">
                          <input type="text" id="citySelection" class="form-control" placeholder="Enter city">
                          <label for="citySelection">Enter city</label>
                        </div>
                        <ul>
                          <li>
                            <button class="btn">All India</button>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>
                </div>
                <div class="col-6 px-0">
                  <input type="text" class="form-control text-black rounded-0" id="searchProduct" placeholder="Enter Product/Service to Search">
                </div>
                <div class="col-3 px-0">
                  <button class="btn btn-success w-100 rounded-0">
                    <img src="./assets/search.svg" alt="search icon">
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div class="col-2">
              <button class="btn text-capitalize bg-white rounded-0 fw-bold">Get best price</button>
            </div>
            <div id="navbarRightContent" class="col-5 d-flex justify-content-end align-items-center">
              <button class="btn rounded-0 text-white border-0 fs-12">
                <img src="./assets/shoppingTag.svg" style="transform: scaleX(-1);" alt="">
                <p class="mb-0">
                  Shopping
                </p>
              </button>
              <button class="btn rounded-0 text-white border-0 fs-12">
                <img src="./assets/covidShield.svg" alt="shield">
                <p class="mb-0">
                  Covid Supplies
                </p>
              </button>
              <button class="btn rounded-0 text-white border-0 fs-12">
                <img src="./assets/shop.svg" alt="shop">
                <p class="mb-0">
                  Sell
                </p>
              </button>
              <button class="btn rounded-0 text-white border-0 fs-12">
                <img src="./assets/help.svg" alt="help">
                <p class="mb-0">
                  Help
                </p>
              </button>
              <button class="btn rounded-0 text-white border-0 fs-12">
                <img src="./assets/chat.svg" alt="chat">
                <p class="mb-0">
                  Messages
                </p>
              </button>  
              <button class="btn rounded-0 text-white border-0 fs-12">
                <img src="./assets/user.svg" alt="user">
                <p id="greetUser" class="mb-0">
                  Hi Guest!
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>`
    return nav;
}

export default MainNavbar;