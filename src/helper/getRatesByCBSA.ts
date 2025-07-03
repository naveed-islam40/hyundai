// src/helper/getRatesByCBSA.ts
export function getRatesByCBSA(cbsaCode: string | undefined) {
  // static rates — replace with your actual CBSA-based logic
  const ratesByCBSA: Record<string, { bodyRate: number; refinishRate: number; paintMaterialRate: number }> = {
    "1001": { bodyRate: 50, refinishRate: 40, paintMaterialRate: 30 },
    "1002": { bodyRate: 55, refinishRate: 42, paintMaterialRate: 33 },
    "default": { bodyRate: 45, refinishRate: 38, paintMaterialRate: 28 },
  };

  if (!cbsaCode || !ratesByCBSA[cbsaCode]) {
    return ratesByCBSA["default"];
  }

  return ratesByCBSA[cbsaCode];
}