import type React from "react"
import "../css/contact.css"
import { useContactForm } from "../hooks/useContactForm";
import { Link } from "react-router-dom";

export default function ContactPage() {
    const {
        formData,
        isSubmitting,
        submitMessage,
        handleInputChange,
        handleSubmit,
        handleNewsletterSubmit,
    } = useContactForm();

    return (
        <div className="contact-page">

            {/* Breadcrumb */}
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <span className="breadcrumb-item" style={{ cursor: "pointer" }}>
                        <Link to ='/' className="nav-link">Trang chủ</Link>
                    </span>
                    <span className="breadcrumb-separator">›</span>
                    <span className="breadcrumb-item active">Liên hệ</span>
                </div>
            </div>

            <br />

            {/* Google Maps Section */}
            <div className="contact-map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096756919!2d105.8302!3d21.0285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a!2zMjY2IFAuIMSQ4buZaSBD4bqlbiwgTGnhu4V1IEdpYWksIEJhIMSQw6xuaCwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1703123456789!5m2!1svi!2s"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bản đồ U.Smart - 266 P. Đội Cấn, Hà Nội"
                ></iframe>
            </div>

            {/* Contact Content Section */}
            <div className="contact-content">
                <div className="contact-container">
                    {/* Left Side - Contact Form */}
                    <div className="contact-form-section">
                        <h2 className="contact-title">LIÊN HỆ VỚI CHÚNG TÔI:</h2>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Họ và tên:*</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Nhập họ và tên của bạn"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email:*</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Nhập địa chỉ email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Nội dung:*</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={6}
                                    placeholder="Nhập nội dung tin nhắn..."
                                ></textarea>
                            </div>

                            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? "Đang gửi..." : "Gửi liên hệ"}
                            </button>

                            {submitMessage && <div className="submit-message">{submitMessage}</div>}
                        </form>
                    </div>

                    {/* Right Side - Company Info */}
                    <div className="company-info-section">
                        <div className="company-logo">
                            <div className="logo-icon">
                                <div className="apple-icon">🍎</div>
                                <div className="books-icon">📚</div>
                            </div>
                            <div className="logo-text">
                                <span className="logo-main">U.Smart</span>
                                <span className="logo-sub">Gia sư Hà Nội</span>
                            </div>
                        </div>

                        <div className="company-description">
                            <p>
                                U.Smart là một trong những tổ chức giáo dục uy tín hàng đầu tại Việt Nam với hơn 20 trung tâm trên toàn
                                quốc cùng với chất lượng đào tạo chuyên nghiệp...
                            </p>
                        </div>

                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-icon location-icon">📍</div>
                                <span>Tầng 8 Ladeco, 266 Đội Cấn, Hà Nội</span>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon phone-icon">📞</div>
                                <span>19006750</span>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon email-icon">✉️</div>
                                <span>awesome160916@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
