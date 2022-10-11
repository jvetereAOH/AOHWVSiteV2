import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import defaultimg from './blogimages/default.png'
import './blogs.css'

import { Link } from "react-router-dom";

function BlogCard(prop) {
    console.log(prop);
    return (
        <div className='preview'>
        <Col xs>
            <Card className="cardoutline" style={{ width:'18rem' }}>
                <Card.Img variant="top" src={defaultimg}></Card.Img>
                <Card.Title className='title'>
                    {prop.title}
                </Card.Title>
                <Card.Text className='blurb'>
                    {prop.blurb}...
                </Card.Text>
                <Button className='blogbuttons'><Link to = {prop.content}>Full Blog</Link></Button>
            </Card>
        </Col>
    </div>
    )
}
export default BlogCard;