Personal Blog App
Description
This Personal Blog App is a simple and user-friendly blogging platform built using React.js and Bootstrap. It allows users to create, edit, delete, and view blog posts with images. The app demonstrates full CRUD functionality (Create, Read, Update, Delete) for posts, and provides a responsive and modern UI with a clean layout. It uses localStorage to persist data between sessions, making it a perfect lightweight blogging app for personal use.

Key Features:
Create Post: Users can create new blog posts by adding a title, content, and an optional image.
View All Posts: Display all available blog posts in reverse chronological order, showing a preview of the content and the post date.
View Post Details: Users can click on a post to view its full content, including any uploaded image and the date it was posted.
Edit Post: Users can update a post’s title, content, and image.
Delete Post: Posts can be deleted from the list.
Image Upload: Allows users to upload an image with their posts.
Responsive Design: Uses Bootstrap for a fully responsive UI.
Notifications: Uses react-toastify to display success, error, and info notifications during user interactions (e.g., post created, post updated, post deleted).
Technologies Used
Frontend: React.js
Styling: Bootstrap 5
State Management: React built-in state
Persistence: localStorage
Notifications: react-toastify
Routing: react-router-dom



Usage
On the home page, you will see a list of all blog posts. If no posts exist, you’ll be prompted to create one.
To create a new post, click the "Create New Post" button in the header, fill in the title, content, and optionally upload an image.
You can view the details of a post by clicking the "View" button on any post card.
Edit or delete a post using the "Edit" and "Delete" buttons respectively.