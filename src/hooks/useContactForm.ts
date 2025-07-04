// src/hooks/useContactForm.ts
import { useState } from "react"

export function useContactForm() {
  const [formData, setFormData] = useState({
          name: "",
          email: "",
          message: "",
          newsletter: "",
      })
  
      const [isSubmitting, setIsSubmitting] = useState(false)
      const [submitMessage, setSubmitMessage] = useState("")
  
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const { name, value } = e.target
          setFormData((prev) => ({
              ...prev,
              [name]: value,
          }))
      }
  
      const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault()
          setIsSubmitting(true)
  
          // Simulate form submission
          await new Promise((resolve) => setTimeout(resolve, 1000))
  
          setSubmitMessage("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.")
          setFormData({ name: "", email: "", message: "", newsletter: "" })
          setIsSubmitting(false)
  
          setTimeout(() => setSubmitMessage(""), 3000)
      }
  
      const handleNewsletterSubmit = async (e: React.FormEvent) => {
          e.preventDefault()
          if (!formData.newsletter) return
  
          setIsSubmitting(true)
          await new Promise((resolve) => setTimeout(resolve, 1000))
  
          setSubmitMessage("Đã đăng ký nhận tin tức thành công!")
          setFormData((prev) => ({ ...prev, newsletter: "" }))
          setIsSubmitting(false)
  
          setTimeout(() => setSubmitMessage(""), 3000)
      }

  return {
    formData,
    isSubmitting,
    submitMessage,
    handleInputChange,
    handleSubmit,
    handleNewsletterSubmit,
  }
}

