const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

describe('timeToWords', () => {
  it('should convert 00:00 to midnight', () => {
    expect(timeToWords('00:00')).to.equal('midnight');
  });

  it('should convert 00:12 to twelve twelve am', () => {
    expect(timeToWords('00:12')).to.equal('twelve twelve am');
  });

  it('should convert 01:00 to one o’clock am', () => {
    expect(timeToWords('01:00')).to.equal('one o’clock am');
  });

  it('should convert 06:01 to six oh one am', () => {
    expect(timeToWords('06:01')).to.equal('six oh one am');
  });

  it('should convert 06:10 to six ten am', () => {
    expect(timeToWords('06:10')).to.equal('six ten am');
  });

  it('should convert 06:18 to six eighteen am', () => {
    expect(timeToWords('06:18')).to.equal('six eighteen am');
  });

  it('should convert 06:30 to six thirty am', () => {
    expect(timeToWords('06:30')).to.equal('six thirty am');
  });

  it('should convert 10:34 to ten thirty four am', () => {
    expect(timeToWords('10:34')).to.equal('ten thirty four am');
  });

  it('should convert 12:00 to noon', () => {
    expect(timeToWords('12:00')).to.equal('noon');
  });

  it('should convert 12:09 to twelve oh nine pm', () => {
    expect(timeToWords('12:09')).to.equal('twelve oh nine pm');
  });

  it('should convert 23:23 to eleven twenty three pm', () => {
    expect(timeToWords('23:23')).to.equal('eleven twenty three pm');
  });
});
