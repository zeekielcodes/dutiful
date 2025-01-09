export function formatMoney(amount: string) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
