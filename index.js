$(document).ready(function () {
  $('#contactUsBtn').click(function () {
    $('#contactUsModal').modal('show')
  })

  $('#submitContactForm').click(function () {
    if ($('#termsCheck').is(':checked')) {
      alert('Form submitted successfully!')
      $('#contactForm')[0].reset()
      $('#contactUsModal').modal('hide')
    } else {
      alert('You must agree to the terms and conditions.')
    }
  })
})

// ///////////////////////////////////////

$(document).ready(function () {
  $('#servicesCarousel').carousel({
    interval: 3000
  })

  // $('.carousel-item img').hover(
  //   function () {
  //     $(this).attr('src', 'https://via.placeholder.com/800x400/FF0000/FFFFFF')
  //   },
  //   function () {
  //     $(this).attr('src', 'https://via.placeholder.com/800x400')
  //   }
  // )
})

// /////////////////////////////////////////////////////////////////////////////////
$(document).ready(function () {
  $('#projectList .list-group-item').on('click', function () {
    var newImage = $(this).data('image')
    $('#projectImage').attr('src', newImage)

    // Remove active class from all items
    $('#projectList .list-group-item').removeClass('active')

    // Add active class to the clicked item
    $(this).addClass('active')
  })
})

// {
/* <div class="container mt-5">
<h2 class="text-danger">WHAT WE DO</h2>
<h3>SERVICES PROVIDE FOR YOU</h3>
<p class="text-muted">
  Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
  Pellentesque vitae ante ac elit fringilla ac at purus, Morbi sed lacus
  nec risus finibus feugiat et fermentum.
</p>
<div id="servicesCarousel" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li
      data-target="#servicesCarousel"
      data-slide-to="0"
      class="active"
    ></li>
    <li data-target="#servicesCarousel" data-slide-to="1"></li>
    <li data-target="#servicesCarousel" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div class="row">
        <div class="col-md-3">
          <img
            src="https://via.placeholder.com/200x300"
            alt="Service 1"
            class="img-fluid service-img"
          />
        </div>
        <div class="col-md-3">
          <img
            src="https://via.placeholder.com/200x300"
            alt="Service 2"
            class="img-fluid service-img"
          />
        </div>
        <div class="col-md-3 service-highlight">
          <div class="service-content">
            <h4 class="text-white">WEB DEVELOPMENT</h4>
            <p class="text-white">
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque
            </p>
            <a
              href="https://fylehq.com"
              target="_blank"
              class="btn btn-light"
              >Read More</a
            >
          </div>
        </div>
        <div class="col-md-3">
          <img
            src="https://via.placeholder.com/200x300"
            alt="Service 4"
            class="img-fluid service-img"
          />
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row">
        <div class="col-md-3">
          <img
            src="https://via.placeholder.com/200x300"
            alt="Service 5"
            class="img-fluid service-img"
          />
        </div>
        <div class="col-md-3">
          <img
            src="https://via.placeholder.com/200x300"
            alt="Service 6"
            class="img-fluid service-img"
          />
        </div>
        <div class="col-md-3 service-highlight">
          <div class="service-content">
            <h4 class="text-white">GRAPHIC DESIGN</h4>
            <p class="text-white">
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque
            </p>
            <a
              href="https://fylehq.com"
              target="_blank"
              class="btn btn-light"
              >Read More</a
            >
          </div>
        </div>
        <div class="col-md-3">
          <img
            src="https://via.placeholder.com/200x300"
            alt="Service 8"
            class="img-fluid service-img"
          />
        </div>
      </div>
    </div>
    <!-- Add more carousel items as needed -->
  </div>
  <a
    class="carousel-control-prev"
    href="#servicesCarousel"
    role="button"
    data-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a
    class="carousel-control-next"
    href="#servicesCarousel"
    role="button"
    data-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div> */
// }
