/* eslint-env mocha */

'use strict'

const libFlag = require('../index')
const assert = require('assert')
const { itEach } = require('mocha-it-each')
const {Chance} = require('chance')
const { FLAGS } = require('../index')

const chance = new Chance()

describe('relay.lib.common tests', () => {
  let flag
  beforeEach(()=>{
    flag = chance.natural({min: 0, max: 2**31})
  })
  describe('orders', () => {
    let orderParams = Object.entries(FLAGS.ORDER)
    itEach('should add flag correctly for orders ${value[0]}', orderParams, async ([key, val]) => {
      flag = libFlag.add_flag('ORDER', flag, key)
      assert.strictEqual(flag & FLAGS.ORDER[key], val)
    })

    itEach('should remove flag correctly for orders ${value[0]}', orderParams, async ([key, val]) => {
      flag = libFlag.del_flag('ORDER', libFlag.add_flag('ORDER', flag, key), key)
      assert.strictEqual(flag & val, 0)
    })

    itEach('has_flag should correctly true/false for ${value[0]} when present/absetnt',
      orderParams, async ([key, val]) => {
        flag = libFlag.add_flag('ORDER', flag, key)
        assert.ok(libFlag.has_flag('ORDER', flag, key))

        flag = libFlag.del_flag('ORDER', flag, key)
        assert.ok(!libFlag.has_flag('ORDER', flag, key))
      })
  })

  describe('offers', () => {
    let offerParams = Object.entries(FLAGS.OFFER)
    itEach('should add flag correctly for orders ${value[0]}', offerParams, async ([key, val]) => {
      flag = libFlag.add_flag('OFFER', flag, key)
      assert.strictEqual(flag & FLAGS.OFFER[key], val)
    })

    itEach('should remove flag correctly for orders ${value[0]}', offerParams, async ([key, val]) => {
      flag = libFlag.del_flag('OFFER', libFlag.add_flag('OFFER', flag, key), key)
      assert.strictEqual(flag & val, 0)
    })

    itEach('has_flag should correctly true/false for ${value[0]} when present/absent',
      offerParams, async ([key, val]) => {
        flag = libFlag.add_flag('OFFER', flag, key)
        assert.ok(libFlag.has_flag('OFFER', flag, key))

        flag = libFlag.del_flag('OFFER', flag, key)
        assert.ok(!libFlag.has_flag('OFFER', flag, key))
      })
  })

  describe('entry_trg_reason', () => {
    let trgPrams = Object.entries(FLAGS.ENTRY_TRG_REASON)
    itEach('should add flag correctly for orders ${value[0]}', trgPrams, async ([key, val]) => {
      flag = libFlag.add_flag('ENTRY_TRG_REASON', flag, key)
      assert.strictEqual(flag & FLAGS.ENTRY_TRG_REASON[key], val)
    })

    itEach('should remove flag correctly for orders ${value[0]}', trgPrams, async ([key, val]) => {
      flag = libFlag.del_flag('ENTRY_TRG_REASON', libFlag.add_flag('ENTRY_TRG_REASON', flag, key), key)
      assert.strictEqual(flag & val, 0)
    })

    itEach('has_flag should correctly true/false for ${value[0]} when present/absent',
      trgPrams, async ([key, val]) => {
        flag = libFlag.add_flag('ENTRY_TRG_REASON', flag, key)
        assert.ok(libFlag.has_flag('ENTRY_TRG_REASON', flag, key))

        flag = libFlag.del_flag('ENTRY_TRG_REASON', flag, key)
        assert.ok(!libFlag.has_flag('ENTRY_TRG_REASON', flag, key))
      })
  })
})
