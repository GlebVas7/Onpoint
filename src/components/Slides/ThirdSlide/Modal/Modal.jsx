import { useRef, useEffect, useState } from 'react';
import m from './Modal.module.css';
import body from '../../../../assets/body.svg';
import btnClose from '../../../../assets/btn_close.svg';
import btn_1 from '../../../../assets/btn_1.svg';
import btn_2 from '../../../../assets/btn_next.svg';

export default function Modal({ visible, setVisible, closeModal }) {
    const modalRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(0);
    const pages = [
        {
            indexText: [
                '01',
                '02',
                '03',
            ],
            details: [
                'Lorem ipsum dolor sit amet, \n consectetur adipiscing elit',
                'Faucibus pulvinar elementum integer enim',
                'Faucibus pulvinar elementum integer enim',
            ],
        },
        {
            indexText: [
                '04',
                '05',
                '06',
            ],
            details: [
                'Mi bibendum neque egestas congue quisque egestas diam',
                'Venenatis lectus magna fringilla urna',
                'Venenatis lectus magna fringilla urna',
            ],
        },

    ];

    useEffect(() => {
        if (visible) {
            modalRef.current.classList.add(m.show);
        } else {
            modalRef.current.classList.remove(m.show);
        }
    }, [visible]);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % pages.length);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length);
    };

    return (
        <div
            className={`${m.wrapper} ${visible ? m.show : ''}`}
            onClick={(e) => {
                if (modalRef.current.contains(e.target)) {
                    return;
                }
                setVisible(closeModal());
            }}
        >
            <div className={m.content} ref={modalRef}>
                <img src={body} alt="" className={m.bodyImg} />
                <div className={m.text}>
                    <div className={m.textUp}>
                        <p>Преимущества</p>
                    </div>
                    <div className={m.textDown}>
                        <p>BREND<span>XY</span></p>
                    </div>
                </div>
                <div className={m.textAndNum}>
                    {pages[currentPage].details.map((detail, index) => (
                        <div key={index}>
                            <div className={m.number}>{pages[currentPage].indexText[index]}</div>
                            <div className={m.textNumber}>
                                <p>{detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <img src={btnClose} alt="" className={m.close} onClick={() => setVisible(closeModal)} />

                <div className={m.pagination}>
                    <img src={btn_1} alt="" onClick={(e) => {
                        prevPage();
                        e.stopPropagation();
                    }} />
                    {pages.map((_, index) => (
                        <span
                            key={index}
                            className={`${m.dot} ${index === currentPage ? m.active : ''}`}
                        ></span>
                    ))}
                    <img src={btn_2} alt="" onClick={(e) => {
                        nextPage();
                        e.stopPropagation();
                    }} />
                </div>
            </div>
        </div>
    );
}
