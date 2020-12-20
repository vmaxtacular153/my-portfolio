import React from 'react'
import Portfolio from '../src/assets/portfolio.jpg';


export const ProjectPage = () => {
    return (
        <div>
            <section className='intro'>
                <h1 className='section-title title-intro'>
                    The title<strong> of my project</strong>
                    <p className='section-subtitle subtitle-intro'>
                       A short subtitle 
                    </p>
                    <img src={Portfolio} alt='' className='intro-img' />
                </h1>
            </section> 

            <div className ='portfolio-item-individual'>
                <p>I'm baby tbh kombucha art party wayfarers, man 
                braid synth bitters succulents echo park jianbing 
                kogi you probably haven't heard of them small batch. 
                Narwhal master cleanse banjo, fixie 8-bit glossier 
                austin +1 beard viral wayfarers. Gentrify mustache 
                schlitz dreamcatcher bespoke activated charcoal 
                gastropub cornhole forage kitsch vexillologist 
                sriracha. Letterpress leggings typewriter vaporware 
                fashion axe meggings mustache four dollar toast art 
                party butcher kombucha beard affogato. Bushwick viral 
                sustainable church-key heirloom neutra humblebrag 
                fixie jean shorts flannel lomo semiotics DIY.</p>
                <img src={Portfolio} alt='' />
            </div>         
        </div>
    )
};
