import { AppState } from "../AppState.js"

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

}