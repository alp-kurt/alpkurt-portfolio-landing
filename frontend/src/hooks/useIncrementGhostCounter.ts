import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase";

/**
 * Custom hook to increment the global ghost counter in Firestore.
 */
export const useIncrementGhostCounter = () => {
  const incrementGhostsCaught = async () => {
    const statRef = doc(db, "globalStats", "global");

    try {
      await updateDoc(statRef, {
        ghostsCaught: increment(1),
      });
    } catch (error) {
      console.error("Failed to increment ghostsCaught:", error);
    }
  };

  return incrementGhostsCaught;
};
