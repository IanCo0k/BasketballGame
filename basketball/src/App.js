import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import PlayerCard from './PlayerCard.js';
import Select from 'react-select';
import styles from './App.css'


export default function App() {

  const [database, setDatabase] = useState({});
  const [names, setNames] = useState([{}]);
  const [picture1, setPicture1] = useState('');
  const [picture2, setPicture2] = useState('');
  const [picture3, setPicture3] = useState('');
  const [picture4, setPicture4] = useState('');
  const [picture5, setPicture5] = useState('');
  const [picture6, setPicture6] = useState('');
  const [picture7, setPicture7] = useState('');
  const [picture8, setPicture8] = useState('');

  const [value, setValue] = useState('');

  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const [player3, setPlayer3] = useState([]);
  const [player4, setPlayer4] = useState([]);
  const [player5, setPlayer5] = useState([]);
  const [player6, setPlayer6] = useState([]);
  const [player7, setPlayer7] = useState([]);
  const [player8, setPlayer8] = useState([]);

  const [guesses, setGuesses] = useState(1);

  const [letsGo, setLetsGo] = useState(false);

  const [data, setData] = useState(false);

  const [guessed, setGuessed] = useState([]);
  const [player, setPlayer] = useState({});
  const [playerPicture, setPlayerPicture] = useState('');

  const [team, setTeam] = useState();
  const [team2, setTeam2] = useState();
  const [team3, setTeam3] = useState();
  const [team4, setTeam4] = useState();
  const [team5, setTeam5] = useState();
  const [team6, setTeam6] = useState();
  const [team7, setTeam7] = useState();
  const [team8, setTeam8] = useState();

  const [conference, setConference] = useState();
  const [division, setDivision] = useState();

  const [conference1, setConference1] = useState();
  const [conference2, setConference2] = useState();
  const [conference3, setConference3] = useState();
  const [conference4, setConference4] = useState();
  const [conference5, setConference5] = useState();
  const [conference6, setConference6] = useState();
  const [conference7, setConference7] = useState();
  const [conference8, setConference8] = useState();

  const [division1, setDivision1] = useState();
  const [division2, setDivision2] = useState();
  const [division3, setDivision3] = useState();
  const [division4, setDivision4] = useState();
  const [division5, setDivision5] = useState();
  const [division6, setDivision6] = useState();
  const [division7, setDivision7] = useState();
  const [division8, setDivision8] = useState();

  const [correct, setCorrect] = useState(false);
  const [allGuesses, setAllGuesses] = useState(false);

  let teamData = [
  {
    "teamId": 1610612737,
    "abbreviation": "ATL",
    "teamName": "Atlanta Hawks",
    "simpleName": "Hawks",
    "conference": "East",
    "location": "Atlanta",
    "division": "SE"
  },
  {
    "teamId": 1610612738,
    "abbreviation": "BOS",
    "teamName": "Boston Celtics",
    "simpleName": "Celtics",
    "conference": "East",
    "location": "Boston",
    "division": "ATL"
  },
  {
    "teamId": 1610612751,
    "abbreviation": "BKN",
    "teamName": "Brooklyn Nets",
    "simpleName": "Nets",
    "conference": "East",
    "location": "Brooklyn",
    "division": "ATL"
  },
  {
    "teamId": 1610612766,
    "abbreviation": "CHA",
    "teamName": "Charlotte Hornets",
    "simpleName": "Hornets",
    "conference": "East",
    "location": "Charlotte",
    "division": "SE"
  },
  {
    "teamId": 1610612741,
    "abbreviation": "CHI",
    "teamName": "Chicago Bulls",
    "simpleName": "Bulls",
    "conference": "East",
    "location": "Chicago",
    "division": "CEN"
  },
  {
    "teamId": 1610612739,
    "abbreviation": "CLE",
    "teamName": "Cleveland Cavaliers",
    "simpleName": "Cavaliers",
    "conference": "East",
    "location": "Cleveland",
    "division": "CEN"
  },
  {
    "teamId": 1610612742,
    "abbreviation": "DAL",
    "teamName": "Dallas Mavericks",
    "simpleName": "Mavericks",
    "conference": "West",
    "location": "Dallas",
    "division": "SW"
  },
  {
    "teamId": 1610612743,
    "abbreviation": "DEN",
    "teamName": "Denver Nuggets",
    "simpleName": "Nuggets",
    "conference": "West",
    "location": "Denver",
    "division": "NW"
  },
  {
    "teamId": 1610612765,
    "abbreviation": "DET",
    "teamName": "Detroit Pistons",
    "simpleName": "Pistons",
    "conference": "East",
    "location": "Detroit",
    "division": "CEN"
  },
  {
    "teamId": 1610612744,
    "abbreviation": "GSW",
    "teamName": "Golden State Warriors",
    "simpleName": "Warriors",
    "conference": "West",
    "location": "Golden State",
    "division": "PAC"
  },
  {
    "teamId": 1610612745,
    "abbreviation": "HOU",
    "teamName": "Houston Rockets",
    "simpleName": "Rockets",
    "conference": "West",
    "location": "Houston",
    "division": "SW"
  },
  {
    "teamId": 1610612754,
    "abbreviation": "IND",
    "teamName": "Indiana Pacers",
    "simpleName": "Pacers",
    "conference": "East",
    "location": "Indiana",
    "division": "CEN"
  },
  {
    "teamId": 1610612746,
    "abbreviation": "LAC",
    "teamName": "Los Angeles Clippers",
    "simpleName": "Clippers",
    "conference": "West",
    "location": "Los Angeles",
    "division": "PAC"
  },
  {
    "teamId": 1610612747,
    "abbreviation": "LAL",
    "teamName": "Los Angeles Lakers",
    "simpleName": "Lakers",
    "conference": "West",
    "location": "Los Angeles",
    "division": "PAC"
  },
  {
    "teamId": 1610612763,
    "abbreviation": "MEM",
    "teamName": "Memphis Grizzlies",
    "simpleName": "Grizzlies",
    "conference": "West",
    "location": "Memphis",
    "division": "SW"
  },
  {
    "teamId": 1610612748,
    "abbreviation": "MIA",
    "teamName": "Miami Heat",
    "simpleName": "Heat",
    "conference": "East",
    "location": "Miami",
    "division": "SE"
  },
  {
    "teamId": 1610612749,
    "abbreviation": "MIL",
    "teamName": "Milwaukee Bucks",
    "simpleName": "Bucks",
    "conference": "East",
    "location": "Milwaukee",
    "division": "CEN"
  },
  {
    "teamId": 1610612750,
    "abbreviation": "MIN",
    "teamName": "Minnesota Timberwolves",
    "simpleName": "Timberwolves",
    "conference": "West",
    "location": "Minnesota",
    "division": "NW"
  },
  {
    "teamId": 1610612740,
    "abbreviation": "NOP",
    "teamName": "New Orleans Pelicans",
    "simpleName": "Pelicans",
    "conference": "West",
    "location": "New Orleans",
    "division": "SW"
  },
  {
    "teamId": 1610612752,
    "abbreviation": "NYK",
    "teamName": "New York Knicks",
    "simpleName": "Knicks",
    "conference": "East",
    "location": "New York",
    "division": "ATL"
  },
  {
    "teamId": 1610612760,
    "abbreviation": "OKC",
    "teamName": "Oklahoma City Thunder",
    "simpleName": "Thunder",
    "conference": "West",
    "location": "Oklahoma City",
    "division": "NW"
  },
  {
    "teamId": 1610612753,
    "abbreviation": "ORL",
    "teamName": "Orlando Magic",
    "simpleName": "Magic",
    "conference": "East",
    "location": "Orlando",
    "division": "SE"
  },
  {
    "teamId": 1610612755,
    "abbreviation": "PHI",
    "teamName": "Philadelphia 76ers",
    "simpleName": "76ers",
    "conference": "East",
    "location": "Philadelphia",
    "division": "ATL"
  },
  {
    "teamId": 1610612756,
    "abbreviation": "PHX",
    "teamName": "Phoenix Suns",
    "simpleName": "Suns",
    "conference": "West",
    "location": "Phoenix",
    "division": "SW"
  },
  {
    "teamId": 1610612757,
    "abbreviation": "POR",
    "teamName": "Portland Trail Blazers",
    "simpleName": "Trail Blazers",
    "conference": "West",
    "location": "Portland",
    "division": "NW"
  },
  {
    "teamId": 1610612758,
    "abbreviation": "SAC",
    "teamName": "Sacramento Kings",
    "simpleName": "Kings",
    "conference": "West",
    "location": "Sacramento",
    "division": "PAC"
  },
  {
    "teamId": 1610612759,
    "abbreviation": "SAS",
    "teamName": "San Antonio Spurs",
    "simpleName": "Spurs",
    "conference": "West",
    "location": "San Antonio",
    "division": "SW"
  },
  {
    "teamId": 1610612761,
    "abbreviation": "TOR",
    "teamName": "Toronto Raptors",
    "simpleName": "Raptors",
    "conference": "East",
    "location": "Toronto",
    "division": "ATL"
  },
  {
    "teamId": 1610612762,
    "abbreviation": "UTA",
    "teamName": "Utah Jazz",
    "simpleName": "Jazz",
    "conference": "West",
    "location": "Utah",
    "division": "NW"
  },
  {
    "teamId": 1610612764,
    "abbreviation": "WAS",
    "teamName": "Washington Wizards",
    "simpleName": "Wizards",
    "conference": "East",
    "location": "Washington",
    "division": "SE"
  }
]


  //${response.data.league['standard'][i]['firstName']}

  const fetchData = () => {
    axios.get("http://data.nba.net/data/10s/prod/v1/2021/players.json")
      .then((response) => {
        let random = Math.random() * 585;
        random = Math.floor(random);

        while(1 == 1){
          if(response.data.league['standard'][random]['isActive']){
            setPlayer(response.data.league['standard'][random]);
            break;
          } else{
            random = Math.random() * 585;
            random = Math.floor(random)
          }
        }

        for(var j=0; j<teamData.length; j++){
          if(parseInt(response.data.league['standard'][random]['teamId']) === parseInt(teamData[j]['teamId'])){
            setConference(teamData[j]['conference']);
            setDivision(teamData[j]['division'])
            console.log(teamData[j]['conference']);
          }
        }
        setPlayerPicture(response.data.league['standard'][random]['personId']);
        console.log(response.data.league['standard'][random]);
        setDatabase(response.data.league["standard"]);
        for(var i=0; i<response.data.league['standard'].length; i++){
          if(response.data.league['standard'][i]['isActive']){
            setNames(names => names.concat({label: `${response.data.league['standard'][i]['firstName']} ${response.data.league['standard'][i]['lastName']}`}))
          }
        }
      });
    }

  useEffect(() => {
    if(!data){
      fetchData();
      console.log(database);
      setData(true);
    }
  }, [data]);

  const displayPlayer = (e) => {
    e.preventDefault();
  }


  return (
  <>
    <div className={'container'}>
    <div className={'header_container'}>
      <div className={'left-half'}>
        <h1 className={correct ? 'correct_header_text' : 'header_text'}>{allGuesses && correct ? 'Wrong. Click picture to reset': !correct ? 'Wardell' : 'Correct! Click picture to reset.'}</h1>
            <form className={'form'} onSubmit={(e) => {
              e.preventDefault();
              setValue("");
            }}>
            <Select value={{label: `${value}`}} onChange={e => setValue(e.label)} options={names} components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}/>
          <button className={'button'} onClick={()=>{
            setLetsGo(true);

            if(value == ''){
              console.log('we must break the loop')
            } else{
            for(var i=0; i<database.length; i++){

              if((database[i]['firstName'] === value.split(' ')[0] && database[i]['lastName'] === value.split(' ')[1]) || ((database[i]['firstName'] === value.split(' ')[0] && database[i]['lastName'] === value.split(' ')[1] + ' ' + value.split(' ')[2]))){

                switch(guesses){
                  case 1:
                  setPicture1(database[i]['personId']);
                  setPlayer1(database[i]);
                  setGuessed(database[i]['personId']);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam(teamData[j]['simpleName']);
                      setConference1(teamData[j]['conference']);
                      setDivision1(teamData[j]['division']);
                    }
                  }
                  break;

                  case 2:
                  setPicture2(database[i]['personId']);
                  setPlayer2(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam2(teamData[j]['simpleName']);
                      setConference2(teamData[j]['conference']);
                      setDivision2(teamData[j]['division']);
                    }
                  }
                  break;

                  case 3:
                  setPicture3(database[i]['personId']);
                  setPlayer3(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam3(teamData[j]['simpleName']);
                      setConference3(teamData[j]['conference']);
                      setDivision3(teamData[j]['division']);
                    }
                  }
                  break;

                  case 4:
                  setPicture4(database[i]['personId']);
                  setPlayer4(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam4(teamData[j]['simpleName']);
                      setConference4(teamData[j]['conference']);
                      setDivision4(teamData[j]['division']);
                    }
                  }
                  break;

                  case 5:
                  setPicture5(database[i]['personId']);
                  setPlayer5(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam5(teamData[j]['simpleName']);
                      setConference5(teamData[j]['conference']);
                      setDivision5(teamData[j]['division']);
                    }
                  }
                  break;

                  case 6:
                  setPicture6(database[i]['personId']);
                  setPlayer6(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam6(teamData[j]['simpleName']);
                      setConference6(teamData[j]['conference']);
                      setDivision6(teamData[j]['division']);
                    }
                  }
                  break;

                  case 7:
                  setPicture7(database[i]['personId']);
                  setPlayer7(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam7(teamData[j]['simpleName']);
                      setConference7(teamData[j]['conference']);
                      setDivision7(teamData[j]['division']);
                    }
                  }
                  break;

                  case 8:
                  setPicture8(database[i]['personId']);
                  setPlayer8(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam8(teamData[j]['simpleName']);
                      setConference8(teamData[j]['conference']);
                      setDivision8(teamData[j]['division']);
                    }
                  }
                  break;

                  default:
                }
                if((database[i]['firstName'] == player['firstName']) && (database[i]['lastName'] == player['lastName'])){
                  setCorrect(true);
                }
              }
            }
            setGuesses(guesses + 1);
            if(guesses >= 8 && !correct){
              setAllGuesses(true);
              setCorrect(true);
            }
            setValue('');
            console.log(guesses);
          }
          }}>Guess</button>
          </form>
          </div>
          <div className={'right_half'}>
            <img onClick={() => window.location.reload(false)} className={correct ? 'correct_picture' : 'blank_picture'} src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${playerPicture}.png`}/>
          </div>
          </div>
    </div>

    <div className={'card_container'}>
    {guesses >= 1 && letsGo ?
      <PlayerCard guess={player1}
        player={player}
        team={team}
        picture={picture1}
        conference={conference}
        conference_guess={conference1}
        division={division}
        division_guess={division1}
      />

      :

      <Card className={'card'}><Card.Title>1</Card.Title></Card>
    }

    {guesses > 2 ?
      <PlayerCard guess={player2}
        player={player}
        team={team2}
        picture={picture2}
        conference={conference}
        conference_guess={conference2}
        division={division}
        division_guess={division2}
      />
    :
    <Card className={'card'}><Card.Title>2</Card.Title></Card>
  }

  {guesses > 3 ?
    <PlayerCard guess={player3}
      player={player}
      team={team3}
      picture={picture3}
      conference={conference}
      conference_guess={conference3}
      division={division}
      division_guess={division3}
    />
    :
    <Card className={'card'}><Card.Title>3</Card.Title></Card>
  }

  {guesses > 4 ?
    <PlayerCard guess={player4}
      player={player}
      team={team4}
      picture={picture4}
      conference={conference}
      conference_guess={conference4}
      division={division}
      division_guess={division4}
    />
    :
    <Card className={'card'}><Card.Title>4</Card.Title></Card>
  }

  {guesses>5 ?
    <PlayerCard guess={player5}
      player={player}
      team={team5}
      picture={picture5}
      conference={conference}
      conference_guess={conference5}
      division={division}
      division_guess={division5}
    />
    :
    <Card className={'card'}><Card.Title>5</Card.Title></Card>
  }

  {guesses > 6 ?
    <PlayerCard guess={player6}
      player={player}
      team={team6}
      picture={picture6}
      conference={conference}
      conference_guess={conference6}
      division={division}
      division_guess={division6}
    />
    :
    <Card className={'card'}><Card.Title>6</Card.Title></Card>
  }

  {guesses >7 ?
    <PlayerCard guess={player7}
      player={player}
      team={team7}
      picture={picture7}
      conference={conference}
      conference_guess={conference7}
      division={division}
      division_guess={division7}
    />
    :
    <Card className={'card'}><Card.Title>7</Card.Title></Card>
  }

  {guesses >8 ?
    <PlayerCard guess={player8}
      player={player}
      team={team8}
      picture={picture8}
      conference={conference}
      conference_guess={conference8}
      division={division}
      division_guess={division8}
    />
    :
    <Card className={'card'}><Card.Title>8</Card.Title></Card>
  }
    </div>




  </>
  );
}
