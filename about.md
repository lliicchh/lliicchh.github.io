---
layout: page
title: 🙋‍♂️ 关于我
permalink: /about/
---

<div class="about-hero">
  <div class="about-avatar">
    <div class="avatar-placeholder">👨‍💻</div>
  </div>
  <h2>你好！我是 {{ site.github_username }} 👋</h2>
  <p class="about-intro">一个热爱技术、喜欢分享的年轻开发者</p>
</div>

## 🎆 关于这个博客

这个博客使用[Jekyll](https://jekyllrb.com/)构建，部署在[GitHub Pages](https://pages.github.com/)上。在这里我会分享：

<div class="feature-grid">
  <div class="feature-item">
    <div class="feature-icon">💻</div>
    <h3>技本文章</h3>
    <p>编程语言、框架、工具的学习笔记</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon">💡</div>
    <h3>项目经验</h3>
    <p>开发过程中的问题和解决方案</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon">🌱</div>
    <h3>成长感悟</h3>
    <p>个人成长和职业发展的思考</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon">📚</div>
    <h3>读书笔记</h3>
    <p>好书推荐和读后感</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon">🎨</div>
    <h3>生活随笔</h3>
    <p>日常生活中的有趣发现</p>
  </div>
  <div class="feature-item">
    <div class="feature-icon">🌍</div>
    <h3>旅行游记</h3>
    <p>旅行途中的美景和故事</p>
  </div>
</div>

## 技术栈

我主要使用的技术包括：

- **前端：** HTML, CSS, JavaScript, React, Vue.js
- **后端：** Python, Node.js, Java
- **数据库：** MySQL, MongoDB, Redis
- **工具：** Git, Docker, VS Code
- **云服务：** AWS, 阿里云

## 联系方式

如果你想联系我或者有任何建议，欢迎通过以下方式：

- 📧 Email: your-email@example.com
- 🐱 GitHub: [lliicchh](https://github.com/lliicchh)
- 📝 在本站留言

## 版权声明

本博客所有原创文章均采用 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 协议，转载请注明出处。

---

*感谢你的访问，希望我们能在这里一起学习、成长！*

<style>
.about-hero {
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  margin: -2rem -15px 3rem -15px;
}

.about-avatar {
  margin-bottom: 1.5rem;
}

.avatar-placeholder {
  font-size: 4rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  backdrop-filter: blur(10px);
  border: 3px solid rgba(255, 255, 255, 0.3);
}

.about-intro {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 1rem 0;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.feature-item {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border-left: 4px solid transparent;
}

.feature-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-left-color: #667eea;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-item h3 {
  color: #667eea;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.feature-item p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

.tech-stack {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 1rem;
}

.tech-tag {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.contact-section {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin: 2rem 0;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.contact-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-link:hover {
  transform: translateY(-2px);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

@media (max-width: 768px) {
  .about-hero {
    margin: -1rem -15px 2rem -15px;
    padding: 2rem 1rem;
  }
  
  .avatar-placeholder {
    width: 80px;
    height: 80px;
    font-size: 2.5rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .contact-links {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
