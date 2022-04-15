import React from 'react';
import {Card} from 'react-bootstrap';
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

      <a href="/#/awards">
      <Card>
      <Card.Title>2021-2022 NBA Awards</Card.Title>
      </Card>
      </a>

    </div>
    </>
  )
}
