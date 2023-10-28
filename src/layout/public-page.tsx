import React from 'react'

export default function PublicPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header>
                <div>
                    
                </div>
            </header>
            <main>
                {children}
            </main>
            <footer>

            </footer>
        </>
    )
}