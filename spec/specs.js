describe("romanNumerals", function(){
  it("returns the appropriate roman numeral for the base number in the 100's position", function() {
    expect(romanNumerals("600")).to.equal("DC");
  });
  it("returns the appropriate roman numeral for the base number in the 10's postion", function(){
    expect(romanNumerals("60")).to.equal("LX");
  });
  it("returns the appropriate roman numeral for the base number in the 1's postion", function(){
    expect(romanNumerals("6")).to.equal("VI");
  });
  it("returns the appropriate roman numeral for the base number in the 1000's postion", function(){
    expect(romanNumerals("3000")).to.equal("MMM");
  });
  it("returns the appropriate roman numeral for any number", function(){
    expect(romanNumerals("123")).to.equal("CXXIII");
    expect(romanNumerals("321")).to.equal("CCCXXI");
    expect(romanNumerals("444")).to.equal("CDXLIV");
    expect(romanNumerals("999")).to.equal("CMXCIX");
    expect(romanNumerals("555")).to.equal("DLV");
    expect(romanNumerals("596")).to.equal("DXCVI");
  });
});
