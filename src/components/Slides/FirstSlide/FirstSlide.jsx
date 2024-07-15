import f from './FirstSlide.module.css';
import buttonInText from '../../../assets/btn.svg';
import Layers from './Layers/Layers.jsx';


export default function FirstSlide(props) {
    return (
        <>
            <Layers />
            <div className={f.wrapper}>
                <div className={f.firstText}>
                    <p>ПРИВЕТ,</p>
                </div>
                <div className={f.mainText}>
                    <div className={f.textFirstLine}>
                        <p>
                            ЭТО <span>НЕ</span>
                        </p>

                    </div>
                    <div className={f.textSecLine}>
                        <p>
                            КОММЕРЧЕСКОЕ
                        </p>
                    </div>
                    <div className={f.thirdLine}>
                        <div className={f.text}>
                            <p>
                                ЗАДАНИЕ
                            </p>
                        </div>
                        <div className={f.button} onClick={props.goToNextSlide}>
                            <img src={buttonInText} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}