findMiddle() {
        let slow = this.head;
        let fast = this.head;
        
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        
        return slow ? slow.value : null;
    }