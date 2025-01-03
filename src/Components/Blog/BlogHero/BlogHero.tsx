import React from 'react';
import './BlogHero.css'; // Create this CSS file for styling

interface BlogHeroProps {
  title: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({ title }) => {
  return (
    <section className="blog-hero">
      <div className="blog-hero-overlay" />
      <h2 className="blog-hero-title">{title}</h2>
    </section>
  );
};

export default BlogHero;
