function jastipApp() {
    return {
        isLoggedIn: false,
        username: '',
        inputName: '',
        showLoginModal: false,
        showOrderModal: false,
        showQRISModal: false,
        selectedItem: null,
        paymentType: 'full',

        // DATA KATALOG (10 Barang)
        products: [
            { id: 1, name: 'Candy Bong ∞ Ver.3', price: 750000, desc: 'Official Lightstick TWICE. Bluetooth ready.', img: 'https://images.unsplash.com/photo-1594435889708-305f886365a6?auto=format&fit=crop&w=400' },
            { id: 2, name: 'Pastel Cardigan Wonyoung', price: 450000, desc: 'Premium knit, soft material.', img: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&w=400' },
            { id: 3, name: 'Collect Book Hologram', price: 150000, desc: 'Muat 64 Photocard. Cover glitter.', img: 'https://images.unsplash.com/photo-1612450637042-45e05a8d9cb7?auto=format&fit=crop&w=400' },
            { id: 4, name: 'Labubu Doll Secret', price: 1250000, desc: 'Blindbox sealed. Chance secret 1:72.', img: 'https://images.unsplash.com/photo-1559440666-37421360341c?auto=format&fit=crop&w=400' },
            { id: 5, name: 'Album NewJeans Bag Ver', price: 650000, desc: 'Include limited bunny bag & pin.', img: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&w=400' },
            { id: 6, name: 'Headphone Y2K Style', price: 350000, desc: 'Noise cancelling, aesthetic silver.', img: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&w=400' },
            { id: 7, name: 'Tamagotchi Original', price: 550000, desc: 'Gen 1 Remake. Warna Transparan.', img: 'https://images.unsplash.com/photo-1592147153303-1c394c8eb72e?auto=format&fit=crop&w=400' },
            { id: 8, name: 'Tote Bag Canvas L', price: 120000, desc: 'Muat Laptop 15 inch. Ada resleting.', img: 'https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&w=400' },
            { id: 9, name: 'Nike Dunk Low Panda', price: 1850000, desc: 'Size 37-40 available. 100% Ori.', img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400' },
            { id: 10, name: 'Instax Mini 12', price: 1100000, desc: 'Warna Pastel Blue. Garansi Resmi.', img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400' }
        ],

        // FORMAT RUPIAH
        formatRupiah(number) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
        },

        // LOGIN SYSTEM
        login() {
            if (this.inputName.trim().length > 0) {
                this.username = this.inputName;
                this.isLoggedIn = true;
                this.showLoginModal = false;
                localStorage.setItem('userJastipHolo', this.username);
            } else { alert('Isi nama dulu ya bestie! 😉'); }
        },

        logout() {
            this.isLoggedIn = false;
            this.username = '';
            localStorage.removeItem('userJastipHolo');
            window.location.reload();
        },

        // ORDER SYSTEM
        checkOrder(item) {
            if (!this.isLoggedIn) {
                this.showLoginModal = true;
            } else {
                this.selectedItem = item;
                this.paymentType = 'full';
                this.showOrderModal = true;
            }
        },

        calculateTotal() {
            if (!this.selectedItem) return 0;
            let total = this.selectedItem.price;
            if (this.paymentType === 'dp') total = total * 0.5;
            return this.formatRupiah(total);
        },

        processToQRIS() { this.showOrderModal = false; this.showQRISModal = true; },

        finishTransaction() {
            alert(`Pembayaran ${this.calculateTotal()} Berhasil!`);
            this.showQRISModal = false;
            this.selectedItem = null;
        },

        // INIT (Cek Login saat pindah halaman)
        init() {
            const savedUser = localStorage.getItem('userJastipHolo');
            if (savedUser) { this.username = savedUser; this.isLoggedIn = true; }
        }
    }
}