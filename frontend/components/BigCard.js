import React from "react";
import Image from "next/image";

function BigCard({ img }) {
  return (
    <section className="relative pt-16 pb-4 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <img
          src={img}
          layout="fill"
          //objectFit="cover"
          className="rounded-2xl"
        />
      </div>
    </section>
  );
}

export default BigCard;
