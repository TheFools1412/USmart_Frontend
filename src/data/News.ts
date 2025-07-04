import type { NewsArticle, NewsCategory } from "../types/new"
import Image1 from '../assets/images/1.jpg';
import Image2 from '../assets/images/2.png';
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";
import image8 from "../assets/images/8.jpg";
import image9 from "../assets/images/9.jpg";

export const newsCategories: NewsCategory[] = [
  { id: 1, name: "Trang chủ", slug: "trang-chu", count: 0 },
  { id: 2, name: "Giới thiệu", slug: "gioi-thieu", count: 5 },
  { id: 3, name: "Gia sư", slug: "gia-su", count: 12 },
  { id: 4, name: "Tất cả khóa học", slug: "tat-ca-khoa-hoc", count: 8 },
  { id: 5, name: "Tin tức", slug: "tin-tuc", count: 15 },
  { id: 6, name: "Liên hệ", slug: "lien-he", count: 0 },
]

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Tại sao bạn cần tìm gia sư tiểu học cho con?",
    slug: "tai-sao-ban-can-tim-gia-su-tieu-hoc-cho-con",
    excerpt:
      "Làm bác cha mẹ thì ai cũng đều mong muốn con cái mình học giỏi, nhưng công việc cơ quan, việc bên ngoài xã hội kiến cho ban có ít thời gian...",
    content: `
      <p>Làm bác cha mẹ thì ai cũng đều mong muốn con cái mình học giỏi, nhưng công việc cơ quan, việc bên ngoài xã hội kiến cho ban có ít thời gian để dạy con học tập.</p>
      
      <p>Việc tìm một gia sư giỏi cho con em mình học là điều rất cần thiết trong thời đại ngày nay. Đặc biệt là với các em học sinh tiểu học, việc có một người hướng dẫn tận tình sẽ giúp các em:</p>
      
      <ul>
        <li>Xây dựng nền tảng kiến thức vững chắc từ sớm</li>
        <li>Phát triển thói quen học tập tốt</li>
        <li>Được quan tâm và hỗ trợ cá nhân hóa</li>
        <li>Tăng cường sự tự tin trong học tập</li>
      </ul>
      
      <p>Gia sư không chỉ giúp con bạn học tốt hơn mà còn là người bạn đồng hành trong quá trình phát triển của trẻ.</p>
    `,
    author: "Hoàng Ngọc Anh",
    publishDate: "26/09/2019",
    readTime: "5 phút đọc",
    commentCount: 0,
    category: "Gia sư",
    tags: ["gia sư tiểu học", "giáo dục", "học tập"],
    featuredImage: image9,
    isFeatured: true,
    views: 1250,
  },
  {
    id: 2,
    title: "Phương pháp giải toán tại nhà",
    slug: "phuong-phap-giai-toan-tai-nha",
    excerpt:
      "Làm thế nào để học giỏi Toán - đây có lẽ là điều mà rất nhiều các bạn học sinh, sinh viên quan tâm. Nhiều người cho rằng Toán là môn học khó 'nhằn'...",
    content: `
      <p>Làm thế nào để học giỏi Toán - đây có lẽ là điều mà rất nhiều các bạn học sinh, sinh viên quan tâm. Nhiều người cho rằng Toán là môn học khó "nhằn".</p>
      
      <h3>1. Nắm vững kiến thức cơ bản</h3>
      <p>Trước khi giải các bài toán phức tạp, học sinh cần nắm chắc các công thức và định lý cơ bản.</p>
      
      <h3>2. Luyện tập thường xuyên</h3>
      <p>Toán học đòi hỏi sự luyện tập liên tục. Mỗi ngày nên dành ít nhất 30 phút để làm bài tập.</p>
      
      <h3>3. Tìm hiểu nhiều cách giải</h3>
      <p>Một bài toán có thể có nhiều cách giải khác nhau. Việc tìm hiểu nhiều phương pháp sẽ giúp tư duy linh hoạt hơn.</p>
    `,
    author: "Hoàng Ngọc Anh",
    publishDate: "26/09/2019",
    readTime: "7 phút đọc",
    commentCount: 0,
    category: "Phương pháp học",
    tags: ["toán học", "phương pháp", "học tập"],
    featuredImage: image7,
    isFeatured: true,
    views: 980,
  },
  {
    id: 3,
    title: "Tiêu chuẩn gia sư giỏi tại nhà",
    slug: "tieu-chuan-gia-su-gioi-tai-nha",
    excerpt:
      "1. Gia sư có nhiều kiến thức sâu rộng, am hiểu: Gia sư phải là người nắm chắc kiến thức, hướng dẫn giảng dạy cho các em học sinh những bài học ng...",
    content: `
      <h3>1. Gia sư có nhiều kiến thức sâu rộng, am hiểu</h3>
      <p>Gia sư phải là người nắm chắc kiến thức, hướng dẫn giảng dạy cho các em học sinh những bài học nghiêm túc và chính xác nhất.</p>
      
      <h3>2. Có phương pháp giảng dạy phù hợp</h3>
      <p>Mỗi học sinh có đặc điểm riêng, gia sư giỏi phải biết cách điều chỉnh phương pháp cho phù hợp với từng em.</p>
      
      <h3>3. Kiên nhẫn và tận tâm</h3>
      <p>Gia sư cần có sự kiên nhẫn để hướng dẫn học sinh, đặc biệt với những em chậm tiếp thu.</p>
      
      <h3>4. Có kinh nghiệm giảng dạy</h3>
      <p>Kinh nghiệm thực tế trong giảng dạy sẽ giúp gia sư xử lý tốt các tình huống phát sinh.</p>
    `,
    author: "Hoàng Ngọc Anh",
    publishDate: "26/09/2019",
    readTime: "6 phút đọc",
    commentCount: 0,
    category: "Gia sư",
    tags: ["gia sư", "tiêu chuẩn", "chất lượng"],
    featuredImage: image6,
    isFeatured: true,
    views: 756,
  },
  {
    id: 4,
    title: "Khi nào cho con nên đi học gia sư tại nhà",
    slug: "khi-nao-cho-con-nen-di-hoc-gia-su-tai-nha",
    excerpt:
      "Gia sư tại nhà là một trong những lựa chọn khá phổ biến hiện nay của các bậc phụ huynh, đặc biệt đối với các phụ huynh có con học chưa tốt...",
    content: `
      <p>Gia sư tại nhà là một trong những lựa chọn khá phổ biến hiện nay của các bậc phụ huynh, đặc biệt đối với các phụ huynh có con học chưa tốt, học còn yếu một số môn nhất định.</p>
      
      <h3>Các trường hợp nên cho con học gia sư:</h3>
      
      <h4>1. Con có điểm số thấp ở một số môn</h4>
      <p>Khi con bạn gặp khó khăn với một số môn học cụ thể và điểm số liên tục thấp.</p>
      
      <h4>2. Con thiếu tự tin trong học tập</h4>
      <p>Nếu con bạn ngại phát biểu, không dám hỏi bài trong lớp thì gia sư sẽ giúp tạo môi trường học tập thoải mái.</p>
      
      <h4>3. Chuẩn bị cho kỳ thi quan trọng</h4>
      <p>Trước các kỳ thi lớn như thi vào lớp 10, thi đại học, gia sư sẽ giúp con ôn tập hiệu quả.</p>
    `,
    author: "Hoàng Ngọc Anh",
    publishDate: "26/09/2019",
    readTime: "4 phút đọc",
    commentCount: 0,
    category: "Gia sư",
    tags: ["gia sư tại nhà", "giáo dục", "phụ huynh"],
    featuredImage: image6,
    isFeatured: false,
    views: 642,
  },
  {
    id: 5,
    title: "Lợi ích của việc học nhóm với gia sư",
    slug: "loi-ich-cua-viec-hoc-nhom-voi-gia-su",
    excerpt:
      "Học nhóm với gia sư đang trở thành xu hướng được nhiều phụ huynh lựa chọn bởi những lợi ích thiết thực mà nó mang lại...",
    content: `
      <p>Học nhóm với gia sư đang trở thành xu hướng được nhiều phụ huynh lựa chọn bởi những lợi ích thiết thực mà nó mang lại.</p>
      
      <h3>Những lợi ích nổi bật:</h3>
      
      <h4>1. Tiết kiệm chi phí</h4>
      <p>Chi phí gia sư được chia đều cho các thành viên trong nhóm, giúp giảm gánh nặng tài chính cho gia đình.</p>
      
      <h4>2. Tạo động lực học tập</h4>
      <p>Học cùng bạn bè sẽ tạo ra sự cạnh tranh tích cực, thúc đẩy tinh thần học tập.</p>
      
      <h4>3. Phát triển kỹ năng xã hội</h4>
      <p>Trẻ học cách làm việc nhóm, thảo luận và chia sẻ kiến thức với bạn bè.</p>
    `,
    author: "Minh Tuấn",
    publishDate: "25/09/2019",
    readTime: "5 phút đọc",
    commentCount: 2,
    category: "Phương pháp học",
    tags: ["học nhóm", "gia sư", "tiết kiệm"],
    featuredImage: image7,
    isFeatured: false,
    views: 523,
  },
  {
    id: 6,
    title: "Cách chọn gia sư phù hợp với con bạn",
    slug: "cach-chon-gia-su-phu-hop-voi-con-ban",
    excerpt:
      "Việc lựa chọn gia sư phù hợp là yếu tố quyết định đến hiệu quả học tập của con bạn. Dưới đây là những tiêu chí cần lưu ý...",
    content: `
      <p>Việc lựa chọn gia sư phù hợp là yếu tố quyết định đến hiệu quả học tập của con bạn. Dưới đây là những tiêu chí cần lưu ý.</p>
      
      <h3>Các tiêu chí lựa chọn gia sư:</h3>
      
      <h4>1. Trình độ chuyên môn</h4>
      <p>Gia sư cần có kiến thức vững vàng về môn học và cấp độ mà con bạn đang học.</p>
      
      <h4>2. Kinh nghiệm giảng dạy</h4>
      <p>Ưu tiên những gia sư đã có kinh nghiệm giảng dạy, đặc biệt với độ tuổi tương tự con bạn.</p>
      
      <h4>3. Tính cách phù hợp</h4>
      <p>Gia sư cần có tính cách phù hợp với con bạn để tạo ra môi trường học tập thoải mái.</p>
    `,
    author: "Thu Hà",
    publishDate: "24/09/2019",
    readTime: "6 phút đọc",
    commentCount: 1,
    category: "Gia sư",
    tags: ["chọn gia sư", "tiêu chí", "phù hợp"],
    featuredImage: image8,
    isFeatured: false,
    views: 789,
  },
]

// Helper functions
export function getAllNews(): NewsArticle[] {
  return newsArticles
}

export function getFeaturedNews(): NewsArticle[] {
  return newsArticles.filter((article) => article.isFeatured)
}

export function getNewsByCategory(category: string): NewsArticle[] {
  return newsArticles.filter((article) => article.category === category)
}

export function getNewsById(id: number): NewsArticle | undefined {
  return newsArticles.find((article) => article.id === id)
}

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((article) => article.slug === slug)
}

export function getRecentNews(limit = 5): NewsArticle[] {
  return newsArticles
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit)
}
