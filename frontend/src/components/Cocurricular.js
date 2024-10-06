import { FaUsers, FaBrain, FaHackerrank } from 'react-icons/fa';

const Cocurricular = () => {
  return (
    <div className="my-20 w-fit flex flex-col items-center p-4">
      <div className='heading font-extrabold text-black text-5xl mb-10 text-center'>COCURRICULAR ACTIVITIES</div>
      <div className='w-2/3 h-[2px] bg-black text-center mb-20'></div>

      <div className=' flex flex-col justify-center items-center gap-5'>
        <div className='text-2xl p-4 flex gap-4 items-center justify-center bg-gradient-to-br from-gray-400 to-rose-300 shadow-lg'>  
          <div><FaUsers className="text-black text-4xl mb-2" /></div>
          <span className=' text-center'>Core Member of Kiet Koders Korner</span>
        </div>

        <div className='text-2xl p-4 flex gap-4 items-center justify-center bg-gradient-to-br from-gray-400 to-rose-300 shadow-lg'>  
          <div><FaBrain className="text-black text-4xl mb-2" /></div>
          <span className=' text-center'>Selected in top 20 teams for Smart India Hackathon (SIH) for 2 consecutive years</span>
        </div>

        <div className='text-2xl p-4 flex gap-4 items-center justify-center bg-gradient-to-br from-gray-400 to-rose-300 shadow-lg '>  
          <div><FaHackerrank className="text-black text-4xl mb-2" /></div>
          <span className=' text-center'>Participated in Hacktoberfest’22 with consistent open-source contributions</span>
        </div>

        <div className='text-2xl p-4 flex gap-4 items-center justify-center bg-gradient-to-br from-gray-400 to-rose-300 shadow-lg '>  
          <div><FaBrain className="text-black text-4xl mb-2" /></div>
          <span className=' text-center'>ML Member at Innogeeks, KIET</span>
        </div>

      </div>
    </div>
  );
};

export default Cocurricular;
