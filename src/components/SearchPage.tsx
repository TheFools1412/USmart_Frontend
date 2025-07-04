import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { courses } from "../data/Courses";
import type { Course } from "../types/course";
import "../css/home.css"; // dùng lại CSS từ Home
import RegistrationModal from "./Registration-modal";

function removeDiacritics(str: string): string {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

export default function SearchCoursesPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search")?.toLowerCase() || "";

  const [input, setInput] = useState(searchTerm);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false)

  // Function để mở modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  // Function để đóng modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    const normalizedSearch = removeDiacritics(searchTerm);
    const results = courses.filter((course) =>
      removeDiacritics(course.title.toLowerCase()).includes(normalizedSearch)
    );
    setFilteredCourses(results);
  }, [searchTerm]);

  const handleSearch = () => {
    navigate(`/search?search=${encodeURIComponent(input.trim())}`);
  };

  return (
    <section className="home-featured-courses-section">
      <div className="home-container">
        <div className="home-section-header">
          <h2 className="home-section-title">Kết quả tìm kiếm</h2>
          <p className="home-section-subtitle">
            Có {filteredCourses.length} khóa học phù hợp với từ khóa: "{searchTerm}"
          </p>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Nhập từ khóa..."
              style={{
                flex: 1,
                padding: "12px 16px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "8px",
              }}
            />
            <button
              onClick={handleSearch}
              style={{
                padding: "12px 24px",
                backgroundColor: "#4f7cff",
                color: "white",
                border: "none",
                borderRadius: "8px",
                fontWeight: 600,
              }}
            >
              Tìm kiếm
            </button>
          </div>
        </div>

        <div className="home-courses-row">
          {filteredCourses.map((course) => (
            <div key={course.id} className="home-course-card">
              <div className="home-course-image">
                <img src={course.image} alt={course.title} />
              </div>

              <div className="home-course-content">
                <div className="home-teacher-info">
                  <img
                    src={course.teacher.avatar}
                    alt={course.teacher.name}
                    className="home-teacher-avatar"
                  />
                  <div className="home-teacher-details">
                    <h4 className="home-teacher-name">{course.teacher.name}</h4>
                    <p className="home-teacher-level">{course.teacher.level}</p>
                  </div>
                </div>

                <h3 className="home-course-title">{course.title}</h3>
                <p className="home-course-price">{course.price}</p>
                <p className="home-course-description">
                  {course.description.slice(0, 80)}...
                </p>

                <div className="home-course-actions">
                  <button className="home-register-btn" onClick={openModal}>Đăng ký</button>
                  <button
                    className="home-details-btn"
                    onClick={() =>
                      window.location.href = `/course-detail?id=${course.id}`
                    }
                  >
                    Chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
}
