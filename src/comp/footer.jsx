/**
 * Footer
 * @Todo: Footer
 */
 import React from "react";
 import {
 Box,
 Container,
 Row,
 Column,
 FooterLink,
 Heading,
 } from "./FooterStyles";
 
 const Footer = () => {
 return (
     <Box>
     <h1 style={{ color: "#D8FF97",
                 textAlign: "center",
                 paddingTop: "10px",
                 paddingBottom: "10px" }}>
         Atomic Orbital Hydrogen Wave Vector<br/> Complexity Simplified
     </h1>
     <Container>
         <Row>
         <Column>
             <Heading>About Us</Heading>
             <FooterLink href="/home">Home</FooterLink>
             <FooterLink href="/blogs">Blogs</FooterLink>
         </Column>
         <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="/service">Customer Service</FooterLink>
            <FooterLink href="/blogs">Sales</FooterLink>
         </Column>
         <Column>
            <Heading>Resources</Heading>
            <FooterLink href="/service">Helpful Links</FooterLink>
            <FooterLink href="/blogs">More information</FooterLink>
         </Column>
         <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">Linkdin</FooterLink>
            <FooterLink href="#">YouTube</FooterLink>
            
         </Column>
         </Row>
     </Container>
     </Box>
 );
 };
 export default Footer;
 