import React from 'react';
import Wardell from './Wardell';
import Testing from './Testing';
import Route from 'react-router-dom';
import {Card} from 'react-bootstrap';
import styles from './App.css'

export default function App(){
  return(
    <>
    <div className={'container'}>
      <div className={'header_container'}>
      <h1 className={'header_text'}>Wardell</h1>
      </div>
    </div>

    <div className={'card_container'}>
      <Card>
      <Card.Title>Articles</Card.Title>
      </Card>

      <a href="/#/wardell">
      <Card>
      <Card.Title>Wardell</Card.Title>
      </Card>
      </a>
    </div>
    </>


  )
}
