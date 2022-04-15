// const names = new SkylabArray("Marta", "Luis", "Sílvia");
/* {
  length: 3,
  0: "Marta",
  1: "Luis",
  2: "Sílvia",
  some: () => {},
  find: () => {},
  map: () => {},
  filter: () => {},
  push: () => {}
} */

class SkylabArray {
  length = 0;

  constructor(...elements) {
    for (let position = 0; position < elements.length; position++) {
      this[position] = elements[position];
      this.length++;
    }
  }

  push(...elements) {
    for (let position = 0; position < elements.length; position++) {
      this[this.length] = elements[position];
      this.length++;
    }
    return this.length;
  }

  some(matchesCondition) {
    for (let position = 0; position < this.length; position++) {
      const element = this[position];
      if (matchesCondition(element)) {
        return true;
      }
    }
    return false;
  }

  map(transform) {
    const newElements = new SkylabArray();
    for (let position = 0; position < this.length; position++) {
      const element = this[position];
      const newElement = transform(element);
      newElements.push(newElement);
    }
    return newElements;
  }
}

const names = new SkylabArray("Marta", "Luis", "Sílvia");
names.push("Bernat", "Olga");
