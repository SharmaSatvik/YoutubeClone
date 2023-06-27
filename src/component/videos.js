    import './videos.css'
    function Video({title = "Video Title", channel = "Channel Name", view, time = "Time", verified = true, id}){
        return(
            <div className="card">
                <img src={`https://picsum.photos/id/${id}/360/203`} width={360} height={203} style={{'borderRadius': '6px'}}/>
                <div className="video-title">{title}</div>
                <div className="channel-name">{channel} {verified ? '✅' : null}</div>
                <span className="secondary">{view} views •</span>  <span className="secondary">{time} ago</span>
            </div>
        );
    }

    export default Video;