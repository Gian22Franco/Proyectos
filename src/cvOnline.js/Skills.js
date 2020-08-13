
    import React from 'react'
    import images from '../images.js';
    
    export const Skills = () => {
        return (
            <>
            <div id='Skills' className='skill-container'>


                        <div className='container-skills'>
                            <p  className='skills'>Skills</p>
                        </div>


            <div className='container-front-diseño'>
                <ul className='front-ul '>
                        <li className='front'>Front-End</li>
                        <li className=''><img className='imagen-skills' src={images.img5} alt='HTML' /></li>
                        <li className=''><img className='imagen-skills' src={images.img6} alt='CSS' /></li>
                        <li className=''><img className='imagen-skills' src={images.img8} alt='SASS'/></li>
                        <li className=''><img className='imagen-skills' src={images.img7} alt='JS'/></li>
                        <li className=''><img className='imagen-skills' src={images.img9} alt='REACT'/></li>
                </ul> 

                <ul className='front-ul '>
                    <li className='front'>Diseño</li>
                    <li className=''><img className='imagen-skills-ps' src={images.img10} alt='PS'/></li>
                    <li className=''><img className='imagen-skills-ai' src={images.img11} alt='AI'/></li>
                    <li className=''><img className='imagen-skills' src={images.img12} alt='FIGMA'/></li>
                    <li className=''><img className='imagen-skills' src={images.img13} alt='XD'/></li>
                </ul> 

</div>

</div>
            </>
        )
    }
    
export default Skills;