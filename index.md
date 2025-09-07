---
layout: home
title: 首页
description: "🚀 lliicchh的个人技术博客 - 专注前端开发、后端架构和产品设计的全栈工程师"
keywords: "技术博客, 前端开发, 后端架构, 产品设计, 全栈工程师, Jekyll博客"
---

<!-- Homepage with enhanced SEO and accessibility -->
<div class="professional-hero" role="banner" aria-label="个人介绍">
  <div class="container">
    <div class="hero-grid">
      <div class="hero-content" role="main">
        <div class="hero-badge" aria-label="职业身份">
          <span class="badge-text">开发者</span>
        </div>
        <h1 class="hero-heading" itemprop="name">
          构建有价值的
          <span class="gradient-text" itemprop="jobTitle">技术产品</span>
        </h1>
        <p class="hero-description" itemprop="description">
          我是 <strong itemprop="alternateName">{{ site.github_username }}</strong>，一名专注于现代开发技术的工程师。
          在这里分享技术见解、项目经验和行业思考，致力于创造有价值的数字产品。
        </p>
        <div class="hero-actions" role="navigation" aria-label="主要操作">
          <a href="#latest-posts" class="btn btn-primary" aria-label="查看最新技术文章">
            查看文章
          </a>
          <a href="/about/" class="btn btn-outline" aria-label="了解更多关于我的信息">
            了解更多
          </a>
        </div>
        <div class="hero-metrics" role="contentinfo" aria-label="博客统计">
          <div class="metric" itemscope itemtype="https://schema.org/QuantitativeValue">
            <div class="metric-number" itemprop="value">{{ site.posts.size }}+</div>
            <div class="metric-label" itemprop="unitText">技术文章</div>
          </div>
          <div class="metric" itemscope itemtype="https://schema.org/QuantitativeValue">
            <div class="metric-number" itemprop="value">{{ site.categories.size }}+</div>
            <div class="metric-label" itemprop="unitText">专业领域</div>
          </div>
          <div class="metric" itemscope itemtype="https://schema.org/QuantitativeValue">
            <div class="metric-number" itemprop="value">2025</div>
            <div class="metric-label" itemprop="unitText">持续更新</div>
          </div>
        </div>
      </div>
      <div class="hero-visual" role="complementary" aria-label="代码展示">
        <div class="visual-container">
          <div class="code-window" itemscope itemtype="https://schema.org/Code">
            <div class="window-header">
              <div class="window-controls" aria-label="窗口控制">
                <span class="control close" aria-label="关闭"></span>
                <span class="control minimize" aria-label="最小化"></span>
                <span class="control maximize" aria-label="最大化"></span>
              </div>
              <div class="window-title" itemprop="name">portfolio.js</div>
            </div>
            <div class="code-content" itemprop="text">
              <div class="code-line"><span class="keyword">const</span> <span class="variable">developer</span> = {</div>
              <div class="code-line">  <span class="property">name</span>: <span class="string">'{{ site.github_username }}'</span>,</div>
              <div class="code-line">  <span class="property">skills</span>: [<span class="string">'Frontend'</span>, <span class="string">'Backend'</span>],</div>
              <div class="code-line">  <span class="property">passion</span>: <span class="string">'Building great products'</span>,</div>
              <div class="code-line">  <span class="property">status</span>: <span class="string">'Available for projects'</span></div>
              <div class="code-line">};</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Expertise Section with Schema Markup -->
<section class="expertise-section" id="expertise" itemscope itemtype="https://schema.org/Person">
  <div class="container">
    <header class="section-header-pro">
      <h2 class="section-title-pro">专业领域</h2>
      <p class="section-subtitle-pro" itemprop="description">专注于现代开发技术和最佳实践</p>
    </header>
    <div class="expertise-grid">
      <article class="expertise-card" itemscope itemtype="https://schema.org/Organization">
        <div class="card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" role="img" aria-label="前端开发图标">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3 class="card-title" itemprop="name">前端开发</h3>
        <p class="card-description" itemprop="description">现代前端框架、响应式设计和用户体验优化</p>
        <div class="card-tags" role="list" aria-label="技术栈">
          <span class="tag" role="listitem">React</span>
          <span class="tag" role="listitem">Vue</span>
          <span class="tag" role="listitem">TypeScript</span>
        </div>
      </article>
      
      <article class="expertise-card" itemscope itemtype="https://schema.org/Organization">
        <div class="card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" role="img" aria-label="后端架构图标">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3 class="card-title" itemprop="name">后端架构</h3>
        <p class="card-description" itemprop="description">可扩展的后端系统、API设计和数据库优化</p>
        <div class="card-tags" role="list" aria-label="技术栈">
          <span class="tag" role="listitem">Node.js</span>
          <span class="tag" role="listitem">Python</span>
          <span class="tag" role="listitem">PostgreSQL</span>
        </div>
      </article>
      
      <article class="expertise-card" itemscope itemtype="https://schema.org/Organization">
        <div class="card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" role="img" aria-label="产品设计图标">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3 class="card-title" itemprop="name">产品设计</h3>
        <p class="card-description" itemprop="description">从概念到实现，打造用户喜爱的数字产品</p>
        <div class="card-tags" role="list" aria-label="技术栈">
          <span class="tag" role="listitem">UX/UI</span>
          <span class="tag" role="listitem">Prototyping</span>
          <span class="tag" role="listitem">Strategy</span>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- Structured Data for SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "{{ site.github_username }}",
  "jobTitle": "全栈工程师",
  "description": "专注于前端开发、后端架构和产品设计的全栈工程师",
  "url": "{{ site.url }}{{ site.baseurl }}",
  "sameAs": [
    "https://github.com/{{ site.github_username }}"
  ],
  "knowsAbout": [
    "前端开发",
    "后端架构", 
    "产品设计",
    "React",
    "Vue",
    "Node.js",
    "Python",
    "PostgreSQL"
  ],
  "makesOffer": {
    "@type": "Offer",
    "name": "技术博客内容",
    "description": "分享技术见解、项目经验和行业思考"
  }
}
</script>
