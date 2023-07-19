import React from 'react';
import { i18n } from 'Core/i18n';


const some = i18n.t('base:success');

const GoogleAuthView:React.FC = () => {
    return (
        <>
            {some}
        </>
    );
};

export default GoogleAuthView;

