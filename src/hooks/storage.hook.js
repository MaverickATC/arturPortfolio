import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from "../firebase/firebase";

export const useStorage = (files, section) => {
  const [error, setError] = useState(null);
  // const [url, setUrl] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    files.forEach(file => {
      const storageRef = projectStorage.ref(`/${section}/${file.name}`);
      const collectionRef = projectFirestore.collection(`${section}`)
      storageRef.put(file).on('state_changed', null,
        (err) => {
          setError(err);
        }, async () => {
          const src = await storageRef.getDownloadURL();
          const createdAt = timestamp();
          await collectionRef.add({
            src,
            createdAt,
            filename: file.name
          });
          // setUrl(url);
          setLoading(false);
        });
    })
  }, [files, section]);

  return {error, loading}

}
