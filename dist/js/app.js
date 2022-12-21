const shareBtn = document.querySelector("#shareBtn")
const socialMedia = document.querySelector("#social-media-container")
const socialMediaIcons = document.querySelectorAll("a")

const handleClick = () => {
    socialMedia.classList.toggle("hidden")
}

socialMediaIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        socialMedia.classList.add("hidden")
    })
})

shareBtn.addEventListener("click", handleClick)