class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }

    hash1(key){
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash+= key.charCodeAt(i)
        }
        return hash % this.size
    }

    hash2(key){
        let PRIME  = 31;
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash+=key.charCodeAt(i)
        }        
        return PRIME - (hash % PRIME)
    }

    set(key, value){
        let index = this.hash1(key);
        let stepSize = this.hash2(key);
        let i = 0;
        while (this.table[index] && this.table[index][0] !== key) {
            index = (this.hash1(key) + i + stepSize) %this.size
            i++
        }

        this.table[index] = [key,value]
    }

    get(key){
        let index = this.hash1(key);
        let i = 0;
        let stepSize = this.hash2(key);
        while (this.table[index] && this.table[index][0]!==key) {
            index = (this.hash1(key) + i + stepSize) % this.size
            i++
        }
        return this.table[index] ? this.table[index] : null
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`Bucket ${i}:`,this.table[i]);
            }
        }
    }
}

let ht = new HashTable(13);
ht.set('name','Ameen');
ht.set('age',25);
ht.set('city','Delhi');
ht.set('country','India');
ht.get('Got:',ht.get('city'));
ht.display()