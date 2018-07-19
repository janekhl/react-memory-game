import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends React.Component {
  state = {
    friends: friends,
    score:0,
    clicked: []
  };

  clicker = id => {
    // const clicked = this.state.friends.filter (friend => friend.id===id)
    if (this.state.clicked.indexOf(id)===-1){
      this.scoreIncrement();
      this.state.clicked.push(id)
    }
    else {
      alert ("YER TRAILER TRASH")
      this.restartGame()
    }
  }


  // shufflePics = ()=> {
  //   let shuffled=shuffle(this.state.friends)
  //   this.setState({friends: shuffled});
  // };

  scoreIncrement = () => {
    this.setState({score: this.state.score +1 });
    if (this.score===12){
      alert ("You're King of the Trailer Park YAYYY")
    }
  };

  restartGame = () => {
    this.setState ({
      score:0,
      clicked:[]
    });
  };;

  shufflePics =(array) =>{
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  render() {
    const shuffledPics = this.shufflePics(this.state.friends);
    return (
      <Wrapper>
        <div class="jumbotron">
          <h1 class="display-4">Trailer Park Boys Memory Game</h1>
          <h1>score = {this.state.score}</h1> 
        </div>         
        {shuffledPics.map((friend) => {
          return (
          <FriendCard
            key={friend.id}
            id={friend.id}
            score={this.score}
            clicker={this.clicker}
            scoreIncrement={this.scoreIncrement}
            restartGame={this.restartGame}
            // shufflePics={this.shufflePics}
            image={friend.image}
          /> )
        })
      }
      </Wrapper>
      )
    }
  };


export default App;