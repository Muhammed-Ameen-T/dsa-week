
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
ht.set('age')
ht.display()
console.log('GET:',ht.get('place'));