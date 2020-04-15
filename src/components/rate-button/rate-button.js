import './rate-button.scss';

let stars = document.querySelectorAll('.rate-button__star');

const addRateHandler = function(star, id) {
    star.addEventListener('click', function() {
        let achievedStars = document.querySelectorAll('.rate-button__star_achieved');
        for(let achievedId=0; achievedId<achievedStars.length; achievedId++) {
            achievedStars[achievedId].classList.remove('rate-button__star_achieved');
        }
        for(let newAchievedId=0; newAchievedId<=id; newAchievedId++) {
            console.log(stars[newAchievedId]);
            stars[newAchievedId].classList.add('rate-button__star_achieved');
        }
    });
};

for(let starId=0; starId<stars.length; starId++) {
  addRateHandler(stars[starId], starId);
}
