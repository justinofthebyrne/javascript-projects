

function makeRectangle(size) {
    let rectangle = '';
    for (let i = 0; i < size; i++) {
      rectangle += '#';
    }
    return rectangle;
  }
console.log(makeLine(5));

function makeRectangle(size) {
    let rectangle = '';
    for (let i = 0; i < size; i++) {
      rectangle += '#####\n#####\n#####\n#####\n#####';
    }
    return rectangle;
  }
console.log(makeRectangle(5));

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}
console.log(makeRectangle(5, 3));