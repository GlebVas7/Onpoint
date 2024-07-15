import firstLayer from '../../../../assets/Layer 3 copy 6.svg';
import secondLayer from '../../../../assets/Layer 3 copy 2.svg';
import thirdLayer from '../../../../assets/Layer 3 copy 4.svg';
import fourthLayer from '../../../../assets/Layer 3 copy 3.svg';
import fifthLayer from '../../../../assets/Layer 3 copy 5.svg';
import l from './SpermSecondSlidel.module.css';
import { useEffect, useRef, useState } from 'react';

export default function SpermSecondSlide() {
    const imgRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
            },
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);
    return (
        <div>
            <div className={l.firstS} ref={imgRef}>
                <img src={firstLayer} className={`${l.firstSImg} ${isVisible ? l.animate : ''}`} alt="" ref={imgRef} />
            </div>
            <div className={l.secondS}>
                <img src={secondLayer} alt="" className={`${l.secondSImg} ${isVisible ? l.animate : ''}`} />
            </div>
            <div className={l.tirdS}>
                <img src={thirdLayer} alt="" className={`${l.tirdSImg} ${isVisible ? l.animate : ''}`} />
            </div>
            <div className={l.fourthS}>
                <img src={fourthLayer} alt="" className={`${l.fourthSImg} ${isVisible ? l.animate : ''}`} />
            </div>
            <div className={l.fifthS}>
                <img src={fifthLayer} alt="" className={`${l.fifthSImg} ${isVisible ? l.animate : ''}`} />
            </div>
        </div>
    );
}