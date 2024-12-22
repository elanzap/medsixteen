// Update Drug type to remove company field
export interface Drug {
  id: string;
  name: string;
  type: 'Tablet' | 'Capsule' | 'Syrup' | 'Injection' | 'Drops' | 'Cream' | 'Gel' | 'Ointment';
  strength: string;
  genericName?: string;
}

// ... (keep other type definitions)
