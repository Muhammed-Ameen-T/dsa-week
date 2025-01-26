class HashTable {
    constructor(size = 8) {
        this.table = new Array(size);
        this.size = size;
        this.count = 0;
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.size;
    }

    set(key, value) {
        if (this.count / this.size > 0.7) {
            this.rehash();
        }

        let index = this.hash(key);
        while (this.table[index] && this.table[index][0] !== key) {
            index = (index + 1) % this.size;
        }

        if (!this.table[index]) {
            this.count++;
        }
        this.table[index] = [key, value];
    }

    get(key) {
        let index = this.hash(key);
        while (this.table[index]) {
            if (this.table[index][0] === key) {
                return this.table[index][1];
            }
            index = (index + 1) % this.size;
        }
        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        while (this.table[index]) {
            if (this.table[index][0] === key) {
                const value = this.table[index][1];
                this.table[index] = undefined;
                this.count--;
                return value;
            }
            index = (index + 1) % this.size;
        }
        return undefined;
    }

    rehash() {
        const oldTable = this.table;
        this.size *= 2;
        console.log('New Size',this.size)
        this.table = new Array(this.size);
        this.count = 0;

        for (const bucket of oldTable) {
            if (bucket) {
                this.set(bucket[0], bucket[1]);
            }
        }
    }

    rehash(){
        let oldTable = this.table;
        this.size *= 2;
        console.log('New Size',this.size);
        this.table = new Array(this.size);
        this.count = 0;
        for (const bucket of oldTable) {
            if (bucket) {
                this.set(bucket[0],bucket[1])
            }
        }
    }

    keys() {
        let keys = [];
        for (const bucket of this.table) {
            if (bucket !== undefined) {
                keys.push(bucket[0]);
            }
        }
        return keys;
    }
}

let table = new HashTable(8);
table.set('name','Ameen');
table.set('age', 18);
table.set('city', 'Delhi');
table.set('country', 'India');
table.set('address', 'Delhi, India');
table.set('phone', '1234567890');
table.set('email', 'example@gmai.com')
table.set('email2', 'example@gmai.com2')
console.log(table.keys());


