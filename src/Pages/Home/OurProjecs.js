import React, { useEffect, useState } from 'react';
import Project from './Project';
import background from '../../img/project-bg.png';
const OurProjecs = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div style={{
            background: `url(${background})`

        }}>
            <h2 className='text-3xl text-center font-bold my-20 pt-20'>Our Projects</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto ml-10 pb-
            20'>
                {
                    projects.map(project => <Project
                        key={project.id}
                        project={project}
                    ></Project>)
                }
            </div>
        </div>
    );
};

export default OurProjecs;