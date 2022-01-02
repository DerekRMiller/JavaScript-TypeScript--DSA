export class HashTable {
  dataMap: [][];

  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  // create hash :: O(1)
  _hash(key: string): number {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }

    return hash;
  }

  // set item :: O(1)
  set(key: string, value: number): this {
    const index = this._hash(key);

    if (!this.dataMap[index]) {
      this.dataMap[index] = [];
    }

    (this.dataMap[index] as object[]).push([key, value]);

    return this;
  }

  // get item :: O(1)
  get(key: string): number | undefined {
    const index = this._hash(key);

    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  // return all keys to an array
  keys(): string[] {
    const allKeys: string[] = [];

    for (let i = 0; i < this.dataMap.length; i++) {
      if (this.dataMap[i]) {
        for (let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }

    return allKeys;
  }
}
