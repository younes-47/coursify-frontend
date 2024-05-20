import * as React from 'react';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarsIcon from '@mui/icons-material/Stars';
import { useLocation, useNavigate } from 'react-router-dom';

export default function UserSectionNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <List size="sm" sx={{ '--ListItem-radius': '8px', '--List-gap': '4px' }}>
      <ListItem nested>
        <ListSubheader sx={{ letterSpacing: '2px', fontWeight: '800' }}>
          Liens Rapides
        </ListSubheader>
        <List>
          <ListItem>
            <ListItemButton
              selected={location.pathname.toLowerCase() === '/home'}
              onClick={() =>
                navigate('/home', { state: { from: location.pathname } })
              }
            >
              <ListItemDecorator>
                <HomeIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Accueil</ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              selected={location.pathname.toLowerCase() === '/mycourses'}
              onClick={() =>
                navigate('/mycourses', { state: { from: location.pathname } })
              }
            >
              <ListItemDecorator>
                <BookmarkIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>Mes Cours</ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
              selected={location.pathname.toLowerCase() === '/enroll'}
              onClick={() =>
                navigate('/enroll', { state: { from: location.pathname } })
              }
            >
              <ListItemDecorator>
                <StarsIcon fontSize="small" />
              </ListItemDecorator>
              <ListItemContent>S'inscrire</ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </ListItem>
    </List>
  );
}
