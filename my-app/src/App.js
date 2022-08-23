import {
    ConfigProvider,
    DatePicker,
    Radio,
    Space,
} from 'antd';
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css'
import './App.css'

const { RangePicker } = DatePicker;
moment.locale('en');

const Page = () => {

    return (
        <div className="locale-components">
            <Space direction="vertical" size={12}>
                <RangePicker />
                <RangePicker showTime />
                <RangePicker picker="week" />
                <RangePicker picker="month" />
                <RangePicker picker="quarter" />
                <RangePicker picker="year" />
            </Space>
        </div>
    );
};

const App = () => {
    const [locale, setLocal] = useState(enUS);

    const changeLocale = (e) => {
        const localeValue = e.target.value;
        setLocal(localeValue);

        if (!localeValue) {
            moment.locale('en');
        } else {
            moment.locale('zh-cn');
        }
    };

    return (
        <div>
            <div className="change-locale">
        <span
            style={{
                marginRight: 16,
            }}
        >
          Change locale of components:{' '}
        </span>
                <Radio.Group value={locale} onChange={changeLocale}>
                    <Radio.Button key="en" value={enUS}>
                        English
                    </Radio.Button>
                    <Radio.Button key="cn" value={zhCN}>
                        中文
                    </Radio.Button>
                </Radio.Group>
            </div>
            <ConfigProvider locale={locale}>
                <Page
                    key={
                        locale ? locale.locale : 'en'
                        /* Have to refresh for production environment */
                    }
                />
            </ConfigProvider>
        </div>
    );
};

export default App;