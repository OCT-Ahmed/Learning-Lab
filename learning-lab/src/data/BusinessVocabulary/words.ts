import type { BusinessWord } from "../../types";

export const categories: string[] = ['Business', 'Daily Life', 'Academic'];

export const businessWords: BusinessWord[] = [
    {
        id: 1,
        word: "Investment",
        meaning: "استثمار",
        category: "Business",
        frequency: {
            type: "high",
            color: "blue",
        },
        defEn: "Putting money into something to get a profit",
        defAr: "وضع المال في شيء ما للحصول على ربح",
    },
    {
    id: 2,
    word: "Revenue",
    meaning: "إيرادات",
    category: "Business",
    frequency: {
    type: "high",
    color: "blue",
    },
    defEn: "The total income produced by a given source",
    defAr: "إجمالي الدخل الناتج عن مصدر معين",
    },
    {
    id: 3,
    word: "Marketing",
    meaning: "تسويق",
    category: "Business",
    frequency: {
    type: "high",
    color: "blue",
    },
    defEn: "The activity of showing and selling products",
    defAr: "نشاط عرض وبيع المنتجات",
    },
    {
    id: 4,
    word: "Partnership",
    meaning: "شراكة",
    category: "Business",
    frequency: {
    type: "rare",
    color: "blue",
    },
    defEn: "A relationship between two or more people doing business",
    defAr: "علاقة بين شخصين أو أكثر يقومون بعمل تجاري",
    },
    {
    id: 5,
    word: "Strategy",
    meaning: "استراتيجية",
    category: "Business",
    frequency: {
    type: "high",
    color: "blue",
    },
    defEn: "A plan of action designed to achieve a long-term goal",
    defAr: "خطة عمل مصممة لتحقيق هدف طويل الأمد",
    },
    {
    id: 6,
    word: "Analysis",
    meaning: "تحليل",
    category: "Academic",
    frequency: {
    type: "high",
    color: "green",
    },
    defEn: "A detailed examination of anything complex",
    defAr: "فحص مفصل لأي شيء معقد",
    },
    {
    id: 7,
    word: "Hypothesis",
    meaning: "فرضية",
    category: "Academic",
    frequency: {
    type: "medium",
    color: "green",
    },
    defEn: "An idea or explanation that is tested through study",
    defAr: "فكرة أو تفسير يتم اختباره من خلال الدراسة",
    },
    {
    id: 8,
    word: "Theory",
    meaning: "نظرية",
    category: "Academic",
    frequency: {
    type: "high",
    color: "green",
    },
    defEn: "A system of ideas intended to explain something",
    defAr: "نظام من الأفكار يهدف إلى شرح شيء ما",
    },
    {
    id: 9,
    word: "Evidence",
    meaning: "دليل",
    category: "Academic",
    frequency: {
    type: "medium",
    color: "green",
    },
    defEn: "Facts or information indicating whether a belief is true",
    defAr: "حقائق أو معلومات تشير إلى ما إذا كان الاعتقاد صحيحًا",
    },
    {
    id: 10,
    word: "Methodology",
    meaning: "منهجية",
    category: "Academic",
    frequency: {
    type: "medium",
    color: "green",
    },
    defEn: "A system of methods used in a particular area of study",
    defAr: "نظام من الأساليب المستخدمة في مجال معين من الدراسة",
    },
    {
    id: 11,
    word: "Conversation",
    meaning: "محادثة",
    category: "Daily Life",
    frequency: {
    type: "high",
    color: "orange",
    },
    defEn: "A talk between two or more people",
    defAr: "حديث بين شخصين أو أكثر",
    },
    {
    id: 12,
    word: "Neighborhood",
    meaning: "حيّ / منطقة سكنية",
    category: "Daily Life",
    frequency: {
    type: "low",
    color: "orange",
    },
    defEn: "A district where people live as a community",
    defAr: "منطقة يعيش فيها الناس كمجتمع",
    },
    {
    id: 13,
    word: "Appointment",
    meaning: "موعد",
    category: "Daily Life",
    frequency: {
    type: "rare",
    color: "orange",
    },
    defEn: "An arrangement to meet someone at a particular time",
    defAr: "ترتيب لمقابلة شخص ما في وقت معين",
    },
    {
    id: 14,
    word: "Experience",
    meaning: "خبرة / تجربة",
    category: "Daily Life",
    frequency: {
    type: "high",
    color: "orange",
    },
    defEn: "Knowledge or skill that comes from doing things",
    defAr: "المعرفة أو المهارة التي تأتي من القيام بالأشياء",
    },
    {
    id: 15,
    word: "Suggestion",
    meaning: "اقتراح",
    category: "Daily Life",
    frequency: {
    type: "rare",
    color: "orange",
    },
    defEn: "An idea or plan put forward for consideration",
    defAr: "فكرة أو خطة مقدمة للنظر فيها",
    },
];
console.log(businessWords);