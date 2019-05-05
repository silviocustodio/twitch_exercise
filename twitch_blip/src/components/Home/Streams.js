import { Link } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';
import Header from '../styles/Header';

class Streams extends Component<*, *> {
  loadStreams = () => {
    const { streams } = this.props;

    return streams.map(stream => (
      <Grid.Column key={stream.channel._id}>
        <Link to={`/streams/${stream.channel._id}`}>
          <Card color="green" centered>
            <Image src={stream.preview.large} />
            <Card.Content>
              <Card.Header>{stream.channel.display_name}</Card.Header>
              <Card.Meta>
                <span className="date">{stream.game}</span>
              </Card.Meta>
              <Card.Description>{stream.channel.status}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name="user" />
              {`${stream.viewers} Viewers`}
            </Card.Content>
          </Card>
        </Link>
      </Grid.Column>
    ));
  };

  render() {
    return (
      <Fragment>
        <Header as="h2" inverted>
          {
            'The list of streams will appear automatically below after you type in search!'
          }
        </Header>
        <Grid columns={3}>{this.loadStreams()}</Grid>
      </Fragment>
    );
  }
}

export default Streams;
