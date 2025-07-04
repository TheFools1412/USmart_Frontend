import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { newsCategories, getFeaturedNews } from "../data/News";

export default function NewsSidebar() {
    const navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const featuredNews = getFeaturedNews().slice(0, 4);

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
                setShowDropdown(!showDropdown);
                break;
            case "Tất cả khóa học":
                navigate("/courses");
                break;
            case "Tin tức":
                navigate("/new");
                break;
            default:
                navigate(`/new?category=${encodeURIComponent(categoryName)}`);
        }
    };

    const handleNewsClick = (slug: string) => {
        navigate(`/news/${slug}`);
    };

    return (
        <div className="news-sidebar">
            {/* Danh mục */}
            <div className="sidebar-section">
                <div className="sidebar-header">
                    <h3 className="sidebar-title">📋 DANH MỤC TIN TỨC</h3>
                </div>
                <div className="sidebar-menu">

                    <button className="menu-item" onClick={() => handleCategoryClick("Trang chủ")}>
                        Trang chủ
                    </button>
                    {newsCategories
                        .filter((cat) => cat.count > 0)
                        .map((category) => (
                            <div key={category.id} className="menu-item-container">
                                <button
                                    className="menu-item"
                                    onClick={() => handleCategoryClick(category.name)}
                                >
                                    {category.name}
                                    {category.name === "Gia sư" && (
                                        <span className="menu-arrow">›</span>
                                    )}
                                </button>
                                {category.name === "Gia sư" && showDropdown && (
                                    <div className="submenu">
                                        <a href="/courses?tutor=TH" className="submenu-item">
                                            Gia sư tiểu học
                                        </a>
                                        <a href="/courses?tutor=THCS" className="submenu-item">
                                            Gia sư khối THCS
                                        </a>
                                        <a href="/courses?tutor=THPT" className="submenu-item">
                                            Gia sư khối THPT
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    <button className="menu-item" onClick={() => handleCategoryClick("Liên hệ")}>
                        Liên hệ
                    </button>
                </div>
            </div>

            {/* Tin nổi bật */}
            <div className="sidebar-section">
                <div className="sidebar-header featured">
                    <h3 className="sidebar-title">📢 TIN TỨC NỔI BẬT</h3>
                </div>
                <div className="featured-news-list">
                    {featuredNews.map((newsItem) => (
                        <div
                            key={newsItem.id}
                            className="featured-news-item"
                            onClick={() => handleNewsClick(newsItem.slug)}
                        >
                            <div className="featured-news-image">
                                <img
                                    src={newsItem.featuredImage || "/placeholder.svg"}
                                    alt={newsItem.title}
                                />
                            </div>
                            <div className="featured-news-content">
                                <h4 className="featured-news-title">{newsItem.title}</h4>
                                <div className="featured-news-date">
                                    {newsItem.publishDate}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
