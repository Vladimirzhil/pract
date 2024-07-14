import React from 'react';
import { SlSocialVkontakte } from "react-icons/sl";

export default function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-text">
                <p>&copy; 2024 Гурманика. Все права защищены.</p>
                <p>Мы находимся по адресам:</p>
                <div className="footer-geo">
                    <iframe
                        title="Company Location"
                        src="https://yandex.by/map-widget/v1/-/CDGjY2~n"
                        width="500"
                        height="300"
                        style={{ border: 0, margin:'10px' }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                    <iframe
                        title="Company Location"
                        src="https://yandex.by/map-widget/v1/-/CDGWb0MB"
                        width="500"
                        height="300"
                        style={{ border: 0, margin:'10px'}}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                    <p>
                    Наши соц-сети: <a href="https://vk.com/gurmanika62" target="_blank" rel="noopener noreferrer">
                    <SlSocialVkontakte className='vk-icons'/></a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
