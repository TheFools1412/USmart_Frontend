import type React from "react"
import { useEffect, useState } from "react"
import "../css/courses.css"
import "../data/Courses.js"
import RegistrationModal from "../components/Registration-modal.jsx"
import HeaderImg from "../assets/images/1.jpg"
import { useCoursesPage } from "../hooks/useCoursesPage.js";

const CoursesPage: React.FC = () => {

  const {
    filters,
    setFilters,
    selectedTags,
    filteredCourses,
    handleFilterChange,
    removeTag,
    clearAllTags,
    handleSearch,
    getHeroTitle,
    getBreadcrumbTitle,
  } = useCoursesPage();

  const [isModalOpen, setIsModalOpen] = useState(false)

  // Function để mở modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  // Function để đóng modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (

    <>
      <div className="header-section">
        <img
          src={HeaderImg}
          alt="Tất cả khóa học"
          className="header-image"
        />
        <h1 className="header-text">{getHeroTitle()}</h1>
      </div>


      <div className="breadcrumb-container">
        <div className="breadcrumb">
          <span className="breadcrumb-item" style={{ cursor: "pointer" }}>
            <a href='/' className="nav-link">Trang chủ</a>
          </span>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-item active">{getBreadcrumbTitle()}</span>
        </div>
      </div>


      <div className="courses-page">
        {/* Sidebar bộ lọc */}
        <div className="sidebar">
          {/* Header và Tags đã chọn */}
          <div className="selected-filters">
            <div className="filter-header">
              <span className="filter-title">Bạn chọn</span>
              {selectedTags.length > 0 && (
                <button className="clear-all-btn" onClick={clearAllTags}>
                  Bỏ hết
                </button>
              )}
            </div>
            {selectedTags.length > 0 && (
              <div className="tags-container">
                {selectedTags.map((tag, index) => {
                  const [, displayText] = tag.split(":")
                  return (
                    <div key={index} className="filter-tag">
                      <span>{displayText}</span>
                      <button className="remove-tag-btn" onClick={() => removeTag(tag)}>
                        ×
                      </button>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          <div className="filter-group">
            <select
              className="filter-select"
              value={filters.grade}
              onChange={(e) => handleFilterChange("grade", e.target.value)}
            >
              <option value="">Chọn lớp</option>
              <option value="1">Lớp 1</option>
              <option value="2">Lớp 2</option>
              <option value="3">Lớp 3</option>
              <option value="4">Lớp 4</option>
              <option value="5">Lớp 5</option>
              <option value="6">Lớp 6</option>
              <option value="7">Lớp 7</option>
              <option value="8">Lớp 8</option>
              <option value="9">Lớp 9</option>
              <option value="10">Lớp 10</option>
              <option value="11">Lớp 11</option>
              <option value="12">Lớp 12</option>
            </select>
          </div>

          <div className="filter-group">
            <select
              className="filter-select"
              value={filters.level}
              onChange={(e) => handleFilterChange("level", e.target.value)}
            >
              <option value="">Trình độ chuyên môn</option>
              <option value="sinh vien">Sinh viên</option>
              <option value="giao vien">Giáo viên</option>
              <option value="thac si">Thạc sĩ</option>
              <option value="tien si">Tiến sĩ</option>
            </select>
          </div>

          <div className="filter-group">
            <select
              className="filter-select"
              value={filters.subject}
              onChange={(e) => handleFilterChange("subject", e.target.value)}
            >
              <option value="">Chọn môn</option>
              <option value="toan">Toán</option>
              <option value="ly">Vật lý</option>
              <option value="hoa">Hóa học</option>
              <option value="sinh">Sinh học</option>
              <option value="van">Văn học</option>
              <option value="anh">Tiếng Anh</option>
            </select>
          </div>

          <div className="filter-group">
            <select
              className="filter-select"
              value={filters.tutor}
              onChange={(e) => handleFilterChange("tutor", e.target.value)}
            >
              <option value="">Chọn gia sư</option>
              <option value="TH">Gia sư TH</option>
              <option value="THCS">Gia sư THCS</option>
              <option value="THPT">Gia sư THPT</option>
            </select>
          </div>

          <div className="filter-group">
            <select
              className="filter-select"
              value={filters.gender}
              onChange={(e) => handleFilterChange("gender", e.target.value)}
            >
              <option value="">Chọn giới tính</option>
              <option value="nam">Nam</option>
              <option value="nu">Nữ</option>
            </select>
          </div>

          <button className="search-button" onClick={handleSearch}>
            Tìm kiếm
          </button>
        </div>

        {/* Danh sách khóa học */}
        <div className="courses-content">
          <div className="courses-grid">
            {filteredCourses.map((course) => (
              <div key={course.id} className="course-card">
                <div className="course-image">
                  <img src={course.image || "/placeholder.svg"} alt={course.title} />
                </div>

                <div className="course-info">
                  <div className="teacher-info">
                    <img
                      src={course.teacher.avatar || "/placeholder.svg"}
                      alt={course.teacher.name}
                      className="teacher-avatar" />
                    <div className="teacher-details">
                      <h4 className="teacher-name">{course.teacher.name}</h4>
                      <p className="teacher-level">{course.teacher.level}</p>
                    </div>
                  </div>

                  <h3 className="course-title">{course.title}</h3>
                  <p className="course-price">{course.price}</p>
                  <p className="course-description">{course.description}</p>

                  <div className="course-actions">
                    <button className="register-button" onClick={openModal}>
                      Đăng ký
                    </button>
                    <button
                      className="detail-button"
                      onClick={() => window.location.href = `/course-detail?id=${course.id}`}
                    >
                      Chi tiết
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default CoursesPage
