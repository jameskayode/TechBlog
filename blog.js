// blog.js

// Function to extract the blog ID from the URL query parameter
function getBlogIdFromUrl() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get('id');
}

// Function to fetch and display blog details
async function displayBlogDetails() {
    const blogId = getBlogIdFromUrl();

    // Fetch blog details from your JSON data or API
    const blogDetails = await fetchBlogDetails(blogId);

    // Display blog details on the page
    const blogTitleElement = document.getElementById('blog-title');
    const blogAuthorElement = document.getElementById('blog-author');
    const blogContentElement = document.getElementById('blog-content');
    // Add other elements as needed

    // Update HTML elements with blog details
    blogTitleElement.textContent = blogDetails.title;
    blogAuthorElement.textContent = blogDetails.author;
    blogContentElement.innerHTML = blogDetails.content;
    // Update other elements

    // You can also display comments here if needed
}

// Call the function to display blog details when the page loads
document.addEventListener('DOMContentLoaded', displayBlogDetails);
