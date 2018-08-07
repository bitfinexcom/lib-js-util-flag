const FLAGS = {
  ORDER: {
    'IS_HIDDEN': 64,
    'IS_POS_CLOSE': 512,
    'IS_POS_REDUCE': 1024,
    'IS_POST_ONLY': 4096,
    'IS_OCO': 16384,
    'AVOID_FUNDING_VIR': 524288,
    'MOD_TIF_0': 8589934592
  },
  OFFER: {
    'IS_HIDDEN': 64
  }
}

function has_flag (t, f, c) {
  return ((f & FLAGS[t][c]) === FLAGS[t][c])
}

module.exports = {
  FLAGS: FLAGS,
  has_flag: has_flag
}
