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
    home: "Нүүр",
    admission: "Элсэлт",
    cooperation: "Хамтын ажиллагаа",
    student_life: "Оюутны амьдрал",
    news: "Мэдээ",
    jobs: "Нээлттэй ажилын байр",
    contact: "Холбоо барих",


    about_page_title: "Бидний тухай",
    about_page_description: "Идэр их сургуулийн түүх, эрхэм зорилго, үнэт зүйлс болон удирдлагын багийн талаар",
    overview_tab: "Товч танилцуулга",
    history_tab: "Түүх",
    leadership_tab: "Удирдлага",
    values_tab: "Үнэт зүйлс",
    university_intro_title: "Идэр их сургууль",
    university_intro_p1:
      "Идэр их сургууль нь Монгол улсын тэргүүлэх их сургуулиудын нэг бөгөөд 1990-ээд оноос хойш чанартай дээд боловсрол олгож ирсэн түүхтэй. Бид оюутнуудад дэлхийн жишигт нийцсэн боловсрол олгох, судалгаа шинжилгээний ажлыг дэмжих, нийгэмд эерэг өөрчлөлт авчрах чадвартай мэргэжилтнүүдийг бэлтгэхийг зорьж байна.",
    university_intro_p2:
      "Манай сургууль нь бизнес, инженерчлэл, хүмүүнлэг, эрх зүй, шинжлэх ухаан, урлаг зэрэг олон чиглэлээр бакалавр, магистр, докторын зэргийн хөтөлбөрүүдийг санал болгодог. Бид оюутан бүрийн хувийн хөгжил, мэргэжлийн ур чадварыг хөгжүүлэхэд анхаарч, тэдний ирээдүйн амжилтад хувь нэмэр оруулахыг зорьдог.",
    mission_title: "Эрхэм зорилго",
    mission_text:
      "Бид оюутнуудыг мэдлэг, ур чадвар, ёс зүйгээр хангаж, тэднийг нийгэмд эерэг өөрчлөлт авчрах, дэлхийн тавцанд өрсөлдөх чадвартай иргэд болгон төлөвшүүлэхийг зорьж байна.",
    vision_title: "Алсын хараа",
    vision_text:
      "Идэр их сургууль нь Монгол улсын тэргүүлэх, олон улсад хүлээн зөвшөөрөгдсөн, инноваци, судалгаа, чанартай боловсролоор онцлог их сургууль болохыг зорьж байна.",
  },
  en: {
    motto: "PREPARING PROFESSIONALS WHO AMAZE WITH THEIR ABILITIES",
    university_name: "IDER UNIVERSITY",
    university_name_en: "IDER UNIVERSITY",
    home: "Home",
    about: "About Us",
    admission: "Admission",
    cooperation: "Cooperation",
    student_life: "Student Life",
    news: "News",
    jobs: "Career",
    contact: "Contact",


    about_page_title: "About Us",
    about_page_description: "Learn about Ider University's history, mission, values, and leadership team",
    overview_tab: "Overview",
    history_tab: "History",
    leadership_tab: "Leadership",
    values_tab: "Values",
    university_intro_title: "Ider University",
    university_intro_p1:
      "Ider University is one of Mongolia's leading universities, providing quality higher education since the 1990s. We strive to provide world-class education, support research activities, and prepare professionals who can bring positive change to society.",
    university_intro_p2:
      "Our university offers bachelor's, master's, and doctoral programs in various fields including business, engineering, humanities, law, science, and arts. We focus on developing each student's personal growth and professional skills, contributing to their future success.",
    mission_title: "Our Mission",
    mission_text:
      "We aim to equip students with knowledge, skills, and ethics, developing them into citizens capable of bringing positive change to society and competing on the global stage.",
    vision_title: "Our Vision",
    vision_text:
      "Ider University strives to become Mongolia's leading, internationally recognized university, distinguished by innovation, research, and quality education.",
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

