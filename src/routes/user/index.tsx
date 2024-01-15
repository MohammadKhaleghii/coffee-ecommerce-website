import {useFormik} from "formik";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInwithGoogleEmailAndPassword,
} from "../../services/firestore-config";
import PageLayout from "../../layout/public-page";
import * as Yup from "yup";
import toast, {Toaster} from "react-hot-toast";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  currentUser,
  removeCurrnetUser,
} from "../../store/reducre/user/user.reducer";
import {UserSliceTypes} from "../../store/reducre/user/user.types";
import FormInput from "../../components/form-input";
import {Button} from "../../styles/component/buttons/button.styled.component";
import {Spinner} from "../../styles/component/sniper/spinner.styled.component";
export default function User() {
  const dispatch = useDispatch();
  const userSlice = useSelector((state: any) => state.user);
  const [googleLoginLoading, setGoogleLoginLoading] = useState(false);
  const [signInLoading, setSigInLoading] = useState(false);
  const [signUpLoading, setSigUpLoading] = useState(false);

  const handleCurrentUser = (
    displayName: string | null,
    email: string | null
  ) => {
    const userData: UserSliceTypes = {
      displayName: displayName ?? "",
      email: email ?? "",
    };
    dispatch(currentUser(userData));
    toast.success("ورود شما با موفقیت انجام شد");
  };
  const userGoogleLogin = async () => {
    setGoogleLoginLoading(true);
    try {
      const {user} = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
      setGoogleLoginLoading(false);
      handleCurrentUser(user.displayName, user.email);
    } catch (error: any) {
      switch (error.code) {
        case "auth/network-request-failed":
          toast.error("لطفا قند شکن خود را وصل کنید");
          break;
        case "auth/popup-closed-by-user":
          toast.error("مودال انتخاب ایمیل توسط شما بسته شد");
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
      setSigInLoading(true);
      signInwithGoogleEmailAndPassword(values.email, values.password)
        .then((response) => {
          if (response) {
            handleCurrentUser(response.user.displayName, response.user.email);
            signInFormFormik.resetForm();
            setSigInLoading(false);
          }
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-login-credentials":
              toast.error("لطفا مقادیر ورودی خود را بررسی کنید");
              break;
            case "auth/user-not-found":
              toast.error("آدرس ایمیل شما یافت نشد");
              break;
            case "auth/network-request-failed":
              toast.error("لطفا قند شکن خود را وصل کنید");
              break;
            default:
              console.error(error);
          }
          setSigInLoading(false);
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
      setSigUpLoading(true);
      createAuthUserWithEmailAndPassword(
        values.signUpEmail,
        values.signUpPassword
      )
        .then((response) => {
          if (response) {
            createUserDocumentFromAuth(response.user, {
              displayName: values.fullName,
            });
            if (response)
              handleCurrentUser(response.user.displayName, response.user.email);
            signUpFormFormik.resetForm();
            setSigUpLoading(false);
          }
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-login-credentials":
              toast.error("لطفا مقادیر ورودی خود را بررسی کنید");
              break;
            case "auth/user-not-found":
              toast.error("آدرس ایمیل شما یافت نشد");
              break;
            case "auth/network-request-failed":
              toast.error("لطفا قند شکن خود را وصل کنید");
              break;
            case "auth/email-already-in-use":
              toast.error("این ایمیل از قبل وجود دارد");
              break;
            case "auth/weak-password":
              toast.error("لطفا یک رمزعبور قوی تر وارد کنید");
              break;
            default:
              console.error(error);
          }
          setSigUpLoading(false);
        });
    },
  });
  const handleDeleteCurrentUser = () => dispatch(removeCurrnetUser());

  console.log(signInFormFormik.errors);

  return (
    <PageLayout>
      <section className="px-2">
        <div className="flex justify-center items-center  py-10">
          {userSlice ? (
            <div className="flex flex-col gap-y-3 gap-x-2 justify-between items-center">
              <div>نام نمایشی: {userSlice.displayName}</div>
              <b />
              <div>آدرس ایمیل: {userSlice.email}</div>
              <button
                onClick={handleDeleteCurrentUser}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2 w-[150px]"
              >
                خروج
              </button>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full ">
              <h2 className="text-3xl font-bold mb-6 text-center text-white">
                <span className="text-black ">ورود / ثبت نام</span>
              </h2>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-20 px-3 lg:px-[130px] gap-y-5">
                <form
                  className="col-span-"
                  onSubmit={signInFormFormik.handleSubmit}
                >
                  <FormInput
                    {...signInFormFormik.getFieldProps("email")}
                    type="email"
                    label="ایمیل"
                    placeholder="ایمیل خود را وارد کنید"
                    errorMessage={
                      signInFormFormik.touched.email &&
                      signInFormFormik.errors.email
                        ? signInFormFormik.errors.email
                        : ""
                    }
                    iconClassNameAndStyle="fas fa-envelope ml-2"
                  />
                  <FormInput
                    {...signInFormFormik.getFieldProps("password")}
                    label="رمز عبور"
                    type="password"
                    placeholder="رمز عبور خود را وارد کنید"
                    errorMessage={
                      signInFormFormik.touched.password &&
                      signInFormFormik.errors.password
                        ? signInFormFormik.errors.password
                        : ""
                    }
                    iconClassNameAndStyle="fas fa-lock ml-2"
                  />

                  <div className="flex items-center justify-center">
                    <Button
                      className="flex items-center justify-center"
                      disabled={signInLoading}
                      width="100%"
                      type="submit"
                    >
                      {signInLoading ? <Spinner /> : "ورود"}
                    </Button>
                  </div>
                </form>

                <form onSubmit={signUpFormFormik.handleSubmit}>
                  <FormInput
                    {...signUpFormFormik.getFieldProps("signUpEmail")}
                    type="email"
                    label="ایمیل"
                    placeholder="ایمیل خود را وارد کنید"
                    errorMessage={
                      signUpFormFormik.touched.signUpEmail &&
                      signUpFormFormik.errors.signUpEmail
                        ? signUpFormFormik.errors.signUpEmail
                        : ""
                    }
                    iconClassNameAndStyle="fas fa-envelope ml-2"
                  />
                  <FormInput
                    {...signUpFormFormik.getFieldProps("fullName")}
                    type="text"
                    label="نام و نام خانوادگی"
                    placeholder="نام و نام خانوادگی خود را وارد کنید"
                    errorMessage={
                      signUpFormFormik.touched.fullName &&
                      signUpFormFormik.errors.fullName
                        ? signUpFormFormik.errors.fullName
                        : ""
                    }
                    iconClassNameAndStyle="fas fa-user ml-2"
                  />
                  <FormInput
                    {...signUpFormFormik.getFieldProps("signUpPassword")}
                    type="text"
                    label="رمز عبور"
                    placeholder="رمز عبور خود را وارد کنید"
                    errorMessage={
                      signUpFormFormik.touched.signUpPassword &&
                      signUpFormFormik.errors.signUpPassword
                        ? signUpFormFormik.errors.signUpPassword
                        : ""
                    }
                    iconClassNameAndStyle="fas fa-lock ml-2"
                  />
                  <FormInput
                    {...signUpFormFormik.getFieldProps("repeatPassword")}
                    type="text"
                    label="تکرار رمز عبور "
                    placeholder="تکرار رمز عبور خود را وارد کنید"
                    errorMessage={
                      signUpFormFormik.touched.repeatPassword &&
                      signUpFormFormik.errors.repeatPassword
                        ? signUpFormFormik.errors.repeatPassword
                        : ""
                    }
                    iconClassNameAndStyle="fas fa-user ml-2"
                  />

                  <div className="flex items-center justify-center">
                    <Button
                      className="flex items-center justify-center"
                      width="100%"
                      type="submit"
                      disabled={signUpLoading}
                    >
                      {signUpLoading ? <Spinner /> : "ثبت نام"}
                    </Button>
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
                      <Spinner />
                    ) : (
                      <i className="fab fa-google"></i>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
