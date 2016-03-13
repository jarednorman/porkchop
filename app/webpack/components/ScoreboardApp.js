import React from 'react';

import LeagueIndicator from './scoreboard/LeagueIndicator';
const nothing = () => <div />;
const MessageArea = nothing;
const AwayPlayer = nothing;
const HomePlayer = nothing;
const WarmUp = nothing;

const App = () => (
  <div>
    <MessageArea />
    <AwayPlayer />
    <HomePlayer />
    <LeagueIndicator />
    <WarmUp />
  </div>
);

module.exports = App;
