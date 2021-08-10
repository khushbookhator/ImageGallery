window.addEventListener("load", () => getImageData(1))
window.addEventListener("scroll", handleThrottling)




async function getImageData(page = 0){
    await fetch(`https://api.pexels.com/v1/curated?page=${1}&per_page=20`, {
        headers: {
        Authorization:"563492ad6f91700001000001c2fd0f030839468791ccb6bef298c229"
        }
    })
    .then((res) => res.json())
    .then((res) => setImageData(res.photos))
}

function setImageData(data){
    let html = ""
    let imgUrl
    for(let i=0; i<data.length; i++){
        imgUrl = data[i]?.src.portrait
        
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