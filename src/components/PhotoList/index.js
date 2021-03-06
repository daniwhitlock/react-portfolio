import React from 'react';

const PhotoList = () => {

    const photos = [
        {
            name: 'Tech It Up',
            github: 'https://github.com/daniwhitlock/tech-blog',
            deployment: 'https://salty-woodland-41746.herokuapp.com/'
        },
        {
            name: 'The Minimal Prepper',
            github: 'https://github.com/daniwhitlock/the-minimal-prepper',
            deployment: 'https://minimal-prepper.herokuapp.com/'
        },
        {
            name: 'Taskinator',
            github: 'https://github.com/daniwhitlock/Taskinator',
            deployment: 'https://daniwhitlock.github.io/Taskinator/'
        },
        {
            name: 'Run Buddy 2.0',
            github: 'https://github.com/daniwhitlock/run-buddy2.0',
            deployment: 'https://daniwhitlock.github.io/run-buddy2.0/'
        },
        {
            name: 'Team Profile Generator',
            github: 'https://github.com/daniwhitlock/Team-Profile-Generator',
            deployment: 'https://drive.google.com/file/d/1QIyY9JyHTSr5PwX1zxKwzl9wFwsJIuem/view'
        },
        {
            name: 'Weather Dashboard',
            github: 'https://github.com/daniwhitlock/challenge-6-weather-dashboard',
            deployment: 'https://daniwhitlock.github.io/Weather-dashboard/'
        },
        {
            name: 'threadShare',
            github: 'https://github.com/Mheyn95/threadshare',
            deployment: 'https://threadshare.herokuapp.com/'
        }
    ];


    return (
        <div>
            <div className="flex-row">
                {photos.map((image, i) => (
                    <div className="image-card">
                        <h1 >{image.name}</h1>
                        <div className="image-text-wrapper">
                            <a className="image-a" href={image.github} target="_blank">Github</a>
                            <a className="image-a" href={image.deployment} target="_blank">Deployment</a>
                        </div>
                        <div>
                            <img
                                src={require(`../../assets/portfolio/${i}.JPG`).default}
                                alt={image.name}
                                className="img-thumbnail mx-1"
                                key={image.name}
                            />
                        </div>

                    </div>

                ))}
            </div>
        </div>
    );
};


export default PhotoList;