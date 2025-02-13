import React from 'react';
import { FaHome, FaUser, FaInstagram, FaYoutube, FaTwitter, FaFacebook, FaTelegramPlane } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import ContactEmail from './ContactEmail';

const ProfileSection = () => {
    return (
        <section className="relative pt-[230px] pb-24">
            {/* Background Image */}
            <img src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" className="w-full absolute top-0 left-0 z-0 h-80 object-cover" alt="Coding GIF" />
           

            {/* Content */}
            <div className="w-full mx-auto px-6 md:px-8">
                {/* User Avatar */}
                <div className="flex items-center justify-center relative z-10 mb-2.5">
                    <img
                        src="https://scontent.fdac31-1.fna.fbcdn.net/v/t1.6435-9/57034730_285019035760717_2703654450811109376_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=sALGDIDbddoQ7kNvgETmhhX&_nc_oc=AdiHSxzQ6KLybaNh93N-ihh0uC-UiZxm-6maRNo9R9aoPirq1EWCLWaQthX4LBB8-4c&_nc_zt=23&_nc_ht=scontent.fdac31-1.fna&_nc_gid=AtAkvHtigoqXtNR6BsCw5xw&oh=00_AYB72RA32amnRUUEl_n1s3HyHxhtcRVJY-eeujer1gWQjg&oe=67D2B9EF"
                        alt="tawheedshimul"
                        className="border-4 border-solid h-[165px] border-white rounded-full object-cover"
                    />
                </div>

                {/* Navigation and Buttons */}
                <div className="flex flex-col   sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                <div className="flex items-center">
  <a 
    href="mailto:tawheedshimul@gmail.com" 
    className="flex items-center text-white hover:text-teal-600 transition duration-300"
  >
    <MdEmail className="mt-0.5 mr-2 text-4xl bg-teal-400 rounded-full p-2" />
    <span className="cursor-pointer hover:underline ">tawheedshimul@gmail.com</span>
  </a>
</div>


                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                        {/* <button className="rounded-full border border-solid border-gray-300 bg-gray-50 py-3 px-4 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-50 hover:bg-gray-100 hover:border-gray-300">
                            Message
                        </button> */}
                        <button className="rounded-full  bg-teal-400 py-3 px-4 text-sm font-semibold text-white whitespace-nowrap shadow-sm shadow-transparent transition-all duration-2 hover:bg-teal-600">
                            Download CV
                        </button>
                    </div>
                </div>

                {/* User Info */}
                <h3 className="text-center font-manrope font-bold text-3xl leading-10 text-gradient mb-3">
                    Md Tawheed Shimul
                </h3>
                <p className="font-normal text-base leading-7 text-gray-500 text-center mb-8">
                    A Web developer & writter.
                </p>

                {/* email  */}

                <ContactEmail />

                {/* Social Media Icons */}
                <div className="flex items-center justify-center gap-5">
                    
                    <a
                        href="https://www.facebook.com/tawheedshimul"
                        className="p-3 rounded-full border border-solid border-gray-300 bg-gray-50 group transition-all duration-500 hover:bg-teal-500"
                    >
                        <FaFacebook className="text-indigo-600 group-hover:text-white" />
                    </a>
                    <a
                        href="#instagram"
                        className="p-3 rounded-full border border-solid border-gray-300 bg-gray-50 group transition-all duration-500 hover:bg-teal-500"
                    >
                        <FaInstagram className="text-red-600 group-hover:text-white" />
                    </a>
                    
                </div>
            </div>
        </section>
    );
};

export default ProfileSection;