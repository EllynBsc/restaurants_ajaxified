import { Controller } from "stimulus";


export default class extends Controller {
  // list your target name
  static targets = [ 'count' ];

  // connect() {
  //   console.log(this.countTarget); // list the first target name you have
  //   console.log(this.countTargets); // list all the targets
  // }

  // refresh(event) {
  //   console.log(event);
  //   console.log(event.currentTarget);
  // }

  // refresh() {
  //   fetch('/restaurants', { headers: { accept: "application/json" } })
  //     .then(response => response.json())
  //     .then((data) => {
  //       // console.log(data);
  //       // this.nameOfYourTargetTarget.innerText = data.keyName.length
  //       // #don't forget to play with your json object
  //       this.countTarget.innerText = data.restaurants.length;
  //     });
  // }

  connect() {
    setInterval(this.refresh, 5000);
  }


  refresh = () => {
    fetch('/restaurants', { headers: { accept: "application/json" }})
      .then(response => response.json())
      .then((data) => {
        this.countTarget.innerText = data.restaurants.length;
      });
  }

}


























































