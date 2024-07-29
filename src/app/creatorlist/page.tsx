import React from "react";
import style from "./Creatorlist.module.css";
import Creator from "@/src/components/creator/Creator";

interface MyComponentProps {
  show: boolean;
}

const CreatorList: React.FC<MyComponentProps> = ({ show }) => {
  return (
    <div
      className={`${
        show ? style.brands_p_section : `${style.brands_p_section} pt-[140px]`
      }`}
    >
      <div
        className={`${
          show
            ? "new_brands_container"
            : "new_brands_container grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        <Creator />
        <Creator />
        <Creator />
        <Creator />
        <Creator />
        <Creator />
      </div>
    </div>
  );
};

export default CreatorList;
