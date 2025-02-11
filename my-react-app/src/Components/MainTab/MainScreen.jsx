import { useState } from "react";
import { Switch, FormControlLabel, Typography } from "@mui/material";
import { ChatBubbleOvalLeftEllipsisIcon, PhoneIcon, PaperClipIcon, PaperAirplaneIcon, FaceSmileIcon, VideoCameraIcon, EllipsisHorizontalIcon, PlusCircleIcon, UserIcon, StarIcon, ArchiveBoxIcon, MoonIcon } from "@heroicons/react/24/outline";
export default function MainScreen() {
    const[showprofile,setprofile]=useState(false);
    const[isCalling,setCalling] = useState(false);
    const [users, setUsers] = useState([
        {
            Name: 'John Doe',
            Message: 'Hello there!',
            notification: 2,
            time: '10:30 AM',
            image: 'https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar1.jpg'
        },
        {
            Name: 'Jane Smith',
            Message: 'How are you?',
            notification: 1,
            time: '11:15 AM',
            image: 'https://slek.laborasyon.com/demos/default/dist/media/img/woman_avatar1.jpg'
        },
        {
            Name: 'Alice Johnson',
            Message: 'See you later!',
            notification: 0,
            time: '12:00 PM',
            image: 'https://slek.laborasyon.com/demos/default/dist/media/img/woman_avatar2.jpg'
        },
        {
            Name: 'Bob Brown',
            Message: 'Good morning!',
            notification: 3,
            time: '9:00 AM',
            image: 'https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar2.jpg'
        },
        {
            Name: 'Charlie Davis',
            Message: 'Nice to meet you!',
            notification: 5,
            time: '1:45 PM',
            image: 'https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar3.jpg'
        }
    ]);
    const messages = [
        {
            name: "John",
            time: "01:35 PM",
            image: "https://randomuser.me/api/portraits/men/10.jpg",
            message: "Hey! How's your day going?",
            isMyMessage: false
        },
        {
            name: "Gowtham",
            time: "01:36 PM",
            image: "https://randomuser.me/api/portraits/men/20.jpg",
            message: "It's going great! Just working on a project.",
            isMyMessage: true
        },
        {
            name: "John",
            time: "01:40 PM",
            image: "https://randomuser.me/api/portraits/men/10.jpg",
            message: "Did you complete the project?",
            isMyMessage: false
        },
        {
            name: "Gowtham",
            time: "01:42 PM",
            image: "https://randomuser.me/api/portraits/men/20.jpg",
            message: "Almost done! Just adding the final touches.",
            isMyMessage: true
        },
        {
            name: "John",
            time: "01:45 PM",
            image: "https://randomuser.me/api/portraits/men/10.jpg",
            message: "Let me know if you need any help!",
            isMyMessage: false
        },
        {
            name: "Emily",
            time: "01:50 PM",
            image: "https://randomuser.me/api/portraits/women/30.jpg",
            message: "Hey guys! What's going on?",
            isMyMessage: false
        },
        {
            name: "Gowtham",
            time: "01:52 PM",
            image: "https://randomuser.me/api/portraits/men/20.jpg",
            message: "Hi Emily! Just discussing my project.",
            isMyMessage: true
        },
        {
            name: "Emily",
            time: "01:55 PM",
            image: "https://randomuser.me/api/portraits/women/30.jpg",
            message: "That sounds exciting! Need any suggestions?",
            isMyMessage: false
        }
    ];


    const Menu = () => {
        return (
            <div className="h-screen flex flex-col items-center justify-between p-2">
                <ChatBubbleOvalLeftEllipsisIcon className="text-blue-400 w-12 h-12" />
                <div className="flex flex-col space-y-3 mt-15">
                    <div className="relative group">
                        <div className=" px-3 py-1 hover:bg-gray-100 rounded-sm">
                            <div className="relative p-2">
                                <UserIcon className="w-6 h-6 text-blue" />
                                <span className=" absolute top-0 right-0 w-2 h-2 rounded-full bg-yellow-400"></span>
                            </div>
                        </div>
                        <div className=" absolute left-full ml-2 min-w-max transform -translate-y-1/2 top-1/2 px-3 py-1 bg-gray-400 rounded-sm text-sm text-white opacity-0 group-hover:opacity-100">User</div>
                    </div>
                    <div className=" relative group">
                        <div className="px-5 py-3 hover:bg-gray-100 rounded-sm">
                            <StarIcon className="w-6 h-6 text-blue" />
                        </div>
                        <div className=" absolute left-full ml-2 min-w-max transform -translate-y-1/2 top-1/2 px-3 py-1 bg-gray-400 rounded-sm text-sm text-white opacity-0 group-hover:opacity-100 z-2">Favorite</div>
                    </div>
                    <div className=" relative group">
                        <div className="px-5 py-3 hover:bg-gray-100 rounded-sm">
                            <ArchiveBoxIcon className="w-6 h-6 text-blue" />
                        </div>

                        <div className=" absolute left-full ml-2 min-w-max transform -translate-y-1/2 top-1/2 px-3 py-1 bg-gray-400 rounded-sm text-sm text-white opacity-0 group-hover:opacity-100 z-2">Archived</div>
                    </div>
                </div>
                <div className="flex-grow"></div>
                <div className=" relative group">
                    <div className="px-5 py-3 hover:bg-gray-100 rounded-sm">
                        <MoonIcon className="w-6 h-6 text-blue" />
                    </div>
                    <div className=" absolute left-full ml-2 min-w-max transform -translate-y-1/2 top-1/2 px-3 py-1 bg-gray-400 rounded-sm text-sm text-white opacity-0 group-hover:opacity-100 z-2">Dark Mode</div>
                </div>
            </div>
        );
    }
    const Chat = () => {
        return (
            <div>
                <div className="flex p-5">
                    <div className="text-2xl font-bold">Chats</div>
                    <div className="flex-grow"></div>
                    <div className="relative group">
                        <div className="px-3 py-2 border-1 border-gray-300 rounded-sm hover:bg-gray-200 cursor-pointer group-[div]:">
                            <UserIcon className="w-5 h-5 text-black" />
                        </div>
                        <div className=" absolute left-1/2 transform -translate-x-1/2 mt-3 bg-gray-400 min-w-max text-white py-1 px-3 rounded-sm text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">Friends</div>
                    </div>
                    <div className="relative flex flex-col items-center group">
                        <div className="px-3 py-2 border-1 border-gray-300 rounded-sm hover:bg-gray-200 cursor-pointer">
                            <PlusCircleIcon className="w-5 h-5 text-black" />
                        </div>
                        <div className="mt-3 bg-gray-400 text-white py-1 px-2 rounded-sm text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">New Chat</div>
                    </div>
                </div>
                <div className="flex mx-10 my-4 rounded-sm px-3 py-2 border border-gray-300 items-center hover:border-blue-500">
                    <input type="text" placeholder="Search chats" className=" outline-0" />
                </div>
            </div>
        );
    }
    const People = ({ Name, Message, notification, time, image }) => {
        return (
            <div className="border-b p-3 border-b-gray-200 flex overflow-auto  w-full  items-center justify-between space-x-3 hover:bg-gray-200 cursor-pointer">
                <div className="relative">
                    <img className="z-1 h-10 w-10 rounded-full" src={image} width={100} />
                    <span className=" absolute w-3 z-3 h-3 bg-green-400 top-0 right-0 border-2 border-white rounded-full"></span>
                </div>
                <div className="flex-1 ml-5 flex-col min-w-0">
                    <div className="text-lg text-blue-500 font-bold">{Name}</div>
                    <div className="text-gray-400">{Message}</div>
                </div>
                <div className="flex flex-col items-end space-x-3">
                    <div className=" bg-blue-500 items-center justify-center p-3 text-white text-sm flex w-6 h-6 rounded-full">{notification}</div>
                    <div className="text-sm text-blue-600 p-1">{time}</div>
                </div>
            </div>
        );
    }
    const TextArea = () => {
        const [Menu, setMenu] = useState(false);
        return (
            <div className="flex flex-col h-screen relative">
                <div className="flex p-4 border-b  border-gray-200 justify-between items-center">
                    <div>
                        <img className=" rounded-full w-15 h-15" src="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar3.jpg" width={100} />
                    </div>
                    <div className="flex-1 ml-4">
                        <div className="font-bold text-lg">Gowtham</div>
                        <div className="text-green-600  italic">typing...</div>
                    </div>

                    <div className="flex space-x-4 items-center">
                        <div className="relative group">
                            <div className=" border px-3 py-2 border-gray-300 rounded-sm hover:bg-gray-200" onClick={()=>setCalling(!isCalling)}>
                                <PhoneIcon className="w-5 h-5 text-green-600" />
                            </div>
                            <div className="text-sm  absolute left-1/2 transform -translate-x-1/2 bg-gray-400 text-white px-3 py-1 min-w-max mt-2 rounded-sm opacity-0 group-hover:opacity-100">Voice call</div>
                        </div>
                        <div className="relative group">
                            <div className="border px-3 py-2 border-gray-300 rounded-sm hover:bg-gray-200" >
                                <VideoCameraIcon className="w-5 h-5 text-yellow-500" />
                            </div>
                            <div className="text-sm bg-gray-400 px-3 py-1 min-w-max absolute left-1/2  transform -translate-x-1/2 mt-2 text-white rounded-sm opacity-0 group-hover:opacity-100">Video call</div>
                        </div>
                        <div className="relative inline-block" onClick={() => setMenu(!Menu)}>
                            <div className="border px-3 py-2 border-gray-300 rounded-sm hover:bg-gray-200">
                                <EllipsisHorizontalIcon className="w-5 h-5" />
                            </div>
                            {Menu && (
                                <div className="absolute right-6 w-40 rounded-md mt-2 bg-white border-t-gray-300 shadow-lg p-3 space-y-2">
                                    <div className="text-md text-black p-1 hover:bg-gray-200 rounded-sm" onClick={() => setprofile(!showprofile)}>Profile</div>
                                    <div className="text-md text-black p-1 hover:bg-gray-200 rounded-sm" onClick={() => setMenu(false)}>Add toarchive</div>
                                    <div className="text-md text-black p-1 hover:bg-gray-200 rounded-sm" onClick={() => setMenu(false)}>Delete</div>
                                    <hr className="text-gray-300" />
                                    <div className="text-md text-red-600 p-1 hover:bg-gray-200 rounded-sm" onClick={() => setMenu(false)}>Block</div>
                                </div>)}
                        </div>
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto bg-white w-full">
                    {messages.map((msg, index) => (
                        <div className=" p-5">
                            {msg.isMyMessage && (
                                <div className="flex flex-col space-y-5">
                                    <div className="flex space-x-5">
                                        <div className="h-10 w-10  rounded-full">
                                            <img className="rounded-full" width={100} src={msg.image} />
                                        </div>
                                        <div>
                                            <div className="text-md font-bold">{msg.name}</div>
                                            <div className="text-gray-500 text-sm italic">{msg.time}</div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-200 max-w-fit px-4 rounded-sm py-2">
                                        {msg.message}
                                    </div>
                                </div>)}
                            {!msg.isMyMessage && (
                                <div>
                                    <div className="flex flex-col items-end space-y-5">
                                        <div className="flex space-x-3">
                                            <div className="h-10 w-10  rounded-full">
                                                <img className="rounded-full" width={100} src={msg.image} />
                                            </div>
                                            <div>
                                                <div className="text-md font-bold">{msg.name}</div>
                                                <div className="text-gray-500 text-sm italic">{msg.time}</div>
                                            </div>
                                        </div>
                                        <div className="bg-blue-500  text-white max-w-fit px-4 rounded-sm py-2">
                                            {msg.message}
                                        </div>
                                    </div>
                                </div>)}
                        </div>))}
                </div>
                <div className="border-t  pb-10 pt-5 border-gray-200 flex items-center w-full space-x-5  px-10 justify-between">
                    <div className=" relative group">
                        <div className="px-4 py-2 rounded-sm bg-gray-200 hover:bg-gray-300 cursor-pointer">
                            <FaceSmileIcon className="w-6 h-6" />
                        </div>
                        <div className=" absolute bottom-full mb-2 min-w-max transform -translate-x-1/2 left-1/2 px-3 py-1 bg-gray-400 rounded-sm text-sm text-white opacity-0 group-hover:opacity-100">Emoji</div>
                    </div>
                    <div className="flex-grow p-2 border rounded-md border-gray-300 hover:border-blue-500">
                        <input
                            type="text"
                            placeholder="Write a message."
                            className=" outline-none w-full" />
                    </div>
                    <div className=" relative group">
                        <div className="px-4 py-2 rounded-sm bg-gray-200 hover:bg-gray-300 cursor-pointer">
                            <PaperClipIcon className="w-6 h-6" />
                        </div>
                        <div className=" absolute bottom-full min-w-max transform -translate-x-1/2 mb-2 left-1/2 px-3 py-1 bg-gray-400 rounded-sm text-sm text-white opacity-0 group-hover:opacity-100 z-2">Add files</div>
                    </div>
                    <div className="px-4 py-2 rounded-sm bg-blue-500 text-white hover:bg-blue-800 cursor-pointer">
                        <PaperAirplaneIcon className="w-6 h-6" />
                    </div>
                </div>
            </div>
        );
    }
    const Profile = () => {
        const [block, setBlock] = useState(true);
        const [mute, setMute] = useState(false);
        const [notification, setNotification] = useState(true);
    
        return (
            <div className="h-full border-l w-80 border-gray-200 p-5 relative space-y-5">
                {/* Profile Header */}
                <div className="flex px-3 py-2 w-full justify-between items-center">
                    <div className="text-2xl font-bold">Profile</div>
                    <div className="border border-gray-300 py-1 px-5 rounded-sm text-md text-red-500 cursor-pointer" onClick={()=>setprofile(!showprofile)}>
                        x
                    </div>
                </div>
                {/* Profile Image & Name */}
                <div className="grid place-items-center space-y-5">
                    <img
                        width={100}
                        className="rounded-full"
                        src="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar3.jpg"
                        alt="Profile"
                    />
                    <div className="flex items-center flex-col">
                        <div className="text-lg font-bold">Gowtham Malathi</div>
                        <div className="text-xs italic text-gray-500">Last Seen: Today</div>
                    </div>
                </div>
    
                {/* Profile Navigation */}
                <div className="flex pt-3 px-15 space-x-5">
                    <div className="border-blue-500 px-3 py-2 font-medium text-black hover:border-b-2 cursor-pointer">
                        About
                    </div>
                    <div className="border-blue-500 px-3 py-2 font-medium hover:border-b-2 cursor-pointer">
                        Media
                    </div>
                </div>
    
                {/* Profile Details */}
                <div className="flex flex-col space-y-7">
                    <div className="text-sm text-gray-500">
                        Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and
                        printing in place of English to emphasize design elements over content.
                    </div>
    
                    <div className="flex flex-col space-y-1">
                        <div className="text-md font-medium">Phone</div>
                        <div className="text-gray-500">(555) 555 55 55</div>
                    </div>
    
                    <div className="flex flex-col space-y-1">
                        <div className="text-md font-medium">City</div>
                        <div className="text-gray-500">Germany / Berlin</div>
                    </div>
    
                    <div className="flex flex-col space-y-1">
                        <div className="text-md font-medium">Website</div>
                        <div className="text-sm font-medium">www.gowtha.skcty.edu</div>
                    </div>
    
                    {/* Settings Section */}
                    <div className="flex flex-col space-y-3">
                        <Typography variant="h6" fontWeight="medium">
                            Settings
                        </Typography>
    
                        <FormControlLabel
                            control={<Switch checked={block} onChange={() => setBlock(!block)} color="primary" />}
                            label="Block"
                        />
    
                        <FormControlLabel
                            control={<Switch checked={mute} onChange={() => setMute(!mute)} color="default" />}
                            label="Mute"
                        />
    
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={notification}
                                    onChange={() => setNotification(!notification)}
                                    color="primary"
                                />
                            }
                            label="Get notification"
                        />
                    </div>
                </div>
            </div>
        );
    };
    const Call = () =>{
        return (
            <div className="bg-white grid place-items-center  py-10 px-35 space-y-10 rounded-md ">
                 <div >
                    <img  className="rounded-full" src="https://slek.laborasyon.com/demos/default/dist/media/img/man_avatar3.jpg" width={100}/>
                 </div>
                 <div className="text-2xl font-medium "> Gowtham Malathi <span className="text-green-500">Calling...</span></div>
                 <div className="flex space-x-10">
                    <div className="text-center rounded-full w-15 h-15 flex items-center justify-center text-white text-2xl bg-red-500" onClick={()=>setCalling(!isCalling)}>X</div>
                    <div className="text-center rounded-full w-15 h-15 flex items-center justify-center text-white text-2xl p-3 bg-green-500">
                    <PhoneIcon className="w-10 h-10 "/>
                    </div>
                 </div>
            </div>
        );
    }
    return (
        <div className="h-svh bg-white grid grid-cols-1 sm:grid-cols-[6rem_24rem_1fr_auto]">
            <div className="min-w-24">
                <Menu />
            </div>

            <div className=" border-1 border-gray-200">
                <Chat />
                {users.map((user, index) => (
                    <People
                        key={index}
                        Name={user.Name}
                        Message={user.Message}
                        notification={user.notification}
                        time={user.time}
                        image={user.image}
                    />
                ))}
            </div>

            <div className="">
                <TextArea />
            </div>
            {showprofile && (
            <div>
                <Profile />
            </div>)}
            { isCalling && (<div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-3">
                <Call />
             </div>
            )}
        </div>
    );
}