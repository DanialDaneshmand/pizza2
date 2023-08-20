import { FaRegClock } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaRegKeyboard } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Payment = () => {
  const cart = useSelector((state) => state.cart);
  const total = useSelector((state) => state.total);
  return (
    <section className="  grid lg:grid-cols-2  w-full bg-[#efefef]  justify-center  pt-32 ">
      <div className="w-full flex justify-center order-2 lg:order-1 mb-8 md:mb-0">
        <div
          className="px-8 pb-16 bg-white md:w-7/12 mr-8 h-min border rounded-lg flex flex-col items-center"
          style={{ direction: "rtl" }}
        >
          <div className=" ml-32 font-bold text-red-500 bg-red-100 border-b-2 border-red-500 p-2 w-6/12">
            اطلاعات پرداخت
          </div>
          <div className="py-4 px-8 text-green-500 mt-16 bg-green-100 border rounded-md border-green-300">
            <div className="font-bold">{total} $</div>
            <div className="font-thin">مبلغ قابل پرداخت</div>
          </div>
          <div className="mt-16 w-full text-sm">
            <div className="w-full flex justify-around">
              <p className="text-gray-400 w-1/2">نام فروشگاه :</p>
              <p className="w-1/2">danial shopping</p>
            </div>
            <div className="w-full flex justify-around">
              <p className="text-gray-400 w-1/2"> شماره پایانه :</p>
              <p className="w-1/2">34615397</p>
            </div>
            <div className="w-full flex justify-around">
              <p className="text-gray-400 w-1/2"> کد پذیرنده :</p>
              <p className="w-1/2">220000000123541 </p>
            </div>
            <div className="w-full flex justify-around">
              <p className="text-gray-400 w-1/2"> سایت پذیرنده :</p>
              <p className="w-1/2">http//:danialShopping.ir </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center order-1 lg:order-2 md:pl-0 pl-6">
      <div
        className="px-8 pb-16 bg-white w-11/12 flex justify-center mr-8 h-max border rounded-lg  flex-col items-center mb-16"
        style={{ direction: "rtl" }}
      >
        <div className="w-full flex justify-around mb-16 ">
          <div className="ml-8 md:ml-32 font-bold text-red-500 bg-red-100 border-b-2 border-red-500 p-2 w-5/12 md:w-3/12">
            اطلاعات کارت
          </div>
          <div className="text-violet-700  flex items-center">
            <p className=" text-lg md:text-2xl ml-5">
              <FaRegClock />
            </p>
            <p className="text-sm">مدت زمان باقی مانده :07:43</p>
          </div>
        </div>
        <div className="w-full  flex md:mr-16 mr-8 md:flex-row flex-col">
          <div className="md:w-4/12">
            <div>
              <p>شماره کارت:</p>
              <p className="text-xs text-gray-500">
                شماره کارت 16 رقمی بر روی کارت
              </p>
            </div>
          </div>
          <div className="mt-8 md:w-8/12 md:mr-16 mr-0 flex items-center">
            <input
              type="text"
              className=" py-1 px-4 border border-gray-300 rounded-lg w-10/12"
            />
            <FaAngleDown className="text-violet-500 mr-1" />
          </div>
        </div>
        <div className="w-full flex md:mr-16 mr-8 mt-8 md:flex-row flex-col">
          <div className="md:w-4/12">
            <div>
              <p>شماره شناسایی دوم:</p>
              <p className="text-xs text-gray-500">
                شماره سه یا جهار رقمی بر روی کارت
              </p>
            </div>
          </div>
          <div className="mt-8 md:w-8/12 md:mr-16 mr-0 flex items-center">
            <input
              type="text"
              className=" py-1 px-4 border border-gray-300 rounded-lg w-10/12"
            />
            <FaRegKeyboard className="text-violet-500 mr-1" />
          </div>
        </div>
        <div className="w-full flex md:mr-16 mr-8 mt-8 md:flex-row flex-col">
          <div className="md:w-4/12">
            <div>
              <p>تاریخ انقضای کارت :</p>
              <p className="text-xs text-gray-500">
                دو رقم ماه/دو رقم سال را وارد کنید
              </p>
            </div>
          </div>
          <div className="mt-8 md:w-8/12 md:mr-16 mr-0 flex items-center">
            <input
              type="text"
              className=" py-1 px-4 border border-gray-300 rounded-lg w-3/12"
            />
            <span className="mr-4 text-3xl text-gray-300">/</span>
            <input
              type="text"
              className=" py-1 px-4 border border-gray-300 rounded-lg w-3/12 mr-4"
            />
          </div>
        </div>
        <div className="w-full flex md:mr-16 mr-8 mt-8 md:flex-row flex-col">
          <div className="md:w-4/12">
            <div>
              <p> کد امنیتی:</p>
              <p className="text-xs text-gray-500">
                کد اورده شده در کادر را وراد کنید
              </p>
            </div>
          </div>
          <div className="mt-8 md:w-8/12 md:mr-16 mr-0 flex items-center">
            <input
              type="text"
              className=" py-1 px-4 border border-gray-300 rounded-lg w-4/12"
            />
            <input
              type="text"
              value="13452476"
              className="text-gray-400 mr-8 py-1 px-4 border border-gray-300 rounded-lg w-4/12"
            />
            <FaSyncAlt className="text-violet-500 mr-8" />
          </div>
        </div>
        <div className="w-full flex md:mr-16 mr-8 mt-8 md:flex-row flex-col">
          <div className="md:w-4/12">
            <div>
              <p>رمز دوم :</p>
              <p className="text-xs text-gray-500">
                رمز پویا رمزی است که جای رمز دوم استفاده می شود
              </p>
            </div>
          </div>
          <div className="mt-8 md:w-8/12 md:mr-16 mr-0 flex items-center">
            <input
              type="text"
              className=" py-1 px-4 border border-gray-300 rounded-lg w-4/12"
            />
            <button className="border border-violet-500 mr-4 text-violet-500 py-1 px-2 rounded-lg font-thin">
              درخواست رمز پویا
            </button>
            <FaRegKeyboard className="text-violet-500 mr-8" />
          </div>
        </div>
        <div className="w-full flex mt-8 md:mr-16 mr-8 md:flex-row flex-col">
          <div className="md:w-4/12">
            <div>
              <p>ایمیل:</p>
              <p className="text-xs text-gray-500">
                رسید پرداخت به این ایمیل فرستاده می شود
              </p>
            </div>
          </div>
          <div className="my-8 md:w-8/12 md:mr-16 mr-0 flex items-center">
            <input
              type="text"
              className=" py-1 px-4 border border-gray-300 rounded-lg w-10/12"
            />
          </div>
        </div>
        <div className="w-full mt-8mt-16 mr-8 flex justify-center">
          <button className="py-1 rounded-lg w-6/12 border border-green-500 bg-green-500 text-white">
            پرداخت{" "}
          </button>
          <button className="w-4/12 border border-red-500 text-white py-1 rounded-lg bg-red-500 mr-4">
            انصراف{" "}
          </button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Payment;
