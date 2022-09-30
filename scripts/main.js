console.log(`main.js loaded`)

// Elements
const modalDialogEl = document.querySelector(`[data-element=modal-dialog]`)
const openModalBtnEl = document.querySelector(`[data-element=open-modal]`)
const closeModalBtnEl = document.querySelector(`[data-element=close-modal]`)

openModalBtnEl.addEventListener(`click`, (e) => {
  modalDialogEl.showModal()
})

closeModalBtnEl.addEventListener(`click`, (e) => {
  modalDialogEl.close()
})
