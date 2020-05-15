import React from "react";
import List from "./list";
import Navbar from "./navbar";
import Modal from "./modal";
import { BrowserRouter, Route } from "react-router-dom";
import Favourites from "./favourites";
import Description from "./description";
let films = [
  {
    name: "Shawshunk redemption",
    rate: "★★★★",
    description:
      "A 'A life-affirming tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..life-affirming' tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/91s2I7v2a4L._AC_SY445_.jpg",
  },
  {
    name: "Law abiding citizen",
    rate: "★★★★",
    description:
      "A life-affirming tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..",
    img:
      "https://i.pinimg.com/originals/09/e6/a1/09e6a11c932a8aa4a857c6cd4e6530fc.jpg",
  },
  {
    name: "The departed",
    rate: "★★★",
    description:
      "A life-affirming tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..",
    img:
      "https://prodimage.images-bn.com/pimages/0012569736740_p0_v4_s550x406.jpg",
  },
  {
    name: "Limitless",
    rate: "★★",
    description:
      "A life-affirming tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..",
    img: "https://fr.web.img3.acsta.net/medias/nmedia/18/82/56/25/19720797.jpg",
  },
  {
    name: "Cast away",
    rate: "★★★",
    description:
      "A life-affirming tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..",
    img:
      "https://img7.cdn.cinoche.com/images/ee9decaa6f855975f03499226bc2a612.jpg",
  },
  {
    name: "Interstellar",
    rate: "★★★★",
    description:
      "A life-affirming tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..",
    img: "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg",
  },
  {
    name: "The wolf of Wallstreet",
    rate: "★★★",
    description:
      "A life-affirming tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..",
    img:
      "https://upload.wikimedia.org/wikipedia/en/d/d8/The_Wolf_of_Wall_Street_%282013%29.png",
  },
  {
    name: "The game",
    rate: "★★",
    description:
      "A life-affirming tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..",
    img:
      "https://i.pinimg.com/originals/b0/2b/03/b02b03a39edae6b457eb5843ef8b7199.jpg",
  },
  {
    name: "Inception",
    rate: "★★★",
    description:
      "A life-affirming tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..",
    img: "https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg",
  },
  {
    name: "The persuite of happiness",
    rate: "★",
    description:
      "A life-affirming tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..",
    img:
      "https://upload.wikimedia.org/wikipedia/en/8/81/Poster-pursuithappyness.jpg",
  },
  {
    name: "The green mile",
    rate: "★★",
    description:
      "A life-affirming tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..",
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41EMM8V7AFL._AC_SY445_.jpg",
  },
  {
    name: "Shutter island",
    rate: "★★★",
    description:
      "A life-affirming tale about life imprisonment, THE SHAWSHANK REDEMPTION is the kind of old-fashioned entertainment that is easily overvalued in an era of diminishing expectations. This reverent adaptation of an unremarkable 1982 Stephen King novella was received tepidly at the box office--due in part to advertising that offered no clue as to what the..",
    img: "https://fr.web.img4.acsta.net/medias/nmedia/18/69/96/84/19151192.jpg",
  },
];
let damnit = [];
let object = { name: "", rate: "", description: "", img: "" };
export default class App extends React.Component {
  state = {
    clone: films,
    newFilm: object,
    favtab: [],
    desc: [],
  };
  searchBN = (e) => {
    let char = e.target.value;
    let movies = films;
    if (char) {
      let chara =
        char[0].toUpperCase() + char.substring(1, char.length).toLowerCase();
      movies = movies.filter((el) => el.name.includes(chara));
      this.setState({ clone: movies });
    } else return this.setState({ clone: movies });
  };
  inputChange = (e) => {
    let saisie = { ...this.state.newFilm, [e.target.name]: e.target.value };
    this.setState({ newFilm: saisie });
    console.log(this.state.newFilm);
  };
  addFilm = () => {
    films.unshift(this.state.newFilm);
    this.setState({ clone: films });
  };
  deleteFilm = (index) => {
    this.state.clone.splice(index, 1);
    this.setState({ clone: this.state.clone });
  };
  addFav = (pos) => {
    if (this.state.favtab.includes(this.state.clone[pos]))
      alert("This film already exists in your fav list");
    else {
      this.state.favtab.unshift(this.state.clone[pos]);
      this.setState({ favtab: this.state.favtab });
    }
  };
  delfav = (index) => {
    this.state.favtab.splice(index, 1);
    this.setState({ favtab: this.state.favtab });
  };
  seeTrail = (film) => {
    damnit.splice(0, 1, film);
    this.setState({ desc: damnit });
  };
  searchRate = (e) => {
    let y = films;
    y = y.filter((el) => el.rate.length >= e);
    {
      this.setState({ clone: y });
    }
  };
  render() {
    return (
      <div>
        <Navbar passSearch={this.searchBN} searchRate={this.searchRate} />
        <center>
          <Modal addFilm={this.addFilm} inputChange={this.inputChange} />
        </center>
        <BrowserRouter>
          <List
            addFav={this.addFav}
            films={this.state.clone}
            deletion={this.deleteFilm}
            seeTrail={this.seeTrail}
          />
          <Route
            path="/favourites"
            component={() => (
              <Favourites deletion={this.delfav} favmov={this.state.favtab} />
            )}
          />
          <Description des={this.state.desc} />
        </BrowserRouter>
      </div>
    );
  }
}
