import React from 'react';
import Wardell from './Wardell';
import Route from 'react-router-dom';
import {Card} from 'react-bootstrap';
import styles from './App.css'

export default function App(){
  return(
    <>
    <div className={'container'}>
      <div className={'header_container'}>
      <h1 className={'header_text'}>Ooka Sports</h1>
      </div>
    </div>

    <div className={'card_container normal_card_header'}>
    <a href="/#/articles">
      <Card>
      <Card.Title>Articles</Card.Title>
      </Card>
    </a>

      <a href="/#/wardell">
      <Card>
      <Card.Title>Ooka (NBA Wordle)</Card.Title>
      </Card>
      </a>
    </div>
    </>


  )
}
