import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUpload,
    faMessage,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';

import Search from '../Search';

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        sub_menu: {
            title: 'Language',
            data: [
                {
                    type: 'lag',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'lag',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const cx = classNames.bind(styles);

function Header() {
    const currentUser = true;

    const handlMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'lag':
                ///
                break;
            default:
        }
    };

    const USER_MENU = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@...',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,

        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="" />
                </div>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <div>
                            <Tippy delay={[[0, 300]]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <div>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </div>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handlMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/73b6ffaf0d09f5ee7f19dc3c07032034.jpeg?x-expires=1695578400&x-signature=aMrTBDMv%2BFcLqOCZ1o8EeKCvgSY%3D"
                                className={cx('user-avatar')}
                                alt=""
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-button')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
