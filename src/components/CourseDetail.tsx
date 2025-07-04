import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import ImageMagnifier from "../components/ImageMagnifier"
import { getCourseById, type courses } from "../data/Courses"
import "../css/courseDetail.css"
import { Course } from "../types/course";
import bgImage1 from "../assets/images/1.jpg"
import bgImage2 from "../assets/images/2.png"
import image8 from "../assets/images/8.jpg";
import image9 from "../assets/images/9.jpg";
import RegistrationModal from "./Registration-modal";

export default function CourseDetail() {

  
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Function để mở modal
  const openModal = () => {
    setIsModalOpen(true)
  }

  // Function để đóng modal
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const [searchParams] = useSearchParams()
  const courseId = searchParams.get("id")

  const [activeTab, setActiveTab] = useState("course-info")
  const [selectedImage, setSelectedImage] = useState(0)
  const [course, setCourse] = useState<Course | null>(null)

  useEffect(() => {
    if (courseId) {
      const courseData = getCourseById(Number.parseInt(courseId))
      setCourse(courseData || null)
    }
  }, [courseId])

  if (!course) {
    return (
      <div className="course-detail">
        <div className="course-container">
          <div className="loading-state">
            <p>Đang tải thông tin khóa học...</p>
          </div>
        </div>
      </div>
    )
  }

  // Tạo 3 ảnh từ 1 ảnh gốc của course
  const generateImages = (originalImage: string) => {
    return [
      originalImage, // Ảnh gốc
      image8, // Có thể thêm variant
      image9, // Có thể thêm variant khác
    ]
  }

  const images = generateImages(course.image)
  const thumbnails = images

  const renderStars = (rating = 4.8) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? "filled" : ""}`}>
        ★
      </span>
    ))
  }

  // Parse price để lấy số tiền
  const parsePrice = (priceString: string) => {
    const match = priceString.match(/[\d,]+/)
    return match ? match[0].replace(/,/g, "") : "0"
  }

  const getSubjectName = (subject: string) => {
    const subjectMap: { [key: string]: string } = {
      toan: "Toán",
      ly: "Vật lý",
      hoa: "Hóa học",
      sinh: "Sinh học",
      van: "Văn học",
      anh: "Tiếng Anh",
    }
    return subjectMap[subject] || subject
  }

  const getLevelName = (level: string) => {
    const levelMap: { [key: string]: string } = {
      "sinh-vien": "Sinh viên",
      "giao-vien": "Giáo viên",
      "thac-si": "Thạc sĩ",
      "tien-si": "Tiến sĩ",
    }
    return levelMap[level] || level
  }

  const getTutorName = (tutor: string) => {
    const tutorMap: { [key: string]: string } = {
      TH: "Tiểu học",
      THCS: "Trung học cơ sở",
      THPT: "Trung học phổ thông",
    }
    return tutorMap[tutor] || tutor
  }

  return (
    <div className="course-detail">
      <div className="course-container">
        <div className="course-grid">
          {/* Left Side - Images */}
          <div className="image-section">
            <div className="main-image-container">
              <ImageMagnifier
                src={images[selectedImage] || "/placeholder.svg?height=600&width=800"}
                alt={course.title}
                width={600}
                height={400}
                zoomLevel={2.5}
              />
            </div>

            <div className="thumbnail-grid">
              {thumbnails.map((thumb, index) => (
                <div
                  key={index}
                  className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={thumb || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Course Info */}
          <div className="course-info-section">
            <div className="course-header">
              <h1 className="course-title">{course.title}</h1>

              <div className="teacher-info">
                <span className="teacher-label">Giáo viên:</span>
                <span className="teacher-name">{course.teacher.name}</span>
                <span className="teacher-level">({course.teacher.level})</span>
              </div>

              <div className="stats-section">
                <div className="stat-item">
                  <div className="stars">{renderStars(4.8)}</div>
                  <span className="rating-number">4.8</span>
                  <span className="students-count">(245 học viên)</span>
                </div>
              </div>

              <div className="price-section">
                <span className="price">{course.price}</span>
              </div>

              <div className="status-section">
                <p className="status-text">Thông tin khóa học đang được cập nhật</p>
              </div>

              <div className="quick-stats">
                <div className="quick-stat">
                  <span className="icon">📚</span>
                  <span>Lớp {course.grade}</span>
                </div>
                <div className="quick-stat">
                  <span className="icon">🎓</span>
                  <span>{getLevelName(course.level)}</span>
                </div>
                <div className="quick-stat">
                  <span className="icon">📖</span>
                  <span>{getSubjectName(course.subject)}</span>
                </div>
                <div className="quick-stat">
                  <span className="icon">🏫</span>
                  <span>{getTutorName(course.tutor)}</span>
                </div>
              </div>

              <button className="register-btn" onClick={openModal}>Đăng ký thuê gia sư</button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="tabs-section">
          <div className="tabs-list">
            <button
              className={`tab-trigger ${activeTab === "course-info" ? "active" : ""}`}
              onClick={() => setActiveTab("course-info")}
            >
              THÔNG TIN KHÓA HỌC
            </button>
            <button
              className={`tab-trigger ${activeTab === "teacher-info" ? "active" : ""}`}
              onClick={() => setActiveTab("teacher-info")}
            >
              THÔNG TIN GIÁO VIÊN
            </button>
            <button
              className={`tab-trigger ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              ĐÁNH GIÁ CHI TIẾT
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "course-info" && (
              <div className="tab-panel">
                <div className="content-prose">
                  <h3 className="section-title">Thông tin khóa học {course.title}</h3>

                  <div className="course-details-grid">
                    <div className="course-detail-item">
                      <strong>Lớp:</strong> {course.grade}
                    </div>
                    <div className="course-detail-item">
                      <strong>Môn học:</strong> {getSubjectName(course.subject)}
                    </div>
                    <div className="course-detail-item">
                      <strong>Cấp học:</strong> {getTutorName(course.tutor)}
                    </div>
                    <div className="course-detail-item">
                      <strong>Giá:</strong> {course.price}
                    </div>
                  </div>

                  <div className="description-section">
                    <h4 className="subsection-title">Mô tả khóa học:</h4>
                    <p className="description-text">{course.description}</p>
                  </div>


                </div>
              </div>
            )}

            {activeTab === "teacher-info" && (
              <div className="tab-panel">
                <div className="content-prose">
                  <h3 className="section-title">Thông tin về {course.teacher.name}</h3>

                  <div className="teacher-profile">
                    <div className="teacher-avatar-section">
                      <img
                        src={course.teacher.avatar || "/placeholder.svg"}
                        alt={course.teacher.name}
                        className="teacher-detail-avatar"
                      />
                      <div className="teacher-basic-info">
                        <h4>{course.teacher.name}</h4>
                        <p>{course.teacher.level}</p>
                        <p>Chuyên môn: {getSubjectName(course.subject)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}
