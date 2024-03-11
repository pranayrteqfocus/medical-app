// components/Sidebar.tsx
import SupportIcon from '@mui/icons-material/ContactSupport';
import AppointmentsIcon from '@mui/icons-material/Event';
import HomeIcon from '@mui/icons-material/Home';
import HospitalIcon from '@mui/icons-material/LocalHospital';
import LogoutIcon from '@mui/icons-material/Logout';
import PatientsIcon from '@mui/icons-material/People';
import { CssBaseline, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <>
            <CssBaseline />
            <Drawer variant="permanent" anchor="left">
                <List>
                    <ListItem button key="logo">
                        {/* Add your logo here */}
                        <ListItemText primary="Logo" />
                    </ListItem>
                    <ListItem button key="home">
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button key="hospital">
                        <ListItemIcon>
                            <HospitalIcon />
                        </ListItemIcon>
                        <ListItemText primary="Hospital" />
                    </ListItem>
                    <ListItem button key="patients">
                        <ListItemIcon>
                            <PatientsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Patients" />
                    </ListItem>
                    <ListItem button key="appointments">
                        <ListItemIcon>
                            <AppointmentsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Appointments" />
                    </ListItem>
                    <ListItem button key="support">
                        <ListItemIcon>
                            <SupportIcon />
                        </ListItemIcon>
                        <ListItemText primary="Support" />
                    </ListItem>
                    <ListItem button key="logout">
                        <ListItemIcon>
                            <LogoutIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};

export default Sidebar;
