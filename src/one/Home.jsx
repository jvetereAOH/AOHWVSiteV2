import homeImage from '../images/homeImage.jpg';
import { Component } from 'react';

export default class Home extends Component {
    render() {
    return (
        <div style={{backgroundColor: "black", height: "100%", width: "100%"}}>
            <img src = {homeImage} style={{  gap: "0", height: "100%", width:"100%", alignSelf: "center", paddingBottom: "5vw"}} alt = "identity access managment at your service, AOH Complexity Simplified"/>
        </div>
    )
    }
}