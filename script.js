function loadVideos(engine) {
    const videoSection = document.getElementById('video-section');
    videoSection.innerHTML = ''; // Clear previous videos
  
    // Reset active class on buttons
    const buttons = document.querySelectorAll('.load-videos');
    buttons.forEach(button => button.classList.remove('active'));
  
    let videos;
    if (engine === 'blender') {
      videos = [
        { title: "Blender Video 1", subtitle: "Subtitle 1", description: "Description for Blender video 1.", url: "https://www.youtube.com/embed/video-id1", color: "orange" },
        { title: "Blender Video 2", subtitle: "Subtitle 2", description: "Description for Blender video 2.", url: "https://www.youtube.com/embed/video-id2", color: "orange" }
      ];
      document.querySelector('.load-videos:nth-child(1)').classList.add('active'); // Highlight Blender button
    } else if (engine === 'houdini') {
      videos = [
        { title: "Houdini Video 1", subtitle: "Subtitle 1", description: "Description for Houdini video 1.", url: "https://www.youtube.com/embed/video-id3", color: "#ff8c00" }, // Dark orange
        { title: "Houdini Video 2", subtitle: "Subtitle 2", description: "Description for Houdini video 2.", url: "https://www.youtube.com/embed/video-id4", color: "#ff8c00" }
      ];
      document.querySelector('.load-videos:nth-child(2)').classList.add('active'); // Highlight Houdini button
    } else if (engine === 'unreal') {
      videos = [
        { title: "Unreal Video 1", subtitle: "Subtitle 1", description: "Description for Unreal video 1.", url: "https://www.youtube.com/embed/video-id5", color: "blue" },
        { title: "Unreal Video 2", subtitle: "Subtitle 2", description: "Description for Unreal video 2.", url: "https://www.youtube.com/embed/video-id6", color: "blue" }
      ];
      document.querySelector('.load-videos:nth-child(3)').classList.add('active'); // Highlight Unreal Engine button
    }
  
    videos.forEach(video => {
      const videoBox = document.createElement('div');
      videoBox.className = 'video-box';
      videoBox.style.backgroundColor = video.color;
  
      videoBox.innerHTML = `
        <iframe src="${video.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="video-text">
          <h3>${video.title}</h3>
          <h4>${video.subtitle}</h4>
          <p>${video.description}</p>
        </div>
      `;
      videoSection.appendChild(videoBox);
    });
  }
  