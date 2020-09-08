/*
A queue that can be of type T
Generics are great in any language
*/
class Queue<T> {
    private items: T[] = [];
    public add = (item: T) => this.items.push(item);

    public pop(): T | undefined {
        return this.items.shift();
    }

    public isEmpty():boolean {
        return this.items.length == 0;
    }
    public Size():number | undefined{
        return this.items.length;
    }
}
export default Queue;