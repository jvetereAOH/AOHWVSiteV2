import React from 'react';
import PostCard from './components/PostCard'
import axios from 'axios';

/**
 * Contact Backend to pull blogs for rendering in componentDidMount
 *
 */
class Blog extends Component {
    state = {
        blogs: []
    }
    /**
     * Axios Request to Spring Server on mount
     */
    componentDidMount() {
        axios.get("localhost:8080/blogs")
        .then((response) => {
            this.setState({
                blogs: response.data.blogs
            })
        })
    }

    
}
export default Blog;