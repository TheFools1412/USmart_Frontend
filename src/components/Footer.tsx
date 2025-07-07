import { Link } from "react-router-dom"
import "../css/footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      {/* Background decorative elements */}
      <div className="footer-bg">
        <div className="footer-circle footer-circle-1"></div>
        <div className="footer-circle footer-circle-2"></div>
        <div className="footer-circle footer-circle-3"></div>
        <div className="footer-circle footer-circle-4"></div>
      </div>

      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h2 className="newsletter-title">Nhập email</h2>
          <p className="newsletter-subtitle">Để nhận tin tức khuyến mãi từ khóa học của chúng tôi</p>

          <div className="newsletter-form">
            <input type="email" placeholder="Nhập email của bạn" className="newsletter-input" />
            <button className="newsletter-button">Gửi ngay</button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Company Info */}
          <div className="company-info">
            <div className="company-header">
              <div className="logo-container">
                <div className="logo-icon">🍎</div>
                <div className="logo-text">
                  <h3 className="company-name">U.Smart</h3>
                  <p className="company-tagline">Gia sư Hà Nội</p>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon contact-icon-location">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <p>Tầng 8 Ladeco, 266 Đội Cấn, Hà Nội</p>
              </div>

              <div className="contact-item">
                <div className="contact-icon contact-icon-phone">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <p>19006750</p>
              </div>

              <div className="contact-item">
                <div className="contact-icon contact-icon-email">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <p>awesome160916@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div className="footer-links">
            <h4 className="footer-links-title">Dịch vụ của chúng tôi</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="#">Trang chủ</Link>
              </li>
              <li>
                <Link to="#">Giới thiệu</Link>
              </li>
              <li>
                <Link to="#">Gia sư</Link>
              </li>
              <li>
                <Link to="#">Tất cả khóa học</Link>
              </li>
              <li>
                <Link to="#">Tin tức</Link>
              </li>
              <li>
                <Link to="#">Liên hệ</Link>
              </li>
            </ul>
          </div>

          {/* About Us Links */}
          <div className="footer-links">
            <h4 className="footer-links-title">Về chúng tôi</h4>
            <ul className="footer-links-list">
              <li>
                <Link to="#">Trang chủ</Link>
              </li>
              <li>
                <Link to="#">Giới thiệu</Link>
              </li>
              <li>
                <Link to="#">Gia sư</Link>
              </li>
              <li>
                <Link to="#">Tất cả khóa học</Link>
              </li>
              <li>
                <Link to="#">Tin tức</Link>
              </li>
              <li>
                <Link to="#">Liên hệ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
