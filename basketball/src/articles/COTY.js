import React from 'react';
import {Card} from 'react-bootstrap';
import styles from '../App.css';

export default function COTY(){
  return(
    <>
    <div className={'container'}>
      <div className={'header_container'}>
      <h1 className={'header_text'}>Coach Of The Year</h1>
      </div>
    </div>

    <div className={'card_container normal_card_header'}>
      <Card className={'card'}>
        <Card.Title>Ian's Pick: Monty Williams</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fvalleyofthesuns.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1194568519.jpeg'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>This Suns team had one of the more dominant regular seasons in recent history with their big 3 of Ayton, Paul, and Booker playing under 40 games together. This team is a well oiled machine thanks in large part to Monty Williams system.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Jacob's Pick: Monty Williams</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fvalleyofthesuns.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1194568519.jpeg'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Monty easily wins this leading the suns to the most wins in franchise history.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Nicks's Pick: Taylor Jenkins</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://www.nba.com/grizzlies/sites/grizzlies/files/220103-jenkins-cotm-1554x884.jpg'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}> Memphis gets the 2 seed and did a good portion of winning without Ja. This is a young team that not a lot of people thought would be in the spot they are already. Very well coached team.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Chet's Pick: Chris Finch</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://cdn.vox-cdn.com/uploads/chorus_asset/file/22321661/08_1012324552_Finch1216.jpg'}></Card.Img>
        <Card.Body className={'inner_container'}>
        <div className={'blurbs'}>Finch led the Timberwolves from a 23-49 record a year ago to a 46-36 record and a 7 seed in the play-in tournament this year.  Crazy turnaround between last season and this one for the T-Wolves.</div>
        </Card.Body>
      </Card>

      <Card className={'card'}>
        <Card.Title>Jared's Pick: Monty Williams</Card.Title>
        <Card.Img variant={'top'} className={'pictures'} src={'https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fvalleyofthesuns.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2017%2F07%2F1194568519.jpeg'}></Card.Img>
        <Card.Body className={'inner_container'}>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}
