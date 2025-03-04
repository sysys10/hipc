function getTierColor(tier: number) {
  if (tier === 0) return 'text-gray-500'
  if (0 < tier && tier < 6) return 'text-[#ad5600]' // 브론즈
  if (6 <= tier && tier < 11) return 'text-[#435f7a]' // 실버
  if (11 <= tier && tier < 16) return 'text-[#ec9a00]' // 골드
  if (16 <= tier && tier < 21) return 'text-[#27e2a4]' // 플래티넘
  if (21 <= tier && tier < 26) return 'text-[#00b4fc]' // 다이아
  if (26 <= tier && tier < 31) return 'text-rose-600' // 루비
  if (31 <= tier && tier < 34) return 'text-orange-500' // 마스터~챌린저
  return 'text-gray-500'
}
function TierToKorean(tier: number) {
  if (tier === 0) return '언랭'
  if (tier === 1) return '브론즈 V'
  if (tier === 2) return '브론즈 IV'
  if (tier === 3) return '브론즈 III'
  if (tier === 4) return '브론즈 II'
  if (tier === 5) return '브론즈 I'
  if (tier === 6) return '실버 V'
  if (tier === 7) return '실버 IV'
  if (tier === 8) return '실버 III'
  if (tier === 9) return '실버 II'
  if (tier === 10) return '실버 I'
  if (tier === 11) return '골드 V'
  if (tier === 12) return '골드 IV'
  if (tier === 13) return '골드 III'
  if (tier === 14) return '골드 II'
  if (tier === 15) return '골드 I'
  if (tier === 16) return '플래티넘 V'
  if (tier === 17) return '플래티넘 IV'
  if (tier === 18) return '플래티넘 III'
  if (tier === 19) return '플래티넘 II'
  if (tier === 20) return '플래티넘 I'
  if (tier === 21) return '다이아 V'
  if (tier === 22) return '다이아 IV'
  if (tier === 23) return '다이아 III'
  if (tier === 24) return '다이아 II'
  if (tier === 25) return '다이아 I'
  if (tier === 26) return '루비 V'
  if (tier === 27) return '루비 IV'
  if (tier === 28) return '루비 III'
  if (tier === 29) return '루비 II'
  if (tier === 30) return '루비 I'
  if (tier === 31) return '마스터'
  if (tier === 32) return '그랜드마스터'
  if (tier === 33) return '챌린저'
  return 'Unknown'
}
export { getTierColor, TierToKorean }
