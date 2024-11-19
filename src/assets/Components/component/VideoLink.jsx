// import React from 'react';

// const VideoLink = ({ videoId }) => {
//   const embedUrl = `https://www.youtube.com/embed/${videoId}`;
//   console.log(embedUrl, "bu embad");

//   return (
//     <iframe
//       className="w-full h-full aspect-[4/3]"
//       // width="560"
//       // height="315"
//       src={embedUrl}
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//     ></iframe>
//   );
// };

// export default VideoLink;

import React from 'react';

const VideoLink = ({ url, id }) => {
  // YouTube video ID ni URL dan ajratib olish funksiyasi
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|embed\/|watch\?v=|watch\?.+&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeVideoId(url);

  return (
    <div className="w-full h-[80vh] flex items-center " key={id} >
      {videoId ? (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube video"
        ></iframe>
      ) : (
        <p>Invalid YouTube URL</p>
      )}
    </div>
  );
};

export default VideoLink;
