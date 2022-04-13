import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div>
            <div className="about-container">
               <div>
               <h2 className='heading'>What We Offer</h2>
               <p className='fs-5 fw-normal lh-base font-monospace'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it 
                 would have been rewritten a thousand times and everything that was left from its origin would be the word.</p>
                 <div className='row mt-5'>
                   <div className='col-lg-6'>
                     <div className='services-2 d-flex'>
                       <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                         <span className='flaticon-security'></span>
                       </div>
                       <div className='text'>
                            <h3>Safety First</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                       </div>
                     </div>
                   </div>
                   <div className='col-lg-6'>
                     <div className='services-2 d-flex'>
                       <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                         <span className='flaticon-security'></span>
                       </div>
                       <div className='text'>
                            <h3>Regular Classes</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                       </div>
                     </div>
                   </div>
                   <div className='col-lg-6'>
                     <div className='services-2 d-flex'>
                       <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                         <span className='flaticon-security'></span>
                       </div>
                       <div className='text'>
                            <h3>Certified Teachers</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                       </div>
                     </div>
                   </div>
                   <div className='col-lg-6'>
                     <div className='services-2 d-flex'>
                       <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                         <span className='flaticon-security'></span>
                       </div>
                       <div className='text'>
                            <h3>Sufficient Classrooms</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                       </div>
                     </div>
                   </div>
                   <div className='col-lg-6'>
                     <div className='services-2 d-flex'>
                       <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                         <span className='flaticon-security'></span>
                       </div>
                       <div className='text'>
                            <h3>Creative Lessons</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                       </div>
                     </div>
                   </div>
                   <div className='col-lg-6'>
                     <div className='services-2 d-flex'>
                       <div className="icon mt-2 mr-3 d-flex justify-content-center align-items-center">
                         <span className='flaticon-security'></span>
                       </div>
                       <div className='text'>
                            <h3>Sports Facilities</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia.</p>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
        <div className='h-container'>
               <h2>Welcome to KidsSchool Learning School</h2>
               <p className='paragraph1'>On her way she met a copy. The copy warned the Little Blind Text, that where it came 
                 from it would have been rewritten a thousand times and everything that was left from 
                 its origin would be the word.</p>
                 <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                   a large language ocean. A small river named Duden flows by their place and supplies 
                   it with the necessary regelialia. And if she hasn’t been rewritten, then they are still 
                   using her</p>
                   <p>
                     <Link to='/home'>
                     <Button variant="primary">Read More</Button>{' '}
                     </Link>
                   </p>
             </div>
    
        </div>
        </div>
    );
};

export default About;