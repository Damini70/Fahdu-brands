import Image from "next/image";

export default function LoginDesign() {
  return (
    <div className="flex gap-[20px] h-screen m-5 p-10">
      <div className="flex flex-col gap-[20px]">
        <Image
          src={"/images/brands-1.png"}
          alt="brands image"
          width={294}
          height={593}
        />
        <Image
          src={"/images/brands-text1.svg"}
          alt="brands image"
          width={294}
          height={128}
        />
      </div>
      <div className="flex flex-col gap-[20px] pt-[10px]">
        <Image
          src={"/images/fahdu-text1.svg"}
          alt="brands image"
          width={284}
          height={83}
        />
        <Image
          src={"/images/brands-2.png"}
          alt="brands image"
          width={300}
          height={295}
        />
        <div className="relative">
          <Image
            src={"/images/brands-3.png"}
            alt="brands image"
            width={300}
            height={275}
          />
          <Image
            className="absolute z-[-1] left-[7px] top-[7px]"
            src={"/images/brands-rec.svg"}
            alt="brands image"
            width={300}
            height={295}
          />
        </div>
      </div>
    </div>
  );
}
