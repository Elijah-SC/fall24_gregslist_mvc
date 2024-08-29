import { AppState } from "../AppState.js"
import { Home } from "../models/Homes.js"
import { loadState, saveState } from "../utils/Store.js"

class HomesService {
  createHome(cardDataForm) {
    const homes = AppState.Homes
    const newHome = new Home(cardDataForm)
    homes.push(newHome)

    this.saveHomes()
  }

  saveHomes() {
    saveState(`homes`, AppState.Homes)
  }

  loadHomes() {
    const homesLocalStorage = loadState(`homes`, AppState.Homes)
    AppState.cars = homesLocalStorage
  }



}

export const homesService = new HomesService()