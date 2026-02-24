import { useState, useEffect } from 'react'

export default function AudioPlayer({ audio }) {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const playlist = audio.map((clip) => new Audio(clip))
    if (playlist.length <= currentTrackIndex) {
        setCurrentTrackIndex(0)
    }

  useEffect(() => {
    const currentTrack = playlist[currentTrackIndex]

    function handleEnded() {
        if (currentTrackIndex < playlist.length - 1) {
            setCurrentTrackIndex(currentTrackIndex + 1);
        }
    }

    currentTrack.addEventListener('ended', handleEnded)

    currentTrack.play()

    // Cleanup
    return () => {
        currentTrack.removeEventListener('ended', handleEnded)
    }
  }, [currentTrackIndex, playlist])
}