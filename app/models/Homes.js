import { generateId } from "../utils/GenerateId.js"

export class Home {

  // @param {{ id: String; location: String;  }} data 


  constructor(data) {
    this.id = generateId()
    this.location = data.location
    this.price = data.price
    this.squareFootage = data.squareFootage
    this.imgURL = data.imgURL
    this.description = data.description
  }


  get HomeCardTemplate() {

    return /*HTML*/`
    <sub-section class="row text-center justify-content-evenly m-3">
    <div class="col-lg-5 border-house">
      <img class="img-fluid"
        src="${this.imgURL}" alt="">
      <div class="row justify-content-around align-items-center">
        <h3 class="col-4">$${this.price}</h3>
        <h3 class="col-4">${this.squareFootage}sqft</h3>
        <h3 class="col-4">${this.location}</h3>
      </div>
      <p>${this.description}</p>
    </div>
  </sub-section>`

  }
}