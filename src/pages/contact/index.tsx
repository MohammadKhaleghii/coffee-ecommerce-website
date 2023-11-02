import { useFormik } from "formik";
import PageLayout from "./../../layout/public-page";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const { handleSubmit, resetForm, values, errors, getFieldProps } = useFormik({
    initialValues: {
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("فرمت وارد شده ضحیح نمی باشد")
        .required("وارد کردن آدرس ایمیل الزامی می باشد"),
      subject: Yup.string().required("وارد کردن موضوع الزامی می باشد"),
      message: Yup.string().required("وارد کردن توضیحات الزامی می باشد"),
    }),
    onSubmit: (values) => {
      console.log(values);
      toast("فرم شما با موفیت ثبت شد");
      resetForm()  
    },
  });

  return (
    <PageLayout>
      <section className="px-2 pb-10">
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              تماس با من
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              در صورتی که دوس داشتی با تیم ما در ارتباط باشی و یا مشکلی بود که
              نیاز بود با ما در میونش بزاری لطفا اینجا واسمون پیام بزار
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  آدرس ایمیل
                </label>
                <input
                  {...getFieldProps("email")}
                  type="email"
                  id="email"
                  className="ltr shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="coffe@gmail.com"
                />
                <div className="text-red-500 text-sm pt-2">{errors.email}</div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  موضوع
                </label>
                <input
                  {...getFieldProps("subject")}
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="موضوع پیامت رو وارد کن"
                />
                <div className="text-red-500 text-sm pt-2">
                  {errors.subject}
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                  توضیحات
                </label>
                <textarea
                  {...getFieldProps("message")}
                  id="message"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="هرچی دوس داری واسم بنویس"
                ></textarea>
                <div className="text-red-500 text-sm pt-2">
                  {errors.message}
                </div>
              </div>

              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center  rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                ارسال
              </button>
              <Toaster />
            </form>
          </div>
        </section>
      </section>
    </PageLayout>
  );
}
