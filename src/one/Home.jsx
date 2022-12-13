import homeImage from '../images/homeImage.jpg';

export default function Home() {
    return (
        <div style={{backgroundColor: "black", height: "100%", width: "100%", marginBottom: "-35px"}}>
            <img src = {homeImage} style={{  gap: "0", height: "100%", width:"100%", marginTop: "-35px"}} alt = "identity access managment at your service, AOH Complexity Simplified"/>
        </div>
    )
}