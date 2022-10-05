import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

/**
 * Card component for preview of Blog post
 * 
 * Todo: Auto geenrate in Blog
 */
class Post extends Component {
    state = { 
        title: '',
        postblurb: '',
        imagesrc: '',
    }
    /**
     * Card markup template
     * @returns Card Markup
     */
    render() {
        return (
            <Card style={{ width:'18rem' }}>
                <Card.Img variant="top" src={this.state.imagesrc}></Card.Img>
                <Card.Title>
                    {this.state.title}
                </Card.Title>
                <Card.Text>
                    {this.state.postblurb}
                </Card.Text>
                <Button variant='primay'>Full Post</Button>
            </Card>
        );
    }
}