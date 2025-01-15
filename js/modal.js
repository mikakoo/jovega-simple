

const openButton = document.querySelector("[data-open-modal]")
const closeButton = document.querySelector("[data-close-modal]")
const modal = document.querySelector("[data-modal]")

openButton.addEventListener("click", () => {
    modal.showModal()
})


closeButton.addEventListener("click", () => {
    modal.close()
})


//  close on click outside of modal
modal.addEventListener("click", e => {
    const dialogExtents = modal.getBoundingClientRect()
    if (e.clientX < dialogExtents.left ||
        e.clientX > dialogExtents.right ||
        e.clientY < dialogExtents.top ||
        e.clientY > dialogExtents.bottom
    ) {
        modal.close()
    }
})
