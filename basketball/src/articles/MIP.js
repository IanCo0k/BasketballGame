import React from 'react';
import {Card} from 'react-bootstrap';
import styles from '../App.css';

export default function MIP(){
  return(
    <>
    <div className={'container'}>
      <div className={'header_container'}>
      <h1 className={'header_text'}>Most Improved Player</h1>
      </div>
    </div>

    <div className={'card_container normal_card_header'}>
      <Card className={'card'}>
        <Card.Title>Ian's Pick: Ja Morant</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4279888.png&w=350&h=254'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Ja Morant went from non All-Star to superstardom in one season. He saw an extreme increase in what was already a good scoring average from last year, and lead the Grizzlies to the 2 seed out West. (Shoutout Tyus Jones for holding it down when Ja was hurt)</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Jacob's Pick: Ja Morant</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4279888.png&w=350&h=254'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>4. Very close here. Want to say Poole but Ja had too good of a season leading Memphis to a 2 seed.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Nicks's Pick: Dejounte Murray</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3907497.png&w=350&h=254'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Dejounte saw significant improvements across almost every statistical category, became the Spurs clear number 1 guy and closer, and continued to wreak havoc on the defensive end with his bionic-like wing span.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Chet's Pick: Jordan Poole</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/1629673.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Increased at every single statistical category since a season ago, and played himself into the starting lineup.  Started 7 games last season, to 51 games this year.  </div>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}
