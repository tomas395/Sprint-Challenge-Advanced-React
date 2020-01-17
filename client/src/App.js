import React from "react";
import "./App.css";
import axios from "axios";
import DashBoard from "./Components/DashBoard";
import PlayerCard from "./Components/PlayerCard";

class App extends React.Component {
  state = {
    data: []
  };

  componentDidMount() {
    console.log("This Mounted!");
    axios.get("http://localhost:5000/api/players").then(res => {
      console.log("Fetched!", res);
      this.setState({
        data: res.data
      });
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <DashBoard />
        {this.state.data.map(player => (
          <div>
            <PlayerCard
              name={player.name}
              country={player.country}
              key={player.id}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
