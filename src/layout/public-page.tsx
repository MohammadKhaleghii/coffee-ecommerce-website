import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const logoPath = "/assetes/image/logo.png";
  const navigationItem = [
    {
      title: "صفحه اصلی",
      href: "/",
    },
    {
      title: "فروشگاه",
      href: "/shop",
    },

    {
      title: "درباره من",
      href: "http://anothermohammad.ir/",
    },
    {
      title: "تماس ما",
      href: "/contact",
    },
  ];
  const navigationIcons = [
    {
      iconClassName: "fa-regular fa-user",
      href: "/user",
    },
    {
      iconClassName: "fa-regular fa-cart-shopping",
      href: "/cart",
    },
  ];
  const contactInfo = [
    {
      icon: "fa-solid fa-location-dot",
      desciption: "مشهد، خیابان مطهری، مطهری 36، پلاک 18",
    },
    {
      icon: "fa-solid fa-envelope",
      desciption: "cafena@coffee.com",
    },
    {
      icon: "fa-solid fa-phone",
      desciption: "02192024359",
    },
  ];
  const quickAccessItem = [
    {
      title: "قهوه",
      href: "#",
    },
    {
      title: "نوشیدنی پودری",
      href: "#",
    },
    {
      title: "چای و دمنوش",
      href: "#",
    },
    {
      title: "خوشمزه ها",
      href: "#",
    },
    {
      title: "تجهیزات قهوه",
      href: "#",
    },
  ];
  const contactUsItem = [
    {
      title: "درباره من",
      href: "http://anothermohammad.ir/",
    },

    {
      title: "ارتباط باما",
      href: "#",
    },
    {
      title: "قوانین و مقررات",
      href: "#",
    },
    {
      title: "راهنمای خرید آنلاین",
      href: "#",
    },
  ];
  const certificate = [
    {
      title: "اتحادیه",
      imagePath: "/assetes/image/footer-images/1.png",
    },
    {
      title: "ساماندهی",
      imagePath: "/assetes/image/footer-images/3.png",
    },
    {
      title: "اینماد",
      imagePath: "/assetes/image/footer-images/4.png",
    },
  ];
  return (
    <div className="max-w-screen-2xl min-w-[360px] my-0 mx-auto">
      <header className="lg:px-32 px-3 flex items-center justify-between bg-[#3F2F2A] lg:h-20 lg:ounded-md lg:mt-8 ">
        <nav>
          <div className="flex items-center justify-start">
            <Link to={"/"}>
              <img loading="lazy" src={logoPath} alt="" className="pl-14" />
            </Link>
            <ul className="md:flex items-center gap-x-10 hidden ">
              {navigationItem.map((navItem, index) => (
                <Link key={index} to={navItem.href}>
                  <li className="text-primary-10 lg:text-base md:text-xs hover:border-b-2 pb-2  hove hover:text-[#F9C06A] hover:border-[#F9C06A]">
                    {navItem.title}
                  </li>
                </Link>
              ))}
            </ul>
            <div
              className="px-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fa-solid fa-bars  md:hidden block text-primary-10 text-2xl"></i>
            </div>
          </div>
        </nav>
        <div className="flex items-center justify-center">
          <ul className="flex items-center justify-start gap-x-12 ">
            {navigationIcons.map((navItem, index) => (
              <Link key={index} to={navItem.href}>
                <i
                  key={index}
                  className={`${navItem.iconClassName} text-primary-10 text-2xl hover:text-[#F9C06A]`}
                >
                  {" "}
                </i>
              </Link>
            ))}
          </ul>
        </div>
      </header>
      {isMobileMenuOpen && (
        <>
          <div className="bg-[#3F2F2A]">
            <div className="">
              <ul className="flex items-center justify-center flex-col gap-y-5 py-1 ">
                {navigationItem.map((navItem, index) => (
                  <Link key={index} to={navItem.href}>
                    <li className="text-primary-10 lg:text-base md:text-xs">
                      {navItem.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
      <main>{children}</main>
      <footer className="px-3 lg:px-32 flex flex-col justify-between bg-[#3F2F2A] rounded-t-md lg:pt-2 pt-4 gap-x-12">
        <section className="text-primary-10 ">
          <img loading="lazy" src={logoPath} />
          <div className="flex justify-center lg:flex-row flex-col ">
            <div className="grid md:grid-cols-3 grid-cols-2 gap-y-4  gap-x-12 lg:w-[70%]">
              <div className="text-sm gap-y-3 flex-col flex pt-8">
                <div className="flex flex-col gap-y-4">
                  <p> شنبه تا پنج شنبه: 10 صبح تا 17 بعد از ظهر</p>
                  <p> جمعه : 10 صبح تا 14 بعد از ظهر</p>
                </div>
                <ul>
                  {contactInfo.map((navItem, index) => (
                    <li
                      className="flex items-center justify-start gap-x-3 pb-2 "
                      key={index}
                    >
                      <i
                        key={index}
                        className={`${navItem.icon} text-primary-10 text-lg`}
                      />
                      <p>{navItem.desciption}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold pb-5">دسترسی سریع</h4>
                <ul className="flex items-start justify-center gap-y-3 flex-col">
                  {quickAccessItem.map((item, index) => (
                    <li className="text-xs list-disc" key={index}>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold pb-5">دسترسی سریع</h4>
                <ul className="flex items-start justify-center gap-y-3 flex-col">
                  {contactUsItem.map((item, index) => (
                    <li className="text-xs list-disc" key={index}>
                      {item.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-y-5 items-center justify-start">
              <img
                loading="lazy"
                className="w-[122px] h-[122px]"
                src="/assetes/image/footer-images/2.png"
                alt=""
              />
              <div className="flex items-center justify-center gap-x-4">
                {certificate.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl bg-white h-auto px-3 py-3"
                  >
                    <img loading="lazy" src={item.imagePath} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="pb-8 lg:pt-2 pt-4">
          <p className="text-primary-10 text-sm leading-8 font-normal text-justify">
            کافینا گسترده ترین فروش قهوه و چای تخصصی در سراسر جهان. از دانه‌های
            اسپرسوی طعم‌دار، ما انواعی از محصولات را ارائه می‌دهیم تا کام هر
            مشتری را وسوسه کند. برای کسانی که به دنبال تجهیزات منحصر به فرد دم
            کردن هستند، همچنین طیف کاملی از اسپرسوسازهای با کیفیت، آسیاب، آبجو،
            پرس فرنچ و غیره. همه اینها به راحتی با کلیک یک دکمه در دسترس هستند!
          </p>
        </section>
      </footer>
    </div>
  );
}
