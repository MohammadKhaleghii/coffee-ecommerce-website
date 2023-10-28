import React from 'react'
import { Link } from 'react-router-dom'

export default function PageLayout({ children }: { children: React.ReactNode }) {

    const navigationItem = [
        {
            title: "صفحه اصلی",
            href: "/",
        },
        {
            title: "فروشگاه",
            href: "/shop",
        },
        {
            title: "پشتیبانی",
            href: "/suppout",
        },
        {
            title: "درباره ما",
            href: "/about",
        },
        {
            title: "تماس ما",
            href: "/contact",
        },


    ]
    const navigationIcons = [
        {
            iconClassName: "fa-solid fa-user",
            href: "#"
        },
        {
            iconClassName: "fa-solid fa-cart-shopping",
            href: "#"
        },
        {
            iconClassName: "fas fa-search",
            href: "#"
        },

    ]
    return (
        <div className='max-w-screen-2xl min-w-[360px] my-0 mx-auto'>
            <header className='px-32 pt-8 bg-red-50'>
                <nav>
                    {navigationItem.map((navItem, index) => (
                        <ul key={index}>
                            <Link to={navItem.href} ><li>{navItem.title}</li></Link>
                        </ul>
                    ))}
                </nav>
                <div>
                    {navigationIcons.map((navItem, index) => (
                        <ul key={index}>
                            <Link to={navItem.href} ><i className={`${navItem.iconClassName}`} /></Link>
                        </ul>
                    ))}
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </div>
    )
}