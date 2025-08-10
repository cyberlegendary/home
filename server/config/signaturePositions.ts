// PDF signature positions configuration
// This file is automatically updated when admins change signature positions

export interface SignaturePosition {
  x: number;
  y: number;
  width: number;
  height: number;
  opacity?: number;
}

export interface PDFSignatureConfig {
  [pdfType: string]: SignaturePosition;
}

// Default signature positions for each PDF type
export const signaturePositions: PDFSignatureConfig = {
  "absa-form": {
    x: 74,
    y: 373,
    width: 200,
    height: 60,
    opacity: 0.7
  },
  "clearance-certificate-form": {
    x: 87,
    y: 575,
    width: 200,
    height: 60,
    opacity: 0.7
  },
  "sahl-certificate-form": {
    x: 71,
    y: 586,
    width: 200,
    height: 60,
    opacity: 0.7
  },
  "discovery-form": {
    x: 380,
    y: 110,
    width: 200,
    height: 60,
    opacity: 0.7
  },
  "liability-form": {
    x: 360,
    y: 580,
    width: 200,
    height: 60,
    opacity: 0.7
  },
  "noncompliance-form": {
    x: 300,
    y: 700,
    width: 200,
    height: 60,
    opacity: 0.7
  },
  "material-list-form": {
    x: 320,
    y: 750,
    width: 200,
    height: 60,
    opacity: 0.7
  }
};

// Function to get signature position for a specific form type
export function getSignaturePosition(formType: string): SignaturePosition {
  return signaturePositions[formType] || {
    x: 400,
    y: 100,
    width: 200,
    height: 60,
    opacity: 0.7
  };
}

// Function to update signature position (this will be called by admin API)
export function updateSignaturePosition(formType: string, position: SignaturePosition): void {
  signaturePositions[formType] = {
    ...position,
    opacity: position.opacity || 0.7 // Default transparency
  ,
  "default": {
    x: 168,
    y: 722,
    width: 200,
    height: 30,
    opacity: 0.7
  }
};
}
