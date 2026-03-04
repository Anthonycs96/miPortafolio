"use client";
import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      document.getElementsByTagName("script")[0].parentNode.insertBefore(
        tag,
        document.getElementsByTagName("script")[0]
      );
    }
    window.onYouTubeIframeAPIReady = () => {
      const p = new window.YT.Player("youtube-player", {
        height: "0", width: "0",
        videoId: "GDnS0ZUuljc",
        playerVars: { autoplay: 0, controls: 0, disablekb: 1, fs: 0, iv_load_policy: 3, modestbranding: 1, playsinline: 1, rel: 0 },
        events: {
          onReady: (e) => { setPlayer(e.target); e.target.setVolume(30); },
          onStateChange: (e) => setIsPlaying(e.data === window.YT.PlayerState.PLAYING),
        },
      });
    };
    return () => { if (player) player.destroy(); };
  }, []);

  useEffect(() => {
    const handle = () => {
      if (!hasInteracted && player) {
        setHasInteracted(true);
        player.playVideo();
      }
    };
    window.addEventListener("click", handle);
    return () => window.removeEventListener("click", handle);
  }, [hasInteracted, player]);

  const toggle = () => {
    if (!player) return;
    isPlaying ? player.pauseVideo() : player.playVideo();
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="fixed bottom-20 right-4 z-50 md:bottom-6"
      >
        <button
          onClick={toggle}
          title={isPlaying ? "Pausar música" : "Reproducir música"}
          className={`glass flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-300 group ${isPlaying ? "pulse-glow" : ""}`}
          style={{ boxShadow: '0 4px 20px var(--shadow)' }}
        >
          <div>
            {isPlaying
              ? <Volume2 size={18} style={{ color: 'var(--accent)' }} className="group-hover:scale-110 transition-transform" />
              : <VolumeX size={18} style={{ color: 'var(--text-muted)' }} className="group-hover:scale-110 transition-transform" />
            }
          </div>

          <AnimatePresence>
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="flex items-end gap-[3px] h-5 overflow-hidden"
              >
                {[1, 2, 3, 4].map((n) => (
                  <span key={n}
                    className={`eq-bar-${n} w-[3px] rounded-full`}
                    style={{ display: "block", minHeight: "4px", background: 'linear-gradient(to top, var(--accent), var(--accent-lt))' }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          <span className="text-xs font-medium hidden sm:inline" style={{ color: 'var(--text-muted)' }}>
            {isPlaying ? "TheFatRat" : "Música"}
          </span>
        </button>

        <div id="youtube-player" className="hidden" />
      </motion.div>

      {/* Tooltip */}
      <AnimatePresence>
        {!hasInteracted && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ delay: 1.8, duration: 0.4 }}
            className="fixed bottom-36 right-4 z-50 md:bottom-24 pointer-events-none"
          >
            <div className="glass px-4 py-3 rounded-xl shadow-lg max-w-[200px]"
                style={{ boxShadow: '0 4px 20px var(--shadow)' }}>
              <p className="text-xs" style={{ color: 'var(--text-sec)' }}>
                🎵 Toca en cualquier lugar para activar la música del viaje
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
