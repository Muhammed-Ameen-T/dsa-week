class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size
    }

    hash(key){
        let hash = 0;
        let PRIME = 53
        for (let i = 0; i < key.length; i++) {
            hash = (hash * PRIME  + key.charCodeAt(i)) % this.size
        }
        return hash;
    }

    set(key, value){
        let index = this.hash(key);
        let bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key,value]]     
        }else{
            for (const item of bucket) {
                if (item[0]===key) {
                    item[1]=value
                    return;
                }
            }
            bucket.push([key, value]);
        }
    }

    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0]===key) {
                    return bucket[i][1]
                }
            }
        }
        return undefined;
    }
  
    delete(key){
        let index = this.hash(key);
        let bucket = this.table[index];
        if (bucket) {
            for (const item of bucket) {
                if (item[0]===key) {
                    bucket.splice(bucket.indexOf(item),1)
                    return item[1];
                }
            }
        }
        return 'Not Found'
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`Bucket ${i}: `,this.table[i]);
            }
        }
    }
}

// Usage Example:
let ht = new HashTable(7);
ht.set('name', 'Alice');
ht.set('age', 25);
ht.set('job', 'Developer');
ht.set('city', 'New York');
ht.set('hobby', 'Photography');

ht.display();
console.log('Get name:', ht.get('name')); // Alice
ht.delete('city');
ht.display();