"use client";
import React, { useEffect } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string; // Defaults to your demo path if not provided
}

const VideoModal = ({ 
  isOpen, 
  onClose, 
  videoSrc = "/demo/Apple Vision - Virtual Tour 360.mp4" 
}: VideoModalProps) => {
  
  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
      {/* Darkened Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-black rounded-2xl shadow-2xl overflow-hidden border border-white/10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Aspect Ratio Container for Video */}
        <div className="aspect-video relative">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-md transition-all duration-200 hover:rotate-90 group"
            >
                <X size={20} className="group-hover:text-red-400 transition-colors" />
            </button>

            {/* Video Player */}
            <video
                src={videoSrc}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
            >
                Your browser does not support the video tag.
            </video>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;