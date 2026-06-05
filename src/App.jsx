import './App.css';
import TeamCard from './Components/TeamCard'
import MatchCard from './Components/MatchCard'
import StadiumCard from './Components/StadiumCard' 
import StandingsTable from './Components/StandingTable';
import { useState } from 'react'

import mxFlag from './assets/mexico.png'
import zaFlag from './assets/south-africa.png'
import krFlag from './assets/south-korea.png'
import czFlag from './assets/czechia.png'

import aztecaImg from './assets/Estadio_Azteca.png'
import akronImg from './assets/Estadio-Akron.png'
import bbvaImg from './assets/Estadio_BBVA.png'
import mercedesImg from './assets/Mercedes_Benz_Stadium.png'

const flagOf = (teamName) => teams.find(t => t.name === teamName).flag

// Builds the Group A standings table from the match results.
// Football scoring: Win = 3 points, Draw = 1, Loss = 0.
// Teams are ranked by points, then goal difference, then goals scored.
const getStandings = (teams, matches) => {
  // STEP 1: give every team a fresh record, all stats starting at zero.
  const table = teams.map(t => ({
    name: t.name,
    flag: t.flag,
    code: t.code,
    played: 0, // games played
    win: 0,
    draw: 0,
    loss: 0,
    gf: 0, // goals for (scored)
    ga: 0, // goals against (conceded)
    gd: 0, // goal difference (gf - ga)
    pts: 0, // points
  }))

  // small helper: look up a team's row in the table by its name
  const find = (name) => table.find((row) => row.name === name)

  // STEP 2: walk through each match and update both teams' records.
  matches.forEach((m) => {
    // a match with no score yet doesn't count — skip it
    if (m.homeScore === null || m.awayScore === null) return

    const home = find(m.home)
    const away = find(m.away)

    // both teams played one more game
    home.played += 1
    away.played += 1

    // record the goals scored and conceded for each side
    home.gf += m.homeScore
    home.ga += m.awayScore
    away.gf += m.awayScore
    away.ga += m.homeScore

    // figure out who won and hand out the points
    if (m.homeScore > m.awayScore) {
      home.win += 1
      home.pts += 3
      away.loss += 1
    } else if (m.homeScore < m.awayScore) {
      away.win += 1
      away.pts += 3
      home.loss += 1
    } else {
      home.draw += 1
      away.draw += 1
      home.pts += 1
      away.pts += 1
    }
  })

  // STEP 3: calculate each team's goal difference.
  table.forEach((row) => {
    row.gd = row.gf - row.ga
  })

  // STEP 4: sort the table — most points first, then goal difference, then goals scored.
  table.sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf)

  return table
}


const teams = [
  { name: "Mexico",         flag: mxFlag, code: "MEX", rank: 14, note: "Host" },
  { name: "South Africa",   flag: zaFlag, code: "RSA", rank: 61, note: "" },
  { name: "Korea Republic", flag: krFlag, code: "KOR", rank: 23, note: "" },
  { name: "Czechia",        flag: czFlag, code: "CZE", rank: 43, note: "" },
]

const initialMatches = [
  { id: 1, matchday: 1, home: "Mexico",       away: "South Africa",   homeFlag: "🇲🇽", awayFlag: "🇿🇦", date: "Thu, Jun 11", time: "3:00 PM",  stadium: "Estadio Azteca",        city: "Mexico City",  homeScore: null, awayScore: null },
  { id: 2, matchday: 1, home: "Korea Republic", away: "Czechia",      homeFlag: "🇰🇷", awayFlag: "🇨🇿", date: "Thu, Jun 11", time: "10:00 PM", stadium: "Estadio Akron",         city: "Guadalajara",  homeScore: null, awayScore: null },
  { id: 3, matchday: 2, home: "Czechia",      away: "South Africa",   homeFlag: "🇨🇿", awayFlag: "🇿🇦", date: "Thu, Jun 18", time: "12:00 PM", stadium: "Mercedes-Benz Stadium", city: "Atlanta",      homeScore: null, awayScore: null },
  { id: 4, matchday: 2, home: "Mexico",       away: "Korea Republic", homeFlag: "🇲🇽", awayFlag: "🇰🇷", date: "Thu, Jun 18", time: "9:00 PM",  stadium: "Estadio Akron",         city: "Guadalajara",  homeScore: null, awayScore: null },
  { id: 5, matchday: 3, home: "Czechia",      away: "Mexico",         homeFlag: "🇨🇿", awayFlag: "🇲🇽", date: "Wed, Jun 24", time: "9:00 PM",  stadium: "Estadio Azteca",        city: "Mexico City",  homeScore: null, awayScore: null },
  { id: 6, matchday: 3, home: "South Africa", away: "Korea Republic", homeFlag: "🇿🇦", awayFlag: "🇰🇷", date: "Wed, Jun 24", time: "9:00 PM",  stadium: "Estadio BBVA",          city: "Monterrey",    homeScore: null, awayScore: null },
]

