import './rate-button.scss';

let stars = document.querySelectorAll('.rate-button__star');

const colorStars = function(id) {
  let achievedStars = document.querySelectorAll('.rate-button__star_achieved');
  for(let achievedId=1; achievedId<=achievedStars.length; achievedId++) {
      achievedStars[achievedId].classList.remove('rate-button__star_achieved');
  }
};

for(let starId=1; starId<=stars.length; starId++) {
  stars[starId].addEventListener('click', colorStars(starId));
}
