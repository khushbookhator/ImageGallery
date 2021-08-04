window.addEventListener("load", () => getImageData(1))
window.addEventListener("scroll", handleThrottling)




async function getImageData(page = 0){
    await fetch(`https://api.unsplash.com/photos?per_page=20&page=${page}`, {
        headers: {
            Authorization: "Client-ID LDECbaiK350yekxz9fFz3PbEmDLgQZHlguMfqy4pyhc"
        }
    })
    .then((res) => res.json())
    .then((res) => setImageData(res))
}

function setImageData(data){
    let html = ""
    let imgUrl
    for(let i=0; i<data.length; i++){
        imgUrl = data[i]?.urls.thumb
        
        html+= `
        <div class="postsImg">
            <img src=${imgUrl}/>
        </div>
        `
    }
    
    if(html !== ""){
        document.getElementById("imageContainer").innerHTML += html
    }
}


let page = 1
console.log(page)
// Detect when scrolled to bottom.

function handleThrottling(){
    console.log(page)
    page++
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        getImageData(page);
    }
}
// window.addEventListener('scroll', function() {
//     console.log(1)
//     page++
//     if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
//         ImgcardsData(page);
//     }
//   });
  
  // Initially load some items.
//   window.addEventListener("load",()=>getImageData(page))