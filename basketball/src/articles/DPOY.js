import React from 'react';
import {Card} from 'react-bootstrap';
import styles from '../App.css';

export default function DPOY(){
  return(
    <>
    <div className={'container'}>
      <div className={'header_container'}>
      <h1 className={'header_text'}>Defensive Player Of The Year</h1>
      </div>
    </div>

    <div className={'card_container normal_card_header'}>
      <Card className={'card'}>
        <Card.Title>Ian's Pick: Bam Adebayo</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://www.mountaindew.com/wp-content/uploads/2021/01/Bam-Adebayo.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Bam is the perfect modern day defensive big. Athletic enough to guard guards/wings when switched on, but can also bully bigs. He's the biggest reason the Heat were a top 5 defense.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Jacob's Pick: Marcus Smart</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/203935.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Celtics finished with a 2 seed and the defense and leadership of smart was a big reason for it. </div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Nicks's Pick: Marcus Smart</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/203935.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Celtics had an incredible second half and Smarts defense is a very big reason why.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Chet's Pick: Rudy Gobert</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3032976.png&w=350&h=254'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Defensive rebound leader, leads to chances at other end</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Jared's Pick: Marcus Smart</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.nba.com/headshots/nba/latest/1040x760/203935.png'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Celtics made a dramatic 2nd half turn around to get all the way to the 2 seed. Smart played a key role in that turn around.</div>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}
