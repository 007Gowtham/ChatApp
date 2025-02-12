import {ChatBubbleOvalLeftEllipsisIcon} from  "@heroicons/react/24/outline";

export default function SignUp()
{
    return (
        <div className="flex w-full  justify-center">
           <div className="w-md flex py-10 mt-20 relative justify-center flex-col items-center border border-gray-300 px-15">
             <div className=" absolute bottom-[93%] bg-white">
                <ChatBubbleOvalLeftEllipsisIcon className="w-20 h-20" />
             </div>
             <div className="text-2xl font-semibold pt-10">Create account</div>
             <div className="w-full flex flex-col space-y-5 py-5">
                <div className="border border-gray-300 py-1 px-2 w-full rounded-sm hover:border-blue-400">
                <input type="text" 
                placeholder="First Name" 
                className="outline-none"/>
                </div>
                <div className="border border-gray-300 py-1 px-2 w-full rounded-sm hover:border-blue-400">
                <input type="text" 
                placeholder="Last Name" 
                className="outline-none"/>
                </div>
                <div className="border border-gray-300 py-1 px-2 w-full rounded-sm hover:border-blue-400">
                <input type="text" 
                placeholder="Email" 
                className="outline-none"/>
                </div>
                <div className="border border-gray-300 py-1 px-2 w-full rounded-sm hover:border-blue-400">
                <input type="text" 
                placeholder="Password" 
                className="outline-none"/>
                </div>
                <div className="border border-gray-300 py-1 px-2 w-full rounded-sm bg-blue-500 hover:bg-blue-600 cursor-pointer">
                   <button className="text-center w-full text-white">Register</button>
                </div>
             </div>
             <div className="border-t w-full border-gray-300  m-5"></div>
             <div className="py-5 w-full text-center flex flex-col space-y-5">
                <div className="text-md text-gray-400">Already have an account?</div>
                <div >
                    <button className="border border-gray-300 px-3 text-sm py-1 rounded-sm hover:bg-gray-200 cursor-pointer">Sign in </button>
                </div>
             </div>
           </div>
        </div>
    );
}