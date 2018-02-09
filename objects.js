var playlist = {Fugees:"Killing me softly"};

function updatePlaylist (playList, artistName, songTitle) {
  Object.assign({}, playlist, { artistName: [songTitle] });
}

function removeFromPlaylist (playList, artistName) {
  delete playlist.artistName;
  return playlist;
}