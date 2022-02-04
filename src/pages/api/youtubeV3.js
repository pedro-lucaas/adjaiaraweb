async function getYoutubeVideos(req, res) {
  const apiSecret = process.env.YOUTUBE_API_SECRET;
  // get live
  let response;
  const liveResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=id&channelId=UCb6GR-irIyMpSfsdrhPC7CQ&eventType=live&maxResults=1&order=date&type=video&key=${apiSecret}`)
  const liveResponseJson = await liveResponse.json()

  if(liveResponseJson.items){
    response = liveResponseJson.items
    if(!items.lenght){
      // get last video
      const videoResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=id&channelId=UCb6GR-irIyMpSfsdrhPC7CQ&eventType=none&maxResults=1&order=date&type=video&key=${apiSecret}`)
      const videoResponseJson = await videoResponse.json()
      response = videoResponseJson.items
    }
  }else{
    response = liveResponseJson.error
  }

  res.setHeader('Cache-Control', 's-maxage=1800, stale-while-revalidate')
 
  res.json({
    response
  })
  
}

export default getYoutubeVideos;