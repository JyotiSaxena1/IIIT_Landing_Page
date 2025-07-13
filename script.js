const slides=document.querySelectorAll(".slide1")
// console.log(slides)
var counter=0;
for (let i = 0; i < slides.length; i++) {
  slides[i].style.left = `${i * 100}%`;
}
const totalSlides = slides.length;

// slides.forEach(
//     (slide,index)=>{
//         slide.style.left=`${index*100}%`
//     }
// )

const goNext=()=>{
     counter = (counter + 1) % totalSlides;
        slideImage()
}
const goPrev=()=>{
        counter = (counter - 1 + totalSlides) % totalSlides;

        slideImage()
}
const slideImage = () => { 
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}
setInterval(goNext, 3000);

function playVideo() {
  const vidContainer = document.querySelector(".vidmodi");
  vidContainer.innerHTML = `
    <iframe width="500" height="280" src="https://www.youtube.com/embed/7XuRuJ6KICw?autoplay=1"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>`;
}
