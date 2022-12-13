import React, {  } from "react";
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
            <Container style = {{display: 'flex', flexDirection: 'row'}}>
                <BlogCard 
                    title = 'SMS Phishing Attacks affecting Okta IAM Solution'
                    blurb = 'There has been a slew of SMS phishing attacks recently & SMS/OTP is'
                    content = 'oktaphising'/>
           
                <BlogCard
                        title = 'Push the boundary of IGA & HRMS'
                        blurb = 'In HRMS driven provision workflow, HRMS acts the “authoritative source or trust source” for FTE to...'
                        content = 'pushingtheboundry'/>
            </Container>
            <Container style = {{display: 'flex', flexDirection: 'row'}}>
                <BlogCard 
                    title = 'Cyber Security Mesh Architecture (CSMA)'
                    blurb = 'Gartner created this approach that makes sense. Putting this into our services...'
                    content = 'cybersecurity-mesh-architecture'/>
             
                <BlogCard 
                    title = 'Restore-MsolUser'
                    blurb = ' After working full blast for 23-years I took a break with a mentor & wrote a script...'
                    content = 'Restore-MsolUser'/>
            </Container>
        </Container>
    )
}
export default EffectBlog;