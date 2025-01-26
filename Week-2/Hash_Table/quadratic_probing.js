class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size;
    }

    hash(key){
        let hash = 0;
        let PRIME = 31
        for (let i = 0; i < key.length; i++) {
            hash = (hash * PRIME) % this.size
        }
        return hash
    }

    set(key, value){
        let index  = this.hash(key);
        let i = 0;
        let c1 = 1;
        let c2 = 2;
        
        while (this.table[index] && this.table[index][0]!==key) {
            i++
            index = (this.hash(key) + c1 + i + c2 * i ** 2) % this.size
        }
        this.table[index] = [key,value]
    }

    get(key){
        let index = this.hash(key);
        let i = 0;
        let c1 = 1;
        let c2 =3;
        while (this.table[index] && this.table[index][0]!==key) {
            index = (this.hash(key) + c1 + i + c2 * i ** 2)%this.size
        }
        return this.table[index] ? this.table[index][0] : null
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`Bucket ${i}:`,this.table[i]);
                
            }
            
        }
    }
}

let ht = new HashTable(10);
ht.set('name','ameen');
ht.set('age',25);
ht.set('city','Delhi');
ht.set('country','India');
console.log('Got:',ht.get('city'));
ht.display()