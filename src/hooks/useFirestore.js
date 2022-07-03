import { useState, useEffect } from "react";
import {projectFirestore} from '../firebase/config';

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection) //at the moment we no longer want to retrieve documents we can invoke this funciton.... unsub is used to unsubscribe from the collection when we no longer use it
    .orderBy('createdAt', 'desc')  // orders by date created and stores as newest first
    .onSnapshot((snap) => {
        let documents = [];
        snap.forEach(d => {
          documents.push({...d.data(), id: d.id})
        });
        setDocs(documents);
    })

    return () => unsub() // known as a clean up function; inovokes unsub method
  }, [collection])

  return {docs};
}

export default useFirestore;
