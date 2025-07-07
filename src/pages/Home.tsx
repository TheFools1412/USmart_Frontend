import { useState } from "react"
import '../css/home.css';
import bgImage1 from '../assets/images/1.jpg';
import image3 from "../assets/images/3.png";
import avatar1 from '../assets/images/avatar1.jpg';
import avatar2 from '../assets/images/avatar2.jpg';
import avatar3 from '../assets/images/avatar3.jpg';
import avatar4 from '../assets/images/avatar4.jpg';
import RegistrationModal from "../components/Registration-modal.jsx"
import { useNavigate } from "react-router-dom"
import { courses } from "../data/Courses.js"
import { Link } from "react-router-dom";

export default function Home() {

    const navigate = useNavigate()

    const [transitionDirection, setTransitionDirection] = useState("");


    // State để track hình ảnh hiện tại
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

   

    // State để control modal
    const [isModalOpen, setIsModalOpen] = useState(false)

    // Function để mở modal
    const openModal = () => {
        setIsModalOpen(true)
    }

    // Function để đóng modal
    const closeModal = () => {
        setIsModalOpen(false)
    }

    const featuredCourses = courses.slice(0, 3);

    const handleViewAllCourses = () => {
        navigate("/courses")
    }

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <>
            {/* Hero Section */}
            <div
                className={`hero-section ${transitionDirection}`}
                style={{
                    backgroundImage: `url(${bgImage1})`,
                }}
                onAnimationEnd={() => setTransitionDirection("")} // reset sau hiệu ứng
            >
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">TÌM GIA SƯ GIỎI</h1>
                    <p className="hero-subtitle">Nơi bạn hài lòng về chất lượng gia sư</p>
                </div>

                

                {/* Service Cards */}
                <div className="card-scroll-wrapper">
                    <div className="service-cards-container">
                         {/* Card 1 - Teal */}
                    <div className="service-card service-card-teal">
                        <div className="card-background-circles">
                            <div className="circle circle-1"></div>
                            <div className="circle circle-2"></div>
                            <div className="circle circle-3"></div>
                        </div>

                        <div className="card-content">
                            <div className="card-icon">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    <path d="M9 12h6l-3 9z" />
                                </svg>
                            </div>

                            <h3 className="card-title">Đội ngũ 100% gia sư giỏi!</h3>

                            <p className="card-description">
                                Đội ngũ gia sư tại bao gồm những sinh viên giỏi có trình độ Đại học và các giáo viên đã có nhiều năm kinh
                                nghiệm giảng dạy.
                            </p>

                            <button className="card-button" onClick={openModal}>Đăng ký thuê gia sư ngay</button>
                        </div>
                    </div>

                    {/* Card 2 - Blue */}
                    <div className="service-card service-card-blue">
                        <div className="card-background-circles">
                            <div className="circle circle-1"></div>
                            <div className="circle circle-2"></div>
                            <div className="circle circle-3"></div>
                        </div>

                        <div className="card-content">
                            <div className="card-icon">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77" />
                                    <path d="M8 12l2 2 4-4" />
                                </svg>
                            </div>

                            <h3 className="card-title">Dịch vụ gia sư chất lượng</h3>

                            <p className="card-description">
                                Gia sư các môn từ lớp 1 đến lớp 12, luyện thi tốt nghiệp và Đại học. Dạy kèm thực tế cơ bản đến nâng cao
                                kiến thức góc.
                            </p>

                            <button className="card-button" onClick={openModal}>Đăng ký thuê gia sư ngay</button>
                        </div>
                    </div>

                    {/* Card 3 - Orange */}
                    <div className="service-card service-card-orange">
                        <div className="card-background-circles">
                            <div className="circle circle-1"></div>
                            <div className="circle circle-2"></div>
                            <div className="circle circle-3"></div>
                        </div>

                        <div className="card-content">
                            <div className="card-icon">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M8 12h8" />
                                </svg>
                            </div>

                            <h3 className="card-title">Chi phí tiết kiệm tối ưu nhất</h3>

                            <p className="card-description">
                                Chúng tôi luôn có những chương trình ưu đãi và khuyến mãi hấp dẫn nhất và nâng cao chất lượng giảng dạy.
                            </p>

                            <button className="card-button" onClick={openModal}>Đăng ký thuê gia sư ngay</button>
                        </div>
                    </div>
                    </div>
                </div>

            </div>

            <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            {/* Benefits Section - Đơn giản */}
            <div className="benefits-section-simple">
                <div className="benefits-container-simple">
                    {/* Bên trái - Text */}
                    <div className="benefits-text">
                        <h2>Lợi ích mà bạn có khi đến với chúng tôi</h2>
                        <ul>
                            <li>Không phải mất công đi lại, gia sư đến dạy</li>
                            <li>Biết được tình trạng học tập của con</li>
                            <li>Con được học 1-1, tạo nên chất lượng giảng dạy</li>
                            <li>Dễ dàng quản lý thời gian học tập của con</li>
                            <li>Việc học tập của con được đảm bảo chất lượng</li>
                            <li>Không còn lo lắng đối mặt với thi cử</li>
                        </ul>
                        <button onClick={openModal}>Đăng ký thuê gia sư ngay</button>
                    </div>

                    {/* Bên phải - Hình */}
                    <div className="benefits-image">
                        <img src={image3 || "/placeholder.svg"} alt="Student studying" />
                    </div>
                </div>
            </div>


            {/* Featured Courses Section */}
            <section className="home-featured-courses-section">
                <div className="home-container">
                    <div className="home-section-header">
                        <h2 className="home-section-title" onClick={handleViewAllCourses}>
                            Khóa học nổi bật
                        </h2>
                        <p className="home-section-subtitle">
                            Hãy xem những người khác nói gì trong các đánh giá khách hàng của chúng tôi
                        </p>
                    </div>

                    <div className="home-courses-row">
                        {featuredCourses.map((course) => (
                            <div key={course.id} className="home-course-card">
                                <div className="home-course-image">
                                    <img src={course.image || "/placeholder.svg?height=200&width=350"} alt={course.title} />
                                </div>

                                <div className="home-course-content">
                                    <div className="home-teacher-info">
                                        <img
                                            src={course.teacher.avatar || "/placeholder.svg?height=45&width=45"}
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
                                    <p className="home-course-description">{course.description}</p>

                                    <div className="home-course-actions">
                                        <button className="home-register-btn" onClick={(openModal)}>
                                            Đăng ký
                                        </button>
                                        <button className="home-details-btn" onClick={() => window.location.href = `/USmart_Frontend/course-detail?id=${course.id}`}>
                                            Chi tiết
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="home-view-all-section">
                        <button className="home-view-all-btn" onClick={handleViewAllCourses}>
                            Xem tất cả khóa học
                        </button>
                    </div>
                </div>
                <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
            </section>

            {/* Testimonials Section */}
            <section className="home-testimonials-section">
                <div className="home-testimonials-container">
                    <div className="home-testimonials-left">
                        <h2 className="home-testimonials-title">Phụ huynh đã nói gì về U.Smart</h2>
                        <p className="home-testimonials-subtitle">
                            Hãy xem những người khác nói gì trong các đánh giá khách hàng của chúng tôi
                        </p>
                        <button className="home-testimonials-cta" onClick={openModal}>
                            Đăng ký khóa học ngay
                        </button>
                    </div>

                    <div className="home-testimonials-dots">
                        <span
                            className={`dot ${currentSlide === 0 ? "active" : ""}`}
                            onClick={() => setCurrentSlide(0)}
                        ></span>
                        <span
                            className={`dot ${currentSlide === 1 ? "active" : ""}`}
                            onClick={() => setCurrentSlide(1)}
                        ></span>
                    </div>

                    <div className="home-testimonials-right">

                        {currentSlide === 0 && (
                            <>

                                <div className="home-testimonial-card">
                                    <div className="home-testimonial-quote">"</div>
                                    <p className="home-testimonial-text">
                                        Mọi thông tin mà tôi cần biết đều có trong hồ sơ của gia sư. Điều này mình chúng rõ ràng.
                                    </p>
                                    <div className="home-testimonial-author">
                                        <img
                                            src={avatar1}
                                            alt="Mai Thúy"
                                            className="home-testimonial-avatar"
                                        />
                                        <span className="home-testimonial-name">Mr: Mai Thúy</span>
                                    </div>
                                </div>

                                <div className="home-testimonial-card">
                                    <div className="home-testimonial-quote">"</div>
                                    <p className="home-testimonial-text">
                                        Mọi thông tin mà tôi cần biết đều có trong hồ sơ của gia sư. Điều này mình chúng rõ ràng.
                                    </p>
                                    <div className="home-testimonial-author">
                                        <img
                                            src={avatar2}
                                            alt="Ngô Tôn"
                                            className="home-testimonial-avatar"
                                        />
                                        <span className="home-testimonial-name">Mr: Ngô Tôn</span>
                                    </div>
                                </div>

                            </>
                        )}

                        {currentSlide === 1 && (
                            <>

                                <div className="home-testimonial-card">
                                    <div className="home-testimonial-quote">"</div>
                                    <p className="home-testimonial-text">
                                        Mọi thông tin mà tôi cần biết đều có trong hồ sơ của gia sư. Điều này mình chúng rõ ràng.
                                    </p>
                                    <div className="home-testimonial-author">
                                        <img
                                            src={avatar3}
                                            alt="Ngô Minh"
                                            className="home-testimonial-avatar"
                                        />
                                        <span className="home-testimonial-name">Mr: Ngô Minh</span>
                                    </div>
                                </div>

                                <div className="home-testimonial-card">
                                    <div className="home-testimonial-quote">"</div>
                                    <p className="home-testimonial-text">
                                        Mọi thông tin mà tôi cần biết đều có trong hồ sơ của gia sư. Điều này mình chúng rõ ràng.
                                    </p>
                                    <div className="home-testimonial-author">
                                        <img
                                            src={avatar4}
                                            alt="Doanh Chính"
                                            className="home-testimonial-avatar"
                                        />
                                        <span className="home-testimonial-name">Mr: Doanh Chính</span>
                                    </div>
                                </div>
                            </>
                        )}

                    </div>

                </div>
            </section>
        </>
    );
}
