import React, { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [categories, setCategories] = useState(null);

    return (
        <div
            className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between
             z-20 sticky top-0 transition-transform duration-300 ${show}`}
        >
            <Wrapper>
                <Link href="/">
                    <img src="/logo.svg" className="w-[40px] md:w-w[60px]" />
                </Link>
                <Menu />
            </Wrapper>
        </div>
    );
};

export default Header;
