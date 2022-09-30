console.log(`main.js loaded`)

// Elements

// Default Modal
const modalDialogEl = document.querySelector(`[data-element=modal-dialog]`)
const openModalBtnEl = document.querySelector(`[data-element=open-modal]`)
const closeModalBtnEl = document.querySelector(`[data-element=close-modal]`)

// Form Modal
const formModalDialogEl = document.querySelector(
  `[data-element=modal-form-dialog]`
)
const openFormModalBtnEl = document.querySelector(
  `[data-element=open-form-modal]`
)

openModalBtnEl.addEventListener(`click`, (e) => {
  modalDialogEl.showModal()
})

closeModalBtnEl.addEventListener(`click`, (e) => {
  modalDialogEl.close()
})

openFormModalBtnEl.addEventListener(`click`, (e) => {
  formModalDialogEl.showModal()
})
