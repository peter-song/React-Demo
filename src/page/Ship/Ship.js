/**
 * Created by songzhongkun on 2017/5/18.
 */
'use strict';

import React from 'react';

import UploadParticular from '../../component/ship/UploadParticular';
import BasicCard from '../../component/ship/BasicCard/index';

class Ship extends React.Component {

  getStyles() {

    const styles = {

      verticalCenter: {
        display: 'flex',
        alignItems: 'center',
      },

      regularFont: {
        fontWeight: 400,
        fontSize: 14,
        color: 'rgba(0,0,0,0.65)',
      },

      boldFont: {
        fontWeight: 400,
        fontSize: 14,
        color: 'rgba(0,0,0,0.75)',
      },

      blueFont: {
        fontWeight: 400,
        fontSize: 14,
        color: '#4990e2',
      },

      content: {
        padding: 20,
      },

      commonTable: {
        marginTop: 24,
        border: '1px solid #D9D9D9',
      },

      commonTableTitle: {
        fontWeight: 400,
        fontSize: 16,
        color: 'rgba(0,0,0,0.75)',
        padding: '11px 16px',
        background: '#F7F7F7',
      },

      commonTableContent: {
        padding: 20,
      },

      icon: {
        color: '#f5a623',
      },

    };

    return styles;
  }

  state = {
    shipDetail: {},
  };

  renderUploadElem() {

    const props = {
      hasUpload: true,
    };

    return (
      <UploadParticular {...props}/>
    );
  }

  renderShipBasicDataElem(shipDetail) {

    const props = {
      title: 'Ship Basic Data',
      data: [
        {
          key: 'IMO',
          value: shipDetail.imo ? shipDetail.imo : '-',
        },
        {
          key: 'Ship Name',
          value: shipDetail.name ? shipDetail.name : '-',
        },
        {
          key: 'Flag',
          value: 'China',
        },
        {
          key: 'Ship Type',
          value: 'LPG Tanker',
        },
        {
          key: 'LOA',
          value: '300',
          unit: 'M',
        },
        {
          key: 'Beam',
          value: '65',
          unit: 'M',
        },
        {
          key: 'GRT',
          value: '300',
          unit: 'MT',
        },
        {
          key: 'NRT',
          value: '300',
          unit: 'MT',
        },
        {
          key: 'DWT',
          value: '300',
          unit: 'MT',
        },
      ],
      star: true,
    };

    return <BasicCard {...props}/>;

  }

  renderShipCompanyInfoElem() {

    const props = {
      title: 'Ship Company Information',
      data: [
        {
          key: 'Ship Owner',
          value: 'you are the apple of my eye',
        },
        {
          key: 'Ship Management',
          value: 'you are the apple of my eye',
        },
        {
          key: 'Ship Operation',
          value: 'you are the apple of my eye',
        },
        {
          key: 'DOC Company',
          value: 'you are the apple of my eye',
        },
        {
          key: 'Ship Registry Company',
          value: 'you are the apple of my eye',
        },
        {
          key: 'Ship Tech.Management',
          value: 'you are the apple of my eye',
        },
      ],
      width: '100%',
      maxIndex: 0,
      leftWidth: 180,
    };

    return <BasicCard {...props}/>;
  }

  renderShipContactDetailElem() {

    const props = {
      title: 'Ship Contact Detail',
      data: [
        {
          key: 'Inmarsat-C',
          value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        },
        {
          key: 'Telephone',
          value: '+86 21 88888888',
        },
        {
          key: 'Email',
          value: 'ship2017@ship.com',
        },
        {
          key: 'Fax',
          value: '+86 21 66666666',
        },
        {
          key: 'TLX',
          value: 'LDSDDDF999',
        },
      ],
    };

    return <BasicCard {...props}/>;
  }

