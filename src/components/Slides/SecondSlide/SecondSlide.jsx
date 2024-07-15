import s from './SecondSlide.module.css';
import Scroll from './Scroll/Scroll.jsx';
import backText from '../../../assets/body_txt.svg';
import SpermSecondSlide from './SpermSecondSlide/SpermSecondSlide.jsx';

export default function SecondSlide() {
    return (
        <>
            <div className={s.wrapper}>
                <div className={s.titleText}>
                    <p>ТЕКСТ</p>
                    <p>СООБЩЕНИЯ</p>
                </div>
                <div className={s.mainContent}>
                    <Scroll />
                    <div className={s.backText}>
                        <img src={backText} alt="" className={s.backTextImg} />
                    </div>
                    <SpermSecondSlide />
                </div>
            </div>
        </>
    );
}