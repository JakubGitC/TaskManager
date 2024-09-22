import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button, Loading, Textbox } from "../components";
import { useLoginMutation } from "../redux/slices/api/authApiSlice";
import { setCredentials } from "../redux/slices/authSlice";
import { useEffect } from "react";
import bgphoto from "../resources/bgphoto.jpg";
const Login = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (data) => {
    try {
      const res = await login(data).unwrap();

      dispatch(setCredentials(res));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  return (
    <div className=" bg-custom-bg bg-cover bg-center  h-full w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6] dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#302943] via-slate-900 to-black">
      <div className=" w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        <div className="  w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className=" bg-transparent border-2 border-white/20 backdrop-blur-lg form-container w-full md:w-[400px] flex flex-col gap-y-8  dark:bg-slate-900 px-10 pt-14 pb-14"
          >
            <div>
              <p className="text-white  text-3xl font-bold text-center">
                Welcome
              </p>
              <p className="text-center text-base text-white  dark:text-gray-500">
                Here is Your Task Manager
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <Textbox
                placeholder="Email"
                type="email"
                name="email"
                className="w-full rounded-full"
                register={register("email", {
                  required: "Email Address is required!",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder="Password"
                type="password"
                name="password"
                className="w-full rounded-full"
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password?.message : ""}
              />
              <div class="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 items-center justify-center">
                <span class="relative group text-white text-center cursor-pointer">
                  User Access Instruction
                  <span class="absolute bottom-full left-1/2 transform translate-y-11 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 bg-gray-400 text-white text-xs rounded py-1 px-2 transition-opacity duration-300 pointer-events-none">
                    <span class="block text-center">email: user@gmail.com</span>
                    <span class="block text-center">password: 1234</span>
                    <span class="block text-center">Wait Maximum 60 Seconds For Login In</span>
                  </span>
                </span>

                <span class="relative group text-white text-center cursor-pointer">
                  Admin Access Instruction
                  <span class="absolute bottom-full left-1/2 transform translate-y-11 -translate-x-1/2 w-max opacity-0 group-hover:opacity-100 bg-gray-400 text-white text-xs rounded py-1 px-2 transition-opacity duration-300 pointer-events-none">
                    <span class="block text-center">
                      email: admin@gmail.com
                    </span>
                    <span class="block text-center">password: 1234</span>
                     <span class="block text-center">Wait Maximum 60 Seconds For Login In</span>
                  </span>
                </span>
              </div>
            </div>
            {isLoading ? (
              <Loading />
            ) : (
              <Button
                type="submit"
                label="Log in"
                className="w-full h-10 bg-white text-black rounded-full"
              />
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
