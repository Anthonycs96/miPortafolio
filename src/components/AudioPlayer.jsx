"use client";
import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [player, setPlayer] = useState(null);

  // ID del video de YouTube
  const videoId = "GDnS0ZUuljc";

  useEffect(() => {
    // Cargar la API de YouTube
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Inicializar el reproductor cuando la API esté lista
    window.onYouTubeIframeAPIReady = () => {
      const newPlayer = new window.YT.Player("youtube-player", {
        height: "0",
        width: "0",
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            setPlayer(event.target);
            event.target.setVolume(30); // Volumen al 30%
          },
          onStateChange: (event) => {
            setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    };

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted && player) {
        setHasInteracted(true);
        player.playVideo();
        setIsPlaying(true);
      }
    };

    window.addEventListener("click", handleInteraction);
    return () => window.removeEventListener("click", handleInteraction);
  }, [hasInteracted, player]);

  const togglePlay = () => {
    if (!player) return;

    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  return (
    <>
      <div className="fixed bottom-24 right-4 z-50">
        <button
          onClick={togglePlay}
          className="bg-[var(--background-secondary)] p-3 rounded-full shadow-lg border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-300 group"
          title={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {isPlaying ? (
            <Volume2 className="w-6 h-6 text-[var(--primary)] group-hover:scale-110 transition-transform" />
          ) : (
            <VolumeX className="w-6 h-6 text-[var(--muted-foreground)] group-hover:scale-110 transition-transform" />
          )}
        </button>
        <div id="youtube-player" className="hidden"></div>
      </div>

      {!hasInteracted && (
        <div className="fixed bottom-24 right-16 z-50 animate-fade-in">
          <div className="bg-[var(--background-secondary)] p-4 rounded-lg shadow-lg border border-[var(--border)] max-w-xs">
            <p className="text-sm text-[var(--foreground)]">
              ¡Haz clic en cualquier lugar para activar la música de fondo! 🎵
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AudioPlayer;
