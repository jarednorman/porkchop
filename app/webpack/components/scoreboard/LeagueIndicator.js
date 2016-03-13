import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = ({ ongoingMatch }) => {
  const match = ongoingMatch.get('match');
  return { isLeagueMatch: match ? match.get('league_match') : false };
};

const LeagueIndicator = ({ isLeagueMatch }) => (
  <div>
    { isLeagueMatch ? <div className="scoreboard-league-match">LEAGUE MATCH</div> : null }
  </div>
);

module.exports = connect(mapStateToProps)(LeagueIndicator);
