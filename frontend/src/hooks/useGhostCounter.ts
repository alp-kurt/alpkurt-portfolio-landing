import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

/**
 * Subscribes to the global ghost counter in Firestore.
 */
export const useGhostCounter = () => {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const ref = doc(db, "globalStats", "global");
    const unsubscribe = onSnapshot(ref, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.data();
        setCount(data.ghostsCaught ?? 0);
      } else {
        setCount(0);
      }
    });

    return () => unsubscribe();
  }, []);

  return count;
};
