import React, {  } from "react";
import BlogCard from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tapp from '../../images/tapp.jpg'
import cred from '../../images/cred.jpg'
import lock from '../../images/lock.jpg'
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
            <Container style = {{display: 'flex', flexDirection: 'row', gap: "3vw"}}>
                <BlogCard 
                    image = {cred}
                    title = 'SMS Phishing Attacks affecting Okta IAM Solution'
                    blurb = 'There has been a slew of SMS phishing attacks recently & SMS/OTP is'
                    content = 'oktaphising'/>
           
                <BlogCard
                    image = {lock}
                    title = 'Push the boundary of IGA & HRMS'
                    blurb = 'In HRMS driven provision workflow, HRMS acts the “authoritative source...'
                    content = 'pushingtheboundry'/>
                <BlogCard 
                    image = {tapp}
                    title = 'Cyber Security Mesh Architecture (CSMA)'
                    blurb = 'Gartner created this approach that makes sense. Putting...'
                    content = 'cybersecurity-mesh-architecture'/>
            </Container>
        </Container>
    )
}
export default EffectBlog;