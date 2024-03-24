import { useEffect } from "react";
import { verifyServer } from "../../utils/functions";

const Verify = ({setBackendAvailable}) => {
  useEffect(() => {
    const Maxattempts = 60;
    let attempts = 0;
    const waitBackend = async () => {
      const available = await verifyServer();
      if (available) {
        setBackendAvailable(true);
      } else if (attempts < Maxattempts) {
        attempts++;
        setTimeout(waitBackend, 3000);
      }
    };

    waitBackend();
  }, []);
  return <></>;
};

export default Verify;
