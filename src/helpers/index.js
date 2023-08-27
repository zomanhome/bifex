export const CurrencyFormatter = number =>
  new Intl.NumberFormat("en-US",
    {style: "decimal", currency: "USD", maximumFractionDigits: 0}
  ).format(number)

export const PercentFormatter = number =>
  new Intl.NumberFormat("en-US",
    {style: "percent", maximumFractionDigits: 2}
  ).format(number)