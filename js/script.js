 // Function to show the welcome message
// Function to show the modal
function showModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

// Log the welcome message and show the modal when the page loads
window.addEventListener('load', function () {
    
    showModal();
});


// Variable declarations for elements
const blogPostTitle = "Sample Blog Post Title";
const authorName = "James Smith";
let userComment = "";

// Store a list of blog post objects
const blogPosts = [
    {
        title: "Blog Post 1",
        content: "This is the content of Blog Post 1.",
        author: "Author 1",
        likes: 0, 
    },
    {
        title: "Blog Post 2",
        content: "This is the content of Blog Post 2.",
        author: "Author 2",
        likes: 0, 
    }
];


// Function to increment the number of likes for a specific blog post
function likePost(postIndex) {
    blogPosts[postIndex].likes++;

    updateLikesCount(postIndex);
}

// Function to update the likes count on the page
function updateLikesCount(postIndex) {
    const likesCountElement = document.getElementById(`likes-count-${postIndex}`);
    likesCountElement.textContent = `${blogPosts[postIndex].likes} Likes`;
}

// // Update the likes and comments count
// function updateLikesAndCommentsCount(postIndex) {
//     const likesCountElement = document.getElementById(`likes-count-${postIndex}`);
//     const commentsCountElement = document.getElementById(`comments-count-${postIndex}`);
    
//     // likesCountElement.textContent = `${blogPosts[postIndex].likes} Likes`;
//     commentsCountElement.textContent = `${blogPosts[postIndex].comments.length} Comments`;
// }

// // Add this to your existing JavaScript code
// document.addEventListener("DOMContentLoaded", function () {
//     const likeButtons = document.querySelectorAll(".like-button");

//     likeButtons.forEach((button, index) => {
//         button.addEventListener("click", () => {
//             likePost(index);
//         });
//     });
// });

   
    // Function to scroll to the top of the page smoothly
document.addEventListener('DOMContentLoaded', function() {
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', function() {
        var backToTopButton = document.getElementById('back-to-top');

        if (window.scrollY > 200) { 
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    document.getElementById('back-to-top').addEventListener('click', scrollToTop);
});
