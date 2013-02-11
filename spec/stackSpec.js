describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });


  describe("add", function(){
	
  	it("should exist", function() {
  		expect(stack.add).toEqual(jasmine.any(Function));
  	});
  	
  	it("should increase the length", function(){
  		var oldLength = stack.size;
		  stack.add('my bacon');
  		expect(stack.size).toEqual(oldLength+1);
  	});

	it("should add object", function() {
    stack.add('first item');
    stack.add('second item');
    stack.add('third item');
		expect(stack.top.payload).toEqual("third item");
	});


  });
  describe("remove", function(){
    it("should exist", function() {
        expect(stack.remove).toEqual(jasmine.any(Function));
    });

    it("should remove the top item", function() {
      stack.add('first item');
      stack.add('second item');
      stack.add('third item');
      stack.remove();
      expect(stack.top.payload).toEqual('second item');
    });

    it("should decrease the stored length", function() {
      stack.add('first item');
      stack.add('second item');
      stack.add('third item');
      var oldLength = stack.size;
      stack.remove();
      expect(stack.length()).toEqual(2);
    });

  });
  
  it("should have a size", function() {
    expect(stack.size).toEqual(jasmine.any(Number));
  });


  // add more tests here to test the functionality of stack
});