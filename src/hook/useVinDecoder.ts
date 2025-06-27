export function useVinDecoder() {
 const decodeVIN = async (vin: string) => {
    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvalues/${vin}?format=json`
      );
      const data = await response.json();
      return data?.Results?.[0];
    } catch (error) {
      console.error("VIN decoding failed:", error);
      return null;
    }
  };

  return { decodeVIN };
}