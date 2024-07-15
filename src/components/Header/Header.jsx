import h from './Header.module.css';
import globalLogo from '../../assets/global.svg';

export default function Header({ goToFirstSlide }) {
    return (
        <div className={h.buttonLogo}>
            <div className={h.logo}>
                <a onClick={goToFirstSlide}>
                    <img src={globalLogo} alt="" />
                </a>
            </div>
        </div>
    );
}