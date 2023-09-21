document.addEventListener('DOMContentLoaded', () => {
    const loadingSpinner = document.getElementById('loading-spinner');
    const blogContainer = document.getElementById('blog-container');

    async function fetchBlogData() {
        try {
            const response = await fetch('./blogData.json');
            const data = await response.json();
            return data.blogPosts;
        } catch (error) {
            console.error('Error fetching blog data:', error);
            return [];
        }
    }

    async function displayBlogCards() {
        // Display loading state
        loadingSpinner.style.display = 'block';
        blogContainer.style.display = 'none';

        const blogData = await fetchBlogData();

        // Remove loading state and display blog cards
        loadingSpinner.style.display = 'none';
        blogContainer.style.display = 'block';

        blogData.forEach((blog) => {
            const blogCard = createBlogCard(blog);
            blogContainer.appendChild(blogCard);

            // Add event listener for comment button click
            const commentButton = blogCard.querySelector('.comment-button');
            commentButton.addEventListener('click', () => toggleComments(blogCard));
        });
    }

    function createBlogCard(blog) {
        const blogCard = document.createElement('div');
        blogCard.classList.add('blog-card');
    
        blogCard.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <h2>${blog.title}</h2>
            <p class="blog-category">Category: ${blog.category}</p>
            <div class="author-info">
                <p class="author-name">${blog.author}</p>
            </div>
            <p class="blog-date">Published on ${blog.date}</p>
            <div class="interactions">
                <button class="like-button" onclick="likePost(${blog.id})">Like</button>
                <span class="like-count" id="like-count-${blog.id}">${blog.likes} Likes</span>
                <button class="comment-button" onclick="toggleComments(${blog.id})">Toggle Comments</button>
                <span class="comment-count" id="comment-count-${blog.id}">${blog.comments.length} Comments</span>
            </div>
            <div class="comments" style="display: none;">
                ${blog.comments.map((comment) => `<p>${comment.user}: ${comment.comment}</p>`).join('')}
                <textarea id="comment-input-${blog.id}" placeholder="Add a comment"></textarea>
                <button class="add-comment-button" onclick="addComment(${blog.id})">Add Comment</button>
            </div>
        `;
    
        return blogCard;
    }
        

    // Function to toggle the visibility of comments
    function toggleComments(blogCard) {
        const commentDisplayArea = blogCard.querySelector('.comments');
        if (commentDisplayArea.style.display === 'none' || commentDisplayArea.style.display === '') {
            commentDisplayArea.style.display = 'block';
        } else {
            commentDisplayArea.style.display = 'none';
        }
    }

    displayBlogCards();
    
    // Function to add a comment to a specific blog post
    function addComment(blogId) {
        const commentInput = document.getElementById(`comment-input-${blogId}`);
        const commentContainer = document.getElementById(`comment-container-${blogId}`);
        const commentText = commentInput.value.trim();

        if (commentText) {
            // Add the comment to the comment container
            const commentElement = document.createElement('p');
            commentElement.textContent = commentText;
            commentContainer.appendChild(commentElement);

            // Clear the comment input field
            commentInput.value = '';
        } else {
            alert('Please enter a comment before submitting.');
        }
    }
});

