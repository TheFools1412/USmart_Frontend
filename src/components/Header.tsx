import React from 'react';
import { useState } from "react"
import '../css/header.css';
import RegistrationModal from "./Registration-modal"
import TutorRegistrationModal from './Tutor-registration-modal';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Header() {
    // State để control modal
    const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
    const [isTutorModalOpen, setIsTutorModalOpen] = useState(false);

    // Function để mở modal
    const openStudentModal = () => setIsStudentModalOpen(true);
    const openTutorModal = () => setIsTutorModalOpen(true);

    // Function để đóng modal
    const closeStudentModal = () => {
        setIsStudentModalOpen(false)
    }
    const closeTutorModal = () => {
        setIsTutorModalOpen(false)
    }

    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");


    const handleSearch = (e) => {
        if (e.key === "Enter" || e.type === "click") {
            if (searchTerm.trim()) {
                navigate(`/search?search=${encodeURIComponent(searchTerm.trim())}`);
            }
        }
    };

    return (
        <>

            {/* Main Header */}
            <div className="main-header">
                <div className="container">
                    <Link to ="/" className="logo-section">
                        <div className="logo-section">
                            <div className="logo-container">
                                <div className="logo-main">🍎</div>
                                <div className="logo-dot-1"></div>
                                <div className="logo-dot-2"></div>
                            </div>
                            <div className="logo-text">
                                <h1>U<span className="blue-text">Smart</span></h1>
                                <p className="tagline">Gia sư Hà Nội</p>
                            </div>
                        </div>
                    </Link>

                    <div className="action-buttons">
                        <button className="btn btn-orange" onClick={openTutorModal}>Đăng ký làm gia sư</button>
                        <button className="btn btn-blue" onClick={openStudentModal}>Đăng ký thuê gia sư</button>
                        <div className="user-id">
                            <div className="user-icon">U</div>
                            <span>19006750</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="navigation">
                <div className="container">
                    <nav className="nav-menu">
                        <Link to ="/" className="nav-link active">Trang chủ</Link>
                        <Link to ="/about" className="nav-link ">Giới thiệu</Link>
                        <div className="dropdown">
                            <Link to="#" className="nav-link dropdown-toggle">
                                Gia sư <span className="dropdown-arrow">▼</span>
                            </Link>
                            <div className="dropdown-menu">
                                <Link to ="/courses?tutor=TH" className="dropdown-item">Gia sư TH</Link>
                                <Link to ="/courses?tutor=THCS" className="dropdown-item">Gia sư THCS</Link>
                                <Link to ="/courses?tutor=THPT" className="dropdown-item">Gia sư THPT</Link>
                            </div>
                        </div>
                        <Link to ="/courses" className="nav-link">Tất cả khóa học</Link>
                        <Link to ="/new" className="nav-link">Tin tức</Link>
                        <Link to ="/contact" className="nav-link">Liên hệ</Link>
                    </nav>
                    <div className="search-wrapper">
                        <div className="search-icon" onClick={handleSearch}>🔍</div>
                        <div className="search-bar">
                            <input
                                type="text"
                                placeholder="Tìm kiếm khóa học..."
                                className="search-input"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleSearch}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <RegistrationModal isOpen={isStudentModalOpen} onClose={closeStudentModal} />

            <TutorRegistrationModal isOpen={isTutorModalOpen} onClose={closeTutorModal} />

        </>
    );
}
