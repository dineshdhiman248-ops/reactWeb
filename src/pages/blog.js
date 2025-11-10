import React, { useEffect, useState } from "react";
import axios from 'axios';
import Bannersection from '../Component/bannersection';
import { Link } from "react-router-dom";

const bannerblog = {
  title: "Blog",
  text: `Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.`,
  image: "http://localhost:3000/images/aboutimg.jpg",
  button: "Web Development",
  url: "/contact"
};

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); 

  const perPage = 6;  

  const fetchPosts = () => {
    setLoading(true);
    axios
      .get(`https://webparke.com/usertest/wp-json/wp/v2/posts?_embed&per_page=${perPage}&page=${page}`)
      .then((res) => {
        setPosts((prev) => [...prev, ...res.data]); 
        setLoading(false);

        if (res.data.length < perPage) setHasMore(false);  
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setHasMore(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  if (loading && posts.length === 0) return <p>Loading...</p>;

  return (
    <div className="contact-section">
      {/* Banner Section */}
      <Bannersection banerdata={bannerblog} showButton={false} />

      {/* Blog Posts */}
      <div className="container my-5">
        <div className="row">
          {posts.map((post) => {
            const imageUrl =
              post._embedded["wp:featuredmedia"]?.[0]?.source_url ||
              "https://via.placeholder.com/300";

            const categories = post._embedded['wp:term']?.[0]?.map(cat => cat.name).join(', ');

            return (
              <div key={post.id} className="col-md-4 mb-4">
                <div className="card h-100">
                  <img src={imageUrl} className="card-img-top" alt={post.title.rendered} />
                  <div className="card-body">
                    <h5 className="card-title" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h5>
                    {categories && <p><strong>Category:</strong> {categories}</p>}
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></p>
                    <Link to={`/blog/${post.id}`} className="btn btn-primary">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={loadMore} disabled={loading}>
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;
