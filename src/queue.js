// Note: don't use javascript's native array functions to do this.
var makeQueue = function(){
  var queue = {
  	head: null,
    tail: null,
    size: 0,
    //adds new item to tail of queue
    add: function(objAdded) {
        var newItem = {
            payload: objAdded,
            nextItem: null
        };
        //storing First item to both head & tail
        if(this.head === null) {
            this.head = newItem;
            this.tail = this.head;
        };

        //adds new item to end of queue
        this.tail.nextItem = newItem;
        //points tail to new end of queue
        this.tail = this.tail.nextItem;
        queue.size += 1;
    },
    //removes item at ead of the queue
    remove: function() {
        if(this.head !== null) {
            this.size -= 1;
            //assigns the new head of queue
            this.head = this.head.nextItem;
        }
    },

    length: function() {
        return this.size;
    }
  };

  return queue;
}