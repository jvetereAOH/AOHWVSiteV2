import axios from "axios";

/**
 * Request Blogs from server
 * @returns Response from Backend
 */
async function getBlogs() {
    try {
        const response = await axios.get("localhost:8080/blogs")
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
    return response;
}