const card = document.querySelector('.card');
const fetchImage = () => {
    fetch('https://source.unsplash.com/random/24000*24000')
        .then(response => {
            card.style.background = `url(${response.url}) center/cover no-repeat`
            card.classList.remove('placeholder')
        })
}
setTimeout(() => {
    fetchImage()
}, 2000);
