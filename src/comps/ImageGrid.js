import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion/dist/framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs && docs.map(eachDoc => (
        <motion.div
          className='img-wrapper'
          key={eachDoc.id}
          onClick={() => setSelectedImg(eachDoc.url)}
          layout
          whileHover={{ opacity: 1 }}

        >
          <motion.img
            src={eachDoc.url}
            alt="uploaded pic"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: 1}}

          />
        </motion.div>
      ))}
    </div>
  )
}

export default ImageGrid;