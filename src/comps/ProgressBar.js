import React, { useEffect } from 'react';
import useStorage from '../hooks/UseStorage';
import { motion } from 'framer-motion/dist/framer-motion';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress, url);
  ;
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])

  return (
    <motion.div className="progress-bar"
      initial={{width: 0}}
      animate={{width: progress + '%'}}
    >
      progress
    </motion.div>
  )
}

export default ProgressBar;