import React from 'react';
import {Card} from 'react-bootstrap';
import HawksBeatHornets from './articles/HawksBeatHornets';
import styles from './App.css';

export default function Articles(){
  return(
    <>
    <div className={'container'}>
      <div className={'header_container'}>
      <h1 className={'header_text'}>Articles</h1>
      </div>
    </div>

    <div className={'card_container normal_card_header'}>

      <a href="/#/hornetsvhawks">
      <Card>
      <Card.Title>Hornets Fall In Play-In For Second Year In A Row</Card.Title>
      <Card.Img variant="top" className={'pictures'} src={'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_1200%2Cx_2278%2Cy_523/MTg1NDI5Nzc1MzA3Nzc3NTUx/usatsi_17204632.jpg'}/>
      </Card>
      </a>

      <a href="/#/awards">
      <Card>
      <Card.Title>2021-2022 NBA Awards</Card.Title>
      </Card>
      </a>

    </div>
    </>
  )
}
