import React from 'react'

function Course({ course }) {
    const { id, title, description, link, image, price, } = course
    return (
        <div className='course'>
            <div>
                <img src={image} width={200} height={150} alt="" />
                <h4 className='course-title'>{title}</h4>
                <p className='course-desc'>{description}</p>
                <h3 className='course-price'>{price}TL</h3>

                <div className='course-link'> <a href={link} style={{ textDecoration: 'none' }} >Satın almak için</a></div>

            </div>
        </div>
    )
}

export default Course
