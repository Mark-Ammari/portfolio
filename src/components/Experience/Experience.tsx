import React, { useEffect } from 'react';
import classes from './Experience.module.css';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useMediaQuery } from '@material-ui/core';

interface ExperienceProps {
    startDate: string,
    endDate: string,
    companyName: string,
    position: string,
    location: string,
    description: string,
    techStack?: string
}

const Experience: React.FC<ExperienceProps> = ({ startDate, endDate, companyName, position, location, description, techStack }) => {
    const width = useMediaQuery('(max-width:850px)')
    useEffect(() => {
        Aos.init({ duration: 1000, once: true })
    })
    return (
        <div className={classes.Experience}>
            {!width ?
                <>
                    <div
                        data-aos="fade-right"
                        className={classes.Date}>
                        <p className={classes.Timeframe}>{startDate} - {endDate}</p>
                    </div>

                    <div className={classes.VerticalLine}>
                        <div className={classes.BulletPoint}></div>
                    </div>

                    <div
                        data-aos="fade-left"
                        className={classes.Description}>
                        <h1 className={classes.CompanyName}>{companyName}</h1>
                        <p className={classes.Position}>{position}</p>
                        <p className={classes.Location}>{location}</p>
                        <ul className={classes.List}>
                            {description}
                        </ul>
                        <p className={classes.Tools}>Tools &amp; Technologies:</p>
                        <div className={classes.TechStack}>
                            {techStack}
                        </div>
                        <div className={classes.HorizontalLine}></div>
                    </div>
                </>
                :
                <>
                    <div
                        data-aos="fade-left"
                        className={classes.Description}>
                        <h1 className={classes.CompanyName}>{companyName}</h1>
                        <p className={classes.Position}>{position}</p>
                        <p className={classes.Location}>{location}</p>
                        <p className={classes.Timeframe}>{startDate} - {endDate}</p>
                        <ul className={classes.List}>
                            {description}
                        </ul>
                        <p className={classes.Tools}>Tools &amp; Technologies:</p>
                        <div className={classes.TechStack}>
                            {techStack}
                        </div>
                        <div className={classes.HorizontalLine}></div>
                    </div>
                </>
            }

        </div>
    )
};

export default Experience;