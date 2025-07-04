import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { courses } from "../data/Courses.js";

export function useCoursesPage() {
    const [filters, setFilters] = useState({
        grade: "",
        level: "",
        subject: "",
        tutor: "",
        gender: "",
    })

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const tutorParam = params.get("tutor");

        if (tutorParam) {
            setFilters((prev) => ({
                ...prev,
                tutor: tutorParam
            }));

            const displayText =
                tutorParam === "TH"
                    ? "Gia sư TH"
                    : tutorParam === "THCS"
                        ? "Gia sư THCS"
                        : "Gia sư THPT";

            setSelectedTags([`tutor-${tutorParam}:${displayText}`]);

            const results = courses.filter(course => course.tutor === tutorParam);
            setFilteredCourses(results);
        }
    }, []);

    const getHeroTitle = () => {
        switch (filters.tutor) {
            case "TH":
                return "Gia sư tiểu học";
            case "THCS":
                return "Gia sư THCS";
            case "THPT":
                return "Gia sư THPT";
            default:
                return "Tất cả khóa học";
        }
    };

    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [filteredCourses, setFilteredCourses] = useState(courses)

    const handleFilterChange = (filterType: string, value: string) => {
        setFilters((prev) => ({
            ...prev,
            [filterType]: value,
        }))

        if (value) {
            let displayText = value
            switch (filterType) {
                case "grade":
                    displayText = `Lớp ${value}`
                    break
                case "level":
                    displayText =
                        value === "sinh vien"
                            ? "Sinh viên"
                            : value === "giao vien"
                                ? "Giáo viên"
                                : value === "thac si"
                                    ? "Thạc sĩ"
                                    : "Tiến sĩ";
                    break
                case "subject":
                    displayText =
                        value === "toan"
                            ? "Toán"
                            : value === "ly"
                                ? "Vật lý"
                                : value === "hoa"
                                    ? "Hóa học"
                                    : value === "sinh"
                                        ? "Sinh học"
                                        : value === "van"
                                            ? "Văn học"
                                            : "Tiếng Anh"
                    break
                case "tutor":
                    displayText =
                        value === "TH"
                            ? "Gia sư TH"
                            : value === "THCS"
                                ? "Gia sư THCS"
                                : value === "THPT"
                                    ? "Gia sư THPT"
                                    : "Gia sư khác";
                    break;
                case "gender":
                    displayText = value === "nam" ? "Nam" : "Nữ"
                    break
            }
            addTag(filterType, value, displayText)
        }
    }

    const addTag = (filterType: string, value: string, displayText: string) => {
        const tagId = `${filterType}-${value}`;
        const newTag = `${tagId}:${displayText}`;

        // Xoá mọi tag cùng filterType (ví dụ grade-1, grade-2...)
        const updatedTags = selectedTags.filter((tag) => {
            const [filterPart] = tag.split(":");
            const [existingFilterType] = filterPart.split("-");
            return existingFilterType !== filterType;
        });

        // Thêm tag mới duy nhất
        setSelectedTags([...updatedTags, newTag]);
    };

    const removeTag = (tagToRemove: string) => {
        const newTags = selectedTags.filter((tag) => tag !== tagToRemove)
        setSelectedTags(newTags)

        // Cập nhật filters state
        const [filterPart] = tagToRemove.split(":")
        const [filterType] = filterPart.split("-")
        const newFilters = {
            ...filters,
            [filterType]: "",
        }
        setFilters(newFilters)

        // Tự động tìm kiếm lại với tags còn lại
        if (newTags.length === 0) {
            setFilteredCourses(courses)
        } else {
            const results = courses.filter((course) => {
                return newTags.every((tag) => {
                    const [filterPart] = tag.split(":")
                    const [filterType, value] = filterPart.split("-")

                    switch (filterType) {
                        case "grade":
                            return course.grade === value
                        case "level":
                            return course.level === value
                        case "subject":
                            return course.subject === value
                        case "tutor":
                            return course.tutor === value
                        case "gender":
                            return course.gender === value
                        default:
                            return true
                    }
                })
            })
            setFilteredCourses(results);

        }
    }

    const clearAllTags = () => {
        setSelectedTags([])
        setFilters({
            grade: "",
            level: "",
            subject: "",
            tutor: "",
            gender: "",
        })
        setFilteredCourses(courses)
    }

    const handleSearch = () => {
        if (selectedTags.length === 0) {
            setFilteredCourses(courses)
            return
        }

        const results = courses.filter((course) => {
            return selectedTags.every((tag) => {
                // Parse tag để lấy filterType và value
                const [filterPart, displayText] = tag.split(":")
                const [filterType, value] = filterPart.split("-")

                switch (filterType) {
                    case "grade":
                        return course.grade === value
                    case "level":
                        return course.level === value
                    case "subject":
                        return course.subject === value
                    case "tutor":
                        return course.tutor === value
                    case "gender":
                        return course.gender === value
                    default:
                        return true
                }
            })
        })

        setFilteredCourses(results)
        console.log("Kết quả tìm kiếm:", results.length, "khóa học")
    }

    const getBreadcrumbTitle = () => {
        if (filters.tutor === "TH") return "Gia sư tiểu học"
        if (filters.tutor === "THCS") return "Gia sư THCS"
        if (filters.tutor === "THPT") return "Gia sư THPT"
        return "Tất cả khóa học"
    }

    return {
        filters,
        setFilters,
        selectedTags,
        filteredCourses,
        handleFilterChange,
        removeTag,
        clearAllTags,
        handleSearch,
        getHeroTitle,
        getBreadcrumbTitle,
    };
}