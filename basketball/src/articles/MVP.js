import React from 'react';
import {Card} from 'react-bootstrap';
import styles from '../App.css';

export default function MVP(){
  return(
    <>
    <div className={'container'}>
      <div className={'header_container'}>
      <h1 className={'header_text'}>Most Valuable Player</h1>
      </div>
    </div>

    <div className={'card_container normal_card_header'}>
      <Card className={'card'}>
        <Card.Title>Ian's Pick: Nikola Jokic</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Jokic is arguably the most skilled offensive big man of all time, and that was on full display this year. Jokic managed to come off an MVP last year and still improve in almost every major statistical category.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Nick's Pick: Nikola Jokic</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Jokic had a better season statistically than last season when he won MVP. You take him off this Nuggets team and they are bottom feeders in the west this year. </div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Jacob's Pick: Nikola Jokic</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Joker had too good of a year to not win it. Better statistical season then last year when he won MVP. Can’t even hate on him for getting a 6 seed because the second best player on that team is will Barton or Aaron Gordon.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Chet's Pick: Giannis Antetokounmpo</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/203507.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Leads team in minutes, points, field goals made, rebounds, and blocks and has led them to 3 seed in the conference.  Best player on floor night in night out</div>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}
