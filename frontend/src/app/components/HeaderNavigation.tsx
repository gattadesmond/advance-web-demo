"use client";


import { HeaderNavigation as HeaderNavigationMobase } from "@momo-webplatform/mobase";


export default function HeaderNavigation({
  serviceInfo, mainNav
}) {
  console.log("🚀 ~ mainNav:", mainNav)

  const mainNav1 = [
    {
      id: 1,
      title: "Menu 1",
      hasDropdown: true,
      dropDownCompact: true,
      subMenu: [
        {
          id: 1,
          title: "Dịch vụ 1",
          icon: "https://homepage.momocdn.net/styles/desktop/images/tienich/icon1.svg",
          url: "/",
          description: "Mô tả chi tiết dịch vụ 1",
          newTab: false,
        },
        {
          id: 2,
          title: "Dịch vụ 2",
          icon: "https://homepage.momocdn.net/styles/desktop/images/tienich/icon3.svg",
          url: "/",
          description: "Mô tả chi tiết dịch vụ 2",
          newTab: false,
        },
      ],
    },
    {
      id: 2,
      title: "Menu 5",
      hasDropdown: false,
      url: "/demo",
      newTab: false,
    },
  ];

  const serviceInfo1 = {
    logo: "https://homepage.momocdn.net/fileuploads/svg/momo-file-221117104714.svg",
    name: " Tên <br /> Dịch vụ",
    url: "/demo",
  };
  return (
    <HeaderNavigationMobase serviceInfo={serviceInfo} dataMenu={mainNav1} />
  );
}
