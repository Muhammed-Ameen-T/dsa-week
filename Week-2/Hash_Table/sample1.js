class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size
    }

    hash(key){
        let hash = 0;
        let PRIME = 31;
        for (let i = 0; i < key.length; i++) {
            hash = (hash * PRIME + key.charCodeAt(i)) % this.size
        }
        return hash
    }

    set(key, value){
        let index = this.hash(key);
        let bucket =  this.table[index];
        if (!bucket) {
            this.table[index] = [[key, value]]
        }else{
            for (const item of bucket) {
                if (item[0]==key) {
                    item[1]=value
                    return
                }
            }
            bucket.push([key , value])
        }
    }

    get(key){
        let index = this.hash(key);
        let bucket  =  this.table[index];
        if (!bucket) {
            return undefined
        }else{
            for (const item of bucket) {
                if (item[0]==key) {
                    return item[1]
                }
            }
        }
    }

    delete(key){
        let index = this.hash(key);
        let bucket = this.table[index]
        for (const item of bucket) {
            if (item[0]==key) {
                bucket.splice(bucket.indexOf(item),1)
                return item[0];
            }
        }
        return "Value Not Found"
    }

    display(){
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(`Bucket ${i}:`,this.table[i]);
            }           
        }
    }

}

let ht = new HashTable(50);

ht.set('name','Ameen');
ht.set('age',18);
ht.set('place','Calicut');
ht.set('career','IT')
console.log('Deleted:',ht.delete('age'));
console.log('Get:',ht.get('place'));
ht.display()