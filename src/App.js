import './App.css';
import Header from './component/header'
import Videos from './component/videos'
function App() {
  let videos = [
    {
      title: 'React JS Tutorial Bootcamp 2023 | Begginer to Advance',
      channel: 'Satvik Tuts', 
      view: '20M',
      time: '3 months',
      id: 0,
      verified: true
    },
    {
      title: 'Node JS Tutorial Bootcamp 2023 | Begginer to Advance',
      channel: 'Satvik Tuts', 
      view: '999k',
      time: '3 hours',
      id: 123,
      verified: true
    },
    {
      title: 'Python Bootcamp 2023',
      channel: 'Code with Harry', 
      view: '100k',
      time: '2 months',
      id: 232,
      verified: false
    },
    {
      title: 'CSS Bootcamp 2023',
      channel: 'Code with Harry', 
      view: '160k',
      time: '2 months',
      id: 222,
      verified: false
    },
    {
      title: 'Blockchain Development A to Z',
      channel: 'Satvik Tuts', 
      view: '100M',
      time: '5 months',
      id: 334,
      verified: true
    },
    {
      title: 'Java & DSA Marathon | Beginner to Advance',
      channel: 'Apna College', 
      view: '236K',
      time: '1 months',
      id: 152,
      verified: true
    },
    {
      title: 'How to start your coding journey?',
      channel: 'Apna College', 
      view: '124K',
      time: '2 months',
      id: 159,
      verified: true
    },
    {
      title: 'How to detox your toxic mind?',
      channel: 'Sandeep Maheswari', 
      view: '854K',
      time: '5 months',
      id: 151,
      verified: true
    },
    {
      title: 'UI/UX Development | Figma Tutorial',
      channel: 'Coder Dost', 
      view: '100k',
      time: '6 months',
      id: 126,
      verified: true
    },
    {
      title: 'GTA Online | Cayo Perico Heist | Day #54',
      channel: 'Techno Gamerz', 
      view: '570K',
      time: '5 months',
      id: 112,
      verified: true
    },
    {
      title: 'Tiktok v/s Youtube',
      channel: 'Carryminati', 
      view: '569K',
      time: '4 years',
      id: 146,
      verified: true
    },{
      title: 'Massupio Beach Vlog #4',
      channel: 'Mr. Beast', 
      view: '100K',
      time: '5 years',
      id: 154,
      verified: false
    },


  ];

  return (
    <>
    <Header />
    <div className='flex-box'>{

      videos.map(video =><Videos
        title={video.title}
        view= {video.view}
        channel={video.channel}
        time={video.time}
        id = {video.id}
        verified = {video.verified}>
        
        </Videos>)
      }
      
    </div>
    </>
  );
}

export default App;
