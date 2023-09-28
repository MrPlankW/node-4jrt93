import React, { memo } from 'react';
import { Card, Radio, Icon } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import styles from './Analysis.less';
import { Pie } from '@/components/Charts';


const ProportionSales = memo(
  ({ dropdownGroup, salesType, loading, salesPieData, handleChangeSalesType }) => (
    <Card
      loading={loading}
      className={styles.salesCard}
      bordered={false}
      style={{ marginBottom: 24 }}
      title={
        <FormattedMessage
          id="app.analysis.the-proportion-of-sales"
          defaultMessage="The Proportion of Sales"
        />
      }
      bodyStyle={{ padding: 24 }}
      extra={
        <div className={styles.salesCardExtra}>
          {dropdownGroup}
          <div className={styles.salesTypeRadio}>
            <Radio.Group value={salesType} onChange={handleChangeSalesType}>
              <Radio.Button value="all">
                <FormattedMessage id="app.analysis.channel.all" defaultMessage="ALL" />
              </Radio.Button>
              <Radio.Button value="online">
                <FormattedMessage id="app.analysis.channel.online" defaultMessage="Online" />
              </Radio.Button>
              <Radio.Button value="stores">
                <FormattedMessage id="app.analysis.channel.stores" defaultMessage="Stores" />
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
      }
      style={{ marginTop: 24 }}
    >
      <h4 style={{ marginTop: 10, marginBottom: 32 }}>
        <FormattedMessage id="app.analysis.sales" defaultMessage="Sales" />
      </h4>
      <Pie
        hasLegend
        subTitle={<FormattedMessage id="app.analysis.sales" defaultMessage="Sales" />}
        total={() => <span><Icon type="dollar" /> {salesPieData.reduce((pre, now) => now.y + pre, 0)}</span>}
        data={salesPieData}
        valueFormat={value => <span><Icon type="dollar" /> {value}</span>}
        height={270}
        lineWidth={4}
        style={{ padding: '8px 0' }}
      />
      
    </Card>
  )
);

export default ProportionSales;
