import { useState } from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, Stack, Typography } from "@mui/material";

import { EntityAvatar } from "./EntityAvatar";

type EntityImage = {
  name: string;
  /* Source image is obtained from the union of `CDN Path` + `Fiscal Code` of the Public Entity */
  image: string | undefined;
};

const cdnPath = "https://assets.cdn.io.italia.it/logos/organizations/";

const entityMockImages: Array<EntityImage> = [
  {
    image: `${cdnPath}1199250158.png`,
    name: "Comune di Milano",
  },
  {
    image: `${cdnPath}2438750586.png`,
    name: "Comune di Roma",
  },
  {
    image: `${cdnPath}162210348.png`,
    name: "Comune di Parma",
  },
  {
    image: `${cdnPath}82003830161.png`,
    name: "Comune di Sotto il Monte Giovanni XXIII",
  },
  {
    image: `${cdnPath}172960361.png`,
    name: "Comune di Castelfranco Emilia",
  },
  {
    image: `${cdnPath}82001510492.png`,
    name: "Comune di Campo nell'Elba",
  },
  {
    image: `${cdnPath}117100537.png`,
    name: "Comune di Castiglione della Pescaia",
  },
  {
    image: `${cdnPath}142680669.png`,
    name: "Comune di Pescasseroli",
  },
  {
    image: `${cdnPath}81000410688.png`,
    name: "Comune di San Valentino in Abruzzo Citeriore",
  },
  {
    image: `${cdnPath}189800204.png`,
    name: "Comune di Mantova",
  },
  {
    image: `${cdnPath}82002590105.png`,
    name: "Comune di Ne",
  },
  {
    image: `${cdnPath}74260845.png`,
    name: "Comune di Agrigento",
  },
  {
    image: undefined,
    name: "Ente senza stemma",
  },
];

/* Generate random value without repeating values
  Source of this snippet: https://akashmittal.com/javascript-random-array-element-no-repeat/ */
const alreadyPicked: Array<number> = [];

const randomValueFromArray = (array: Array<EntityImage>) => {
  if (alreadyPicked.length === 0) {
    for (const [i] of array.entries()) {
      alreadyPicked.push(i);
    }
  }
  const randomValueIndex = Math.floor(Math.random() * alreadyPicked.length);
  const indexOfItemInMyArray = alreadyPicked[randomValueIndex];
  alreadyPicked.splice(randomValueIndex, 1);
  return array.indexOf(array[indexOfItemInMyArray]);
};

export default {
  title: "Components/EntityAvatar",
  component: EntityAvatar,
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "1em",
          backgroundColor: "#F5F5F5",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof EntityAvatar>;

export const Default: ComponentStory<typeof EntityAvatar> = () => {
  const [randomIndex, setRandomIndex] = useState(0);
  const item = entityMockImages[randomIndex];

  const getRandomEntity = () => {
    const randomNumber = randomValueFromArray(entityMockImages);
    setRandomIndex(randomNumber);
  };

  return (
    <Stack gap={2} alignItems="flex-start">
      <EntityAvatar customSrc={item.image} customAlt={item.name} />
      <div>
        <Typography variant="overline">Entity:</Typography>
        <Typography variant="h6">
          {entityMockImages[randomIndex].name}
        </Typography>
      </div>
      <Button variant="contained" onClick={getRandomEntity}>
        Get random Entity
      </Button>
    </Stack>
  );
};
