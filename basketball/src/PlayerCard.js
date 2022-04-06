import React from 'react';
import { Card } from 'react-bootstrap';
import styles from './App.css'

export default function PlayerCard(props){
  return(
    <Card className={'card'}>
    <Card.Title>
      {props.guess["firstName"] + " " + props.guess['lastName']}
    </Card.Title>
    <Card.Img className={'pictures'} variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${props.picture}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
        <div className={(props.guess['collegeName'] == props.player['collegeName']) ? 'correct' : 'inner_card'}>{props.guess['collegeName']}</div>
        <div className={props.guess['heightInches'] == props.player['heightInches'] && props.guess['heightFeet'] == props.player['heightFeet'] ? 'correct' : (Math.abs(parseInt(props.player['heightInches']) - parseInt(props.guess['heightInches'])) <= 2) && props.guess['heightFeet'] == props.player['heightFeet'] ? 'almost' : 'inner_card'}>{props.player['heightFeet'] == props.guess['heightFeet'] && parseInt(props.guess['heightInches']) - parseInt(props.player['heightInches']) < 0 ? props.guess['heightFeet'] + "'" + props.guess['heightInches'] + " <" : props.player['heightFeet'] == props.guess['heightFeet'] && parseInt(props.guess['heightInches']) - parseInt(props.player['heightInches']) > 0 ? props.guess['heightFeet'] + "'" + props.guess['heightInches'] + " >" : props.guess['heightFeet'] + "'" + props.guess['heightInches']} </div>
        <div className={props.guess['yearsPro'] == props.player['yearsPro'] ? 'correct' : Math.abs(props.guess['yearsPro'] - props.player['yearsPro']) <= 2 ? 'almost' : 'inner_card'}>{props.player['yearsPro'] - props.guess['yearsPro'] < 0 ? "Years Pro: " + props.guess['yearsPro'] + " >" : props.player['yearsPro'] - props.guess['yearsPro'] > 0 ? "Years Pro: " + props.guess['yearsPro'] + " <" : "Years Pro: " + props.guess['yearsPro']}</div>
        <div className={props.guess['pos'] == props.player['pos'] ? 'correct' :'inner_card'}>{props.guess['pos']}</div>
        <div className={props.guess['teamId'] == props.player['teamId'] ? 'correct' : props.division == props.division_guess ? 'almost' : 'inner_card'}>{props.team}</div>
        <div className={props.conference_guess == props.conference ? 'correct' : 'inner_card'}>{props.conference_guess}</div>
      </div>
    </Card.Body>
    </Card>
  )
}
