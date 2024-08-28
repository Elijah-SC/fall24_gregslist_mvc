import { Car } from './models/Car.js'
import { Home } from "./models/Homes.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {Car[]} */
  cars = [
    new Car({
      make: 'Honda',
      model: 'Civic',
      mileage: 100000,
      year: 1990,
      price: 10000,
      color: '#d40100',
      imgUrl: 'https://images.unsplash.com/photo-1716167950737-ac635698a16a?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Red and shiny, low miles, owned by grandma',
      transmission: 'manual'
    }),
    new Car({
      make: 'Mazda',
      model: 'Miata',
      mileage: 100000,
      year: 2006,
      price: 10000,
      color: '#004e63',
      imgUrl: 'https://images.unsplash.com/photo-1705440158861-f26c436ac6fa?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Blue and shiny, low miles, owned by grandma',
      transmission: 'manual'
    }),
    new Car({
      make: 'Ford',
      model: 'F-150',
      mileage: 150,
      year: 2024,
      price: 100000,
      color: '#080b0d',
      imgUrl: 'https://images.unsplash.com/photo-1590043586837-35512e866a4e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      description: 'Black and shiny, low miles, owned by grandpa',
      transmission: 'automatic'
    })
  ]

  /**@type {Home[]} */

  Homes = [
    new Home({
      location: `Salmon Idaho`,
      squareFootage: `10000`,
      price: 5400000,
      imgURL: `https://images.unsplash.com/photo-1588557132645-ff567110cafd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      description: `Mansion in the woods 10 miles away from Salmon along the river`
    }),
    new Home({
      location: `Boise Downtown`,
      squareFootage: `200`,
      price: 100000,
      imgURL: `https://images.unsplash.com/photo-1693359052825-e5e1c4f852d8?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      description: `luxurious House in downtown boise`
    }),
    new Home({
      location: `Ireland`,
      squareFootage: `500000`,
      price: 800000000,
      imgURL: `https://images.unsplash.com/photo-1449452198679-05c7fd30f416?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      description: `Its a Castle what else is there to say`
    }),
    new Home({
      location: `Somewhere in Idaho`,
      squareFootage: `100`,
      price: 2,
      imgURL: `https://th.bing.com/th/id/R.31782173b699fae37d32acd261b91392?rik=wxTwb%2b2%2fMsvPhw&pid=ImgRaw&r=0`,
      description: `Po-Ta-Tos Bake Em, Mash Em, Put Em in a Stew!! and apparently live in them as well`
    })
  ]


}

export const AppState = createObservableProxy(new ObservableAppState())