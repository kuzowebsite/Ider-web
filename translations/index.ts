import type { Language } from "@/i18n-config"

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

export const translations: Translations = {
  mn: {
    motto: "ЧАДВАРААРАА ГАЙХАГДСАН МЭРГЭЖИЛТНҮҮДИЙГ БЭЛТГЭНЭ",
    university_name: "ИДЭР ИХ СУРГУУЛЬ",
    university_name_en: "IDER UNIVERSITY",
    about: "Бидний тухай",
    admission: "Элсэлт",
    cooperation: "Хамтын ажиллагаа",
    student_life: "Оюутны амьдрал",
    news: "Мэдээ",
    jobs: "Нээлттэй ажилын байр",
    contact: "Холбоо барих",
  },
  en: {
    motto: "PREPARING PROFESSIONALS WHO AMAZE WITH THEIR ABILITIES",
    university_name: "IDER UNIVERSITY",
    university_name_en: "IDER UNIVERSITY",
    about: "About Us",
    admission: "Admission",
    cooperation: "Cooperation",
    student_life: "Student Life",
    news: "News",
    jobs: "Career",
    contact: "Contact",
  },
  jp: {
    motto: "能力で感動を与える専門家を育成",
    university_name: "イデル大学",
    university_name_en: "IDER UNIVERSITY",
    about: "大学について",
    admission: "入学案内",
    cooperation: "協力",
    student_life: "学生生活",
    news: "ニュース",
    jobs: "採用情報",
    contact: "お問い合わせ",
  },
  kr: {
    motto: "능력으로 감동을 주는 전문가 양성",
    university_name: "이더 대학교",
    university_name_en: "IDER UNIVERSITY",
    about: "대학 소개",
    admission: "입학",
    cooperation: "협력",
    student_life: "학생생활",
    news: "소식",
    jobs: "채용",
    contact: "문의",
  },
  cn: {
    motto: "培养以能力震撼人心的专业人才",
    university_name: "伊德尔大学",
    university_name_en: "IDER UNIVERSITY",
    about: "关于我们",
    admission: "招生",
    cooperation: "合作",
    student_life: "学生生活",
    news: "新闻",
    jobs: "招聘",
    contact: "联系我们",
  },
}

