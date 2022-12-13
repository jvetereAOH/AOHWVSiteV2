import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import defaultimg from './blogimages/default.png'
import './blogs.css'

import { Link } from "react-router-dom";

function BlogCard(prop) {
    console.log(prop);
    return (
        <div className='preview'>
            <Card className="cardoutline" style={{ width:'18rem' }}>
                <Card.Img variant="top" src={defaultimg}></Card.Img>
                <Card.Title className='title'>
                    {prop.title}
                </Card.Title>
                <Card.Text className='blurb'>
                    {prop.blurb}...
                </Card.Text>
                <Link to = {prop.content}><Button className='blogbuttons'>Full Blog</Button></Link>
            </Card>
    </div>
    )
}
export default BlogCard;