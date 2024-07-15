import logoFooter from '../../assets/Shape 1.svg';
import footer from './Footer.module.css';

export default function Footer() {
    return (
        <div className={footer.logoFoot}>
            <img src={logoFooter} alt="" />
        </div>
    );
}