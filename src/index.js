console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 


fetch("https://dog.ceo/api/breeds/image/random/4" )
    .then(res => res.json)
    .then(function(dogRes)){
        
        let blankli = document.createElement("li")
        let blankImg = document.createElement("img")

            blankImg.src= dogRes.message
            blankImg.alt = "dog"

        blankli.append(blankImg)
        dogsUl.append(blankli)
    }