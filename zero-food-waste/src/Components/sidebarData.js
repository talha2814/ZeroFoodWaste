import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
import GradeIcon from '@mui/icons-material/Grade';
import KitchenIcon from '@mui/icons-material/Kitchen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
export const sidebarData = [
 
{
    title: "Home",
    icon: <HomeIcon />,
    link: "/Home"

},

{

    title: "Message",
    icon: <MessageIcon />,
    link: "/Message"

},

{
    title: "Notifications",
    icon: <NotificationsIcon />,
    link: "/Notifications"

},

{

    title: "Forum",
    icon: <ForumIcon />,
    link: "/Forum"

},

{

    title: "Rewards",
    icon: <GradeIcon />,
    link: "/Rewards"

},

{

    title: "Food Tracking",
    icon: <KitchenIcon />,
    link: "/FoodTracking"

},

{

    title: "Profile",
    icon: <AccountCircleIcon />,
    link: "/Profile"

},
{

    title: "Log Out",
    icon: <LogoutIcon />,
    link: "/LogOut"

}
]
