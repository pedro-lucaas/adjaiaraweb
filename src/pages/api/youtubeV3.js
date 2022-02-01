
async function getYoutubeVideos(req, res) {
  const apiSecret = process.env.YOUTUBE_API_SECRET;
  const youtubeResponse = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCb6GR-irIyMpSfsdrhPC7CQ&maxResults=2&type=video&order=date&key=${apiSecret}`)
  const youtubeResponseJson = await youtubeResponse.json();
  const videos = youtubeResponseJson.items

  res.json({
    videos: videos
  })
}

export default getYoutubeVideos;