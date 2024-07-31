function createPlaylist(playlistName) {
    let songs = [];

    function addSong(songName, artist) {
        songs.push({ songName, artist });
    }

    function listSongs() {
        return songs;
    }

    return {
        addSong,
        listSongs
    };
}

// Usage example:
const myPlaylist = createPlaylist("My Favorite Playlist");

// Task 2: Adding songs
myPlaylist.addSong("Song A", "Artist A");
myPlaylist.addSong("Song B", "Artist B");

// Task 3: Listing songs
console.log(myPlaylist.listSongs());
// Output:
// [ { songName: 'Song A', artist: 'Artist A' },
//   { songName: 'Song B', artist: 'Artist B' } ]
