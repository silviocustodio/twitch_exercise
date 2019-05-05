import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React, { Fragment } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Header, Divider, Image } from 'semantic-ui-react';
import Home from './components/Home';
import Stream from './components/Stream';
import Meta from './components/Meta';

import Logo from './assets/twitch_blip_logo.png';

const Content = styled.div`
  margin: 50px 0;
`;

const theme = {
  twitch: '#0C0816'
};

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${theme.twitch};
    font-family: 'Open Sans', sans-serif;
    padding: 0 100px  !important;
  }

  a,
  a:hover {
    color: inherit;
  }
`;

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Meta />
        <GlobalStyle />
        <Content>
          <Header as="h2" icon inverted textAlign="center" color="grey">
            <Link to="/">
              <Image centered src={Logo} />
            </Link>
            <Divider />
            <Header.Subheader>
              {
                'Watch and chat now with millions of other fans from around the world.'
              }
            </Header.Subheader>
          </Header>
          <Divider />
        </Content>
        <Route exact path="/" component={Home} />
        <Route exact path="/streams/:channelId" component={Stream} />
      </Fragment>
    </ThemeProvider>
  </Router>
);

export default App;
