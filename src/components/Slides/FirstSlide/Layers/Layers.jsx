import l from './Layers.module.css';
import layer1 from '../../../../assets/Layer 7.svg';
import layer2 from '../../../../assets/pink_sperm_1.svg';
import layer3 from '../../../../assets/Layer 5.svg';
import layer4 from '../../../../assets/Layer 4 copy 2.svg';
import layer5 from '../../../../assets/bakti_1.svg';
import layer6 from '../../../../assets/Layer 4.svg';
import layer7 from '../../../../assets/Layer 8.svg';
import layer8 from '../../../../assets/Layer 4 copy.svg';
import layer9 from '../../../../assets/pink_sperm.svg';

export default function Layers() {
    return (
        <>
            <div className={l.imgOne}>
                <img src={layer1} alt="" />
            </div>
            <div className={l.imgTwo}>
                <img src={layer2} alt="" />
            </div>
            <div className={l.imgThree}>
                <img src={layer3} alt="" />
            </div>
            <div className={l.imgFour}>
                <img src={layer4} alt="" />
            </div>
            <div className={l.imgFive}>
                <img src={layer5} alt="" />
            </div>
            <div className={l.imgSix}>
                <img src={layer6} alt="" />
            </div>
            <div className={l.imgSeven}>
                <img src={layer7} alt="" className={l.circularMove} />
            </div>
            <div className={l.imgEight}>
                <img src={layer8} alt="" />
            </div>
            <div className={l.imgNine}>
                <img src={layer9} alt="" />
            </div>
        </>
    );
}