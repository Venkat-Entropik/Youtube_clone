import React from 'react'
import {Stack,Box} from '@mui/material'
import VideoCard from './VideoCard'
import ChannelCard from './ChannelCard'
const Videos = ({videos}) => {
    
  return (
    <Stack direction='row' flexWrap='wrap' justifyContent='start' gap={2}>
        {(videos.length>0) ? (videos.map((item,idx)=>(
        
        <Box key={idx}>
            {item.id.videoId && <VideoCard video={item}/>}
            {item.id.channelId && <ChannelCard channelDetail={item}/>}
        </Box>
        
    ))) : (<img src='https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700' alt='loding'/>)}
    </Stack>
  )
}

export default Videos