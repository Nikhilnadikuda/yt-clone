import videos from './components/videos'
const map=new Map();

videos.forEach((video)=>{
    map.set(video.id,video);
})

console.log(map)
export default map;

