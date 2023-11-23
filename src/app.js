document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items:[
            {id: 1, name: 'Robusta Premium', img:'1.jpg', price: 37000 },
            {id: 2, name: 'Robusta Clasic', img:'2.jpg', price: 25000 },
            {id: 3, name: 'Peaberry Premium', img:'3.jpg', price: 38000 },
            {id: 4, name: 'Arabica Clasic', img:'4.jpg', price: 27000 },
            {id: 5, name: 'Arabica Premium', img:'1.jpg', price: 39000 },

        ]
    }));

    Alpine.store('cart', {
        items:[],
        total: 0,
        quantity: 0,
        add(newItem){
            // cek apa ada barang yang sama di cart
            const cartItem = this.items.find((item) => item.id === newItem.id);

            // jika belum ada /cart masih kosong
            if(!cartItem){
                this.items.push({ ...newItem, quantity: 1, total: newItem.price });
                this.quantity ++;
                this.total += newItem.price;
            } else {
                // jika barang sudah ada, apakah barang beda atau sama dengan yg ada di cart
                this.items = this.items.map((item)=>{
                    if (item.id !== newItem.id) {
                        return item;
                    } else{
                        // jika barang sudah ada, tambah quantity dan subtotal nya
                        item.quantity++;
                        item.total = item.price * item.quantity;
                        this.quantity ++;
                        this.total += item.price;
                        return item;
                    }
                })
            }
        },
        remove(id){
            // ambil item yang mau di remove berdasarkan id nya
            const cartItem = this.items.find((item) => item.id === id);

            // jika barang lebih dari 1
            if (cartItem.quantity > 1) {
                // telusuri 1 1
                this.items = this.items.map((item) => {
                    // jika bukan barang yg di klik
                    if (item.id !== id) {
                        return item;
                    } else {
                        item.quantity--;
                        item.total = item.price * item.quantity;
                        this.quantity --;
                        this.total -= item.price;
                        return item;
                    }
                });
            } 
            else if(cartItem.quantity === 1) {
                // jika barang sisa 1
                this.items = this.items.filter((item) => item.id !== id);
                this.quantity--;
                this.total -= cartItem.price;
            }
        }
    });
});

// konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID',{
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};