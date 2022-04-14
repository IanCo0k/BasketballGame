import React from 'react';
import {Card} from 'react-bootstrap';
import styles from '../App.css';

export default function Sixth(){
  return(
    <>
    <div className={'container'}>
      <div className={'header_container'}>
      <h1 className={'header_text'}>6th Man Of The Year</h1>
      </div>
    </div>

    <div className={'card_container normal_card_header'}>
      <Card className={'card'}>
        <Card.Title>Ian's Pick: Tyler Herro</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395725.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Need we explain...</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Jacob's Pick: Tyler Herro</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395725.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Need we explain...</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Nicks's Pick: Tyler Herro</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395725.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Need we explain...</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Chet's Pick: Tyler Herro</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4395725.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Averages starter numbers but doesn’t start, not close for anybody else.</div>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}
