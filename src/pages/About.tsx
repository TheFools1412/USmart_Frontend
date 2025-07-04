import '../css/about.css';

export default function About() {
    return (
        <div className="about-page">
            {/* Breadcrumb */}
            <div className="breadcrumb-container">
                <div className="breadcrumb">
                    <span className="breadcrumb-item" style={{ cursor: "pointer" }}>
                        <a href='/' className="nav-link">Trang chủ</a>
                    </span>
                    <span className="breadcrumb-separator">›</span>
                    <span className="breadcrumb-item active">Giới thiệu</span>
                </div>
            </div>

            {/* Main Content */}
            <div className="about-content">
                <h1 className="about-title">Giới thiệu</h1>

                <div className="about-text">
                    <p>Trung tâm gia sư U.Smart: Được thành lập năm 2005, với hơn 12 năm kinh nghiệm trong lĩnh vực cung cấp gia sư sư phạm hàng đầu tại Hà Nội, chúng tôi cam kết dịch vụ gia sư dạy kèm tại nhà uy tín nhất Hà Nội.</p>

                    <p>Đội ngũ gia sư của chúng tôi bao gồm:</p>

                    <p>+ Đội ngũ hơn 100 giáo viên giỏi đang công tác tại các trường uy tín tại Hà Nội như: Trường tiểu học Tân Mai, Kim Đồng, Kim Liên, Minh Khai, Nam Trung Yên, Trung Hòa, Đoàn Thị Điểm...</p>

                    <p>+ Đội ngũ hơn 1000 sinh viên có trình độ sư phạm xuất sắc đến từ các trường ĐH tốp đầu Hà Nội: Đại Học Sư Phạm Hà Nội, Đại Học Giáo Dục – Đại Học Quốc Gia Hà Nội, Đại Học Ngoại Thương Hà Nội, Đại học Kinh Tế Quốc Dân Hà Nội, Đại Học Y Hà Nội, Đại Học Dược Hà Nội, Đại Học Bách Khoa Hà Nội... được trung tâm tuyển chọn kỹ càng, đào tạo trình độ sư phạm liên tục hàng tháng.</p>

                    <p>Chúng tôi cam kết đội ngũ giáo viên và gia sư đều có kinh nghiệm dạy học từ 2 năm trở đi nhằm đảm bảo chất lượng dạy học tốt nhất đến với mỗi gia đình.</p>

                    <p>Chính sách ưu việt nhất chỉ có ở Trung Tâm Gia Sư U.Smart:</p>

                    <p>+ Tìm gia sư Miễn Phí: tư vấn tìm gia sư miễn phí phù hợp với tính cách học sinh và yêu cầu gia đình.</p>

                    <p>+ Học thử 3 buổi Miễn Phí: nhằm đảm bảo chất lượng gia sư tốt nhất phù hợp nhất với mỗi học sinh.</p>

                    <p>+ Đổi ngay gia sư nếu gia đình không hài lòng: Gia sư có kinh nghiệm sư phạm nhưng phương pháp dạy chưa phù hợp với con bạn.</p>

                    <p>+ Học phí giá rẻ: mức học phí phù hợp với từng gia đình học sinh. Quý phụ huynh hoàn toàn yên tâm về mức học phí từ trung tâm.</p>

                    <p>+ Gia sư có hồ sơ rõ ràng: thẻ sinh viên, thẻ giáo viên, bằng tốt nghiệp, CMND, giấy giới thiệu từ trung tâm, chứng chỉ sư phạm.</p>

                    <p>Trung tâm gia sư U.Smart xin gửi lời cảm ơn chân thành nhất dành cho các bậc phụ huynh và giáo viên đã dành cho trung tâm một sự tín nhiệm tuyệt đối để trung tâm có thể là cầu nối giữa gia sư và phụ huynh để từ đó góp phần giúp các em học sinh có được một nền tảng vững chắc và hành trang bước vào đời.</p>

                    <p>Chúng tôi luôn cố gắng trở thành trung tâm gia sư chất lượng hàng đầu tại Hà Nội để cung cấp dịch vụ gia sư tốt nhất tới cộng đồng: "Sự tiến bộ của các em là niềm tự hào của trung tâm".</p>

                    <p>Trong quá trình học nếu có vấn đề gì chưa hài lòng, quý phụ huynh có thể thông báo ngay cho chúng tôi để trung tâm có thể đưa ra những điều chỉnh kịp thời nhằm nâng cao chất lượng phục vụ và đảm bảo quyền lợi cho gia đình.</p>
                </div>
            </div>
        </div>
    )
}
