import React from 'react'
import { projectsData } from '@/lib/data'
import Project from "@/components/project"
import SectionHeader from './section-header';

export default function Projects() {
    return (
        <section className='scroll-mt-28 mb-28 sm:mb-0' id='projects'
        >
            <SectionHeader> My Projects </SectionHeader>

            <div>
                {
                    projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project}/>
                    </React.Fragment>
                ))}
            </div>


        </section>
    );
}


