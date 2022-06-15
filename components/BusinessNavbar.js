let BusinessNavbar = () => {
  let businessName = `Blue Heaven Cosmetics (P) Ltd`;
  let address = `Kirti Nagar, New Delhi, Delhi | `;
  let GST = `07AACCB1155C1ZB`;
  let rating = `4.2`;
  return `<div class="container w-100 mx-auto bg-white px-1">
  <nav class="navbar navbar-expand">
    <div class="container-fluid justify-content-between align-items-end px-0">
      <div class="d-flex align-items-center w-85">
        <img src="https://3.imimg.com/data3/HJ/OY/MY-3792183/blue-heaven-cosmetics-private-limited-logo-120x120.jpg" alt="brand-logo" class="navbar-brand brand-logo">
        <div class="nameAndAddress">
          <h2 class="text-black">${businessName}</h2>
          <div class="d-flex align-items-center">
            <div class="d-flex">
              <img src="./assets/location.svg" alt="location" class="icon mx-2 light-gray-filter">
              <p class="fs-14 mb-0">${address}</p>
            </div>
            <div class="d-flex">
              <img src="./assets/verified.svg" alt="verified" class="icon mx-2 grass-green-filter">
              <p class="fs-14 mb-0">GST <span class="fw-bold">${GST}</span> | </p>
            </div>
            <div class="d-flex">
              <img src="./assets/patchCheck.svg" alt="patchCheck" class="icon mx-2">
              <p class="fs-14 mb-0"><span class="fw-bold">Verified</span> Supplier | </p>
            </div>
            <div class="d-flex">
              <img src="./assets/thumbsUp.svg" alt="thumbsUp" class="icon mx-2">
              <p class="fs-14 mb-0">
                <span class="fw-bold fs-16">${rating}</span>/5 
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center">
          </div>
        </div>
      </div>
      <div class="w-20 ps-1">
        <button class="btn btn-outline-success w-100">
          <i class="bi bi-telephone-fill"></i>
          View Mobile Number
        </button>
      </div>
    </div>
  </nav>
</div>`
}

export default BusinessNavbar;