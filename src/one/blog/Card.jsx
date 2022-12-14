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
            <Card className="cardoutline">
                <Card.Img variant="top" src={prop.image}></Card.Img>
                <Card.Title className='title'>
                    {prop.title}
                </Card.Title>
                <Card.Text className='blurb'>
                    {prop.blurb}...
                </Card.Text>
                <Button className='blogbuttons'>Full Blog</Button>
            </Card>
    </div>
    )
}
export default BlogCard;