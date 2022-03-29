import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'ذ',
  'ض',
  'ص',
  'ث',
  'ق',
  'ف',
  'غ',
  'ع',
  'ه',
  'خ',
  'ح',
  'ج',
  'د',
  'ش',
  'س',
  'ي',
  'ب',
  "ل",
  "ا",
  'ت',
  "ن",
  'م',
  "ک",
  'ط',
  "ڽ",
  'چ',
  "ۏ",
  'ر',
  "ڤ",
  'ى',
  'ة',
  'و',
  "ز",
  'ظ',
  'ء',
  "ٴ",
  'أ',
  "إ",
  'ئ',
  'ݢ',
  'ڠ',
  '٢',
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
