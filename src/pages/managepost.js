import React, { useState, useEffect } from "react";

function WPManagePosts() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); 
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  const username = "usertest";
  const appPassword = "q2j5LFGDrNJ4VrdNqlWaY9Mh";
  const apiUrl = "https://webparke.com/usertest/wp-json/wp/v2/posts";
  const credentials = btoa(`${username}:${appPassword}`);

  // Load posts when component loads
  useEffect(() => {
    fetch(apiUrl, {
      headers: { Authorization: `Basic ${credentials}` }
    })
      .then(res => res.json())
      .then(data => setPosts(Array.isArray(data) ? data : []))
      .catch(() => setMessage("Failed to load posts"));
  }, []);

  // Add a post
  const addPost = async (e) => {
    e.preventDefault();
    setMessage("");
    const postData = { title, content, status: "publish" };

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      });

      const data = await res.json();

      if (res.ok && data.id) {
        setPosts([...posts, data]);
        setMessage("Post added successfully!");
        setTitle("");
        setContent("");
      } else {
        setMessage("Failed to add post: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  // Delete a post by id
  const deletePost = async (postId) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    setMessage("");

    try {
      const res = await fetch(`${apiUrl}/${postId}`, {
        method: "DELETE",
        headers: { Authorization: `Basic ${credentials}` }
      });

      const data = await res.json();

      if (res.ok && data.deleted) {
        setPosts(posts.filter(post => post.id !== postId));
        setMessage("Post deleted successfully!");
      } else {
        setMessage("Failed to delete post: " + (data.message || "Unknown error"));
      }
    } catch (err) {
      setMessage("Error: " + err.message);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto", padding: 20 }}>
      <h2>Manage Posts</h2>
      <form onSubmit={addPost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          style={{ width: "100%", marginBottom: 10 }}
        />
        <button type="submit" style={{ width: "100%" }}>Add Post</button>
      </form>

      {message && <p>{message}</p>}

      <h3>Your Posts</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: 10 }}>
            <b>{post.title.rendered || post.title}</b>
            <button onClick={() => deletePost(post.id)} style={{ marginLeft: 15, color: "red" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WPManagePosts;
