function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const icon = document.querySelector(".hamburger i");

  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}
// Slick testmonail slider
$(document).ready(function () {
  $('.testi-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    centerMode: false,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px'
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px'
        }
      }
    ]
  });
});
// Slick categories slider

$(document).ready(function () {
  $('.categories-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});


// Slick products slider
const xproTrack = document.getElementById('xpro-track');
const xproPrev = document.querySelector('.xpro_prev_arrow');
const xproNext = document.querySelector('.xpro_next_arrow');
let xproIndex = 0;

function moveXproSlider() {
  const card = document.querySelector('.xpro_product_card');
  const cardWidth = card.offsetWidth + 30;
  xproTrack.style.transform = `translateX(${-xproIndex * cardWidth}px)`;
}
if (xproNext && xproPrev) {

  xproNext.addEventListener('click', () => {
    if (xproIndex < xproTrack.children.length - 4) xproIndex++;
    else xproIndex = 0;
    moveXproSlider();
  });

  xproPrev.addEventListener('click', () => {
    if (xproIndex > 0) xproIndex--;
    else xproIndex = xproTrack.children.length - 4;
    moveXproSlider();
  });


}




// 
function changeImg(img) {
  document.getElementById("mainImg").src = img.src;
  document.querySelectorAll(".small-photos img").forEach(i => i.classList.remove("active"));
  img.classList.add("active");
}

function changeQty(n) {
  let box = document.getElementById("qty");
  let val = parseInt(box.value) + n;
  if (val < 1) val = 1;
  box.value = val;
}

function toggle(head) {
  head.classList.toggle("active");

  const icon = head.querySelector("i");
  if (head.classList.contains("active")) {
    icon.classList.replace("fa-plus", "fa-minus");
  } else {
    icon.classList.replace("fa-minus", "fa-plus");
  }

  const body = head.nextElementSibling;
  body.classList.toggle("open");
}

// Size selection
document.querySelectorAll(".size").forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll(".size").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  };
});


function openTab(event, tabName) {

  document.querySelectorAll('.tab-content').forEach(function (el) {
    el.classList.remove('active');
  });


  document.querySelectorAll('.tab').forEach(function (el) {
    el.classList.remove('active');
  });

  // Show selected content
  document.getElementById(tabName).classList.add('active');


  event.currentTarget.classList.add('active');
}

$(document).ready(function () {
  // Open default tab
  console.log("Document is ready");
  $('.tab').on('click', function (e) {
    e.preventDefault();
    const tabName = $(this).data('tab');
    openTab(e, tabName);
  } );


});