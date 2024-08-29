import { AppState } from "../AppState.js"
import { homesService } from "../services/HomesService.js"
import { getFormData } from "../utils/FormHandler.js"

export class HomesController {
  constructor() {
    console.log(`the Homes controller is live`)
    AppState.on(`Homes`, this.drawHomes)
    this.drawHomes()

    homesService.loadHomes()
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

    homesService.createHome(cardDataForm)

  }

}