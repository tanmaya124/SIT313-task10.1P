import React from 'react';
import { Segment, Card } from 'semantic-ui-react';
import TutorialCard from './TutorialCard';
import { faker } from '@faker-js/faker';

const FeaturedTutorials = () => {
  // Generate random featured tutorials with faker
  const featuredTutorials = Array.from({ length: 3 }, (_, index) => ({
    id: index + 1,
    image: faker.image.avatarGitHub(),
    title: faker.lorem.sentence(),
    description: faker.person.jobDescriptor(),
    username: faker.internet.userName(),
  }));

  return (
    <Segment>
      <br />
      <h2> Basic Tutorials</h2>
      <Card.Group centered>
        {featuredTutorials.map((tutorial) => (
          <TutorialCard
            key={tutorial.id}
            image={tutorial.image}
            title={tutorial.title}
            description={tutorial.description}
            username={tutorial.username}
          />
        ))}
      </Card.Group>
    </Segment>
  );
};

export default FeaturedTutorials;
