import { useFormik } from "formik";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInwithGoogleEmailAndPassword,
} from "../../services/firestore-config";
import PageLayout from "./../../layout/public-page";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { DocumentReference } from "firebase/firestore";
import ButtonSpinner from "../../component/buttons-spinner/button-spinner.component";

export default function User() {
  const [googleLoginLoading, setGoogleLoginLoading] = useState(false);
  const userGoogleLogin = async () => {
    setGoogleLoginLoading(true);
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef: DocumentReference = await createUserDocumentFromAuth(
        user
      );
      setGoogleLoginLoading(false);
    } catch (error: any) {
      switch (error.code) {
        case "auth/network-request-failed":
          toast("لطفا قند شکن خود را وصل کنید");
          break;
        case "auth/popup-closed-by-user":
          toast("مودال انتخاب ایمیل توسط شما بسته شد");
          break;
        default:
          console.error(error);
          break;
      }
      setGoogleLoginLoading(false);
    }
  };

  const signInFormFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("فرمت وارد شده صحیح نمی باشد")
        .required("آدرس ایمیل الزامی می باشد"),
      password: Yup.string().required("رمز عبور الزامی می باشد"),
    }),
    onSubmit: (values) => {
      signInwithGoogleEmailAndPassword(values.email, values.password)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-login-credentials":
              toast("لطفا مقادیر ورودی خود را بررسی کنید");
              break;
            case "auth/user-not-found":
              toast("آدرس ایمیل شما یافت نشد");
              break;
            case "auth/network-request-failed":
              toast("لطفا قند شکن خود را وصل کنید");
              break;
            default:
              console.error(error);
          }
        });
    },
  });

  const signUpFormFormik = useFormik({
    initialValues: {
      signUpEmail: "",
      signUpPassword: "",
      repeatPassword: "",
      fullName: "",
    },
    validationSchema: Yup.object({
      signUpEmail: Yup.string()
        .email("فرمت وارد شده صحیح نمی باشد")
        .required("وارد کردن آدرس ایمیل الزامی می باشد"),
      signUpPassword: Yup.string().required(
        "وارد کردن رمز عبور الزامی می باشد"
      ),
      fullName: Yup.string().required(
        "وارد کردن نام و نام خانوادگی الزامی می باشد"
      ),
      repeatPassword: Yup.string()
        .oneOf(
          [Yup.ref("signUpPassword"), undefined],
          "تکرار رمز عبور باید برابر با رمز عبور باشد"
        )
        .required("تکرار رمز عبور الزامی می باشد"),
    }),
    onSubmit: (values) => {
      createAuthUserWithEmailAndPassword(
        values.signUpEmail,
        values.signUpPassword
      )
        .then((response) => {
          if (response) {
            const createUser = createUserDocumentFromAuth(response.user, {
              displayName: values.fullName,
            });
            console.log(createUser);
          }
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            toast("ایمیل شما از قبل ثبت شده است");
          } else {
            console.error(error);
          }
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
                      id="signUpEmail"
                      type="email"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="ایمیل خود را وارد کنید"
                      {...signUpFormFormik.getFieldProps("signUpEmail")}
                    />
                    <div className="text-red-500 text-sm pt-2 font-bold">
                      {signUpFormFormik.errors.signUpEmail}
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <i className="fas fa-envelope ml-2"></i>نام و نام خانوادگی
                  </label>
                  <div>
                    <input
                      id="fullName"
                      type="fullName"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="ایمیل خود را وارد کنید"
                      {...signUpFormFormik.getFieldProps("fullName")}
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
                      autoComplete="yes"
                      id="signUpPassword"
                      type="password"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="رمز عبور خود را وارد کنید"
                      {...signUpFormFormik.getFieldProps("signUpPassword")}
                    />
                  </div>
                  <div className="text-red-500 text-sm pt-2 font-bold">
                    {signUpFormFormik.errors.signUpPassword}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    <i className="fas fa-lock ml-2"></i>تکرار رمز عبور
                  </label>
                  <div>
                    <input
                      autoComplete="yes"
                      id="repeatPassword"
                      type="password"
                      className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="رمز عبور خود را وارد کنید"
                      {...signUpFormFormik.getFieldProps("repeatPassword")}
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
                  disabled={googleLoginLoading}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2 w-[150px]"
                >
                  {googleLoginLoading ? (
                    <ButtonSpinner spinnerSize="h-5 w-5" />
                  ) : (
                    <i className="fab fa-google"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </section>
    </PageLayout>
  );
}
