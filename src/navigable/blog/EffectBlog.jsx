import React, { useEffect, useState } from "react";
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import BlogCard from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './blogs.css'

function EffectBlog() {
    const [isLoading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/blogs")
        .then((response) => {
            setPosts(response.data);
            setLoading(false);
        })
    }, []);

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    console.log(posts)
    return (
        <Container className="blogs">
            <Row>
                {posts.map((post, i) => BlogCard(post))}
            </Row>
        </Container>
    )
}
export default EffectBlog;