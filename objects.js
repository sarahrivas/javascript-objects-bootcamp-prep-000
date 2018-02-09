var playlist = {Fugees:"Killing me softly"};

function updatePlaylist (playList, artistName, songTitle) {
  Object.assign({}, playList, { artistName: [songTitle] });
}

function removeFromPlaylist (playList, artistName) {
  delete playList.artistName;
  return playList;
}