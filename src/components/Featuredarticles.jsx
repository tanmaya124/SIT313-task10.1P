
import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
import ArticleCard from './ArticleCard';
import { faker } from '@faker-js/faker';


const Featuredarticles = () => {
  // Generate random featured articles with faker
  return (
    <Segment>
      <br /> <br />
      <h2>GENERAL INFORMATION</h2>
      <Card.Group centered>
        {[...Array(3)].map(() => (
          <ArticleCard
            image={faker.image.avatar()}
            title={faker.commerce.product()}
            description={faker.commerce.productDescription()}
            author={faker.person.fullName()}
          />
        ))}
      </Card.Group>
    </Segment>
  );
};

export default Featuredarticles;