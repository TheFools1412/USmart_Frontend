import type { Course } from "../types/course.ts"
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";
import image8 from "../assets/images/8.jpg";
import image9 from "../assets/images/9.jpg";
import avatar1 from '../assets/images/avatar1.jpg';
import avatar2 from '../assets/images/avatar2.jpg';
import avatar3 from '../assets/images/avatar3.jpg';
import avatar4 from '../assets/images/avatar4.jpg';

export const courses: Course[] = [
  {
    id: 1,
    title: "Vật lý lớp 8",
    price: "200.000đ/buổi",
    description: "Trung tâm U.Smart cung cấp đội ngũ gia sư phạm hàng đầu tại Hà Nội. Đội n...",
    teacher: {
      name: "Nguyễn Tuấn Minh",
      level: "Giáo viên cấp 3",
      avatar: avatar1,
    },
    grade: "8",
    level: "giao vien",
    subject: "ly",
    tutor: "THCS",
    gender: "nam",
    image: image3,
  },
  {
    id: 2,
    title: "Sinh học lớp 3",
    price: "400.000đ/buổi",
    description: "Trung tâm U.Smart cung cấp đội ngũ gia sư phạm hàng đầu tại Hà Nội. Đội n...",
    teacher: {
      name: "Nguyễn Văn Tuấn",
      level: "Sinh viên năm 1",
      avatar: avatar2,
    },
    grade: "3",
    level: "sinh vien",
    subject: "sinh",
    tutor: "TH",
    gender: "nam",
    image: image4,
  },
  {
    id: 3,
    title: "Toán lớp 12",
    price: "350.000đ/buổi",
    description: "Trung tâm U.Smart cung cấp đội ngũ gia sư phạm hàng đầu tại Hà Nội. Đội n...",
    teacher: {
      name: "Trần Thị Lan",
      level: "Giáo viên cấp 3",
      avatar: avatar3,
    },
    grade: "12",
    level: "giao vien",
    subject: "toan",
    tutor: "THPT",
    gender: "nu",
    image: image5,
  },
  {
    id: 4,
    title: "Hóa học lớp 9",
    price: "300.000đ/buổi",
    description: "Trung tâm U.Smart cung cấp đội ngũ gia sư phạm hàng đầu tại Hà Nội. Đội n...",
    teacher: {
      name: "Lê Văn Nam",
      level: "Sinh viên năm 3",
      avatar: avatar4,
    },
    grade: "9",
    level: "sinh vien",
    subject: "hoa",
    tutor: "THCS",
    gender: "nam",
    image: image6,
  },
  {
    id: 5,
    title: "Tiếng Anh lớp 1",
    price: "250.000đ/buổi",
    description: "Trung tâm U.Smart cung cấp đội ngũ gia sư phạm hàng đầu tại Hà Nội. Đội n...",
    teacher: {
      name: "Phạm Thị Hoa",
      level: "Giáo viên cấp 2",
      avatar: avatar1,
    },
    grade: "1",
    level: "giao vien",
    subject: "anh",
    tutor: "TH",
    gender: "nu",
    image: image7,
  },
  {
    id: 6,
    title: "Văn học lớp 8",
    price: "280.000đ/buổi",
    description: "Trung tâm U.Smart cung cấp đội ngũ gia sư phạm hàng đầu tại Hà Nội. Đội n...",
    teacher: {
      name: "Hoàng Văn Đức",
      level: "Giáo viên cấp 2",
      avatar: avatar2,
    },
    grade: "8",
    level: "giao vien",
    subject: "van",
    tutor: "THCS",
    gender: "nam",
    image: image8,
  },
  // Thêm một vài khóa học để test filter
  {
    id: 7,
    title: "Toán lớp 11",
    price: "320.000đ/buổi",
    description: "Khóa học Toán nâng cao cho học sinh lớp 11, chuẩn bị thi đại học.",
    teacher: {
      name: "Nguyễn Thị Mai",
      level: "Thạc sĩ Toán học",
      avatar: avatar3,
    },
    grade: "11",
    level: "thac si",
    subject: "toan",
    tutor: "THPT",
    gender: "nu",
    image: image9,
  },
  {
    id: 8,
    title: "Vật lý lớp 12",
    price: "380.000đ/buổi",
    description: "Ôn thi đại học môn Vật lý với giáo viên kinh nghiệm.",
    teacher: {
      name: "Trần Văn Hùng",
      level: "Tiến sĩ Vật lý",
      avatar: avatar4,
    },
    grade: "12",
    level: "tien si",
    subject: "ly",
    tutor: "THPT",
    gender: "nam",
    image: image3,
  },

  
]

// Function để lấy course theo ID
export function getCourseById(id: number): Course | undefined {
  return courses.find((course) => course.id === id)
}

// Function để lấy tất cả courses
export function getAllCourses(): Course[] {
  return courses
}
