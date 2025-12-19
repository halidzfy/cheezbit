function jastipApp() {
    return {
        // --- DATA STATE ---
        isLoggedIn: false,
        username: '',
        
        // Form Data (Login & Checkout)
        loginForm: { name: '', email: '', password: '' },
        checkoutForm: { fullname: '', phone: '', address: '', note: '' },
        
        // Data Pesanan
        myOrders: [],
        
        // Kontrol Modal
        showLoginModal: false,
        showDetailModal: false,
        showOrderModal: false,    // Pilihan DP/Full
        showCheckoutModal: false, // Form Alamat
        showQRISModal: false,
        showSuccessModal: false,

        // Data Transaksi
        selectedItem: null,
        paymentType: 'full',

        // --- DATA PRODUK (6 ITEMS DARI LINK ANDA) ---
        products: [
            // PRODUK 1
            { 
                id: 1, 
                name: 'ALPHA DRIVE ONE THE 1ST MINI ALBUM [EUPHORIA] Jewel Case ver.', 
                price: 165000, 
                desc: 'List Prioritas Member (Web Mnetplus)', 
                period: '2025.12.08 ~ 2026.01.11',
                shipping: 'Start shipping from web 2026.01.13',
                img: 'https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,f=auto,width=380/ald1/6377c218-c52d-49d0-813a-e631ee06e4f4/ad25d041-4827-4c15-b2f2-3476803fff9e/ori.jpg',
                detailImg: 'https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,width=640/ald1/f81d101e-3b14-4193-9ce7-38fdc89a883d/4724bbfa-6b32-4892-a8cd-42dfc2338a0c/ori.jpg',
                eventTitle: 'Secret Photocard Event ✨',
                eventDesc: 'Get Random 1 out of 8 special PC From Mnetplus (Pre-Order only)'
            },
            // PRODUK 2
            { 
                id: 2, 
                name: 'ALPHA DRIVE ONE THE 1ST MINI ALBUM [EUPHORIA] Star Road ver.', 
                price: 285000, 
                desc: 'Photobook concept. Includes Poster.', 
                period: '2025.12.08 ~ 2026.01.11',
                shipping: 'Start shipping from web 2026.01.13',
                img: 'https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,f=auto,width=380/ald1/f1b1ebe1-897a-4a0c-b6b6-ccbb906ce6b8/13836c91-aab8-4eaf-8004-d081f7e28a6d/ori.jpg',
                detailImg: 'https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,width=640/ald1/0e4089e1-630e-4b0a-9b8a-fb79ae0a0dc8/0880f6cb-c34a-4b0b-8097-ebcee0ca2c86/ori.jpg',
                eventTitle: 'Secred Photocard Event 🌟',
                eventDesc: 'Get Random 1 out of 8 special PC From Mnetplus (Pre-Order only)'
            },
            // PRODUK 3
            { 
                id: 3, 
                name: 'ALPHA DRIVE ONE THE 1ST MINI ALBUM [EUPHORIA] Freak Alarm ver.', 
                price: 285000, 
                desc: 'Limited concept edition.', 
                period: '2025.12.08 ~ 2026.01.11',
                shipping: 'Start shipping from web 2026.01.13',
                img: 'https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,f=auto,width=380/ald1/1d9724e0-4c1c-40a4-966f-aee7a081fc93/fd1b6c3c-affa-49fc-8180-3bdc6b222073/ori.jpg',
                detailImg: 'https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,width=640/ald1/6eed15b4-4ccb-4c4e-bf65-05fcd556ccac/85c00f12-fb20-4c3f-95e4-8c274574d724/ori.jpg',
                eventTitle: 'Secred Photocard Event 📸',
                eventDesc: 'Get Random 1 out of 8 special PC From Mnetplus (Pre-Order only)'
            },
            // PRODUK 4
            { 
                id: 4, 
                name: 'ALPHA DRIVE ONE Global Official Fanclub [Special Gift Package]', 
                price: 450000, 
                desc: 'Official Fanclub Kit 2025.', 
                period: 'Until Sold Out',
                shipping: 'Immediate Delivery (KR Local)',
                img: 'https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,f=auto,width=380/ald1/b2e5b289-4800-4152-a212-3c107d246fbc/e20e4fc2-e596-4ca6-9084-7a45dcef008b/ori.jpg',
                detailImg: 'https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,width=640/ald1/dcc8b7fb-75d2-4e3a-b7a1-47016258af69/d7881b0f-ce82-4d54-80ca-acd5b6e3aae6/ori.jpg',
                eventTitle: 'Membership Benefit 💳',
                eventDesc: 'Includes exclusive membership card with name.'
            },
            // PRODUK 5
            { 
                id: 5, 
                name: 'ZEROBASEONE THE 1ST FULL ALBUM [NEVER SAY NEVER] Digipack Ver.', 
                price: 175000, 
                desc: 'Random cover member sesuai ketersediaan.', 
                period: 'Ready Stock',
                shipping: 'Next Day Shipping',
                img: 'https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,f=auto,width=380/zerobaseone/93945ba5-911c-4ad5-9f40-4ec2cece1be9/4ae54d92-ce4a-4c87-a9e3-872fcbb701d9/ori.png',
                detailImg: 'https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,width=640/zerobaseone/32eb29fb-2dc7-4322-99c0-2d13cd6ffa44/3c3f7358-2e58-4208-8c1f-0dd55105014a/ori.png',
                eventTitle: 'Lucky Draw Event 🍀',
                eventDesc: 'Get 1 Hologram PC (Random)'
            },
            // PRODUK 6
            { 
                id: 6, 
                name: 'ZEROBASEONE OFFICIAL LIGHT STICK', 
                price: 580000, 
                desc: 'Include Strap & Manual. Exclude Battery.', 
                period: 'Restock Batch #4',
                shipping: '7-14 Days Arrive INA',
                img: 'https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,f=auto,width=380/zerobaseone/fad1d174-4e17-4be0-a79e-6f817b9ec41b/e1e7cc2b-c7f0-40c5-97d8-d85ef3919808/ori.png',
                detailImg: 'https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,width=640/zerobaseone/40fef521-ea98-4620-954f-e0dbaa03219b/3fd71911-6b8f-4696-9acc-afe1c73ee937/ori.png',
                eventTitle: 'Free Straps 🎀',
                eventDesc: 'Bonus custom strap for first 50 buyers.'
            }
        ],

        // --- FUNGSI-FUNGSI UTAMA ---

        formatRupiah(number) {
            return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
        },

        // LOGIN (Wajib Nama, Email, Password)
        login() {
            if (this.loginForm.name && this.loginForm.email && this.loginForm.password) {
                this.username = this.loginForm.name;
                this.isLoggedIn = true;
                this.showLoginModal = false;
                localStorage.setItem('userJastipHolo', this.username);
            } else { 
                alert('Mohon lengkapi Nama, Email, dan Password ya kak! 🙏'); 
            }
        },

        logout() {
            this.isLoggedIn = false;
            this.username = '';
            localStorage.clear(); // Hapus data login & pesanan
            window.location.reload();
        },

        viewDetail(item) {
            this.selectedItem = item;
            this.showDetailModal = true;
        },

        // ALUR CHECKOUT
        // 1. Pilih Opsi (DP/Full)
        proceedToOption() {
            if (!this.isLoggedIn) {
                this.showDetailModal = false;
                this.showLoginModal = true;
            } else {
                this.showDetailModal = false;
                this.paymentType = 'full';
                this.showOrderModal = true;
            }
        },

        // 2. Isi Alamat (Checkout)
        proceedToCheckout() {
            this.showOrderModal = false;
            this.showCheckoutModal = true;
        },

        // 3. Ke QRIS
        proceedToQRIS() {
            if(this.checkoutForm.fullname && this.checkoutForm.address) {
                this.showCheckoutModal = false;
                this.showQRISModal = true;
            } else {
                alert("Mohon lengkapi data Nama & Alamat dulu ya kak 🚚");
            }
        },

        calculateTotal() {
            if (!this.selectedItem) return 0;
            let total = this.selectedItem.price;
            if (this.paymentType === 'dp') total = total * 0.5;
            return this.formatRupiah(total);
        },

        // 4. Selesai (Pop Up Sukses)
        finishTransaction() {
            const newOrder = {
                id: 'ORD-' + Math.floor(Math.random() * 10000),
                itemName: this.selectedItem.name,
                img: this.selectedItem.img,
                price: this.calculateTotal(),
                type: this.paymentType === 'dp' ? 'Down Payment 50%' : 'Full Payment',
                status: 'Menunggu Pengiriman', 
                date: new Date().toLocaleDateString('id-ID'),
                address: this.checkoutForm.address
            };

            this.myOrders.push(newOrder);
            localStorage.setItem('jastipOrders', JSON.stringify(this.myOrders));

            this.showQRISModal = false;
            this.showSuccessModal = true; 
        },

        closeSuccessAndRedirect() {
            this.showSuccessModal = false;
            this.selectedItem = null;
            this.checkoutForm = { fullname: '', phone: '', address: '', note: '' }; // Reset Form
            window.location.href = 'orders.html';
        },

        init() {
            const savedUser = localStorage.getItem('userJastipHolo');
            if (savedUser) { this.username = savedUser; this.isLoggedIn = true; }
            const savedOrders = localStorage.getItem('jastipOrders');
            if (savedOrders) { this.myOrders = JSON.parse(savedOrders); }
        }
    }
}