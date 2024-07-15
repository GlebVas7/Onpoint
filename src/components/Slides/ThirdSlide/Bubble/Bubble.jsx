import first from '../../../../assets/1.svg';
import second from '../../../../assets/2.svg';
import third from '../../../../assets/3.svg';
import fourth from '../../../../assets/4.svg';
import fifth from '../../../../assets/5.svg';
import sixth from '../../../../assets/6.svg';
import seventh from '../../../../assets/7.svg';
import eighth from '../../../../assets/8.svg';

import b from './Bubble.module.css';

export default function Bubble() {
    return (
        <>
            <div className={b.first}>
                <img src={first} alt="" />
            </div>
            <div className={b.second}>
                <img src={second} alt="" />
            </div>
            <div className={b.third}>
                <img src={third} alt="" />
            </div>
            <div className={b.fourth}>
                <img src={fourth} alt="" />
            </div>
            <div className={b.fifth}>
                <img src={fifth} alt="" />
            </div>
            <div className={b.sixth}>
                <img src={sixth} alt="" />
            </div>
            <div className={b.seventh}>
                <img src={seventh} alt="" />
            </div>
            <div className={b.eighth}>
                <img src={eighth} alt="" />
            </div>
        </>
    );
}