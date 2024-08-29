import { AppState } from "../AppState.js"
import { Home } from "../models/Homes.js"

class HomesService {
  createHome(cardDataForm) {
    const homes = AppState.Homes
    const newHome = new Home(cardDataForm)
    homes.push(newHome)

  }




}

export const homesService = new HomesService()