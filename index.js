// Interacting with Web APIs

// In this test you will use the jsonplaceholder API to accomplish different tasks. 

// Resources

// JSONPLACEHOLDER API Documentation  https://jsonplaceholder.typicode.com/guide/
// JSONPLACEHOLDER Posts API https://jsonplaceholder.typicode.com/posts

// Tests

// You will be expected to write code to do the following LIST, POST, UPDATE, DELETE and FILTER post(s) to the API provided.

 //TO LIST
 async function listPosts() {
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts=await response.json()
        console.log("list of posts:");
        console.log(posts)
    } catch (error) {
        console.log('Error listing the posts', error);
    }
 }
 listPosts();
   
//   // Function to create a new post
function createPost(title, body, userId) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        body,
        userId
      })
    })
      .then(response => response.json())
      .then(newPost => {
        console.log('New post created:');
        console.log(newPost);
      })
      .catch(error => {
        console.error('Error creating post:', error);
      });
  }
  createPost('New Post Title', 'New post body', 1);
// // Function to update an existing post
function updatePost(id, title, body, userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id,
        title,
        body,
        userId
      })
    })
      .then(response => response.json())
      .then(updatedPost => {
        console.log('Post updated:');
        console.log(updatedPost);
      })
      .catch(error => {
        console.error('Error updating post:', error);
      });
  }

  updatePost(1, 'Updated Title', 'Updated body', 2); // Update an existing post with ID 1
// // Function to delete a post
function deletePost(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          console.log(`Post with ID ${id} deleted.`);
        } else {
          throw new Error('Error deleting post.');
        }
      })
      .catch(error => {
        console.error('Error deleting post:', error);
      });
  }
    deletePost(1); // Delete the post with ID 1

  // Function to filter posts by userId
  function filterPostsByUserId(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(filteredPosts => {
        console.log(`Filtered posts with userId ${userId}:`);
        console.log(filteredPosts);
      })
      .catch(error => {
        console.error('Error filtering posts:', error);
      });
  }
  filterPostsByUserId(3)
 