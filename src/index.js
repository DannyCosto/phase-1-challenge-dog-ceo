console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

// Fetchs info from API
function getDogs() {
    fetch(imgUrl)
    .then((res) =>
    {return res.json();
    })
    .then((json) => {
        dogPics = json.message;
        addImages(dogPics);
    })
};

// Creates, Appends li, img tags into div
function addImages(images) {
    const dogHouse = document.getElementById("dog-image-container");
    images.forEach(dogList => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = dogList
        dogHouse.appendChild(img);
        dogHouse.appendChild(li);
    })
}
// Loads getDogs, when DOMcontent loads
document.addEventListener("DOMContentLoaded", getDogs)

    
    
    // blankli.append(blankImg),
    // document.getElementById('dog-image-container').append(blankli),
    
    
    // imgUrl.forEach(function(){
    //     console.log("does this work?")
    // },
    // imgUrl.src= imgUrl,
    // )})