"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaBars,
  FaCartShopping,
  FaRegHeart,
  FaShuffle,
} from "react-icons/fa6";
import { MdWbSunny } from "react-icons/md";

type Props = {};

export default function Navbar({}: Props) {
  const [fixToTop, setfixToTop] = useState(false);
  useEffect(() => {
    const fixNavToTop = () => {
      // show y scroll
      const surrentScroll = window.pageYOffset;
      console.log("surrentScroll", surrentScroll);

      if (surrentScroll > 850) {
        setfixToTop(true);
      } else {
        setfixToTop(false);
      }
    };
    window.addEventListener("scroll", fixNavToTop);
    // clean up my use effect (remove my event)
    return () => window.removeEventListener("scroll", fixNavToTop);
  }, []);
  return (
    <nav
      className={`${
        fixToTop ? "sticky" : "absolute "
      } top-0 z-50 w-full select-none`}
    >
      <main
        className={`flex justify-between items-center bg-[#D1B48C] p-1 px-4 text-sm ${
          !fixToTop && "m-6 rounded-3xl lg:mx-16"
        }  shadow-md `}
      >
        {/* ......right........ */}

        <div className="flex items-center gap-3">
          <FaBars className="w-5 h-5 text-orange-950 lg:hidden inline-flex" />
          <Link href="/">
            <Image
              alt="cooffee time"
              src="/coffee-time-logo.png"
              width={70}
              height={70}
              priority
            />
          </Link>
        </div>
        {/* md:inline-flex hidden */}
        {/* ......center........ */}

        <ul className="relative font-bold font-sans flex-row gap-6  hidden lg:inline-flex">
          <li>
            <Link href="#" className="m-2">
              صفحه اصلی
            </Link>
          </li>

          <li className="relative group">
            <Link
              href="/store"
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center text-sm font-medium text-center "
            >
              فروشگاه
              <FaAngleDown className="mt-1 group-hover:rotate-180 transition-all" />
            </Link>
            <div
              id="dropdownDots"
              className="hidden group-hover:block hover:block absolute top-5 bg-orange-50  z-10 divide-ybg-orange-50 divide-orange-100 rounded-lg w-44 shadow-sm shadow-orange-600 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconButton"
              >
                <li>
                  <Link
                    href="/p-user/orders"
                    className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    نان
                  </Link>
                </li>
                <li>
                  <Link
                    href="/p-user/tickets"
                    className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    قهوه
                  </Link>
                </li>
                <li>
                  <Link
                    href="/p-user/tickets"
                    className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    شیرینی
                  </Link>
                </li>
                <li>
                  <Link
                    href="/p-user/tickets"
                    className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    نوشیدنی
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          {/* <li>
            <Link href="#" className="m-2">
              فروش سازمانی
            </Link>
          </li> */}

          {/* <li>
            <Link href="#" className="m-2">
              دیکشنری قهوه
            </Link>
          </li> */}

          {/* <li>
            <Link href="#" className="m-2">
              باشگاه مشتریان
            </Link>
          </li> */}

          <li className="relative group">
            <Link
              href="/weblog"
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center text-sm font-medium text-center "
            >
              وبلاگ
              <FaAngleDown className="mt-1 group-hover:rotate-180 transition-all" />
            </Link>
            <ul
              id="dropdownDots"
              className="py-2 text-sm text-gray-700 dark:text-gray-200 hidden group-hover:block hover:block absolute top-5 bg-orange-50  z-10 divide-ybg-orange-50 divide-orange-100 rounded-lg w-44 shadow-sm shadow-orange-600 dark:bg-gray-700 dark:divide-gray-600"
              aria-labelledby="dropdownMenuIconButton"
            >
              <li>
                <Link
                  href="/p-user/orders"
                  className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  آموزش{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/p-user/tickets"
                  className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  اخبار و مقالات{" "}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#" className="flex items-center">
              قوانین
            </Link>
          </li>

          <li>
            <Link href="#" className="m-2">
              تماس با ما
            </Link>
          </li>

          <li className="relative group">
            <Link
              href="/about-us"
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center text-sm font-medium text-center "
            >
              درباره ما
              <FaAngleDown className="mt-1 group-hover:rotate-180 transition-all" />
            </Link>
            <div
              id="dropdownDots"
              className="hidden group-hover:block hover:block absolute top-5 bg-orange-50  z-10 divide-ybg-orange-50 divide-orange-100 rounded-lg w-44 shadow-sm shadow-orange-600 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconButton"
              >
                <li>
                  <Link
                    href="/p-user/orders"
                    className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    شرایط و قوانین
                  </Link>
                </li>
                <li>
                  <Link
                    href="/p-user/tickets"
                    className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    ثبت شکایات
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link href="/login" className="m-2">
              ورود/عضویت
            </Link>
          </li>
          {/* if user login */}
          <li className="relative group">
            <Link
              href="/p-user"
              id="dropdownMenuIconButton"
              data-dropdown-toggle="dropdownDots"
              className="inline-flex items-center text-sm font-medium text-center "
            >
              حساب کاربری
              <FaAngleDown className="mt-1 group-hover:rotate-180 transition-all" />
            </Link>
            <ul
              id="dropdownDots"
              className="py-2 text-sm text-gray-700 dark:text-gray-200 hidden group-hover:block hover:block absolute top-5 bg-orange-50  z-10 divide-ybg-orange-50 divide-orange-100 rounded-lg  w-44 shadow-sm shadow-orange-600 dark:bg-gray-700 dark:divide-gray-600"
              aria-labelledby="dropdownMenuIconButton"
            >
              <li>
                <Link
                  href="/p-user/orders"
                  className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  سفارشات
                </Link>
              </li>
              <li>
                <Link
                  href="/p-user/tickets"
                  className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  تیکت های پشتیبانی
                </Link>
              </li>
              <li>
                <Link
                  href="/p-user/comments"
                  className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  کامنت ها
                </Link>
              </li>
              <li>
                <Link
                  href="/p-user/favorites"
                  className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  علاقه مندی ها
                </Link>
              </li>
              <li>
                <Link
                  href="/p-user/account-details"
                  className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  جزئیات اکانت{" "}
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        {/* ......left........ */}
        <div className="flex items-center gap-3">
          <MdWbSunny className="w-6 h-6 text-orange-950" />
          <button
            type="button"
            className="relative inline-flex p-1 items-center text-sm font-medium text-center text-white   focus:ring-4 focus:outline-none  "
          >
            <FaRegHeart className="w-5 h-5 text-orange-950" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-5 h-5 p-1 text-xs font-bold text-white bg-orange-900 rounded-full -top-2 -end-2 dark:border-gray-900">
              0
            </div>
          </button>
          <button
            type="button"
            className="relative inline-flex p-1 items-center text-sm font-medium text-center text-white   focus:ring-4 focus:outline-none  "
          >
            <FaShuffle className="w-5 h-5 text-orange-950" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-5 h-5 p-1 text-xs font-bold text-white bg-orange-900 rounded-full -top-2 -end-2 dark:border-gray-900">
              0
            </div>
          </button>
          <button
            type="button"
            className="relative inline-flex p-1 items-center text-sm font-medium text-center text-white   focus:ring-4 focus:outline-none  "
          >
            <FaCartShopping className="w-5 h-5 text-orange-950" />
            <span className="sr-only">Notifications</span>
            <div className="absolute inline-flex items-center justify-center w-5 h-5 p-1 text-xs font-bold text-white bg-orange-900 rounded-full -top-2 -end-2 dark:border-gray-900">
              0
            </div>
          </button>
        </div>
      </main>
    </nav>
  );
}
