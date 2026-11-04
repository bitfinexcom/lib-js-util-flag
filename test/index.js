'use strict'

const test = require('brittle')
const libFlag = require('../index')
const assert = require('assert')
const { FLAGS } = require('../index')
const { randomInt } = require('crypto')

test('relay.lib.common tests', (t) => {
  let flag = randomInt(0, 2 ** 31)

  t.test('orders', (t) => {
    const orderParams = Object.entries(FLAGS.ORDER)
    orderParams.forEach(([key, val]) => {
      t.comment(`should add flag correctly for orders ${key}`)
      flag = libFlag.add_flag('ORDER', flag, key)
      t.is(flag & FLAGS.ORDER[key], val)

      t.comment(`should remove flag correctly for orders ${key}`)
      flag = libFlag.del_flag('ORDER', libFlag.add_flag('ORDER', flag, key), key)
      t.is(flag & val, 0)

      t.comment(`has_flag should correctly true/false for ${key} when present/absetnt`)
      flag = libFlag.add_flag('ORDER', flag, key)
      assert.ok(libFlag.has_flag('ORDER', flag, key))

      flag = libFlag.del_flag('ORDER', flag, key)
      assert.ok(!libFlag.has_flag('ORDER', flag, key))
    })
  })

  t.test('offers', () => {
    const offerParams = Object.entries(FLAGS.OFFER)
    offerParams.forEach(([key, val]) => {
      t.comment(`should add flag correctly for orders ${key}`)
      flag = libFlag.add_flag('OFFER', flag, key)
      t.is(flag & FLAGS.OFFER[key], val)

      t.comment(`should remove flag correctly for orders ${key}`)
      flag = libFlag.del_flag('OFFER', libFlag.add_flag('OFFER', flag, key), key)
      t.is(flag & val, 0)

      t.comment(`has_flag should correctly true/false for ${key} when present/absent`)
      flag = libFlag.add_flag('OFFER', flag, key)
      assert.ok(libFlag.has_flag('OFFER', flag, key))

      flag = libFlag.del_flag('OFFER', flag, key)
      assert.ok(!libFlag.has_flag('OFFER', flag, key))
    })
  })

  t.test('entry_trg_reason', (t) => {
    const trgPrams = Object.entries(FLAGS.ENTRY_TRG_REASON)
    trgPrams.forEach(([key, val]) => {
      t.comment(`should add flag correctly for orders ${key}`)
      flag = libFlag.add_flag('ENTRY_TRG_REASON', flag, key)
      t.is(flag & FLAGS.ENTRY_TRG_REASON[key], val)

      t.comment(`should remove flag correctly for orders ${key}`)
      flag = libFlag.del_flag('ENTRY_TRG_REASON', libFlag.add_flag('ENTRY_TRG_REASON', flag, key), key)
      t.is(flag & val, 0)

      t.comment(`has_flag should correctly true/false for ${key} when present/absent`)
      flag = libFlag.add_flag('ENTRY_TRG_REASON', flag, key)
      assert.ok(libFlag.has_flag('ENTRY_TRG_REASON', flag, key))

      flag = libFlag.del_flag('ENTRY_TRG_REASON', flag, key)
      assert.ok(!libFlag.has_flag('ENTRY_TRG_REASON', flag, key))
    })
  })

  t.test('relay', (t) => {
    const relayParams = Object.entries(FLAGS.RELAY)
    relayParams.forEach(([key, val]) => {
      t.comment(`should add flag correctly for orders ${key}`)
      flag = libFlag.add_flag('RELAY', flag, key)
      t.is(flag & FLAGS.RELAY[key], val)

      t.comment(`should remove flag correctly for orders ${key}`)
      flag = libFlag.del_flag('RELAY', libFlag.add_flag('RELAY', flag, key), key)
      t.is(flag & val, 0)

      t.comment(`has_flag should correctly true/false for ${key} when present/absent`)
      flag = libFlag.add_flag('RELAY', flag, key)
      assert.ok(libFlag.has_flag('RELAY', flag, key))

      flag = libFlag.del_flag('RELAY', flag, key)
      assert.ok(!libFlag.has_flag('RELAY', flag, key))
    })
  })
})
