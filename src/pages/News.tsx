import type React from "react"
import { useState } from "react"
import "../css/news.css"
import { newsArticles, newsCategories, getFeaturedNews } from "../data/News"
import HeaderImg from "../assets/images/1.jpg"
import { Link, useNavigate } from "react-router-dom";
import NewsSidebar from "../components/NewsSidebar";

const NewsPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedCategory, setSelectedCategory] = useState("all")
    const articlesPerPage = 3
    const navigate = useNavigate();

    // Filter articles based on selected category
    const filteredArticles =
        selectedCategory === "all" ? newsArticles : newsArticles.filter((article) => article.category === selectedCategory)

    // Pagination logic
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
    const startIndex = (currentPage - 1) * articlesPerPage
    const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage)

    // Get featured news for sidebar
    const featuredNews = getFeaturedNews().slice(0, 4)

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category)
        setCurrentPage(1) // Reset to first page when category changes
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
        // Scroll to top when page changes
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    const [showDropdown, setShowDropdown] = useState(false);

    const formatDate = (dateString: string) => {
        return dateString
    }

    return (
        <div className="news-page">

            <div className="header-section">
                <img
                    src={HeaderImg}
                    alt="Tất cả khóa học"
                    className="header-image"
                />
                <h1 className="header-text">Tin tức</h1>
            </div>

            {/* Breadcrumb */}
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <span className="breadcrumb-item" style={{ cursor: "pointer" }}>
                        <Link to ='/' className="nav-link">Trang chủ</Link>
                    </span>
                    <span className="breadcrumb-separator">›</span>
                    <span className="breadcrumb-item active">Tin tức</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="news-content">
                <div className="news-container">
                    <div className="news-layout">
                        {/* Sidebar */}
                        <NewsSidebar />

                        {/* Main Articles */}
                        <div className="news-main">
                            <div className="articles-grid">
                                {currentArticles.map((article) => (
                                    <article key={article.id} className="news-article">
                                        <div className="article-image">
                                            <img
                                                src={article.featuredImage || "/placeholder.svg"} alt={article.title}
                                                onClick={() => navigate(`/news/${article.slug}`)}
                                            />
                                        </div>

                                        <div className="article-content">
                                            <h2 className="article-title"
                                                onClick={() => navigate(`/news/${article.slug}`)}>{article.title}</h2>

                                            <div className="article-meta">
                                                <span className="article-author">Bởi {article.author}</span>
                                                <span className="meta-separator">|</span>
                                                <span className="article-date">{formatDate(article.publishDate)}</span>
                                                <span className="meta-separator">|</span>
                                                <span className="article-comments">{article.commentCount} bình luận</span>
                                            </div>

                                            <div className="article-excerpt">
                                                <p>{article.excerpt}</p>
                                            </div>

                                            <button
                                                className="read-more-btn"
                                                onClick={() => navigate(`/news/${article.slug}`)}
                                            >
                                                Đọc tiếp
                                            </button>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="news-pagination">
                                    <button
                                        className="pagination-btn"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        ‹
                                    </button>

                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            className={`pagination-btn ${currentPage === page ? "active" : ""}`}
                                            onClick={() => handlePageChange(page)}
                                        >
                                            {page}
                                        </button>
                                    ))}

                                    <button
                                        className="pagination-btn"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        ›
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPage
