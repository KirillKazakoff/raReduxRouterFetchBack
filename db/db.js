class Db {
    constructor() {
        this.data = [
            {
                service: 'Добрый гусь',
                amount: '21000',
                id: '1',
            },
            {
                service: 'Старый жучара',
                amount: '35000',
                id: '2',
            },
            {
                service: 'Хитрая муха',
                amount: '3000',
                id: '3',
            },
            {
                service: 'Пожилая чупапи',
                amount: '400000',
                id: '4',
            },
        ];
        this.descriptions = [
            {
                id: '1',
                desc: 'Hello world 1',
            },
            {
                id: '2',
                desc: 'Hello world 2',
            },
            {
                id: '3',
                desc: 'Hello world 3',
            },
            {
                id: '4',
                desc: 'Hello world 4',
            },
        ];
    }

    findIndex(id) {
        const index = this.data.findIndex((dbItem) => dbItem.id === id);
        return index;
    }

    delete(id) {
        const index = this.findIndex(id);
        if (index === -1) return;

        this.data.splice(index, 1);
        this.descriptions.splice(index, 1);
    }

    edit(item) {
        const index = this.findIndex(item.id);
        if (index === -1) return;

        this.data[index] = item;
        this.descriptions[index] = item.desc;
    }

    getItem(id) {
        const index = this.findIndex(id);
        if (index === -1) return 'error';

        return { ...this.data[index], desc: this.descriptions[index].desc };
    }
}

const db = new Db();
export default db;
