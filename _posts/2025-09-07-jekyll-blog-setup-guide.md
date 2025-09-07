---
layout: post
title:  "Jekyll博客搭建指南"
date:   2025-09-07 20:30:00 +0800
categories: 技术 教程
tags: [Jekyll, GitHub Pages, 教程, 博客搭建]
---

## 前言

这篇文章将详细介绍如何使用Jekyll和GitHub Pages搭建一个免费的个人博客。整个过程不需要购买服务器，也不需要复杂的配置。

## 环境准备

### 1. 安装Ruby和Jekyll

首先需要在本地安装Ruby环境：

```bash
# macOS用户可以使用Homebrew
brew install ruby

# 安装Jekyll和Bundler
gem install jekyll bundler
```

### 2. 创建GitHub仓库

1. 在GitHub上创建一个新仓库
2. 仓库名建议设置为：`your-username.github.io`
3. 设置为公开仓库（Public）

## 创建Jekyll站点

### 1. 初始化项目

```bash
# 创建新的Jekyll站点
jekyll new my-blog
cd my-blog

# 安装依赖
bundle install
```

### 2. 本地预览

```bash
# 启动本地服务器
bundle exec jekyll serve

# 浏览器访问 http://localhost:4000
```

## 配置GitHub Pages

### 1. 修改Gemfile

为了兼容GitHub Pages，需要修改`Gemfile`文件：

```ruby
# 注释掉原来的jekyll gem
# gem "jekyll", "~> 4.0"

# 添加github-pages gem
gem "github-pages", group: :jekyll_plugins
```

### 2. 更新_config.yml

在`_config.yml`中添加必要的配置：

```yaml
title: 我的博客
email: your-email@example.com
description: 个人技术博客
baseurl: ""
url: "https://your-username.github.io"
github_username: your-username

# 构建设置
markdown: kramdown
theme: minima
plugins:
  - jekyll-feed
  - jekyll-sitemap
  - jekyll-seo-tag

# 语言设置
lang: zh-CN
timezone: Asia/Shanghai
```

## 创建内容

### 1. 写作文章

在`_posts`目录下创建文章，文件名格式：`YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "文章标题"
date: 2025-09-07 20:00:00 +0800
categories: 分类
tags: [标签1, 标签2]
---

文章内容...
```

### 2. 创建页面

可以创建About、Archive等页面：

```markdown
---
layout: page
title: 关于我
permalink: /about/
---

个人介绍...
```

## 部署到GitHub Pages

### 1. 提交代码

```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

### 2. 配置GitHub Pages

1. 进入仓库的Settings页面
2. 找到Pages设置
3. Source选择"Deploy from a branch"
4. Branch选择"main"，文件夹选择"/ (root)"
5. 点击Save

## 进阶配置

### 1. 自定义域名

如果有自己的域名，可以在仓库根目录创建`CNAME`文件：

```
yourdomain.com
```

### 2. 添加Google Analytics

在`_config.yml`中添加：

```yaml
google_analytics: YOUR_TRACKING_ID
```

### 3. 评论系统

可以集成Disqus或Gitalk等评论系统。

## 常用命令

```bash
# 本地预览
bundle exec jekyll serve

# 构建站点
bundle exec jekyll build

# 更新依赖
bundle update
```

## 总结

使用Jekyll和GitHub Pages搭建博客的优势：

- ✅ 完全免费
- ✅ 支持自定义域名
- ✅ 版本控制
- ✅ Markdown写作
- ✅ SEO友好
- ✅ 加载速度快

希望这篇教程能帮助你快速搭建自己的博客！

---

*有问题欢迎在评论区讨论，或者查看[Jekyll官方文档](https://jekyllrb.com/)获取更多信息。*