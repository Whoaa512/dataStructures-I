var makeStack = function() {
  var stack = {
    top: null,
    size: 0,
    // adds new item on top of stack
    add: function(toAdd) {
      var newItem = {
        payload: toAdd,
        nextItem: null
      };
      newItem.nextItem = this.top;
      this.top = newItem;
      this.size += 1;

    },
    //removes top most item
    remove: function() {
      this.size -= 1;
      this.top = this.top.nextItem;
    },

    length: function() {
      return this.size;
    }

  };
  return stack;
}