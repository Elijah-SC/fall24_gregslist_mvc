import { generateId } from "../utils/GenerateId.js"

export class Home {

  // @param {{ id: String; location: String;  }} data 


  constructor(data) {
    this.id = generateId()
    this.location = data.location
    this.price = data.price
    this.squareFootage = data.squareFootage
    this.bed_bath = data.bed_bath
    this.imgURL = data.imgURL
    this.description = data.description
  }
}