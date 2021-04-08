export const getEthermineCurrentStats = async (wallet: string) => {
  try {
    const res = await fetch(
      `https://api.ethermine.org/miner/${wallet}/currentStats`
    )
    const data = await res.json()
    return data.data
  } catch (error) {
    console.error(error)
  }
}

export const getEthermineTotalPayout = async (wallet: string) => {
  const res = await fetch(`https://api.ethermine.org/miner/${wallet}/payouts`)
  const data = await res.json()

  let totalPayout = 0
  for (const ethObj of data.data) {
    totalPayout += ethObj.amount
  }
  return totalPayout
}
