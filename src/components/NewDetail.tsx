import type React from "react"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import "../css/newDetail.css"
import { newsArticles, newsCategories, getFeaturedNews, getNewsBySlug } from "../data/News"
import type { NewsArticle } from "../types/new"
import { useParams } from 'react-router-dom';
import HeaderImg from "../assets/images/1.jpg"
import NewsSidebar from "../components/NewsSidebar";

interface NewsDetailPageProps {
    slug: string
}

const NewsDetailPage: React.FC = () => {
    const navigate = useNavigate()
    const { slug } = useParams();
    const [article, setArticle] = useState<NewsArticle | null>(null)
    const [relatedArticles, setRelatedArticles] = useState<NewsArticle[]>([])
    const [featuredNews, setFeaturedNews] = useState<NewsArticle[]>([])

    useEffect(() => {
        if (!slug) return;

        // Get current article by slug
        const currentArticle = getNewsBySlug(slug); // ✅ truyền slug vào

        if (currentArticle) {
            setArticle(currentArticle);

            // Get related articles
            const related = newsArticles
                .filter(
                    (item) =>
                        item.category === currentArticle.category &&
                        item.id !== currentArticle.id
                )
                .slice(0, 4);
            setRelatedArticles(related);

            // Featured news
            const featured = getFeaturedNews().slice(0, 3);
            setFeaturedNews(featured);
        }
    }, [slug]);

    if (!article) {
        return (
            <div className="news-detail-loading">
                <div className="loading-spinner"></div>
                <p>Đang tải bài viết...</p>
            </div>
        )
    }

    const formatDate = (dateString: string) => {
        return dateString
    }

    const handleCategoryClick = (categoryName: string) => {
        switch (categoryName) {
            case "Trang chủ":
                navigate("/");
                break;
            case "Giới thiệu":
                navigate("/about");
                break;
            case "Liên hệ":
                navigate("/contact");
                break;
            case "Gia sư":
                navigate("/courses?tutor=TH");
                break;
            case "Tất cả khóa học":
                navigate("/courses");
                break;
            case "Tin tức":
                navigate("/new");
                break;
            default:
                // Nếu là tên danh mục tin tức (dùng query string)
                navigate(`/new?category=${encodeURIComponent(categoryName)}`);
        }
    };

    const handleArticleClick = (articleSlug: string) => {
        navigate(`/news/${articleSlug}`)
    }

    const handleBackToNews = () => {
        navigate("/news")
    }

    return (
        <div className="news-detail-page">
            {/* Hero Section with Dynamic Background */}
            <div className="header-section">
                <img
                    src={HeaderImg}
                    alt={article.title}
                    className="header-image"
                />
                <h1 className="header-text">{article.title}</h1>
            </div>

            {/* Breadcrumb */}
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <span className="breadcrumb-item" style={{ cursor: "pointer" }}>
                        <Link to ='/' className="nav-link">Trang chủ</Link>
                    </span>
                    <span className="breadcrumb-separator">›</span>
                    <span className="breadcrumb-item" style={{ cursor: "pointer" }}>
                        <Link to ='/new' className="nav-link">Tin tức</Link>
                    </span>
                    <span className="breadcrumb-separator">›</span>
                    <span className="breadcrumb-item active">{article.title}</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="news-detail-content">
                <div className="news-detail-container">
                    <div className="news-detail-layout">
                        {/* Sidebar */}
                        <NewsSidebar />

                        {/* Main Article */}
                        <div className="news-detail-main">
                            {/* Article Header */}
                            <div className="article-header">
                                <div className="article-featured-image">
                                    <img src={article.featuredImage || "/placeholder.svg"} alt={article.title} />
                                </div>

                                <h1 className="article-main-title">{article.title}</h1>

                                <div className="article-meta">
                                    <div className="meta-item">
                                        <span className="meta-icon">👤</span>
                                        <span>Bởi {article.author}</span>
                                    </div>
                                    <div className="meta-item">
                                        <span className="meta-icon">📅</span>
                                        <span>{formatDate(article.publishDate)}</span>
                                    </div>
                                    <div className="meta-item">
                                        <span className="meta-icon">💬</span>
                                        <span>{article.commentCount} bình luận</span>
                                    </div>
                                    <div className="meta-item">
                                        <span className="meta-icon">👁️</span>
                                        <span>{article.views} lượt xem</span>
                                    </div>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div className="article-body">
                                <div className="article-excerpt">
                                    <p className="excerpt-text">{article.excerpt}</p>
                                </div>

                                <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />

                                {/* Article Tags */}
                                {article.tags.length > 0 && (
                                    <div className="article-tags">
                                        <h4>Tags:</h4>
                                        <div className="tags-list">
                                            {article.tags.map((tag, index) => (
                                                <span key={index} className="tag-item">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Social Share */}
                                <div className="article-share">
                                    <h4>Chia sẻ bài viết:</h4>
                                    <div className="share-buttons">
                                        <button className="share-btn facebook">
                                            <span>📘</span> Facebook
                                        </button>
                                        <button className="share-btn twitter">
                                            <span>🐦</span> Twitter
                                        </button>
                                        <button className="share-btn linkedin">
                                            <span>💼</span> LinkedIn
                                        </button>
                                        <button className="share-btn copy">
                                            <span>🔗</span> Copy Link
                                        </button>
                                    </div>
                                </div>

                                {/* Navigation */}
                                <div className="article-navigation">
                                    <button className="nav-btn prev">
                                        <span>‹ Bài trước</span>
                                    </button>
                                    <button className="nav-btn next">
                                        <span>Bài sau ›</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsDetailPage
