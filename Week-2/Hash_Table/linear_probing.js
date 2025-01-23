class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size
    }

    hash(key) {
        let hash = 0;
        let PRIME = 31;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * PRIME + key.charCodeAt(i)) % this.size;
        }
        return hash;
    }
    
    set(key, value) {
        let index = this.hash(key);
        while (this.table[index] && this.table[index][0] !== key) {
            index = (index + 1) % this.size;
        }
        this.table[index] = [key, value];
    }

    get(key){
        let index = this.hash(key);
        while (this.table[index]!==undefined) {
            if (this.table[index][0]==key) {
                return this.table[index][1]
            }
            index = (index+1) % this.size
        }
        return undefined;
    }

    delete(key){
        let index = this.hash(key);
        while (this.table[index]) {
            if (this.table[index][0]==key) {
                this.table[index]=undefined
            }
            index = (index+1)%this.size
        }
        return 'Not Found'
    }
    
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`Bucket ${i}:`, this.table[i]);
            }
        }
    }
    
}

let lpHashTable = new HashTable(10);
lpHashTable.set('apple', 'fruit');
lpHashTable.set('table', 'furniture');
lpHashTable.set('banana', 'fruit');
lpHashTable.set('cola', 'drink');
console.log('Got:',lpHashTable.get('cola'));
lpHashTable.delete('cola')      

lpHashTable.display();




