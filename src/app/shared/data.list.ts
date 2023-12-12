export const ListOfTaxes: Array<string> = [
  'einkommensteuer',
  'erbschaftssteuer',
  'gewerbesteuer',
  'grundsteuer',
  'kapitalertragsteuer',
  'kirchensteuer',
  'körperschaftsteuer',
  'mehrwertsteuer',
  'solidaritätszuschlag',
  'schenkungsteuer', 
  'umsatzsteuer',
]; 

export const DeListOfTaxes: Array<object> = [
  {name: 'einkommensteuer', abbreviation: 'abbreviation', category: 'besitzsteuer', rate: '0, 14, 24, 42 & 45'}, 
  {name: 'erbschaftssteuer', rate: '7 - 50'}, 
  {name: 'gewerbesteuer', rate: 'N. V.'}, 
  {name: 'mehrwertsteuer', abbreviation: 'MwSt.', category: 'verkehrsteuer', rate: '0, 7, 19'},

]; 

/*

// Verkehrsteuern
Kfz-Steuer 
Versicherungsteuer 
Grunderwerbsteuer 
Rennwett- und Lotteriesteuer 
Spielbankabgabe 
Feuerschutzsteuer 
Luftverkehrsteuer  

// Verbrauchsteuern
Energiesteuer  
Tabaksteuer 
Alkoholsteuer 
Alkopopsteuer 
Kaffeesteuer 
Stromsteuer 
Biersteuer 
Einfuhrumsatzsteuer 
Energiesteuer  

// Besitzsteuern
Einkommensteuer beziehungsweise Lohnsteuer 
Gewerbesteuer 
Körperschaftsteuer 
Erbschaftssteuer 
Solidaritätszuschlag 
Grundsteuer 
teils die Kirchensteuer  
Abgeltungsteuer

*/
