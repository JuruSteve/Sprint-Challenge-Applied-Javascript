class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.buttonLeft = document.querySelector(".left-button");
    this.buttonRight = document.querySelector(".right-button");
    this.images = document.querySelectorAll("img");
    this.images = Array.from(this.images);
    console.log(this.images);
    this.firstImage = this.images[0];
    this.firstImage.style.display = "block";
    // this.imgContent = new Content(this.images);
    this.buttonLeft.addEventListener("click", () => this.select());
    this.buttonRight.addEventListener("click", () => this.select());
  }

  select() {
    // this.firstImage.style.display = "none";
    // let newImgArr = this.images.slice(1);

    console.log(this.images);
    //     for (let i = 0; i < this.images.length; i++) {}
  }
}

// class Content {
//   constructor(images) {
//     this.contentImages = images;
//     console.log(contentImages);
//   }
// }

let carousel = document.querySelector(".carousel");

(function(carousel) {
  return new Carousel(carousel);
})();
/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
