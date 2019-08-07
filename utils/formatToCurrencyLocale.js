//@flow

export default function formatToCurrencyLocale(value: number) {
  return `$ ${value.toFixed(2)}`;
}
