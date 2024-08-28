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

    return `<sub-section class="row text-center justify-content-around">
    <div class="col-12 col-lg-6 border-house">
      <img class="img-fluid"
        src="https://th.bing.com/th/id/R.2d8e52ce36fa372199292a9e36a91436?rik=lXnO6tYIBBfHVg&pid=ImgRaw&r=0" alt="">
      <div class="row justify-content-around align-items-center">
        <h3 class="col-3">$100,000</h3>
        <h3 class="col-3">50,00 sqft</h3>
        <h3 class="col-3">Located in Idaho</h3>
      </div>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem harum sapiente qui quia omnis possimus architecto
        eos et vitae laboriosam, quaerat iste, eius laudantium, nulla ipsa dolores ullam distinctio voluptatem.
        Odio numquam aperiam autem optio accusamus iure animi ratione quas cumque necessitatibus! Adipisci esse maxime
        eos optio impedit odit, est sequi provident quaerat deserunt ex excepturi nihil. Enim, unde quidem!</p>
    </div>
  </sub-section>`

  }
}