import React, { useEffect, useState } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import BlogCard from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './blogs.css'

function EffectBlog() {
    // const [isLoading, setLoading] = useState(true);
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:8080/blogs")
    //     .then((response) => {
    //         setPosts(response.data);
    //         setLoading(false);
    //     })
    // }, []);

    // if (isLoading) {
    //     return (
    //         <div>
    //             <h1>Loading...</h1>
    //         </div>
    //     )
    // }
    
    return (
        <Container className="blogs">
            <Row>
                <Col xs = {{span: 6, order: 1}} md={{ span: 4, order: 1 }} style={{height: "100%"}}>
                <BlogCard 
                    title = 'SMS Phishing Attacks affecting Okta IAM Solution'
                    blurb = 'There has been a slew of SMS phishing attacks recently & SMS/OTP is'
                    content = 'oktaphising'/>
                </Col>
                <Col xs = {{span: 12, order: 2}} md={{ span: 4, order: 2 }}>
                <BlogCard
                        title = 'Push the boundary of IGA & HRMS'
                        blurb = 'In HRMS driven provision workflow, HRMS acts the “authoritative source or trust source” for FTE to...'
                        content = 'pushingtheboundry'/>
                </Col>
                <Col xs = {{span: 12, order: 3}} md={{ span:4, order: 3 }}>
                <BlogCard 
                    title = 'Cyber Security Mesh Architecture (CSMA)'
                    blurb = 'Gartner created this approach that makes sense. Putting this into our services...'
                    content = 'cybersecurity-mesh-architecture'/>
                </Col>
                <Col xs = {{span: 12, order: 3}} md={{ span:4, order: 3 }}>
                <BlogCard 
                    title = 'Cyber Security Mesh Architecture (CSMA)'
                    blurb = 'Gartner created this approach that makes sense. Putting this into our services...'
                    content = 'cybersecurity-mesh-architecture'/>
                </Col>
            </Row>
        </Container>
    )
}
export default EffectBlog;