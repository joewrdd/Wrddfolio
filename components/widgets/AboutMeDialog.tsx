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
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[500px] max-h-[80vh] overflow-y-auto z-50"
          >
            <div className="bg-[#0A0A0A] border border-[#2A0E61] rounded-xl shadow-xl p-4 sm:p-6 relative">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors"
              >
                <IoClose size={20} className="sm:w-6 sm:h-6" />
              </button>

              {/* Content */}
              <div className="space-y-3 sm:space-y-4 text-gray-300 pt-1">
                <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-white">
                  Hi 👋 I&apos;m Joe Ward
                </h2>
                <h3 className="text-lg sm:text-xl text-purple-400">
                  A Full Stack Flutter Developer
                </h3>
                <div className="space-y-2 sm:space-y-3 mt-1 sm:mt-4 text-sm sm:text-base">
                  <p className="flex items-start">
                    <span className="mr-2 min-w-[18px] text-center">🎓</span>
                    <span className="flex-1">
                      Computer Science graduate passionate about mobile
                      development
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="mr-2 min-w-[18px] text-center">📱</span>
                    <span className="flex-1">
                      Flutter enthusiast: Building efficient, scalable, and
                      user-friendly applications
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="mr-2 min-w-[18px] text-center">🚀</span>
                    <span className="flex-1">
                      Currently working on enhancing my skills towards becoming
                      a senior mobile developer
                    </span>
                  </p>
                  <p className="flex items-start">
                    <span className="mr-2 min-w-[18px] text-center">💡</span>
                    <span className="flex-1">
                      Love learning new technologies and implementing innovative
                      solutions
                    </span>
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
