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



