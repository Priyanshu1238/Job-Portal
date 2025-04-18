import { Menu, Button, Text, Avatar, Switch } from '@mantine/core';
import {
    faCog,             // IconSettings
    faSearch,          // IconSearch
    faImage,           // IconPhoto
    faComment,         // IconMessageCircle
    faTrash,           // IconTrash
    faArrowsAltH,       // IconArrowsLeftRight
    faUserCircle,
    faFileText,
    faMoon,
    faSun,
    faLongArrowAltUp,
    faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../../Slices/UserSlice';

export const ProfileManager = () => {
    const dispatch=useDispatch();
    const user=useSelector((state:any)=>state.user);
    const [opened, setOpened] = useState(false);
    const [checked, setChecked] = useState(false);
    const handleLogout=()=>{

        dispatch(removeUser());
    }
    const profile=useSelector((state:any)=>state.profile)
    return (
        <Menu opened={opened} onChange={setOpened} shadow="md" width={200}>
            <Menu.Target>
                <div className="flex gap-1 items-center cursor-pointer">
                    {user.name}
                    <Avatar src={profile.picture?`data:image/jpeg;base64,${profile.picture}`:"/avatar.jpg"}  alt="it's me" />
                </div>
            </Menu.Target>

            <Menu.Dropdown onChange={() => setOpened(true)}>
                <Link to="/profile">
                    <Menu.Item leftSection={<FontAwesomeIcon icon={faUserCircle} />}>
                        Profile
                    </Menu.Item>
                </Link>

                <Menu.Item leftSection={<FontAwesomeIcon icon={faSearch} />}>
                    Messages
                </Menu.Item>
                <Menu.Item leftSection={<FontAwesomeIcon icon={faFileText} />}>
                    Resume
                </Menu.Item>
                <Menu.Item
                    leftSection={<FontAwesomeIcon icon={faMoon} />}
                    rightSection={
                        <Switch
                            checked={checked}
                            onChange={(event) => setChecked(event.currentTarget.checked)}
                            size="md"
                            color="dark.4"
                            onLabel={<FontAwesomeIcon icon={faSun} color="yellow" className='h-4' />}
                            offLabel={<FontAwesomeIcon icon={faMoon} color="cyan" className='h-4' />}
                        />
                    }
                >
                    Dark mode
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item onClick={handleLogout}
                    color="red"
                    leftSection={<FontAwesomeIcon icon={faSignOutAlt} />}
                >
                    Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}