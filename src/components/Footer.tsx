import Image from "next/image";
import gardenCareImg from "../../public/footer_img/footer_img1.png"
import plantRenovation from "../../public/footer_img/footer_img2.png"
import wateringGarden from "../../public/footer_img/footer_img2.png"
import Button from "./ui/GreenBtn";
import { footerList1, footerList2, footerList3 } from "@/data/data";
import Link from "next/link";
import weAccept from '../../public/footer_img/we-accept.png'

export default function Footer() {
    return (
        <footer className="mt-20">
            <section>
                <div className="flex gap-12">
                    <div className="flex text-sm gap-6">
                        <div className="flex flex-col text-center gap-2">
                            <Image
                                src={gardenCareImg}
                                alt=""
                                width={100}
                                height={100}
                            />
                            <div>
                                <h2 className="font-bold">Garden Care</h2>
                                <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                            </div>
                        </div>

                        <div className="flex flex-col text-center gap-2">
                            <Image
                                src={plantRenovation}
                                alt=""
                                width={100}
                                height={100}
                            />
                            <div>
                                <h2 className="font-bold">Plant Renovation</h2>
                                <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                            </div>
                        </div>

                        <div className="flex flex-col text-center gap-2">
                            <Image
                                src={wateringGarden}
                                alt=""
                                width={100}
                                height={100}
                            />
                            <div>
                                <h2 className="font-bold">Watering Garden</h2>
                                <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2>Would you like to join newsletters?</h2>
                        <div className="flex gap-3 w-fit">
                            <input className="shadow-master px-3 rounded" type="text" placeholder="Enter your email address" />
                            <Button className="px-6 py-3 ">Join</Button>
                        </div>
                        <p>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!</p>
                    </div>
                </div>

                <div className="flex gap-20 bg-green bg-opacity-10 text-black items-center py-6 px-12 mt-6">
                    <svg width="150" height="35" viewBox="0 0 150 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_2_71)">
                            <path d="M17.15 0C7.67748 0 0 7.67746 0 17.15C0 26.0201 6.73548 33.3175 15.3711 34.207C14.8496 29.9134 15.0436 26.4001 15.7067 23.5135C15.3347 21.7225 14.4898 19.0703 12.5734 17.1864C12.5734 17.1864 13.8348 19.0784 14.5181 21.6214C14.5181 21.6255 14.5221 21.6295 14.5221 21.6335C14.5949 21.9044 14.6596 22.1793 14.7162 22.4623C14.7283 22.527 14.7404 22.5917 14.7526 22.6604C14.8051 22.9515 14.8536 23.2426 14.886 23.5418C5.19513 22.3532 3.12921 13.6569 3.35561 10.3781C13.665 10.9482 15.7754 17.8292 16.0827 22.0985C19.4585 11.0412 30.1843 10.4024 31.0697 10.3781C31.4538 18.8763 25.1509 25.5026 17.6149 26.0807C17.6635 25.8503 17.7201 25.6198 17.7767 25.3934C17.7928 25.3247 17.813 25.26 17.8333 25.1913C17.8777 25.0296 17.9222 24.8679 17.9748 24.7061C17.995 24.6374 18.0192 24.5646 18.0394 24.4959C18.096 24.318 18.1567 24.1442 18.2173 23.9663C18.2335 23.9259 18.2456 23.8854 18.2618 23.845C18.3386 23.6348 18.4195 23.4326 18.5003 23.2305C18.5084 23.2143 18.5125 23.1941 18.5205 23.1779C18.5205 23.1779 18.5205 23.1779 18.5246 23.1779C20.4571 18.5043 24.0229 15.4439 24.0229 15.4439C17.0247 19.4868 15.8441 29.9983 15.6582 34.2231C16.1514 34.2676 16.6446 34.2999 17.15 34.2999C26.6225 34.2999 34.3 26.6225 34.3 17.15C34.3 7.67746 26.6225 0 17.15 0Z" fill="#46A358" />
                            <path d="M46.7037 10.7454C48.9718 10.7454 50.8235 11.7197 52.0242 13.4986L49.7764 15.4109C48.9718 14.287 47.9975 13.7048 46.6471 13.7048C44.5691 13.7048 43.2753 15.0713 43.2753 17.1534C43.2753 19.2719 44.6418 20.695 46.8372 20.695C48.0177 20.695 48.9556 20.2826 49.554 19.5912V19.0091H46.6673V16.2356H52.7762V20.133C52.194 21.1639 51.3693 21.9887 50.3019 22.6234C49.2346 23.242 48.0339 23.5614 46.7037 23.5614C42.9923 23.618 39.9237 20.7313 39.9763 17.1534C39.9197 13.5956 42.9923 10.6888 46.7037 10.7454Z" fill="#46A358" />
                            <path d="M61.9576 23.3316L59.168 19.4908H57.8379V23.3316H54.6157V10.9684H59.4672C62.2204 10.9684 64.2459 12.6543 64.2459 15.2215C64.2459 16.7376 63.5141 17.995 62.2972 18.7429L65.5558 23.3316H61.9576ZM57.8338 16.681H59.4833C60.3809 16.681 60.963 16.0988 60.963 15.2215C60.963 14.3442 60.3809 13.7782 59.4833 13.7782H57.8338V16.681Z" fill="#46A358" />
                            <path d="M66.8333 10.9684H75.4124V13.8712H70.0555V15.5773H73.876V18.2739H70.0555V20.4288H75.6388V23.3316H66.8333V10.9684Z" fill="#46A358" />
                            <path d="M77.6441 10.9684H86.2231V13.8712H80.8663V15.5773H84.6868V18.2739H80.8663V20.4288H86.4495V23.3316H77.6441V10.9684Z" fill="#46A358" />
                            <path d="M99.4192 10.9683V23.5579H98.3882L91.681 17.057V23.3315H88.4588V10.7419H89.4897L96.197 17.1499V10.9683H99.4192Z" fill="#46A358" />
                            <path d="M103.264 19.135C103.996 20.1094 104.764 20.7279 106.017 20.7279C106.862 20.7279 107.291 20.4288 107.291 19.8264C107.291 19.2846 107.008 19.1148 106.033 18.6822L104.76 18.1203C102.718 17.2187 101.631 16.0584 101.631 14.3927C101.631 12.2014 103.43 10.7379 105.957 10.7379C107.998 10.7379 109.442 11.7123 110.19 13.2283L108.035 14.8778C107.436 13.9803 106.874 13.5679 105.993 13.5679C105.318 13.5679 104.889 13.8307 104.889 14.3563C104.889 14.8051 105.152 15.0517 105.957 15.367L107.38 15.9654C109.535 16.867 110.545 17.9505 110.545 19.6929C110.545 22.0904 108.576 23.5539 106.009 23.5539C103.782 23.5539 101.982 22.4866 101.081 20.7805L103.264 19.135Z" fill="#46A358" />
                            <path d="M112.393 10.9684H115.615V15.4843H120.131V10.9684H123.353V23.3316H120.131V18.3871H115.615V23.3316H112.393V10.9684Z" fill="#46A358" />
                            <path d="M131.843 10.7419C135.441 10.6651 138.607 13.6084 138.53 17.1499C138.603 20.7279 135.441 23.6145 131.843 23.5579C128.229 23.6145 125.116 20.7279 125.193 17.1499C125.116 13.6084 128.229 10.6692 131.843 10.7419ZM131.859 13.7014C129.874 13.7014 128.488 15.1083 128.488 17.1499C128.488 18.1809 128.807 19.0218 129.426 19.6606C130.044 20.2791 130.869 20.5985 131.859 20.5985C133.772 20.5985 135.231 19.2118 135.231 17.1499C135.235 15.1083 133.772 13.7014 131.859 13.7014Z" fill="#46A358" />
                            <path d="M140.374 10.9684H145.226C147.979 10.9684 150.004 12.6543 150.004 15.2215C150.004 17.7524 147.926 19.4908 145.226 19.4908H143.596V23.3316H140.374V10.9684ZM145.242 16.681C146.139 16.681 146.721 16.0988 146.721 15.2215C146.721 14.3442 146.139 13.7782 145.242 13.7782H143.592V16.681H145.242Z" fill="#46A358" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_71">
                                <rect width="150" height="34.2999" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.0918 8.92531C12.0918 7.77425 11.1591 6.84155 10.0081 6.84155C8.85787 6.84155 7.92517 7.77425 7.92517 8.92531C7.92517 10.0755 8.85787 11.0082 10.0081 11.0082C11.1591 11.0082 12.0918 10.0755 12.0918 8.92531Z" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.99959 17.5C7.58457 17.5 3.75 13.2989 3.75 8.8322C3.75 5.33539 6.54758 2.5 9.99959 2.5C13.4516 2.5 16.25 5.33539 16.25 8.8322C16.25 13.2989 12.4154 17.5 9.99959 17.5Z" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-black-200 text-sm 2xl:text-base">70 West Buckingham Ave. Farmingdale, NY 11735</p>
                    </div>
                    <div className="flex gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6208 7.51587C14.6208 7.51587 11.9457 10.7264 9.98919 10.7264C8.03347 10.7264 5.32837 7.51587 5.32837 7.51587" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M2.0434 9.97404C2.0434 4.27562 4.02753 2.37671 9.97991 2.37671C15.9323 2.37671 17.9164 4.27562 17.9164 9.97404C17.9164 15.6716 15.9323 17.5714 9.97991 17.5714C4.02753 17.5714 2.0434 15.6716 2.0434 9.97404Z" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-black-200 text-sm 2xl:text-base">contact@greenshop.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9604 2.29175C15.0446 2.63425 17.4813 5.06758 17.8279 8.15175" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11.9604 5.24414C13.4363 5.53081 14.5896 6.68497 14.8771 8.16081" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.41708 13.5825C0.668758 7.83352 1.48616 5.20096 2.09213 4.35263C2.16997 4.21552 4.08873 1.34323 6.1455 3.02839C11.2507 7.23288 4.78759 6.63843 9.0745 10.9261C13.3623 15.2128 12.7669 8.74996 16.9716 13.8541C18.6568 15.9117 15.7844 17.8303 15.6482 17.9073C14.7998 18.5141 12.1663 19.3315 6.41708 13.5825Z" stroke="#46A358" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-black-200 text-sm 2xl:text-base text-nowrap">+88 01911 717 490</p>
                    </div>
                </div>


                <div className="flex gap-36 py-6">
                    <div className="flex gap-24">
                        <div className="flex flex-col">
                            <h1 className="font-bold">My Account</h1>
                            <nav className="">
                                <ul className="flex flex-col">
                                    {footerList1.map((i, key) => {
                                        return (
                                            <li key={key}>
                                                <Link href="/" className="hover:text-green">{i}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="font-bold">Help & Guide</h1>
                            <nav>
                                <ul className="flex flex-col">
                                    {footerList2.map((i, key) => {
                                        return (
                                            <li key={key}>
                                                <Link href="/" className="hover:text-green">{i}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="font-bold">Categories</h1>
                            <nav>
                                <ul className="flex flex-col">
                                    {footerList3.map((i, key) => {
                                        return (
                                            <li key={key}>
                                                <Link href="/" className="hover:text-green">{i}</Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                        </div>
                    </div>

                    <div>
                        <h1 className="font-bold">We accept</h1>
                        <Image
                            src={weAccept}
                            width={200}
                            height={50}
                            alt="" />
                    </div>
                </div>
            </section>
        </footer>
    );
}