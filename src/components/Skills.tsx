import React from 'react'

const Skills =() => {
    return (
        <div id='skills' className='container pt-32 '>
            <div className='grid md:grid-cols-2 gap-20 item-center'>
                <div data-aos="zoom-in-up">
                    <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
                    <p className='text-gray-500 pt-2'>
                        "As a seasoned professional web developer, I possess a basic foundation in the fundametals of webdevelopment, including HTML,CSS, and Javascript, I have expert in React, a popular Javascript library for building user interfaces.My skills extend to styllng and layout management with Tailwind CSS, autility-first CSS Framework.Iam well-equipped to design, develop, and deploy responsive,scalable,and maintainable web applications."
                    </p>
                </div>
                <div>
                    <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
                        <div className='space-y-2'>
                            <h2 data-aos="zoom-in-up">Typescript</h2>
                            <h2 data-aos="zoom-in-up">React.js</h2>
                            <h2 data-aos="zoom-in-up">Next.js</h2>

                        </div>
                        <div className='space-y-2'>
                            <h2 data-aos="zoom-in-up">Tailwind</h2>
                            <h2 data-aos="zoom-in-up">CSS</h2>
                            <h2 data-aos="zoom-in-up">Node.js</h2>
                            </div>

                    </div>
                </div>
            </div>
            </div>
    )
}

export default Skills