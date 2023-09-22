import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/73b6ffaf0d09f5ee7f19dc3c07032034.jpeg?x-expires=1695549600&x-signature=90m%2FgWD0%2FsyRGXpXOJY8jc1B6n4%3D"
                alt="name..."
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Lương Thuỳ Linh</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>liochio</span>
            </div>
        </div>
    );
}

export default AccountItem;
