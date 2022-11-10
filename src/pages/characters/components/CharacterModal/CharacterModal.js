import { Box, Modal, Typography } from '@mui/material';
import {
  containerStyle,
  sectionStyle,
  subsectionStyle,
} from './CharacterModal.style';

export const CharacterModal = ({
  name,
  species,
  status,
  image,
  type,
  gender,
  origin,
  location,
  isOpen,
  closeModal,
}) => {
  return (
    <Modal component='article' open={isOpen} onClose={closeModal}>
      <Box sx={containerStyle}>
        <Box>
          <Typography variant='h4' component='h2' gutterBottom>
            {name}
          </Typography>
        </Box>
        <Box style={sectionStyle}>
          <Box style={subsectionStyle}>
            <img src={image} alt={name} width={250} />
          </Box>
          <Box style={subsectionStyle}>
            <Typography sx={{ mt: 2 }} component='div'>
              <p>Species: {species}</p>
              {type && <p>Type: {type}</p>}
              <p>Gender: {gender}</p>
              <p>Status: {status}</p>
              <p>Origin: {origin.name}</p>
              <p>Location: {location.name}</p>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};
