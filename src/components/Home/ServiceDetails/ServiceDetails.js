import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetails.css'
import { useSpring, animated } from 'react-spring'
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
const ServiceDetails = ({ info }) => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <div className="mt-5 pt-5 col-12 col-md-4 ">
            <Link to={'customerOrder/' + info._id} style={{ textDecoration: 'none' }}>

                <animated.div className="text-center p-2 mb-2 animated" onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })} onMouseLeave={() => set({ xys: [0, 0, 1] })} style={{ transform: props.xys.interpolate(trans) }}>

                    {info.image.img && <img height='40px' className='rounded img fluid' src={`data:image/png;base64,${info.image.img}`} alt="" />}
                    <h3 className='mt-3 text-dark '>{info.title}</h3>
                    <p className="text-secondary mt-3">{info.description}</p>

                </animated.div>
            </Link>
        </div>

    );
};

export default ServiceDetails;