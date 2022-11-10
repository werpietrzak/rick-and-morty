import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { CharacterModal } from './CharacterModal/CharacterModal';

export const CharacterCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Card component='article'>
      <CardMedia
        component='img'
        height='225'
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Box>
          <Typography component='h3' variant='h5' gutterBottom>
            {item.name}
          </Typography>
          <Typography component='h4' variant='subtitle1'>
            {item.species} / {item.gender} / {item.status}
          </Typography>
        </Box>
        <Box textAlign='right' sx={{ pt: 1, pr: 1 }}>
          <Button onClick={openModal}>Read more</Button>
        </Box>
      </CardContent>
      <CharacterModal {...item} isOpen={isOpen} closeModal={closeModal} />
    </Card>
  );
};