const stadiums = [
  { name: "Estadio Azteca",        city: "Mexico City", country: "Mexico", flag: "🇲🇽", img: aztecaImg,   capacity: "87,500", opened: 1966, fact: "The only stadium to host two World Cup finals (1970 & 1986). Hosts the 2026 opening match.", url: "https://en.wikipedia.org/wiki/Estadio_Azteca" },
  { name: "Estadio Akron",         city: "Guadalajara", country: "Mexico", flag: "🇲🇽", img: akronImg,    capacity: "48,000", opened: 2010, fact: "Home of Chivas de Guadalajara and the smallest of Mexico's three World Cup venues.", url: "https://en.wikipedia.org/wiki/Estadio_Akron" },
  { name: "Estadio BBVA",          city: "Monterrey",   country: "Mexico", flag: "🇲🇽", img: bbvaImg,     capacity: "53,500", opened: 2015, fact: "Nicknamed 'El Gigante de Acero' (The Steel Giant), with a backdrop of the Cerro de la Silla mountain.", url: "https://en.wikipedia.org/wiki/Estadio_BBVA" },
  { name: "Mercedes-Benz Stadium", city: "Atlanta",     country: "USA",    flag: "🇺🇸", img: mercedesImg, capacity: "75,000", opened: 2017, fact: "Atlanta's retractable-roof stadium and the only Group A match played in the USA.", url: "https://en.wikipedia.org/wiki/Mercedes-Benz_Stadium" },
]

const App = () => {

  // matches live in STATE so the screen updates whenever a score changes
  const [matches, setMatches] = useState(initialMatches)

  // change one score on one match, then let React re-render with the new data
  const updateScore = (id, side, value) => {
    setMatches(prev =>
      prev.map(m =>
        m.id === id
          // make a COPY of this match with the one score changed
          // empty input -> null (unplayed); otherwise turn the text into a number
          ? { ...m, [side]: value === "" ? null : Number(value) }
          : m // every other match stays the same
      )
    )
  }

  // recalculate the standings from the CURRENT match scores (runs on every render)
  const standings = getStandings(teams, matches)

  return (
    <div className="App">
      <header className="hero">
        <h1>Group A — FIFA World Cup 2026</h1>
        <p>The teams, the matches, and the stadiums of the group stage</p>
        <div className="tricolor" />
      </header>

      {/* SIMULATOR ZONE: sticky standings table beside the scrolling matches */}
      <section className="sim">
        <div className="standings-col">
          <h2>Group A Standings</h2>
          <StandingsTable standings={standings} />
          <p className="sim-hint">Top 2 advance. Edit any score → the table updates live.</p>
        </div>

        <div className="matches-col">
          <h2>The Matches</h2>
          <div className="matches-grid">
            {matches.map(match => (
              <MatchCard key={match.id} match={match} flagOf={flagOf} updateScore={updateScore} />
            ))}
          </div>
        </div>
      </section>

      <h2>The Teams</h2>
      <div className="grid">
        {teams.map(team => (
          <TeamCard key={team.code} team={team} />
        ))}
      </div>

      <h2>The Stadiums</h2>
      <div className="grid">
        {stadiums.map(stadium => (
          <StadiumCard key={stadium.name} stadium={stadium} />
        ))}
      </div>
    </div>
  )
}

export default App