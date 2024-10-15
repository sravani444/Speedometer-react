import {Component} from "react"
import './index.css'

class Speedometer extends Component{
  state = {speed:0}
  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }
  applyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }
  
render()
{
  const{speed} = this.state
  return(
    <div className="container">
      <h1 className="heading">SPEEDOMETER</h1>
      <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-image"
          />
      <h1 className="head">{`Speed is ${speed}mph`}</h1>
      <p className="paragraph">Min Limit is 0mph,Max Limit is 200mph</p>
      <div className="button">
      <button className="accelerate" onClick = {this.accelerate}>Accelerate</button>
      <button className="applybreak" onClick = {this.applyBreak}>Apply Break</button>
      </div>
    </div>
  )
}
}
export default Speedometer