  renderShipDetailedDetailElem() {

    const title = 'Ship Detailed Information';

    const data = [
      {
        title: 'Ship Main Data',
        content: [
          {
            key: 'Call Sign',
            value: 'xxxxxxxxxxxxxxxxx',
          },
          {
            key: 'MMSI',
            value: 'xxxxxxxxxxxxxxxxx',
          },
          {
            key: 'Summer Draft',
            value: '300',
            unit: 'M',
          },
          {
            key: 'P&I Club',
            value: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
          },
          {
            key: 'Class Scociety',
            value: 'xxxxxxxxxxxxxxxxx',
          },
        ],
      },
      {
        title: 'Ship Displacement Data',
        content: [
          {
            key: 'Light Ship Displacement',
            value: '200',
            unit: 'MT',
          },
          {
            key: 'Tons Per Centimeter of Immersion',
            value: '100',
            unit: 'T',
          },
          {
            key: 'Laden Ship Displacementt',
            value: '300',
            unit: 'MT',
          },
        ],
      },
      {
        title: 'Ship Engine Data',
        content: [
          {
            key: 'Main Engine Type',
            value: 'xxxxxxxxxxxxxx',
          },
          {
            key: 'Main Engine Power',
            value: '500',
            unit: 'PRM',
          },
          {
            key: 'Aux Engine Type',
            value: 'xxxxxxxxxxxxxx',
          },
          {
            key: 'Aux Engine Power',
            value: '500',
            unit: 'PRM',
          },
        ],
      },
      {
        title: 'Ship Propeller Data',
        content: [
          {
            key: 'Propeller Type',
            value: 'xxxxxxxxxxxxxx',
          },
        ],
      },
      {
        title: 'Ship Speed Data',
        content: [
          {
            key: 'The Fastest Speed',
            value: '200',
            unit: 'KNOT',
          },
          {
            key: 'The Economical Speed',
            value: '160',
            unit: 'KNOT',
          },
        ],
      },
    ];

    const styles = this.getStyles();

    return (
      <div style={styles.commonTable}>
        <div style={styles.commonTableTitle}>{title}</div>
        <div style={styles.commonTableContent}>
          {
            data.map((item, i) => {
              let leftWidth = 100, rightWidth = 100;
              if (i == 1) {
                leftWidth = 170;
                rightWidth = 220;
              } else if (i == 2) {
                leftWidth = rightWidth = 130;
              } else if (i == 4) {
                leftWidth = 130;
                rightWidth = 150;
              }
              const props = {
                title: item.title,
                data: item.content,
                subTable: true,
                marginTop: 0,
                leftWidth,
                rightWidth,
              };
              return <BasicCard key={i} {...props}/>;
            })
          }
        </div>
      </div>
    );
  }

  renderShipBuilderInfoElem() {

    const props = {
      title: 'Ship Builder Information',
      data: [
        {
          key: 'Ship Builder',
          value: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        },
        {
          key: 'Hull No.',
          value: '+86 21 88888888',
        },
        {
          key: 'Date of Keel Laid',
          value: '12/FEB/2017',
        },
        {
          key: 'Date of Launch',
          value: '30/JUN/2017',
        },
        {
          key: 'Date of Delivery',
          value: '26/MAY/2017',
        },
        {
          key: 'Date of Main Conversion',
          value: '30/JUN/2017',
        },
      ],
      leftWidth: 150,
      rightWidth: 200,
    };

    return <BasicCard {...props}/>;
  }


  render() {

    const styles = this.getStyles();

    const {shipDetail} = this.state;

    return (
      <div style={styles.content}>
        {this.renderUploadElem(shipDetail)}
        {this.renderShipBasicDataElem(shipDetail)}
        {this.renderShipCompanyInfoElem(shipDetail)}
        {this.renderShipContactDetailElem(shipDetail)}
        {this.renderShipDetailedDetailElem(shipDetail)}
        {this.renderShipBuilderInfoElem(shipDetail)}
      </div>
    );

  }
}

export default Ship;