import {
  billboardHits
} from "./data.js"
const section = document.querySelector("section")
billboardHits.forEach(item => {
  const template = `
  <div class="song-entry">
            <div class="song-info">
        <h2 class="year">${item.year}</h2>
        <h3 class="title">Song Title: <a target="_blank" href=${"www.song.com"}>${item.title}</a></h3>
        <p class="artist">Artist: ${item.artist}</p>
        <p class="additional-info">Genre: ${item.genre}</p>
      </div>
    </div>`
    section.innerHTML+= template;
})