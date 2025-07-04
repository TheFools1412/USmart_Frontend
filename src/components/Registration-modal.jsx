import { useState } from "react"
import "../css/registration-modal.css"


export default function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    gender: "Nam",
    fullName: "",
    phoneNumber: "",
    address: "",
    notes: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Xử lý submit form ở đây
    console.log("Form data:", formData)
    alert("Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Modal Header */}
        <div className="modal-header">
          <h2 className="modal-title">Đăng ký thuê gia sư</h2>
          <p className="modal-description">
            Sau khi bạn đăng ký, chúng tôi sẽ gọi lại cho bạn để trao đổi thêm những thông tin cần thiết khác. Tất cả
            thông tin của bạn sẽ được bảo mật.
          </p>
        </div>

        {/* Registration Form */}
        <form className="registration-form" onSubmit={handleSubmit}>
          {/* Gender Selection */}
          <div className="form-group gender-group">
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Nam"
                  checked={formData.gender === "Nam"}
                  onChange={handleInputChange}
                />
                <span className="radio-custom"></span>
                Nam
              </label>
              <label className="radio-label">
                <input
                  type="radio"
                  name="gender"
                  value="Nữ"
                  checked={formData.gender === "Nữ"}
                  onChange={handleInputChange}
                />
                <span className="radio-custom"></span>
                Nữ
              </label>
            </div>
          </div>

          {/* Form Fields */}
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Họ và tên"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Số điện thoại"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="address"
              placeholder="Số nhà, tên đường"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="notes"
              placeholder="Ghi chú"
              rows="4"
              value={formData.notes}
              onChange={handleInputChange}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Đăng ký thuê gia sư ngay
          </button>
        </form>
      </div>
    </div>
  )
}
