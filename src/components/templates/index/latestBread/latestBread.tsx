import Product from "@/components/modules/product/product";
import SectionTitle from "@/components/modules/sectionTitle/sectionTitle";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {};

export default function LatestBread({}: Props) {
  return (
    <>
      <SectionTitle title=" جدیدترین نان ها" />
      <div className="flex justify-end items-center gap-3 text-base me-8 mt-10">
        <FaArrowRightLong />
        نمایش همه ی نان ها
      </div>
      <div data-aos="fade-down" className="flex">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </>
  );
}