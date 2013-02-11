describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

	describe("add method", function() {
		it("should have a method named 'add'", function() {
    		expect(queue.add).toEqual(jasmine.any(Function));
  		});

		it("should add an object", function() {
			queue.add("1");
			queue.add("2");
			queue.add("bacon");
			expect(queue.tail.payload).toEqual('bacon');
		});

		it("should increase the length of queue", function() {
			queue.add("1");
			queue.add("2");
			var oldLength = queue.length();
			queue.add("bacon");
			expect(queue.length()).toEqual(oldLength+1);
		});
	});

  it("should have a size", function() {
    expect(queue.length()).toEqual(jasmine.any(Number));
  });

  describe("remove", function() {

	  it("should have a method named 'remove'", function() {
	    expect(queue.remove).toEqual(jasmine.any(Function));
	  });

	  it("should decrease the length", function() {
		queue.add('something');
		queue.add('something else');
		queue.add('something more');
		var oldLength = queue.length();
		queue.remove();
  		expect(queue.length()).toEqual(oldLength-1);
  	});
	  it("should shift all of the values to the front", function() {
		queue.add('something');
		queue.add('something else');
		queue.add('something more');
		queue.remove();
	    expect(queue.head.payload).toEqual('something else');

	  });
	});

	  });

  // add more tests here to test the functionality of queue