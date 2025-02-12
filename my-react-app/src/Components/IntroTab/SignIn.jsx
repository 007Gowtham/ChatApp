import {ChatBubbleOvalLeftEllipsisIcon} from  "@heroicons/react/24/outline";
export  default function SignIn()
{
    return (
        <div className="flex justify-center items-center py-20">
        <div className="flex flex-col border border-gray-200 w-md justify-center items-center relative space-y-5 py-5 rounded-sm shadow-sm">
            <div className=" absolute bottom-[90%] bg-white">
                <ChatBubbleOvalLeftEllipsisIcon className="w-20 h-20"/>
            </div>
            <div className="mt-15 mb-10 text-xl font-bold">
                <div>Sign In</div>
            </div>
            <div className="flex  flex-col space-y-5">
            <div className=" border border-gray-300 rounded-md w-xs py-1 px-3  hover:border-blue-500">
                <input 
                type="text"
                placeholder="UserName or Email"
                className="outline-none "/>
            </div>
            <div  className=" border border-gray-300 rounded-md w-xs py-1 px-3  hover:border-blue-500">
                <input
                type="text"
                placeholder="Passwords"
                className="outline-none"/>
            </div>
            </div>
            <div className="flex w-full justify-between px-16 ">
                <div className="flex space-x-2">
                    <input type="checkbox"/>
                    <lable className="text-md">Remember me</lable>
                </div>
                <div>Reset password</div>
            </div>
            <div className="w-xs">
                <button className="bg-blue-500 w-xs py-1 rounded-md text-white  hover:bg-blue-600">Sign in</button>
            </div>
            <div className="w-full max-w-xs border-t border-gray-300"></div>
            <div className=" text-center text-gray-600 pt-3">
                <div>Login with social media account.</div>
                <div className="flex px-30 space-x-10 pt-3">
                    <div className="w-10 h-10 bg-pink-500 rounded-full grid place-items-center font-bold text-white">G</div>
                    <div className="w-10 h-10 bg-blue-500 rounded-full grid place-items-center font-bold text-white">F</div>
                </div>
            </div>
            <div className="w-full max-w-xs border-t border-gray-300"></div>
            <div className="flex  flex-col py-5 space-y-5">
                <div className="text-sm text-gray-400 font-medium">Don't have an account?</div>
                <div className="flex justify-center"><button className="text-sm rounded-sm border border-gray-300 py-0.5 px-2 hover:bg-gray-200">Register now</button></div>
            </div>
        </div>
        </div>
    );
} // add code here.