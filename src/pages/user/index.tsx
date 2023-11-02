import { useFormik } from "formik";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInwithGoogleEmailAndPassword,
} from "../../services/firestore-config";
import PageLayout from "./../../layout/public-page";
import * as Yup from "yup";

export default function User() {
  const userGoogleLogin = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const signInFormFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("فرمت وارد شده صحیح نمی باشد").required("آدرس ایمیل الزامی می باشد"),
      password: Yup.string().required("رمز عبور الزامی می باشد"),
    }),
    onSubmit: (values) => {
      signInwithGoogleEmailAndPassword(values.email, values.password)
        .then((response) => {
          console.log(response);
        })
        .then((error) => {
          console.log(error);
        });
    },
  });

  const signUpFormFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullName: "",
      repeatPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("فرمت وارد شده صحیح نمی باشد").required("وارد کردن آدرس ایمیل الزامی می باشد"),
      password: Yup.string().required("وارد کردن رمز عبور الزامی می باشد"),
      fullName: Yup.string().required(
        "وارد کردن نام و نام خانوادگی الزامی می باشد"
      ),
      repeatPassword: Yup.string().oneOf(
        [Yup.ref("password"), undefined],
        "تکرار رمز عبور باید برابر با رمز عبور باشد"
      ).required("تکرار رمز عبور الزامی می باشد"),
    }),
    onSubmit: (values) => {
      signInwithGoogleEmailAndPassword(values.email, values.password)
        .then((response) => {
          console.log(response);
        })
        .then((error) => {
          console.log(error);
        });
    },
  });

  return (
    <PageLayout>
      <section className="px-2">
        <div className="flex justify-center items-center  py-10">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8  w-full ">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              <span className="text-black ">ورود / ثبت نام</span>
            </h2>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 px-[130px]">
              <form
                className="col-span-"
                onSubmit={signInFormFormik.handleSubmit}
              >
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <i className="fas fa-envelope ml-2"></i>ایمیل
                  </label>
                  <div>
                    <input
                      {...signInFormFormik.getFieldProps("email")}
                      id="email"
                      type="email"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="ایمیل خود را وارد کنید"
                    />
                    <div className="text-red-500 text-sm pt-2 font-bold">
                      {signInFormFormik.errors.email}
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <i className="fas fa-lock ml-2"></i>رمز عبور
                  </label>
                  <div>
                    <input
                      {...signInFormFormik.getFieldProps("password")}
                      autoComplete="yes"
                      id="password"
                      type="password"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="رمز عبور خود را وارد کنید"
                    />
                  </div>
                  <div className="text-red-500 text-sm pt-2 font-bold">
                    {signInFormFormik.errors.password}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  >
                    ورود
                  </button>
                </div>
              </form>

              <form onSubmit={signUpFormFormik.handleSubmit}>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <i className="fas fa-envelope ml-2"></i>ایمیل
                  </label>
                  <div>
                    <input
                      {...signUpFormFormik.getFieldProps("email")}
                      id="email"
                      type="email"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="ایمیل خود را وارد کنید"
                    />
                    <div className="text-red-500 text-sm pt-2 font-bold">
                      {signUpFormFormik.errors.email}
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <i className="fas fa-envelope ml-2"></i>نام و نام خانوادگی
                  </label>
                  <div>
                    <input
                      {...signUpFormFormik.getFieldProps("fullName")}
                      id="fullName"
                      type="fullName"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="ایمیل خود را وارد کنید"
                    />
                    <div className="text-red-500 text-sm pt-2 font-bold">
                      {signUpFormFormik.errors.fullName}
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <i className="fas fa-lock ml-2"></i>رمز عبور
                  </label>
                  <div>
                    <input
                      {...signUpFormFormik.getFieldProps("password")}
                      autoComplete="yes"
                      id="password"
                      type="password"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="رمز عبور خود را وارد کنید"
                    />
                  </div>
                  <div className="text-red-500 text-sm pt-2 font-bold">
                    {signUpFormFormik.errors.password}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <i className="fas fa-lock ml-2"></i>تکرار رمز عبور
                  </label>
                  <div>
                    <input
                      {...signUpFormFormik.getFieldProps("repeatPassword")}
                      autoComplete="yes"
                      id="repeatPassword"
                      type="password"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="رمز عبور خود را وارد کنید"
                    />
                  </div>
                  <div className="text-red-500 text-sm pt-2 font-bold">
                    {signUpFormFormik.errors.repeatPassword}
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  >
                    ثبت نام
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-8">
              <p className="text-center text-gray-600 font-bold pb-2">
                ورود و ثبت نام از طریق:
              </p>
              <div className="flex justify-center mt-2">
                <button
                  onClick={userGoogleLogin}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2 w-[150px]"
                >
                  <i className="fab fa-google"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
