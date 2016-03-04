import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isLeagueMatch: true
});

const mapDispatchToProps = (dispatch) => ({});

const LeagueIndicator = ({ isLeagueMatch }) => (
  <div>
    { isLeagueMatch ? <div className="scoreboard-league-match">LEAGUE MATCH</div> : nil }
  </div>
);

module.exports = connect(mapStateToProps, mapDispatchToProps)(LeagueIndicator);
