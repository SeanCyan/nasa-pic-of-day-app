const apiKey = 'api_key=81GzKedlezXQdaLOgCjodL8F9ViPPx2ZeRsR90kC';
const url = 'https://api.nasa.gov/planetary/apod?';
const endpoint = url+apiKey;

const title = document.querySelector('.title');
const img = document.querySelector('.image');
const text = document.querySelector('.text');
const date = document.querySelector('.date');

// Fetch request to Nasa API
fetch(endpoint)
    .then(response => response.json())
    .then(json => {
      title.innerHTML = json.title;
      date.innerHTML = json.date;
      img.innerHTML = `<img src=${json.hdurl} class="nasa-img"><button class="button" onclick="toggle()">Show Info</button>`;
      text.innerHTML = json.explanation;
    });

// Show/Hide accompanying text overlay
function toggle() {
    const overlay = document.querySelector('.overlay');
    const btn = document.querySelector('.button');
    if(btn.classList.contains('active')){
        overlay.style.display="none";
        btn.classList.remove('active');
        btn.textContent ='Show Info';
    } else {
        overlay.style.display="block";
        btn.classList.add('active');
        btn.textContent='Hide Info';
    }
}