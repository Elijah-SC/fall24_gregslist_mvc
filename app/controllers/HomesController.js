import { AppState } from "../AppState.js"
import { getFormData } from "../utils/FormHandler.js"

export class HomesController {
  constructor() {
    console.log(`the Homes controller is live`)
    this.drawHomes()
  }

  drawHomes() {
    let homeHTML = ``
    let homes = AppState.Homes
    homes.forEach(home => homeHTML += home.HomeCardTemplate)
    let HomesElm = document.getElementById(`homeCards`)
    HomesElm.innerHTML = homeHTML

  }

  createHome() {
    event.preventDefault()
    console.log(`creating a home listing`)
    const form = event.target
    const cardDataForm = getFormData(form)

    homesService.createCar(cardDataForm)

  }

}