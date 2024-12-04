import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import "./BlogDetailPage.css";
import { formatDate } from "./formatDate.utils";
import Loader from "../Loader/Loader";
import { BASE_URL } from "../../Redux/baseUrl";

const BlogDetailPage: React.FC = () => {
  const location = useLocation();
  const post = location.state?.post;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    axios
      .post(`${BASE_URL}/api/newsletter/subscribe`, { email })
      .then((response) => {
        const responseMessage = response?.data?.message;
        if (responseMessage) {
          setMessage(responseMessage);
          if (responseMessage.toLowerCase().includes("subscribed")) {
            setEmail("");
          }
        }
      })
      .catch((error) => {
        const errorMessage =
          error.response?.data?.message ||
          "An error occurred while subscribing.";
        setMessage(errorMessage);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleShare = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-detail-page">
      <div className="subscribe-box">
        {loading ? (
          <Loader />
        ) : (
          <>
            <h2 className="subscribe-title">Subscribe to Our Email List</h2>
            <form className="subscribe-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMessage("");
                }}
                required
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </form>
            {message && <p>{message}</p>}
          </>
        )}
      </div>
      <div className="blog-content">
        <img src={post.image} alt={post.title} className="detail-image" />
        <h1>{post.title}</h1>
        <p className="blog-date">
          {post.dateCreated
            ? formatDate(new Date(post.dateCreated))
            : "Unknown date"}
        </p>
        <div style={{ whiteSpace: "pre-line" }}>{post.content}</div>
      </div>
      <div className="share-box">
        <h2 className="share-title">Share this post</h2>
        <div className="social-icons">
          <button
            onClick={() =>
              handleShare(
                `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  window.location.href
                )}`
              )
            }
            className="social-icon"
            aria-label="Share on Twitter"
          >
            <FaTwitter color="#000" />
          </button>
          <button
            onClick={() =>
              handleShare(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}`
              )
            }
            className="social-icon"
            aria-label="Share on Facebook"
          >
            <FaFacebook color="#000" />
          </button>
          <button
            onClick={() =>
              handleShare(
                `https://instagram.com`
              )
            }
            className="social-icon"
            aria-label="Share on Instagram"
          >
            <FaInstagram color="#000" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
