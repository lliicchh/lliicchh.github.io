---
layout: page
title: 📖 文章归档
permalink: /archive/
---

<div class="archive-container">
  <h2>🗂️ 按时间归档</h2>
  
  {% assign posts_by_year = site.posts | group_by_exp: 'post', 'post.date | date: "%Y"' %}
  
  {% for year in posts_by_year %}
    <div class="year-section">
      <h3 class="year-title">{{ year.name }}年 ({{ year.items | size }}篇)</h3>
      <div class="posts-grid">
        {% for post in year.items %}
          <div class="archive-post">
            <a href="{{ post.url | relative_url }}" class="archive-link">
              <h4>{{ post.title }}</h4>
              <div class="archive-meta">
                <span class="date">📅 {{ post.date | date: "%m月%d日" }}</span>
                {% if post.categories.size > 0 %}
                  <span class="category">📂 {{ post.categories.first }}</span>
                {% endif %}
              </div>
              {% if post.excerpt %}
                <p class="archive-excerpt">{{ post.excerpt | strip_html | truncatewords: 15 }}</p>
              {% endif %}
            </a>
          </div>
        {% endfor %}
      </div>
    </div>
  {% endfor %}
  
  {% if site.posts.size == 0 %}
    <div class="empty-state">
      <p>🤔 还没有文章呢，赶快写一篇吧！</p>
    </div>
  {% endif %}
</div>

<style>
.archive-container {
  max-width: 800px;
  margin: 0 auto;
}

.year-section {
  margin-bottom: 3rem;
}

.year-title {
  color: var(--primary-color, #667eea);
  border-bottom: 2px solid var(--primary-color, #667eea);
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.posts-grid {
  display: grid;
  gap: 1.5rem;
}

.archive-post {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
}

.archive-post:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.archive-link {
  display: block;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
}

.archive-link h4 {
  margin: 0 0 0.5rem 0;
  color: var(--primary-color, #667eea);
  font-size: 1.2rem;
}

.archive-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  color: #666;
}

.archive-excerpt {
  color: #888;
  font-size: 0.9rem;
  line-height: 1.5;
  margin: 0;
}

.empty-state {
  text-align: center;
  padding: 3rem;
  color: #666;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .archive-meta {
    flex-direction: column;
    gap: 0.3rem;
  }
  
  .archive-link {
    padding: 1rem;
  }
}
</style>