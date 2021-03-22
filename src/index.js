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


const breedsURL = "https://dog.ceo/api/breeds/list/all"
// document.addEventListener("DOMContentLoaded", getBreed){
    //function getBreed() {
        fetch(breedsURL)
        .then((resBreed) => 
        {return resBreed.json()})

        .then((json) => {
            const dogBreed = json.message;
            addBreedNames(dogBreed);
        })
   //}

    function addBreedNames(list) {
        const vetClinic = document.getElementById("dog-breeds");
        console.log(Object.keys(list))
        Object.keys(list).forEach(breedString => {
            let li2 = document.createElement("li");
           li2.innerText = breedString
            vetClinic.append(li2);
        })
    }
document.addEventListener("click", function(){
    document.querySelector('ul#dog-breeds') = ourList
    ourList.style.color = "purple"
    return false
})
