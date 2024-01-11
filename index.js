'use strict'

const FLAGS = {
  ORDER: {
    IS_HIDDEN: 64,
    IS_POS_CLOSE: 512,
    IS_POS_REDUCE: 1024,
    IS_POST_ONLY: 4096,
    IS_OCO: 16384,
    AVOID_FUNDING_VIR: 524288,
    MOD_TIF_0: 33554432,
    EXP_0: 1073741824
  },
  OFFER: {
    IS_HIDDEN: 64
  },
  ENTRY_TRG_REASON: {
    R_UPD_FX: 1048576
  },
  RELAY: {
    DEC_S: 2 ** 3,
    TIME_S: 2 ** 5,
    FMT_X: 2 ** 9,
    FMT_INTERNAL0: 2 ** 10,
    TS_ALL: 2 ** 15,
    SEQ_ALL: 2 ** 16,
    CHECKSUM: 2 ** 17,
    EXP: 2 ** 18,
    DEBUG: 2 ** 19,
    C_DEBUG: 2 ** 20,
    DP_TRAVEL_RULE: 2 ** 21,
    DP_BFXPAY: 2 ** 22,
    APP_OFFICIAL: 2 ** 25,
    APP_MOBILE_OFFICIAL: 2 ** 26,
    VNEXT_0: 2 ** 29
  }
}

function has_flag (t, f, c) {
  return (f & FLAGS[t][c]) === FLAGS[t][c]
}

function add_flag (t, f, c) {
  return f | FLAGS[t][c]
}

function del_flag (t, f, c) {
  return f & ~FLAGS[t][c]
}

module.exports = {
  FLAGS,
  has_flag,
  add_flag,
  del_flag
}
