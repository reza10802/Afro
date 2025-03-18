import ButtonLogin from "../buttons/ButtonLogin";
import SearchBar from "../searchBar/SearchBar";
import "../component.css";
export default function Header(){
    return(
        <>
            <div className="flex flex-row items-center Header-top-part mb-5">
                <div className="basis-2/3 flex flex-row items-center">
                    <div className="basis-2/12"><img src="/poolLogo.png" className="w-15 h-15 rounded-4xl"/></div>
                    <div className="basis-10/12">
                        <SearchBar />
                    </div>
                </div>
                <div className="basis-1/3 text-center">
                    <div className="flex justify-end">
                        <ButtonLogin />
                    </div>
                </div>
            </div>
            <div className="flex flex-row Header-bottom-part gap-5 ">
                <div className="flex basis-3/4 h-10 ">
                    <div className="flex flex-row basis-1/5">
                        <span className="font-medium">رزرو استخر و پارک آبی</span>

                    </div>
                    <div className="flex flex-row basis-1/5 ">
                        <span className="flex border-b-2 border-b-blue-400 font-medium gap-2">رزرو سلامتکده
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" width="19px" height="24px" stroke="black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" fill="" />
                            </svg>
                        </span>
                    </div>
                    <div className="flex flex-row basis-1/5 gap-2">
                        <span className="font-medium">رزرو خدمات شنا</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" width="19px" height="24px" stroke="black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" fill="" />
                            </svg>
                        </span>
                    </div>
                    <div className="flex flex-row basis-1/5 gap-2">
                        <span className="font-medium">رزرو تفریحات ورزشی</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" width="19px" height="24px" stroke="black">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" fill="" />
                            </svg>
                        </span>
                    </div>
                    <div className="flex flex-row basis-1/5">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9495B5" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </span>
                        <span className="font-medium">مجموعه ها روی نقشه</span>
                    </div>
                </div>
                <div className="flex basis-1/4 justify-end gap-6 h-10 ">
                    <div className="flex justify-end gap-1">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FA8F91" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                            </svg>
                        </span>
                        <span className="font-medium gap-2 flex">با پول تیکت
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1" stroke="black" width="19px" height="24px">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" fill="" />
                            </svg>
                        </span>
                    </div>
                    <div className="flex gap-1">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FA8F91" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
                                </svg>
                            </span>
                        <span className="font-medium">مجله پول تیکت</span>
                    </div>
                </div>
            </div>
        </>
    )
}