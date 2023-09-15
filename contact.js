function addComment() {
    const commentInput = document.getElementById("comment-input"); 
    const commentText = commentInput.value.trim(); 
    const commentsContainer = document.getElementById("comments-container");

    if (commentText) {
       
        const thankYouMessage = document.createElement("p");
        thankYouMessage.textContent = "Thank you for your comment!";
        commentsContainer.appendChild(thankYouMessage);
        
        setTimeout(() => {
            thankYouMessage.style.display = "none";
        }, 3000); 

        
        commentInput.value = "";
    } else {
        alert("Please enter a comment before submitting.");
    }
}




//  array of comments question(dynamically  generated)
const comments = [
    "Comment 1",
    "Comment 2",
    "Comment 3",
    // Add more comments as needed
];

// Select the container where you want to display the comments
const commentsContainer = document.getElementById("comments-container");

// Loop through the comments array and display them
comments.forEach((comment) => {
    const commentElement = document.createElement("div");
    commentElement.textContent = comment;
    commentsContainer.appendChild(commentElement);
});

