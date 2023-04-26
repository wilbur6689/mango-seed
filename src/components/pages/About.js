import React from 'react';
import '../stylesheets/App.css';

class About extends React.Component {
  render() {
    return (
      <div className="about-page">
        <h1>About Us</h1>
        <div className="about-section">
          <h2>Mango Seed Preschool</h2>
          <p>The Mango Seed Preschool is dedicated to providing a nurturing and stimulating learning environment for young children. Our goal is to foster a 
            love of learning and a sense of community among our students, families, and staff.</p>
        </div>

        <div className="about-section">
          <h2>Our Team</h2>
          <h3>Director Jane Doe</h3>
          <p>Jane Doe has been the director of the Mango Seed School since its founding in 2010. With over 20 years of experience in early childhood education, 
            Jane is passionate about providing the highest quality care and education for young children.</p>
        </div>

        <div className="about-section">
          <h2>Our Teachers</h2>
          <div className="teacher">
            <img src='FemaleTeacher1.jpg' alt="Teacher 1" />
            <div>
              <h3>Ms. Johnson</h3>
              <p className='teacher-info'>Ms. Johnson has been a preschool teacher for 5 years and has a degree in Early Childhood Education. She has a passion for creating hands-on learning experiences for her students.</p>
            </div>
          </div>

          <div className="teacher">
            <img src='FemaleTeacher2.jpg' alt="Teacher 2" />
            <div>
              <h3>Ms. Rodriguez</h3>
              <p className='teacher-info'>Ms. Rodriguez has been a preschool teacher for 3 years and has a degree in Early Childhood Education. She is passionate about promoting diversity and inclusivity in her classroom.</p>
            </div>
          </div>
          
          <div className="teacher">
            <img src='FemaleTeacher3.jpg' alt="Teacher 3" />
            <div>
            <h3>Ms. Lee</h3>
            <p className='teacher-info'>Ms. Lee is a veteran teacher with over 15 years of experience in early childhood education. She holds a Master's degree in Curriculum and Instruction 
              and is dedicated to providing a rich and varied learning experience for her students.</p>
            </div>
          </div>
          
          <div className="teacher">
            <img src='FemaleTeacher4.jpg' alt="Teacher 4" />
            <div>
              <h3>Ms. Garcia</h3>
              <p className='teacher-info'>Ms. Garcia has been teaching at the Mango Seed School for 3 years. She has a Bachelor's degree in Art and loves to incorporate creative activities 
              into her lesson plans.</p>
            </div>
          </div>
          <div className="teacher">
            <img src='maleTeacher1.jpg' alt="Teacher 5" />
            <div>
              <h3>Mr. Roberts</h3>
              <p className='teacher-info'>Mr. Roberts was once a successful software engineer in Silicon Valley, but he found his true passion in teaching young children. He has been teaching preschool for 7 years and loves to introduce his students to the exciting world of technology through age-appropriate activities.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;



