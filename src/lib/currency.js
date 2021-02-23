/**
 * formatCurrency
 */

export function formatCurrency(number) {
    if ( typeof number !== 'number' ) {
      throw new Error(`Failed to format currency; Invalid number type ${typeof number}`);
    }
    return (number).toLocaleString('en-AUD', {
      style: 'currency',
      currency: 'AUD'
    })
  }