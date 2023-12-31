import React from 'react';
import { Tooltip, Icon } from 'antd';
import { formatMessage } from 'umi-plugin-react/locale';
import styles from './ThemeColor.less';

const Tag = ({ color, check, ...rest }) => (
  <div
    {...rest}
    style={{
      backgroundColor: color,
    }}
  >
    {check ? <Icon type="check" /> : ''}
  </div>
);

const ThemeColor = ({ colors, title, value, onChange }) => {
  let colorList = colors;
  if (!colors) {
    colorList = [
      {
        key: 'black',
        color: '#111111',
      },
      {
        key: 'blue',
        color: '#3d63cc',
      },
      {
        key: 'purple',
        color: '#4a148c',
      },
    ];
  }
  return (
    <div className={styles.themeColor}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {colorList.map(({ key, color }) => (
          <Tooltip key={color} title={formatMessage({ id: `app.setting.themecolor.${key}` })}>
            <Tag
              className={styles.colorBlock}
              color={color}
              check={value === color}
              onClick={() => onChange && onChange(color)}
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default ThemeColor;
