import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';
import './ArticleCard.css';

const ArticleCard = (props) => {
  return (
    <>
      <Card className="article-card">
        <Image src={props.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.title}</Card.Header>
          <Card.Description>{props.description}</Card.Description>
          <Card.Meta>Publiser: {props.author}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Button primary fluid>Read More</Button>
        </Card.Content>
      </Card>
    </>
  );
};

export default ArticleCard;

