const express = require('express');
const rtspStream = require('node-rtsp-stream');
const path = require('path');
const app = express();

// Serve the index.html file
app.use(express.static(path.join(__dirname, 'public')));  // ให้เซิร์ฟไฟล์ในโฟลเดอร์ 'public'

// Stream for first camera
const stream_1 = new rtspStream({ streamUrl: 'rtsp://admin:hikvision1234@192.168.1.61:554/Streaming/Channels/1', wsPort: 9999,ffmpegPath: process.env.FFMPEG_PATH});
const stream_2 = new rtspStream({ streamUrl: 'rtsp://admin:haier@2021@192.168.2.192:554/Streaming/Channels/1', wsPort: 10000, ffmpegPath: process.env.FFMPEG_PATH  });
const stream_3 = new rtspStream({ streamUrl: 'rtsp://admin:haier@2021@192.168.2.192:554/Streaming/Channels/1',  wsPort: 1100,  ffmpegPath: process.env.FFMPEG_PATH });
const stream_4 = new rtspStream({ streamUrl: 'rtsp://admin:hikvision1234@192.168.1.61:554/Streaming/Channels/1', wsPort: 1200, ffmpegPath: process.env.FFMPEG_PATH });

app.listen(8080, () => {console.log('HTTP server running on http://localhost:8080');});
