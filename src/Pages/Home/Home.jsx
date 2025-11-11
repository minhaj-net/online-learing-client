
import Banner from '../../Components/Banner/Banner';
import PopularCourses from '../../Components/PopularCourses/PopularCourses';
import ChoseUs from '../../Components/ChoseUs/ChoseUs';
import TopInstructor from '../../Components/TopInstructors/TopInstructors';


const Home = () => {
  
  return (
    <div>
      <title>Learn Zone - Home</title>
        <Banner></Banner>
        <PopularCourses></PopularCourses>
        <ChoseUs></ChoseUs>
        <TopInstructor></TopInstructor>
    </div>
  );
};

export default Home;