import type React from "react"
import { useState } from "react"
import "../css/tutor-registration-modal.css"

interface TutorRegistrationModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TutorRegistrationModal({ isOpen, onClose }: TutorRegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    // Validate full name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Vui lòng nhập họ và tên"
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Họ và tên phải có ít nhất 2 ký tự"
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập địa chỉ email"
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Địa chỉ email không hợp lệ"
    }

    // Validate phone
    const phoneRegex = /^[0-9]{10,11}$/
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại"
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ (10-11 số)"
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Vui lòng nhập mật khẩu"
    } else if (formData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự"
    }

    // Validate confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Vui lòng xác nhận mật khẩu"
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setSubmitMessage("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.")
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      })

      // Auto close modal after success
      setTimeout(() => {
        onClose()
        setSubmitMessage("")
      }, 2000)
    } catch (error) {
      setSubmitMessage("Có lỗi xảy ra. Vui lòng thử lại!")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="tutor-modal-overlay" onClick={handleOverlayClick}>
      <div className="tutor-modal-container">
        <div className="tutor-modal-header">
          <h2 className="tutor-modal-title">Đăng ký làm gia sư</h2>
          <button className="tutor-modal-close" onClick={onClose} aria-label="Đóng">
            ×
          </button>
        </div>

        <div className="tutor-modal-body">
          <p className="tutor-modal-description">
            Tạo tài khoản, cập nhật đầy đủ thông tin, và bạn sẽ nhận được tin nhắn thông báo mới khi có lớp phù hợp.
          </p>

          <form onSubmit={handleSubmit} className="tutor-registration-form">
            <div className="tutor-form-row">
              <div className="tutor-form-group">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Nhập họ tên của bạn"
                  className={`tutor-form-input ${errors.fullName ? "error" : ""}`}
                />
                {errors.fullName && <span className="tutor-error-message">{errors.fullName}</span>}
              </div>

              <div className="tutor-form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Địa chỉ email"
                  className={`tutor-form-input ${errors.email ? "error" : ""}`}
                />
                {errors.email && <span className="tutor-error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="tutor-form-row">
              <div className="tutor-form-group">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Số điện thoại"
                  className={`tutor-form-input ${errors.phone ? "error" : ""}`}
                />
                {errors.phone && <span className="tutor-error-message">{errors.phone}</span>}
              </div>

              <div className="tutor-form-group">
                <div className="tutor-password-container">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Mật khẩu"
                    className={`tutor-form-input ${errors.password ? "error" : ""}`}
                  />
                  <button
                    type="button"
                    className="tutor-password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                  >
                    {showPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
                {errors.password && <span className="tutor-error-message">{errors.password}</span>}
              </div>
            </div>

            <div className="tutor-form-row">
              <div className="tutor-form-group tutor-form-group-full">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Xác nhận mật khẩu"
                  className={`tutor-form-input ${errors.confirmPassword ? "error" : ""}`}
                />
                {errors.confirmPassword && <span className="tutor-error-message">{errors.confirmPassword}</span>}
              </div>
            </div>

            <div className="tutor-security-notice">
              <div className="tutor-security-icon">🔒</div>
              <p>Mật khẩu của bạn được mã hóa. Ngoài trừ bạn, không ai có thể biết được mật khẩu của bạn.</p>
            </div>

            <button type="submit" className="tutor-submit-btn" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <span className="tutor-loading-spinner"></span>
                  Đang xử lý...
                </>
              ) : (
                "Đăng ký làm gia sư ngay"
              )}
            </button>

            {submitMessage && (
              <div className={`tutor-submit-message ${submitMessage.includes("thành công") ? "success" : "error"}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
