export function getTierNumber(tier: string) {
  switch (tier) {
    case 'Unrated':
      return 0
    case 'Bronze':
      return 1
    case 'Silver':
      return 6
    case 'Gold':
      return 11
    case 'Platinum':
      return 16
    case 'Diamond':
      return 21
    case 'Ruby':
      return 26
    case 'Master':
      return 31
    default:
      return 0
  }
}
export function formatTierRomeToNumber(tier: string) {
  switch (tier) {
    case 'I':
      return 4
    case 'II':
      return 3
    case 'III':
      return 2
    case 'IV':
      return 1
    case 'V':
      return 0
    default:
      return 0
  }
}
export function formatStringToTierNumber(tier: string) {
  const splitedTier = tier.split(' ')
  const tier1 = splitedTier[0]
  const tier2 = splitedTier[1]

  const TierNumber = getTierNumber(tier1 || 'Unrated') + formatTierRomeToNumber(tier2 || 'V')
  return TierNumber
}
