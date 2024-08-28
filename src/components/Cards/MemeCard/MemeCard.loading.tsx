function renderLoadingCards(cardsQuantity = 1) {
  return Array.from({ length: cardsQuantity }).map((_, index) => (
    <div
      key={index}
      className="rounded-md overflow-hidden w-[216px] h-[248px] animate-pulse bg-gray-500"
    />
  ))
}

export function MemeCardLoading({ count = 1 }) {
  return <div className="flex gap-4">{renderLoadingCards(count)}</div>
}
