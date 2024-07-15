import { useState } from 'react';
import image from '../../../assets/bottle.svg';
import t from './ThirdSlide.module.css';
import btn from '../../../assets/btn_third.svg';
import rec from '../../../assets/Rectangle 2 copy 2.svg';
import rec2 from '../../../assets/Rectangle 2 copy 3.svg';
import icon1 from '../../../assets/icon2.svg';
import icon2 from '../../../assets/icon1.svg';
import Bubble from './Bubble/Bubble.jsx';
import Modal from './Modal/Modal.jsx';


export default function ThirdSlide() {
    const [modalOpen, setModalOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const openModal = () => {

        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <>
            <div className={t.wrapper}>
                <div className={t.bottle}>
                    <img src={image} alt="" className={t.bottleImg} />
                </div>
                <Bubble />
                <div className={t.content}>
                    <div className={t.text}>
                        <div className={t.textUp}>
                            <p>Ключевое сообщение</p>
                        </div>
                        <div className={t.textDown}>
                            <p>BREND<span>XY</span></p>
                        </div>
                    </div>
                    <div className={t.info}>
                        <div className={t.infoTextLeft}>
                            <p>Ehicula ipsum a arcu</p>
                            <p>cursus vitae. Eu non</p>
                            <p>diam phasellus</p>
                            <p>vestibulum lorem sed</p>
                            <p>risus ultricies</p>
                        </div>
                        <div className={t.rectangleFirst}>
                            <img src={rec} alt="" className={t.rectangleFirstImg} />
                            <img src={icon1} alt="" className={t.iconFirst} />
                        </div>
                        <div className={t.infoTextRight}>
                            <div className={t.textRight}>
                                <p>A arcu</p>
                                <p>cursus vitae</p>
                            </div>
                            <div className={t.rectangleSecond}>
                                <img src={rec2} alt="" className={t.rectangleSecondImg} />
                                <img src={icon2} alt="" className={t.iconSecond} />
                            </div>
                            <div>
                                <img src={btn} alt="" className={t.btn} onClick={openModal} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal visible={modalOpen} setVisible={setVisible} closeModal={closeModal} />
        </>
    );
}
