import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { AppsRounded, BarChartRounded, BusinessCenterRounded, HomeRounded, MenuRounded } from '@material-ui/icons';
import { IconButton, SwipeableDrawer, List, Divider, ListItemIcon, ListItem, ListItemText, Typography } from '@material-ui/core';
import { Link } from 'react-scroll';
import styles from './Drawer.module.css';
import Socials from '../Socials/Socials';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    socialMargin: {
        marginLeft: 10
    },
    btn: {
        marginRight: "1em"
    }
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Drawer() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setState(!state);
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <Link className={styles.Link} activeClass={styles.ActiveLink} spy offset={-80} smooth to="summary">
                    <ListItem button>
                        <ListItemIcon><HomeRounded /></ListItemIcon>
                        <ListItemText primary="Summary" />
                    </ListItem>
                </Link>
                <Link className={styles.Link} activeClass={styles.ActiveLink} spy offset={-60} smooth to="skillset">
                    <ListItem button>
                        <ListItemIcon><BarChartRounded /></ListItemIcon>
                        <ListItemText primary="Skillset" />
                    </ListItem>
                </Link>
                <Link className={styles.Link} activeClass={styles.ActiveLink} spy offset={-60} smooth to="experience">
                    <ListItem button>
                        <ListItemIcon><BusinessCenterRounded /></ListItemIcon>
                        <ListItemText primary="Experience" />
                    </ListItem>
                </Link>
                <Link className={styles.Link} activeClass={styles.ActiveLink} spy offset={-60} smooth to="projects">
                    <ListItem button>
                        <ListItemIcon><AppsRounded /></ListItemIcon>
                        <ListItemText primary="Projects" />
                    </ListItem>
                </Link>
            </List>
            <Divider />
            <List>
                <div className={classes.socialMargin}>
                    <Typography variant="subtitle1" color="textSecondary">Socials</Typography>
                    <Socials />
                </div>
            </List>
        </div>
    );

    return (
        <div className={styles.Drawer}>
            <IconButton className={classes.btn} onClick={toggleDrawer("right", true)}>{<MenuRounded />}</IconButton>
            <SwipeableDrawer
                anchor="right"
                open={state}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
            >
                {list("right")}
            </SwipeableDrawer>
        </div>
    )
}