import React from 'react';
import {Card} from 'react-bootstrap';

export default function NBAAwards(){
  return(
    <>
    <div className={'container'}>
      <div className={'header_container'}>
      <h1 className={'header_text'}>2021-2022 NBA Awards</h1>
      </div>
    </div>

    <div className={'card_container normal_card_header'}>
    <a href="/#/mvp">
      <Card>
      <Card.Title>Most Valuable Player</Card.Title>
      </Card>
    </a>

      <a href="/#/coty">
      <Card>
      <Card.Title>Coach Of The Year</Card.Title>
      </Card>
      </a>

      <a href="/#/roty">
      <Card>
      <Card.Title>Rookie Of The Year</Card.Title>
      </Card>
      </a>

      <a href="/#/dpoy">
      <Card>
      <Card.Title>Defensive Player Of The Year</Card.Title>
      </Card>
      </a>

      <a href="/#/sixth">
      <Card>
      <Card.Title>6th Man Of The Year</Card.Title>
      </Card>
      </a>

      <a href="/#/mip">
      <Card>
      <Card.Title>Most Improved Player</Card.Title>
      </Card>
      </a>
    </div>
    </>


  )
}
