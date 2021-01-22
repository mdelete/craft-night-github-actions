const process = require('process')

describe('example', function() {
  it('should execute a test', function() {
    expect('totalsicher').toBe(process.env.super_secret)
  })
})