import { Component, Fragment } from "react";
import fruits from "../Data";
import fruitsStyle from "../Fruits/fruit.module.css";

class Fruit extends Component {
  constructor() {
    super();

    this.state = {
      data: fruits,
      name: "Apple",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMdH_-vOhR23SpL3N-QtlB4Z4lY7Ahu16hQ&usqp=CAU",
    };
  }

  randomFruit() {
    let fruitArr = this.state.data;
    let randomChoise = fruitArr[Math.floor(Math.random() * fruitArr.length)];
    this.setState({ name: randomChoise.name, img: randomChoise.img });
  }

  render() {
    return (
      <Fragment>
        <div className={fruitsStyle.container}>
          <h1>{this.state.name}</h1>
          <img src={this.state.img} alt="..." width={300} height={250} />
          <button onClick={() => this.randomFruit()}>Change</button>
        </div>
      </Fragment>
    );
  }
}

export default Fruit;
