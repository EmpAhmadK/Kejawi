import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ا',
  'ب',
  'ت',
  'ث',
  'ج',
  'چ',
  'ح',
  'خ',
  'د',
  'ذ',
  'ر',
  'ز',
  'س',
  'ش',
  'ص',
  'ض',
  'ط',
  "ظ",
  "ع",
  'غ',
  "ڠ",
  'ف',
  "ڤ",
  'ق',
  "ک",
  'ݢ',
  "ل",
  'م',
  "ن",
  'و',
  'ۏ',
  'ه',
  "ء",
  'ٴ',
  'أ',
  "إ",
  'ئ',
  "ي",
  'ى',
  'ڽ',
  'ة',
  '٢',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
