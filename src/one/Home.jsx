import homeImage from '../images/homeImage.jpg';
import { Component } from 'react';

export default class Home extends Component {
    render() {
    return (
        <div style={{backgroundColor: "black", height: "100%", width: "100%", marginBottom: "-35px"}}>
            <img src = {homeImage} style={{  gap: "0", height: "100%", width:"100%", alignSelf: "center"}} alt = "identity access managment at your service, AOH Complexity Simplified"/>
        </div>
    )
    }
}