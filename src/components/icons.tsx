import classNames from 'classnames';
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid';
export type IconName = 'DownloadIcon';

// HeroIcons
export const solidIcon = (i?: IconName, className?: string) => {

    const style = classNames('w-6 h-6', className);

    switch(i){
        case 'DownloadIcon':
            return <ArrowDownTrayIcon className={style} />
        default:
            return <></>
    }

}
