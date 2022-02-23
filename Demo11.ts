interface Cat {
  name: string;
  run(): void;
}
interface Fish {
  name: string;
  swim(): void;
}

function testCat(cat: Fish) {
  return cat as Fish;
}
