import React from 'react'
import Link from 'next/link';


function Menu () {
    const data = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "About", url: "/about" },
        { id: 3, name: "Categories", subMenu: true },
        { id: 4, name: "Contact", url: "/contact" },
    ];

    const subMenuData = [
        { id: 1, name: "Jordan", doc_count: 11 },
        { id: 2, name: "Sneakers", doc_count: 8 },
        { id: 3, name: "Running shoes", doc_count: 64 },
        { id: 4, name: "Football shoes", doc_count: 107 },
    ];

    return (
        <ul className="hidden md:flex items-center gap-8  font-medium text-black">
            {data.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!!item?.subMenu ? 'submenu' : (
                            <li className="cursor-pointer">
                                <Link href={item?.url}>
                                    {item.name}
                                </Link>
                            </li>
                        )}
                    </React.Fragment>
                )
            })}
        </ul>
    )
}

export default Menu
