class HashTable {
    constructor(size=53) {
        this.table = new Array(size);
        this.size = size;
    }

    _hash(key){
        let hash = 0;
        let PRIME =31;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * PRIME + key.charCodeAt(i)) % this.size
        }
        return hash
    }

    add(key, value){
        let index = this._hash(key);
        let bucket = this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]];
        }else{
            let inserted = false;
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0]==key) {
                    bucket[i][1]=value;
                    inserted = true 
                }
            }
            if (!inserted) {
                bucket.push([key, value])
            }
        }
    }

    lookup(key){
        let index = this._hash(key);
        let bucket = this.table[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0]===key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }

    remove(key){
        let index = this._hash(key);
        let bucket = this.table[index];
        if (bucket) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0]===key) {
                    bucket.splice(i,1);
                    return;
                }
            }
        }
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`Bucket ${i}:`, this.table[i]);                   
            }
        }
    }

    values(){
        let values=[];
        for (const bucket of this.table) {
            if (bucket) {
                for (const [key, value] of bucket) {
                    values.push(value)
                }
            }
        }
        return values;
    }

    keys(){
        let keys=[]
        for (const bucket of this.table) {
            if (bucket) {
                for (const [key, value] of bucket) {
                    keys.push(key) 
                }
            }
        }
        return keys; 
    }
}

const hashTable = new HashTable();

// Add keys and values
hashTable.add("name", "Alice");
hashTable.add("age", 25);
hashTable.add("city", "New York");
hashTable.add("profession", "Developer");

// Test lookup
console.log(hashTable.lookup("name")); // Alice
console.log(hashTable.lookup("age"));  // 25
console.log(hashTable.lookup("city")); // New York
console.log(hashTable.lookup("missing")); // undefined

// Add a duplicate key with a new value
hashTable.add("city", "Los Angeles");
console.log(hashTable.lookup("city")); // Los Angeles

// Test remove
hashTable.remove("age");
console.log(hashTable.lookup("age")); // undefined

// Display hash table
hashTable.display();    

console.log('Keys: ',hashTable.keys());

console.log('Values: ',hashTable.values());
