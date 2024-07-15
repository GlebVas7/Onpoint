import { useState } from 'react';
import m from './App.module.css';
import Header from './components/Header/Header.jsx';
import FirstSlide from './components/Slides/FirstSlide/FirstSlide.jsx';
import SecondSlide from './components/Slides/SecondSlide/SecondSlide.jsx';
import ThirdSlide from './components/Slides/ThirdSlide/ThirdSlide.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
    const [slide, setSlide] = useState(0);
    const totalSlide = 3;
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);

    const handleTouchStart = (e) => {
        if (e.type === 'touchstart') {
            setTouchStart(e.targetTouches[0].clientX);
        } else {
            setTouchStart(e.clientX);
        }
        setIsSwiping(true);
    };

    const handleTouchMove = (e) => {
        if (!isSwiping) return;
        if (e.type === 'touchmove') {
            setTouchEnd(e.targetTouches[0].clientX);
        } else if (e.buttons === 1) {
            setTouchEnd(e.clientX);
        }
    };

    const handleTouchEnd = () => {
        if (!isSwiping) return;
        if (touchStart - touchEnd > 75) {
            if (slide < totalSlide - 1) {
                setSlide(slide + 1);
            }
        } else if (touchStart - touchEnd < -75) {
            if (slide > 0) {
                setSlide(slide - 1);
            }
        }
        setIsSwiping(false);
    };

    const goToFirstSlide = () => {
        setSlide(0);
    };

    const goToNextSlide = () => {
        if (slide < totalSlide - 1) {
            setSlide(slide + 1);
        }
    };
    const getBackgroundPosition = () => {
        return `${slide * -100}vw 0`;
    };

    return (
        <div
            className={m.wrapper}
            style={{ backgroundPosition: getBackgroundPosition() }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleTouchStart}
            onMouseMove={handleTouchMove}
            onMouseUp={handleTouchEnd}
        >
            <Header goToFirstSlide={goToFirstSlide} />
            <div className={m.slider} style={{ transform: `translateX(-${slide * 100}%)` }}>
                <div className={m.slide}><FirstSlide goToNextSlide={goToNextSlide} /></div>
                <div className={m.slide}><SecondSlide /></div>
                <div className={m.slide}><ThirdSlide /></div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
