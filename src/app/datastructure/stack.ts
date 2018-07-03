import { Node } from './node';

export class Stack {
    head: Node;

    push(value: number) {
        if (this.head == null) {
            this.head = new Node(value);
        } else {
            let current = new Node(value);
            current.next = this.head;
            this.head = current;
        }
    }

    pop(): Node {
        if (this.head != null) {
            let toReturn = this.head;
            this.head = this.head.next;

            return toReturn;
        }
        return null;
    }

    isEmpty() {
        return this.head == null;
    }
}