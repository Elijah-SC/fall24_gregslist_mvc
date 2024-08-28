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
    <div class="col-lg-5 border-house m-3">
      <img class="img-fluid home-imgs"
        src="${this.imgURL}" alt="">
      <div class="row justify-content-around align-items-center">
        <h3 class="col-4">$${this.priceCommas}</h3>
        <h3 class="col-4">${this.sqftCommas}sqft</h3>
        <h3 class="col-4">${this.location}</h3>
      </div>
      <p>${this.description}</p>
    </div>`

  }

  get priceCommas() {
    return new Intl.NumberFormat().format(this.price)
  }
  get sqftCommas() {
    return new Intl.NumberFormat().format(this.squareFootage)
  }
}