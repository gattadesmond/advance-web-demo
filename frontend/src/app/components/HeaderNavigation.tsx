"use client";


import { HeaderNavigation as HeaderNavigationMobase } from "@momo-webplatform/mobase";
import { produce } from "immer"

export default function HeaderNavigation({
  serviceInfo, mainNav
}) {

  const convertToMenu = (data) => {
    return produce(data, draft => {
      draft.map((item) => {
        if(item.subMenu) {
          item.subMenu = item.subMenu.data.map((it) => ({
            id: it.id,
            title: it.attributes.title,
            icon: it.attributes.icon,
            url: it.attributes.url,
            description: it.attributes.description,
            newTab: it.attributes.newTab,
          }))
        }
      })
    });
  };
  const mainNavConvert = convertToMenu(mainNav);
  
  return (
    <HeaderNavigationMobase serviceInfo={serviceInfo} dataMenu={mainNavConvert} />
  );
}
