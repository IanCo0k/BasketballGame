import React from 'react';
import {Card} from 'react-bootstrap';
import styles from '../App.css';

export default function COTY(){
  return(
    <>
    <div className={'container'}>
      <div className={'header_container'}>
      <h1 className={'header_text'}>Rookie Of The Year</h1>
      </div>
    </div>

    <div className={'card_container normal_card_header'}>
      <Card className={'card'}>
        <Card.Title>Ian's Pick: Cade Cunningham</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/1630595.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Cade is not only going to be the best player from this class, but he already is. A tall, shot creating, playmaking, defensive guard who we saw go toe to toe with KD and Jokic in the second half of this season. He's that dude.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Jacob's Pick: Evan Mobley</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/1630596.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Cade will be the best player out of this draft but what Mobley did to help the cavs reach the play-in and what he does on the defensive end will make him the winner of this award.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Nicks's Pick: Cade Cunningham</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/1630595.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>After a slow start, Cade had an incredible last few months that I thought put him over the top of Mobley.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Chet's Pick: Cade Cunningham</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/1630595.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Made an instant impact on the Pistons, and has put up numbers that haven’t been seen in many years.  Even though Pistons haven’t made the playoffs, Cade is a dynamic player who draws focus from other teams defensively unlike any other rookie.  Best rookie of his class.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Jared's Pick: Cade Cunningham</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/1630595.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}></div>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}
