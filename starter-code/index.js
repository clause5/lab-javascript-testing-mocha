class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length= this.items.length;
  }

  get(pos) {
   if(this.items.length < pos){
     return new Error('OutOfBounds');
   }else{
     return this.items[pos -1]
   }
  }

  max() {
    if(this.items.length > 0){
      return Math.max(...this.items);
    }else{
      return new Error("EmptySortedList")
    }
  }

  min() {
    if(this.items.length >0){
      return Math.min(...this.items);
    }else{
      return new Error("EmptySortedList")
    }
  }

  sum() {
    if(this.items.length === 0){
      return [];
    }else{

      return this.items.reduce(
        ( accumulator, currentValue ) => accumulator + currentValue,
        0
        );
      }
  }

  avg() {
    return (this.sum(this.items)) / this.length; 
  }
}

module.exports = SortedList
