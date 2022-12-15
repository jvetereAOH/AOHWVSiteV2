import React from 'react'
import HealthCheck from '../images/HealthCheck.png'
import VirtualIdentity from '../images/VirtualIdentitySME.png'
import Circle from '../images/circle.png'
import { ExternalLink } from "react-external-link";

export default function Store() {
    return(
    <div style={{display: "flex", flexDirection: "column"}}>
        <h1 style={{color: "black", alignSelf: "center", fontSize: "5vw"}}>STORE</h1>
        <div style={{display: "flex", flexDirection: "row", alignSelf: "center", gap: "5vw"}}>
            <ExternalLink href="https://usm.channelonline.com/aohwv/storesite/Products/overview/V00003D000004046">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <img src={HealthCheck} style={{width: "15vw", height: "15vw", alignSelf:"center"}} />
                    <h2 style={{color: "black", alignSelf: "center", fontSize: "1.5vw", alignSelf: "center"}}>
                    Health Check
                    </h2>
                </div>
            </ExternalLink>
            <ExternalLink href="https://usm.channelonline.com/aohwv/storesite/Products/all?standard=true">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <img src={Circle} style={{width: "15vw", height: "15vw", alignSelf:"center"}} />
                    <h2 style={{color: "black", alignSelf: "center", fontSize: "1.5vw", alignSelf: "center"}}>
                    All Products
                    </h2>
                </div>
            </ExternalLink>
            <ExternalLink href="https://usm.channelonline.com/aohwv/storesite/Products/overview/V00010D000004046">
                <div style={{display: "flex", flexDirection: "column"}}>
                    <img src={VirtualIdentity} style={{width: "15vw", height: "15vw", alignSelf:"center"}} />
                    <h2 style={{color: "black", alignSelf: "center", fontSize: "1.5vw", alignSelf: "center"}}>
                    Virtual Identity SME
                    </h2>
                </div>
            </ExternalLink>
        </div>
    </div>
    )
}