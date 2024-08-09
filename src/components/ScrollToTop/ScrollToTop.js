import { useState, useEffect } from 'react';
import "./ScrollToTop.scss";

export default function ScrollToTop() {
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowBtn(true);
            }
            else {
                setShowBtn(false);
            }
        })
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {showBtn && <div className="scrollBtn" onClick={scrollToTop}>^</div>}
        </>
    );
}