import {React, Component} from 'react';
import PostCard from './components/PostCard';
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
        axios.get("http://localhost:8080/blogs")
        .then((response) => {
            // this.setState({
            //     blogs: response.data.blogs
            // })
            console.log(response.data)
        })
    }

    render() {
        return (
            <div className='BlogPreviewPage'>
            {
                this.state.blogs.map((post) => {
                    return (
                        <PostCard
                            post={post}
                        />
                    )
                })
            }
            </div> 
        )
    }
    
}
export default Blog;