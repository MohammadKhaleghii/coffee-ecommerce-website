import { useFormik } from "formik";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../services/firestore-config";
import PageLayout from "./../../layout/public-page";
import * as Yup from "yup";

export default function User() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required("آدرس ایمیل الزامی می باشد"),
    password: Yup.string().required("پسورد الزامی می باشد"),
  });
  const { handleSubmit, errors, values, getFieldProps } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <PageLayout>
      <section className="px-2">
        <div className="flex justify-center items-center  py-10">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8  w-full max-w-md">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              <span className="text-black text-transparent   ">
                ورود / ثبت نام
              </span>
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  <i className="fas fa-envelope ml-2"></i>ایمیل
                </label>
                <div>
                  <input
                    {...getFieldProps("email")}
                    id="email"
                    type="email"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="ایمیل خود را وارد کنید"
                  />
                  <div className="text-red-500 text-sm pt-2 font-bold">
                    {errors.email}
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  <i className="fas fa-lock ml-2"></i>رمز عبور
                </label>
                <div>
                  <input
                    {...getFieldProps("password")}
                    id="password"
                    type="password"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="رمز عبور خود را وارد کنید"
                  />
                </div>
                <div className="text-red-500 text-sm pt-2 font-bold">
                  {errors.password}
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
              <div className="text-center mt-4">
                <a href="#" className="text-gray-600 hover:underline">
                  فراموشی رمز عبور
                </a>
              </div>
            </form>
            <div className="mt-4">
              <p className="text-center text-gray-600 font-bold">
                ثبت نام از طریق:
              </p>
              <div className="flex justify-center mt-2">
                <button
                  onClick={logGoogleUser}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2"
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
