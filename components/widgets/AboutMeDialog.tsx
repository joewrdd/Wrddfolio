"use client";

import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface AboutMeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutMeDialog = ({ isOpen, onClose }: AboutMeDialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[500px] z-50"
          >
            <div className="bg-[#0A0A0A] border border-[#2A0E61] rounded-xl shadow-xl p-6 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <IoClose size={24} />
              </button>

              {/* Content */}
              <div className="space-y-4 text-gray-300">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
                  Hi 👋 I&apos;m Joe Ward
                </h2>
                <h3 className="text-xl text-purple-400">
                  A Full Stack Flutter Developer
                </h3>
                <div className="space-y-3 mt-4">
                  <p className="flex items-start">
                    <span className="mr-2">🎓</span>
                    Computer Science graduate passionate about mobile
                    development
                  </p>
                  <p className="flex items-start">
                    <span className="mr-2">📱</span>
                    Flutter enthusiast: Building efficient, scalable, and
                    user-friendly applications
                  </p>
                  <p className="flex items-start">
                    <span className="mr-2">🚀</span>
                    Currently working on enhancing my skills towards becoming a
                    senior mobile developer
                  </p>
                  <p className="flex items-start">
                    <span className="mr-2">💡</span>
                    Love learning new technologies and implementing innovative
                    solutions
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutMeDialog;
