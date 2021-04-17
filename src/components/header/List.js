const List = [
  { name: "ورود", to: "/login" },
  { name: "عضویت", to: "/register" },
  { name: "خانه", to: "/home" },
  { name: "درباره", to: "/aboutUs" },
  {
    name: "فروشگاه",
    to: "/Shop",
    child: [
      [
        { name: "مرغ", to: "" },
        { name: "تست ۱", to: "/test1" },
        { name: "تست۲", to: "/test2" },
        { name: "تست۳", to: "/test3" },
        { name: "تست ۴", to: "/test4" },
        { name: "تست ۵", to: "/test5" },
        { name: "تست ۶", to: "/test4" },
        { name: "تست ۷", to: "/test5" },
        { name: "تست ۸", to: "/test4" },
        { name: "تست ۹", to: "/test5" },
      ],
      [
        { name: "ماهی" },
        { name: "تست ۱", to: "/test1" },
        { name: "تست۲", to: "/test2" },
        { name: "تست۳", to: "/test3" },
        { name: "تست ۴", to: "/test4" },
        { name: "تست ۵", to: "/test5" },
        { name: "تست ۶", to: "/test4" },
        { name: "تست ۷", to: "/test5" },
        { name: "تست ۸", to: "/test4" },
        { name: "تست ۹", to: "/test5" },
      ],
      [
        { name: "پیتزا" },
        { name: "تست ۱", to: "/test1" },
        { name: "تست۲", to: "/test2" },
        { name: "تست۳", to: "/test3" },
        { name: "تست ۴", to: "/test4" },
        { name: "تست ۵", to: "/test5" },
        { name: "تست ۶", to: "/test4" },
        { name: "تست ۷", to: "/test5" },
        { name: "تست ۸", to: "/test4" },
        { name: "تست ۹", to: "/test5" },
      ],
    ],
  },
];

export default List;