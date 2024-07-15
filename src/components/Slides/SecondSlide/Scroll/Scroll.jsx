import { useRef, useEffect } from 'react';
import scroll from './Scroll.module.css';
import pinkScroll from '../../../../assets/scrollPink.svg';
import rectangle from '../../../../assets/Rectangle 1.svg';


export default function Scroll() {

    const textScrollRef = useRef(null);
    const pinkScrollRef = useRef(null);
    const rectangleRef = useRef(null);

    useEffect(() => {
        const textScrollElem = textScrollRef.current;
        const pinkScrollElem = pinkScrollRef.current;
        const rectangleElem = rectangleRef.current;

        const initialOffset = 190;
        let isDragging = false;
        let startDragY, startScrollTop;

        const handleTouchStart = (e) => {
            isDragging = true;
            startDragY = e.touches[0].clientY;
            startScrollTop = textScrollElem.scrollTop;
        };

        const handleTouchMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();

            const deltaY = e.touches[0].clientY - startDragY;
            const maxScroll = rectangleElem.clientHeight - pinkScrollElem.clientHeight + 20;
            const scrollPercentage = (startScrollTop + deltaY) / (textScrollElem.scrollHeight - textScrollElem.clientHeight);

            if (scrollPercentage >= 0 && scrollPercentage <= 1) {
                pinkScrollElem.style.top = `${initialOffset + scrollPercentage * maxScroll}px`;
                textScrollElem.scrollTop = scrollPercentage * (textScrollElem.scrollHeight - textScrollElem.clientHeight);
            }
        };

        const handleTouchEnd = () => {
            isDragging = false;
        };

        pinkScrollElem.addEventListener('touchstart', handleTouchStart);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleTouchEnd);

        return () => {
            pinkScrollElem.removeEventListener('touchstart', handleTouchStart);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    return (
        <div className={scroll.wrapper}>
            <div className={scroll.scrollContainer}>
                <div>
                    <div className={scroll.pinkScroll} ref={pinkScrollRef}>
                        <img src={pinkScroll} alt="" className={scroll.pinkScrollImg} />
                    </div>
                    <div className={scroll.rectangle}>
                        <img src={rectangle} alt="" className={scroll.rectangleImg} ref={rectangleRef} />
                    </div>
                </div>
            </div>

            <div className={scroll.textScroll} ref={textScrollRef}>
                <p><strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
                    tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget
                    felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
                    dignissim diam quis enim lobortis. Est sit amet facilisis magna.
                    Neque laoreet suspendisse interdum consectetur libero id.
                    Nec ullamcorper sit amet risus nullam eget felis eget.
                    Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.
                    Euismod quis viverra nibh cras pulvinar mattis nunc.
                    Massa massa ultricies mi quis. Sit amet massa vitae tortor
                    condimentum lacinia. Et malesuada fames ac turpis egestas
                    integer eget. Elementum pulvinar etiam non quam lacus suspendisse
                    faucibus interdum posuere.</p><br />

                <p>Amet justo donec enim diam vulputate ut pharetra sit.
                    Risus ultricies tristique nulla aliquet enim tortor at auctor.
                    Velit sed ullamcorper morbi tincidunt ornare massa.
                    Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim
                    diam quis enim. Gravida neque convallis a cras. Ut enim blandit
                    volutpat maecenas volutpat. Mauris sit amet massa vitae tortor
                    condimentum lacinia quis vel.</p>
            </div>
        </div>
    );
}
