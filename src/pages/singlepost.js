import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePost() {
  const { id } = useParams(); // Get the ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://mycleaneco.com/wp-json/wp/v2/posts/${id}?_embed`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]); // Re-fetch post when ID changes

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found</p>;

  const imageUrl =
    post._embedded["wp:featuredmedia"]?.[0]?.source_url ||
    "https://via.placeholder.com/600";

  const categories = post._embedded["wp:term"]?.[0]?.map((cat) => cat.name).join(", ");

  return (
    <div className="container my-5">
      <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
      {categories && <p><strong>Category:</strong> {categories}</p>}
      <img src={imageUrl} className="img-fluid mb-4" alt={post.title.rendered} />
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
    </div>
  );
}

export default SinglePost;
