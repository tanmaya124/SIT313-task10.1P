import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import './TutorialCard.css'; // Import your custom CSS for styling

const TutorialCard = (props) => {
  return (
    <Card className="tutorial-card">
      <Image src={props.image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Description>{props.description}</Card.Description>
        <Card.Meta>Publiser: {props.username}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Button primary fluid>Read More</Button>
      </Card.Content>
    </Card>
  );
};

export default TutorialCard;
