import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
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

  const [conference1, setConference1] = useState();
  const [conference2, setConference2] = useState();
  const [conference3, setConference3] = useState();
  const [conference4, setConference4] = useState();
  const [conference5, setConference5] = useState();
  const [conference6, setConference6] = useState();
  const [conference7, setConference7] = useState();
  const [conference8, setConference8] = useState();

  const [correct, setCorrect] = useState(false);


  let teamData = [
  {
    "teamId": 1610612737,
    "abbreviation": "ATL",
    "teamName": "Atlanta Hawks",
    "simpleName": "Hawks",
    "conference": "East",
    "location": "Atlanta"
  },
  {
    "teamId": 1610612738,
    "abbreviation": "BOS",
    "teamName": "Boston Celtics",
    "simpleName": "Celtics",
    "conference": "East",
    "location": "Boston"
  },
  {
    "teamId": 1610612751,
    "abbreviation": "BKN",
    "teamName": "Brooklyn Nets",
    "simpleName": "Nets",
    "conference": "East",
    "location": "Brooklyn"
  },
  {
    "teamId": 1610612766,
    "abbreviation": "CHA",
    "teamName": "Charlotte Hornets",
    "simpleName": "Hornets",
    "conference": "East",
    "location": "Charlotte"
  },
  {
    "teamId": 1610612741,
    "abbreviation": "CHI",
    "teamName": "Chicago Bulls",
    "simpleName": "Bulls",
    "conference": "East",
    "location": "Chicago"
  },
  {
    "teamId": 1610612739,
    "abbreviation": "CLE",
    "teamName": "Cleveland Cavaliers",
    "simpleName": "Cavaliers",
    "conference": "East",
    "location": "Cleveland"
  },
  {
    "teamId": 1610612742,
    "abbreviation": "DAL",
    "teamName": "Dallas Mavericks",
    "simpleName": "Mavericks",
    "conference": "West",
    "location": "Dallas"
  },
  {
    "teamId": 1610612743,
    "abbreviation": "DEN",
    "teamName": "Denver Nuggets",
    "simpleName": "Nuggets",
    "conference": "West",
    "location": "Denver"
  },
  {
    "teamId": 1610612765,
    "abbreviation": "DET",
    "teamName": "Detroit Pistons",
    "simpleName": "Pistons",
    "conference": "East",
    "location": "Detroit"
  },
  {
    "teamId": 1610612744,
    "abbreviation": "GSW",
    "teamName": "Golden State Warriors",
    "simpleName": "Warriors",
    "conference": "West",
    "location": "Golden State"
  },
  {
    "teamId": 1610612745,
    "abbreviation": "HOU",
    "teamName": "Houston Rockets",
    "simpleName": "Rockets",
    "conference": "West",
    "location": "Houston"
  },
  {
    "teamId": 1610612754,
    "abbreviation": "IND",
    "teamName": "Indiana Pacers",
    "simpleName": "Pacers",
    "conference": "East",
    "location": "Indiana"
  },
  {
    "teamId": 1610612746,
    "abbreviation": "LAC",
    "teamName": "Los Angeles Clippers",
    "simpleName": "Clippers",
    "conference": "West",
    "location": "Los Angeles"
  },
  {
    "teamId": 1610612747,
    "abbreviation": "LAL",
    "teamName": "Los Angeles Lakers",
    "simpleName": "Lakers",
    "conference": "West",
    "location": "Los Angeles"
  },
  {
    "teamId": 1610612763,
    "abbreviation": "MEM",
    "teamName": "Memphis Grizzlies",
    "simpleName": "Grizzlies",
    "conference": "West",
    "location": "Memphis"
  },
  {
    "teamId": 1610612748,
    "abbreviation": "MIA",
    "teamName": "Miami Heat",
    "simpleName": "Heat",
    "conference": "East",
    "location": "Miami"
  },
  {
    "teamId": 1610612749,
    "abbreviation": "MIL",
    "teamName": "Milwaukee Bucks",
    "simpleName": "Bucks",
    "conference": "East",
    "location": "Milwaukee"
  },
  {
    "teamId": 1610612750,
    "abbreviation": "MIN",
    "teamName": "Minnesota Timberwolves",
    "simpleName": "Timberwolves",
    "conference": "West",
    "location": "Minnesota"
  },
  {
    "teamId": 1610612740,
    "abbreviation": "NOP",
    "teamName": "New Orleans Pelicans",
    "simpleName": "Pelicans",
    "conference": "West",
    "location": "New Orleans"
  },
  {
    "teamId": 1610612752,
    "abbreviation": "NYK",
    "teamName": "New York Knicks",
    "simpleName": "Knicks",
    "conference": "East",
    "location": "New York"
  },
  {
    "teamId": 1610612760,
    "abbreviation": "OKC",
    "teamName": "Oklahoma City Thunder",
    "simpleName": "Thunder",
    "conference": "West",
    "location": "Oklahoma City"
  },
  {
    "teamId": 1610612753,
    "abbreviation": "ORL",
    "teamName": "Orlando Magic",
    "simpleName": "Magic",
    "conference": "East",
    "location": "Orlando"
  },
  {
    "teamId": 1610612755,
    "abbreviation": "PHI",
    "teamName": "Philadelphia 76ers",
    "simpleName": "76ers",
    "conference": "East",
    "location": "Philadelphia"
  },
  {
    "teamId": 1610612756,
    "abbreviation": "PHX",
    "teamName": "Phoenix Suns",
    "simpleName": "Suns",
    "conference": "West",
    "location": "Phoenix"
  },
  {
    "teamId": 1610612757,
    "abbreviation": "POR",
    "teamName": "Portland Trail Blazers",
    "simpleName": "Trail Blazers",
    "conference": "West",
    "location": "Portland"
  },
  {
    "teamId": 1610612758,
    "abbreviation": "SAC",
    "teamName": "Sacramento Kings",
    "simpleName": "Kings",
    "conference": "West",
    "location": "Sacramento"
  },
  {
    "teamId": 1610612759,
    "abbreviation": "SAS",
    "teamName": "San Antonio Spurs",
    "simpleName": "Spurs",
    "conference": "West",
    "location": "San Antonio"
  },
  {
    "teamId": 1610612761,
    "abbreviation": "TOR",
    "teamName": "Toronto Raptors",
    "simpleName": "Raptors",
    "conference": "East",
    "location": "Toronto"
  },
  {
    "teamId": 1610612762,
    "abbreviation": "UTA",
    "teamName": "Utah Jazz",
    "simpleName": "Jazz",
    "conference": "West",
    "location": "Utah"
  },
  {
    "teamId": 1610612764,
    "abbreviation": "WAS",
    "teamName": "Washington Wizards",
    "simpleName": "Wizards",
    "conference": "East",
    "location": "Washington"
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
        <h1 className={correct ? 'correct_header_text' : 'header_text'}>{!correct ? 'Wardell' : 'Correct! Click picture to reset.'}</h1>
            <form className={'form'} onSubmit={(e) => {
              e.preventDefault();
              setValue("");
            }}>
            <Select value={{label: `${value}`}} onChange={e => setValue(e.label)} options={names} components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}/>
          <button className={'button'} onClick={()=>{

            setLetsGo(true);
            for(var i=0; i<database.length; i++){

              if((database[i]['firstName'] === value.split(' ')[0] && database[i]['lastName'] === value.split(' ')[1]) || ((database[i]['firstName'] === value.split(' ')[0] && database[i]['lastName'] === value.split(' ')[1] + ' ' + value.split(' ')[2]))){

                switch(guesses){
                  case 1:
                  setPicture1(database[i]['personId']);
                  setPlayer1(database[i]);
                  setGuessed(database[i]['personId']);
                  setGuesses(guesses + 1);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam(teamData[j]['simpleName']);
                      setConference1(teamData[j]['conference']);
                    }
                  }
                  break;

                  case 2:
                  setPicture2(database[i]['personId']);
                  setPlayer2(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  setGuesses(guesses + 1);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam2(teamData[j]['simpleName']);
                      setConference2(teamData[j]['conference']);
                    }
                  }
                  break;

                  case 3:
                  setPicture3(database[i]['personId']);
                  setPlayer3(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  setGuesses(guesses + 1);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam3(teamData[j]['simpleName']);
                      setConference3(teamData[j]['conference']);
                    }
                  }
                  break;

                  case 4:
                  setPicture4(database[i]['personId']);
                  setPlayer4(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  setGuesses(guesses + 1);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam4(teamData[j]['simpleName']);
                      setConference4(teamData[j]['conference']);
                    }
                  }
                  break;

                  case 5:
                  setPicture5(database[i]['personId']);
                  setPlayer5(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  setGuesses(guesses + 1);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam5(teamData[j]['simpleName']);
                      setConference5(teamData[j]['conference']);
                    }
                  }
                  break;

                  case 6:
                  setPicture6(database[i]['personId']);
                  setPlayer6(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  setGuesses(guesses + 1);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam6(teamData[j]['simpleName']);
                      setConference6(teamData[j]['conference']);
                    }
                  }
                  break;

                  case 7:
                  setPicture7(database[i]['personId']);
                  setPlayer7(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  setGuesses(guesses + 1);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam7(teamData[j]['simpleName']);
                      setConference7(teamData[j]['conference']);
                    }
                  }
                  break;

                  case 8:
                  setPicture8(database[i]['personId']);
                  setPlayer8(database[i]);
                  setGuessed(guessed + database[i]['personId']);
                  setGuesses(guesses + 1);
                  for(var j=0; j<teamData.length; j++){
                    if(parseInt(database[i]['teamId']) === parseInt(teamData[j]['teamId'])){
                      setTeam8(teamData[j]['simpleName']);
                      setConference8(teamData[j]['conference']);
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
            setValue('');
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
      <Card className={'card'}>
      <Card.Title>
        {player1["firstName"] + " " + player1['lastName']}
      </Card.Title>
      <Card.Img className={'pictures'} variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture1}.png`}/>
      <Card.Body>
        <div className={'inner_container'}>
          <div className={(player1['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player1['collegeName']}</div>
          <div className={player1['heightInches'] == player['heightInches'] && player1['heightFeet'] == player['heightFeet'] ? 'correct' : (Math.abs(parseInt(player['heightInches']) - parseInt(player1['heightInches'])) <= 2) && player1['heightFeet'] == player['heightFeet'] ? 'almost' : 'inner_card'}>{player1['heightFeet'] + "'" + player1['heightInches']}</div>
          <div className={player1['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player1['yearsPro']}</div>
          <div className={player1['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player1['pos']}</div>
          <div className={player1['teamId'] == player['teamId'] ? 'correct' : 'inner_card'}>{team}</div>
          <div className={conference1 == conference ? 'correct' : 'inner_card'}>{conference1}</div>
        </div>
      </Card.Body>
      </Card>

      :

      <Card className={'card'}><Card.Title>1</Card.Title></Card>
    }

    {guesses > 2 ?
    <Card className={'card'}>
    <Card.Title>
      {player2["firstName"] + " " + player2['lastName']}
    </Card.Title>
    <Card.Img className={'pictures'} variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture2}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player2['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player2['collegeName']}</div>
      <div className={player2['heightInches'] == player['heightInches'] && player2['heightFeet'] == player['heightFeet'] ? 'correct' : Math.abs(parseInt(player['heightInches']) - parseInt(player2['heightInches']))<=2 && player2['heightFeet'] == player['heightFeet']  ? 'almost' : 'inner_card'}>{player2['heightFeet'] + "'" + player2['heightInches']}</div>
      <div className={player2['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player2['yearsPro']}</div>
      <div className={player2['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player2['pos']}</div>
      <div className={player2['teamId'] == player['teamId'] ? 'correct' : 'inner_card'}>{team2}</div>
      <div className={conference2 == conference ? 'correct' : 'inner_card'}>{conference2}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card className={'card'}><Card.Title>2</Card.Title></Card>
  }

  {guesses > 3 ?
    <Card className={'card'}>
    <Card.Title>
      {player3["firstName"] + " " + player3['lastName']}
    </Card.Title>
    <Card.Img className={'pictures'} variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture3}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player3['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player3['collegeName']}</div>
      <div className={player3['heightInches'] == player['heightInches'] && player3['heightFeet'] == player['heightFeet'] ? 'correct' : Math.abs(parseInt(player['heightInches']) - parseInt(player3['heightInches']))<=2 && player3['heightFeet'] == player['heightFeet']  ? 'almost' : 'inner_card'}>{player3['heightFeet'] + "'" + player3['heightInches']}</div>
      <div className={player3['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player3['yearsPro']}</div>
      <div className={player3['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player3['pos']}</div>
      <div className={player3['teamId'] == player['teamId'] ? 'correct' : 'inner_card'}>{team3}</div>
      <div className={conference3 == conference ? 'correct' : 'inner_card'}>{conference3}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card className={'card'}><Card.Title>3</Card.Title></Card>
  }

  {guesses > 4 ?
    <Card className={'card'}>
    <Card.Title>
      {player4["firstName"] + " " + player4['lastName']}
    </Card.Title>
    <Card.Img className={'pictures'} variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture4}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player4['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player4['collegeName']}</div>
      <div className={player4['heightInches'] == player['heightInches'] && player4['heightFeet'] == player['heightFeet'] ? 'correct' : Math.abs(parseInt(player['heightInches']) - parseInt(player4['heightInches']))<=2 && player4['heightFeet'] == player['heightFeet']  ? 'almost' : 'inner_card'}>{player4['heightFeet'] + "'" + player4['heightInches']}</div>
      <div className={player4['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player4['yearsPro']}</div>
      <div className={player4['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player4['pos']}</div>
      <div className={player4['teamId'] == player['teamId'] ? 'correct' : 'inner_card'}>{team4}</div>
      <div className={conference4 == conference ? 'correct' : 'inner_card'}>{conference4}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card className={'card'}><Card.Title>4</Card.Title></Card>
  }

  {guesses>5 ?
    <Card className={'card'}>
    <Card.Title>
      {player5["firstName"] + " " + player5['lastName']}
    </Card.Title>
    <Card.Img className={'pictures'} variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture5}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player5['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player5['collegeName']}</div>
      <div className={player5['heightInches'] == player['heightInches'] && player5['heightFeet'] == player['heightFeet'] ? 'correct' : Math.abs(parseInt(player['heightInches']) - parseInt(player5['heightInches']))<=2 && player5['heightFeet'] == player['heightFeet']  ? 'almost' : 'inner_card'}>{player5['heightFeet'] + "'" + player5['heightInches']}</div>
      <div className={player5['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player5['yearsPro']}</div>
      <div className={player5['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player5['pos']}</div>
      <div className={player5['teamId'] == player['teamId'] ? 'correct' : 'inner_card'}>{team5}</div>
      <div className={conference5 == conference ? 'correct' : 'inner_card'}>{conference5}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card className={'card'}><Card.Title>5</Card.Title></Card>
  }

  {guesses > 6 ?
    <Card className={'card'}>
    <Card.Title>
      {player6["firstName"] + " " + player6['lastName']}
    </Card.Title>
    <Card.Img className={'pictures'} variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture6}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player6['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player6['collegeName']}</div>
      <div className={player6['heightInches'] == player['heightInches'] && player6['heightFeet'] == player['heightFeet'] ? 'correct' : Math.abs(parseInt(player['heightInches']) - parseInt(player6['heightInches']))<=2 && player6['heightFeet'] == player['heightFeet']  ? 'almost' : 'inner_card'}>{player6['heightFeet'] + "'" + player6['heightInches']}</div>
      <div className={player6['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player6['yearsPro']}</div>
      <div className={player6['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player6['pos']}</div>
      <div className={player6['teamId'] == player['teamId'] ? 'correct' : 'inner_card'}>{team6}</div>
      <div className={conference6 == conference ? 'correct' : 'inner_card'}>{conference6}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card className={'card'}><Card.Title>6</Card.Title></Card>
  }

  {guesses >7 ?
    <Card className={'card'}>
    <Card.Title>
      {player7["firstName"] + " " + player7['lastName']}
    </Card.Title>
    <Card.Img className={'pictures'} variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture7}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player7['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player7['collegeName']}</div>
      <div className={player7['heightInches'] == player['heightInches'] && player7['heightFeet'] == player['heightFeet'] ? 'correct' : Math.abs(parseInt(player['heightInches']) - parseInt(player7['heightInches']))<=2 && player7['heightFeet'] == player['heightFeet']  ? 'almost' : 'inner_card'}>{player7['heightFeet'] + "'" + player7['heightInches']}</div>
      <div className={player7['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player7['yearsPro']}</div>
      <div className={player7['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player7['pos']}</div>
      <div className={player7['teamId'] == player['teamId'] ? 'correct' : 'inner_card'}>{team7}</div>
      <div className={conference7 == conference ? 'correct' : 'inner_card'}>{conference7}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card className={'card'}><Card.Title>7</Card.Title></Card>
  }

  {guesses >8 ?
    <Card className={'card'}>
    <Card.Title>
      {player8["firstName"] + " " + player8['lastName']}
    </Card.Title>
    <Card.Img className={'pictures'} variant="top" src={`https://cdn.nba.com/headshots/nba/latest/1040x760/${picture7}.png`}/>
    <Card.Body>
      <div className={'inner_container'}>
      <div className={(player8['collegeName'] == player['collegeName']) ? 'correct' : 'inner_card'}>{player8['collegeName']}</div>
      <div className={player8['heightInches'] == player['heightInches'] && player8['heightFeet'] == player['heightFeet'] ? 'correct' : Math.abs(parseInt(player['heightInches']) - parseInt(player8['heightInches']))<=2 && player8['heightFeet'] == player['heightFeet']  ? 'almost' : 'inner_card'}>{player8['heightFeet'] + "'" + player8['heightInches']}</div>
      <div className={player8['yearsPro'] == player['yearsPro'] ? 'correct' : 'inner_card'}>{"Years Pro: " + player8['yearsPro']}</div>
      <div className={player8['pos'] == player['pos'] ? 'correct' :'inner_card'}>{player7['pos']}</div>
      <div className={player8['teamId'] == player['teamId'] ? 'correct' : 'inner_card'}>{team8}</div>
      <div className={conference8 == conference ? 'correct' : 'inner_card'}>{conference8}</div>
      </div>
    </Card.Body>
    </Card>
    :
    <Card className={'card'}><Card.Title>8</Card.Title></Card>
  }
    </div>




  </>
  );
}
