import React from "react";
import style from "./App.css";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      Person : {
        fullName:"Zaraki",
        bio:"BLEACH character",
        profession:"Captain of gotei 13 holding the title of KENPACHI",
        imgSrc:"https://www.bleach-bravesouls.com/assets/img/character/appearance/08/character_safwy_kenpachi-2_01.png",
      },
      shows: false,
      mountingTime:0,
  }}
  componentDidMount(){
    setInterval(()=>{
      this.setState({mountingTime:this.state.mountingTime +=1})
    },1000)
  }
  change=()=>{
    this.setState({shows:!this.state.shows});
    this.setState({mountingTime:0})};
  render() {
    return (
      <div className="Person">
        {this.state.shows?
        <>
          <h1>{this.state.Person.fullName}</h1>
          <p>{this.state.Person.bio}</p>
          <p>{this.state.Person.profession}</p>
          <img src={this.state.Person.imgSrc} alt="zaraki img online" style={{maxWidth:"200px"}}/>
        </>:<h1>click the show button</h1>}
        <br />
        <button onClick={this.change} className="btn">Show</button>
        <p>Timer : {this.state.mountingTime} </p>
      </div>
    );
  }
}

export default App;
