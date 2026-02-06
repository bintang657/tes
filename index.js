<!DOCTYPE html>
<html lang="id" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KimJong Store | Premium Digital Goods</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- GSAP & ScrollTrigger -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

    <!-- Tailwind Config -->
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            50: '#f0fdfa',
                            100: '#ccfbf1',
                            500: '#14b8a6', // Teal utama
                            600: '#0d9488',
                            900: '#134e4a',
                        },
                        dark: {
                            bg: '#0f172a',
                            card: '#1e293b',
                            text: '#f8fafc'
                        }
                    },
                    animation: {
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    }
                }
            }
        }
    </script>

    <style>
        /* Custom Utilities */
        body {
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
        }
        
        .glass-panel {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dark .glass-panel {
            background: rgba(15, 23, 42, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        /* Hide Scrollbar for clean UI */
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #0f172a; 
        }
        ::-webkit-scrollbar-thumb {
            background: #334155; 
            border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #475569; 
        }

        .gsap-reveal {
            visibility: hidden;
        }
        
        /* Loader */
        .loader {
            border: 3px solid #f3f3f3;
            border-top: 3px solid #14b8a6;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Utility classes for view switching */
        .view-section {
            display: none;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
        }
        .view-section.active {
            display: block;
            opacity: 1;
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-900 dark:bg-dark-bg dark:text-dark-text transition-colors duration-300">

    <!-- Toast Notification Container -->
    <div id="toast-container" class="fixed top-5 right-5 z-50 flex flex-col gap-3"></div>

    <!-- Navbar -->
    <nav class="fixed w-full z-40 top-0 transition-all duration-300 glass-panel" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex-shrink-0 cursor-pointer" onclick="router.navigate('home')">
                    <h1 class="font-display font-bold text-2xl tracking-tighter">
                        <span class="text-brand-500">KimJong</span>Store.
                    </h1>
                </div>
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-8">
                        <a onclick="router.navigate('home')" class="cursor-pointer hover:text-brand-500 transition-colors px-3 py-2 rounded-md font-medium">Home</a>
                        <a onclick="router.navigate('products')" class="cursor-pointer hover:text-brand-500 transition-colors px-3 py-2 rounded-md font-medium">Produk</a>
                        <a href="#features" class="cursor-pointer hover:text-brand-500 transition-colors px-3 py-2 rounded-md font-medium">Fitur</a>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <button onclick="themeToggle()" class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        <i class="fas fa-moon dark:hidden"></i>
                        <i class="fas fa-sun hidden dark:block text-yellow-400"></i>
                    </button>
                    
                    <div id="auth-buttons">
                        <!-- Injected via JS -->
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="pt-24 min-h-screen pb-10">

        <!-- VIEW: HOME -->
        <section id="home" class="view-section active">
            <!-- Hero -->
            <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div class="hero-text opacity-0 translate-y-10">
                        <span class="text-brand-500 font-semibold tracking-wider uppercase text-sm mb-2 block">Digital Marketplace Terbaik</span>
                        <h1 class="font-display text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Beli Produk Digital <br>
                            <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-blue-500">Tanpa Ribet.</span>
                        </h1>
                        <p class="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                            Dapatkan akun premium, voucher game, dan lisensi software dengan proses instan. Dukungan QRIS otomatis dan layanan 24/7.
                        </p>
                        <div class="flex gap-4">
                            <button onclick="router.navigate('products')" class="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-xl shadow-lg shadow-brand-500/30 transition-all hover:scale-105 active:scale-95">
                                Belanja Sekarang
                            </button>
                            <button class="px-8 py-4 border border-gray-300 dark:border-gray-700 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                                Cara Order
                            </button>
                        </div>
                    </div>
                    <div class="hero-image relative hidden lg:block opacity-0 translate-x-10">
                        <div class="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl blur opacity-30 animate-pulse-slow"></div>
                        <div class="relative glass-panel rounded-2xl p-6 border border-gray-700">
                            <!-- Mockup Content -->
                            <div class="flex items-center gap-4 mb-6 border-b border-gray-700 pb-4">
                                <div class="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center text-white font-bold text-xl">N</div>
                                <div>
                                    <h3 class="font-bold">Netflix Premium 4K</h3>
                                    <p class="text-sm text-green-400">Active • 30 Days</p>
                                </div>
                            </div>
                            <div class="space-y-3">
                                <div class="h-2 bg-gray-700 rounded w-3/4"></div>
                                <div class="h-2 bg-gray-700 rounded w-1/2"></div>
                                <div class="h-2 bg-gray-700 rounded w-full"></div>
                            </div>
                            <div class="mt-6 flex justify-between items-center">
                                <span class="text-2xl font-bold">Rp 35.000</span>
                                <span class="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-500/30">Verified Seller</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Features -->
            <div id="features" class="max-w-7xl mx-auto px-4 py-20">
                <div class="text-center mb-16">
                    <h2 class="font-display text-3xl font-bold mb-4">Kenapa KimJong Store?</h2>
                    <div class="h-1 w-20 bg-brand-500 mx-auto rounded"></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="feature-card p-8 rounded-2xl glass-panel hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-brand-500/30">
                        <div class="w-14 h-14 bg-brand-500/10 rounded-xl flex items-center justify-center text-brand-500 mb-6">
                            <i class="fas fa-bolt text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Proses Kilat</h3>
                        <p class="text-gray-400">Sistem otomatis memproses pesanan Anda dalam hitungan detik setelah konfirmasi.</p>
                    </div>
                    <div class="feature-card p-8 rounded-2xl glass-panel hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-brand-500/30">
                        <div class="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                            <i class="fas fa-shield-alt text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Garansi Aman</h3>
                        <p class="text-gray-400">Setiap produk digital memiliki garansi penuh selama masa durasi yang dibeli.</p>
                    </div>
                    <div class="feature-card p-8 rounded-2xl glass-panel hover:bg-gray-800/50 transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-brand-500/30">
                        <div class="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-500 mb-6">
                            <i class="fas fa-headset text-2xl"></i>
                        </div>
                        <h3 class="text-xl font-bold mb-3">Support 24/7</h3>
                        <p class="text-gray-400">Tim admin siap membantu kendala teknis kapanpun Anda butuhkan via WhatsApp.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- VIEW: PRODUCTS -->
        <section id="products" class="view-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-10 flex flex-col md:flex-row justify-between items-end gap-4">
                <div>
                    <h2 class="font-display text-4xl font-bold mb-2">Katalog Produk</h2>
                    <p class="text-gray-500 dark:text-gray-400">Pilih kebutuhan digital Anda hari ini.</p>
                </div>
                <!-- Filter category placeholder -->
                <div class="flex gap-2 overflow-x-auto pb-2">
                    <button class="px-4 py-2 rounded-full bg-brand-600 text-white text-sm font-medium">Semua</button>
                    <button class="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-700">Streaming</button>
                    <button class="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-700">Games</button>
                    <button class="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-700">Software</button>
                </div>
            </div>

            <!-- Product Grid -->
            <div id="product-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Products injected by JS -->
            </div>
        </section>

        <!-- VIEW: CHECKOUT PROCESS -->
        <section id="checkout-process" class="view-section max-w-3xl mx-auto px-4">
            <div class="glass-panel rounded-2xl p-8 border border-gray-700 shadow-2xl">
                <div class="text-center mb-8">
                    <h2 class="font-display text-2xl font-bold mb-2">Selesaikan Pembayaran</h2>
                    <p class="text-sm text-gray-400">Order ID: <span id="checkout-order-id" class="font-mono text-brand-400 font-bold">#ORD-0000</span></p>
                </div>

                <div class="flex flex-col md:flex-row gap-8 items-center justify-center">
                    <!-- QRIS Image -->
                    <div class="w-full md:w-1/2 bg-white p-4 rounded-xl">
                        <img src="https://files.catbox.moe/2gdzca.jpg" alt="QRIS Payment" class="w-full h-auto rounded-lg border border-gray-200">
                        <p class="text-center text-gray-800 font-bold mt-2 text-sm">Scan QRIS ini</p>
                    </div>

                    <!-- Details -->
                    <div class="w-full md:w-1/2 space-y-6">
                        <div class="space-y-4">
                            <div class="flex justify-between border-b border-gray-700 pb-2">
                                <span class="text-gray-400">Produk</span>
                                <span id="checkout-product-name" class="font-medium text-right">Nama Produk</span>
                            </div>
                            <div class="flex justify-between border-b border-gray-700 pb-2">
                                <span class="text-gray-400">Total Harga</span>
                                <span id="checkout-price" class="font-bold text-xl text-brand-500">Rp 0</span>
                            </div>
                        </div>

                        <div class="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-lg text-center">
                            <p class="text-xs text-yellow-500 mb-1">Waktu Pembayaran</p>
                            <div id="countdown-timer" class="text-2xl font-mono font-bold text-yellow-400">15:00</div>
                        </div>

                        <div class="space-y-3">
                            <p class="text-xs text-center text-gray-500">Setelah transfer, WAJIB konfirmasi via WhatsApp agar pesanan diproses.</p>
                            <a id="btn-confirm-wa" target="_blank" href="#" class="flex items-center justify-center gap-2 w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-900/50">
                                <i class="fab fa-whatsapp text-xl"></i> Konfirmasi WhatsApp
                            </a>
                            <button onclick="router.navigate('user-dashboard')" class="w-full py-3 bg-transparent border border-gray-600 hover:bg-gray-800 text-gray-300 font-medium rounded-xl transition-all">
                                Cek Status di Dashboard
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- VIEW: LOGIN / REGISTER -->
        <section id="auth" class="view-section max-w-md mx-auto px-4 pt-10">
            <div class="glass-panel rounded-2xl p-8 border border-gray-700 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-1 bg-brand-500"></div>
                <h2 class="font-display text-3xl font-bold text-center mb-6" id="auth-title">Login</h2>
                
                <form id="auth-form" class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-400 mb-1">Email</label>
                        <input type="email" id="auth-email" required class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-400 mb-1">Password</label>
                        <input type="password" id="auth-password" required class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all">
                    </div>
                    <button type="submit" class="w-full py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all transform active:scale-95">
                        <span id="auth-btn-text">Masuk</span>
                    </button>
                </form>

                <div class="mt-6 text-center text-sm">
                    <p class="text-gray-400" id="auth-switch-text">Belum punya akun? <a href="#" onclick="toggleAuthMode()" class="text-brand-500 hover:underline">Daftar disini</a></p>
                </div>
                
                <div class="mt-4 pt-4 border-t border-gray-700 text-xs text-center text-gray-500">
                    <p>Demo Admin: admin@kimjong.com / admin123</p>
                    <p>Demo User: user@test.com / user123</p>
                </div>
            </div>
        </section>

        <!-- VIEW: USER DASHBOARD -->
        <section id="user-dashboard" class="view-section max-w-6xl mx-auto px-4">
            <h2 class="font-display text-3xl font-bold mb-6">Dashboard Saya</h2>
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <!-- Sidebar -->
                <div class="glass-panel p-6 rounded-xl h-fit">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center text-white font-bold text-xl">U</div>
                        <div>
                            <h4 id="user-name-display" class="font-bold">User</h4>
                            <p class="text-xs text-gray-400">Member</p>
                        </div>
                    </div>
                    <button onclick="auth.logout()" class="w-full py-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-colors text-sm font-medium">
                        <i class="fas fa-sign-out-alt mr-2"></i> Logout
                    </button>
                </div>

                <!-- Main Content -->
                <div class="lg:col-span-3">
                    <div class="glass-panel p-6 rounded-xl">
                        <h3 class="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Riwayat Pembelian</h3>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="text-gray-400 text-sm border-b border-gray-700">
                                        <th class="pb-3 pl-2">Order ID</th>
                                        <th class="pb-3">Produk</th>
                                        <th class="pb-3">Harga</th>
                                        <th class="pb-3">Status</th>
                                        <th class="pb-3">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody id="user-order-list" class="text-sm">
                                    <!-- Orders injected here -->
                                </tbody>
                            </table>
                            <div id="empty-orders" class="hidden text-center py-10 text-gray-500">
                                <i class="fas fa-shopping-cart text-4xl mb-3 opacity-30"></i>
                                <p>Belum ada pembelian.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- VIEW: ADMIN DASHBOARD -->
        <section id="admin-dashboard" class="view-section max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center mb-6">
                <h2 class="font-display text-3xl font-bold text-red-500">Admin Panel</h2>
                <button onclick="auth.logout()" class="px-4 py-2 bg-gray-800 rounded text-sm hover:bg-gray-700">Logout</button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Order Management -->
                <div class="glass-panel p-6 rounded-xl">
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                        <i class="fas fa-list text-brand-500"></i> Order Masuk
                    </h3>
                    <div class="space-y-4 max-h-[500px] overflow-y-auto pr-2" id="admin-order-list">
                        <!-- Order Items injected here -->
                    </div>
                </div>

                <!-- Simple Product CRUD (Visual Only for Demo context usually, but functional here) -->
                <div class="glass-panel p-6 rounded-xl">
                    <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
                        <i class="fas fa-box text-blue-500"></i> Tambah Produk Baru
                    </h3>
                    <form id="add-product-form" class="space-y-3">
                        <input type="text" id="new-prod-name" placeholder="Nama Produk" class="w-full p-3 bg-gray-800 border border-gray-700 rounded text-sm" required>
                        <input type="text" id="new-prod-desc" placeholder="Deskripsi Singkat" class="w-full p-3 bg-gray-800 border border-gray-700 rounded text-sm" required>
                        <input type="number" id="new-prod-price" placeholder="Harga (Angka)" class="w-full p-3 bg-gray-800 border border-gray-700 rounded text-sm" required>
                        <select id="new-prod-cat" class="w-full p-3 bg-gray-800 border border-gray-700 rounded text-sm">
                            <option value="entertainment">Entertainment</option>
                            <option value="games">Games</option>
                            <option value="tools">Tools</option>
                        </select>
                        <button type="submit" class="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded font-bold transition-colors">Tambah Produk</button>
                    </form>
                </div>
            </div>
        </section>

    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 bg-dark-bg py-8 mt-auto">
        <div class="max-w-7xl mx-auto px-4 text-center">
            <h2 class="font-display font-bold text-xl mb-2 text-brand-500">KimJong Store.</h2>
            <p class="text-gray-500 text-sm mb-4">Premium Digital Goods Marketplace.</p>
            <p class="text-gray-600 text-xs">&copy; 2026 KimJong Store. All rights reserved.</p>
        </div>
    </footer>

    <!-- JAVASCRIPT LOGIC -->
    <script>
        // --- DATA & STATE MANAGEMENT ---
        const db = {
            init() {
                if (!localStorage.getItem('kj_products')) {
                    const defaultProducts = [
                        { id: 1, name: 'Netflix Premium 1 Bulan', price: 35000, category: 'entertainment', desc: 'Akun private, UHD 4K, Legal.', image: 'fas fa-play' },
                        { id: 2, name: 'Spotify Premium Individual', price: 25000, category: 'entertainment', desc: 'Durasi 1 bulan, via invite family.', image: 'fab fa-spotify' },
                        { id: 3, name: 'Canva Pro Lifetime', price: 15000, category: 'tools', desc: 'Via invite team, garansi 1 tahun.', image: 'fas fa-palette' },
                        { id: 4, name: 'Youtube Premium 1 Bulan', price: 10000, category: 'entertainment', desc: 'Tanpa iklan, background play.', image: 'fab fa-youtube' },
                        { id: 5, name: 'Mobile Legends 86 Diamond', price: 19000, category: 'games', desc: 'Proses kilat via User ID.', image: 'fas fa-gamepad' },
                        { id: 6, name: 'Windows 11 Pro Key', price: 45000, category: 'tools', desc: 'Retail key original, aktif selamanya.', image: 'fab fa-windows' },
                    ];
                    localStorage.setItem('kj_products', JSON.stringify(defaultProducts));
                }
                if (!localStorage.getItem('kj_users')) {
                    const defaultUsers = [
                        { id: 'admin1', email: 'admin@kimjong.com', password: 'admin123', name: 'Supreme Leader', role: 'admin' },
                        { id: 'user1', email: 'user@test.com', password: 'user123', name: 'Rakyat Biasa', role: 'user' }
                    ];
                    localStorage.setItem('kj_users', JSON.stringify(defaultUsers));
                }
                if (!localStorage.getItem('kj_orders')) {
                    localStorage.setItem('kj_orders', JSON.stringify([]));
                }
            },
            getProducts() { return JSON.parse(localStorage.getItem('kj_products')); },
            addProduct(product) {
                const products = this.getProducts();
                products.push(product);
                localStorage.setItem('kj_products', JSON.stringify(products));
            },
            getOrders() { return JSON.parse(localStorage.getItem('kj_orders')); },
            addOrder(order) {
                const orders = this.getOrders();
                orders.push(order);
                localStorage.setItem('kj_orders', JSON.stringify(orders));
            },
            updateOrderStatus(orderId, status) {
                const orders = this.getOrders();
                const index = orders.findIndex(o => o.id === orderId);
                if (index !== -1) {
                    orders[index].status = status;
                    localStorage.setItem('kj_orders', JSON.stringify(orders));
                    return true;
                }
                return false;
            },
            getUsers() { return JSON.parse(localStorage.getItem('kj_users')); },
            addUser(user) {
                const users = this.getUsers();
                if (users.find(u => u.email === user.email)) return false;
                users.push(user);
                localStorage.setItem('kj_users', JSON.stringify(users));
                return true;
            }
        };

        // --- AUTHENTICATION ---
        const auth = {
            currentUser: JSON.parse(localStorage.getItem('kj_session')),
            login(email, password) {
                const users = db.getUsers();
                const user = users.find(u => u.email === email && u.password === password);
                if (user) {
                    this.currentUser = user;
                    localStorage.setItem('kj_session', JSON.stringify(user));
                    ui.showToast('Login berhasil!', 'success');
                    ui.updateNavAuth();
                    if (user.role === 'admin') router.navigate('admin-dashboard');
                    else router.navigate('home');
                } else {
                    ui.showToast('Email atau password salah', 'error');
                }
            },
            register(name, email, password) {
                const success = db.addUser({
                    id: 'usr_' + Date.now(),
                    name, email, password, role: 'user'
                });
                if (success) {
                    ui.showToast('Registrasi berhasil! Silakan login.', 'success');
                    toggleAuthMode(); // switch to login form
                } else {
                    ui.showToast('Email sudah terdaftar', 'error');
                }
            },
            logout() {
                this.currentUser = null;
                localStorage.removeItem('kj_session');
                ui.showToast('Anda telah logout', 'info');
                ui.updateNavAuth();
                router.navigate('home');
            },
            checkAccess(page) {
                if (page === 'user-dashboard' && (!this.currentUser || this.currentUser.role !== 'user')) return false;
                if (page === 'admin-dashboard' && (!this.currentUser || this.currentUser.role !== 'admin')) return false;
                return true;
            }
        };

        // --- ROUTER ---
        const router = {
            currentPage: 'home',
            navigate(pageId) {
                // Access Protection
                if ((pageId === 'user-dashboard' || pageId === 'admin-dashboard') && !auth.currentUser) {
                    ui.showToast('Silakan login terlebih dahulu', 'error');
                    this.navigate('auth');
                    return;
                }
                if (pageId === 'admin-dashboard' && auth.currentUser.role !== 'admin') {
                    ui.showToast('Akses ditolak', 'error');
                    return;
                }

                // Hide all sections
                document.querySelectorAll('.view-section').forEach(el => {
                    el.classList.remove('active');
                    gsap.to(el, { opacity: 0, duration: 0.2 });
                });

                // Show target
                const target = document.getElementById(pageId);
                if (target) {
                    setTimeout(() => {
                        target.classList.add('active');
                        gsap.fromTo(target, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
                        
                        // Special init for specific pages
                        if (pageId === 'products') ui.renderProducts();
                        if (pageId === 'user-dashboard') ui.renderUserOrders();
                        if (pageId === 'admin-dashboard') ui.renderAdminOrders();
                        
                        // Refresh ScrollTrigger
                        ScrollTrigger.refresh();
                    }, 200);
                }
                this.currentPage = pageId;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        // --- UI & LOGIC ---
        const ui = {
            formatRupiah(number) {
                return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(number);
            },
            showToast(msg, type = 'info') {
                const container = document.getElementById('toast-container');
                const toast = document.createElement('div');
                const colors = {
                    success: 'bg-green-600',
                    error: 'bg-red-600',
                    info: 'bg-blue-600'
                };
                toast.className = `${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-all duration-300 flex items-center gap-2`;
                toast.innerHTML = `<i class="fas fa-info-circle"></i> <span>${msg}</span>`;
                
                container.appendChild(toast);
                requestAnimationFrame(() => toast.classList.remove('translate-x-full'));
                
                setTimeout(() => {
                    toast.classList.add('translate-x-full', 'opacity-0');
                    setTimeout(() => toast.remove(), 300);
                }, 3000);
            },
            updateNavAuth() {
                const container = document.getElementById('auth-buttons');
                if (auth.currentUser) {
                    const dashboardLink = auth.currentUser.role === 'admin' ? 'admin-dashboard' : 'user-dashboard';
                    container.innerHTML = `
                        <button onclick="router.navigate('${dashboardLink}')" class="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm font-medium hover:bg-gray-700 transition">
                            <i class="fas fa-user-circle mr-1"></i> Dashboard
                        </button>
                    `;
                } else {
                    container.innerHTML = `
                        <button onclick="router.navigate('auth')" class="px-4 py-2 bg-brand-600 text-white rounded-lg text-sm font-bold hover:bg-brand-500 transition shadow-lg shadow-brand-500/30">
                            Login
                        </button>
                    `;
                }
            },
            renderProducts() {
                const grid = document.getElementById('product-grid');
                grid.innerHTML = '';
                const products = db.getProducts();
                
                products.forEach((p, index) => {
                    const el = document.createElement('div');
                    el.className = 'glass-panel rounded-2xl p-5 border border-gray-700 group hover:border-brand-500/50 transition-all duration-300 hover:-translate-y-2';
                    el.innerHTML = `
                        <div class="h-40 bg-gray-800/50 rounded-xl mb-4 flex items-center justify-center text-5xl text-gray-600 group-hover:text-brand-500 transition-colors">
                            <i class="${p.image}"></i>
                        </div>
                        <div class="mb-4">
                            <span class="text-xs font-bold text-brand-500 uppercase tracking-wider bg-brand-500/10 px-2 py-1 rounded">${p.category}</span>
                            <h3 class="text-lg font-bold mt-2 leading-tight">${p.name}</h3>
                            <p class="text-sm text-gray-400 mt-1 line-clamp-2">${p.desc}</p>
                        </div>
                        <div class="flex items-center justify-between mt-auto">
                            <span class="text-lg font-bold">${this.formatRupiah(p.price)}</span>
                            <button onclick="checkout.init(${p.id})" class="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all transform active:scale-90">
                                <i class="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    `;
                    grid.appendChild(el);
                    // Stagger animation
                    gsap.from(el, { opacity: 0, y: 20, delay: index * 0.1, duration: 0.4 });
                });
            },
            renderUserOrders() {
                const list = document.getElementById('user-order-list');
                const orders = db.getOrders().filter(o => o.userId === auth.currentUser.id).reverse();
                list.innerHTML = '';
                
                if (orders.length === 0) {
                    document.getElementById('empty-orders').classList.remove('hidden');
                    return;
                }
                document.getElementById('empty-orders').classList.add('hidden');
                document.getElementById('user-name-display').innerText = auth.currentUser.name;

                orders.forEach(o => {
                    let statusClass = '';
                    let actionHtml = '-';
                    
                    if (o.status === 'pending_payment') statusClass = 'text-yellow-500';
                    else if (o.status === 'waiting_confirmation') statusClass = 'text-blue-500';
                    else if (o.status === 'completed') {
                        statusClass = 'text-green-500';
                        actionHtml = `<button onclick="ui.showToast('Produk dikirim ke Email!', 'success')" class="text-xs bg-green-600/20 text-green-400 px-2 py-1 rounded border border-green-600/30 hover:bg-green-600 hover:text-white transition">Ambil Produk</button>`;
                    }

                    const row = document.createElement('tr');
                    row.className = 'border-b border-gray-800 hover:bg-gray-800/30';
                    row.innerHTML = `
                        <td class="py-3 pl-2 font-mono text-xs text-gray-400">#${o.id}</td>
                        <td class="py-3 font-medium">${o.productName}</td>
                        <td class="py-3">${this.formatRupiah(o.price)}</td>
                        <td class="py-3 font-bold text-xs ${statusClass}">${o.status.replace('_', ' ').toUpperCase()}</td>
                        <td class="py-3">${actionHtml}</td>
                    `;
                    list.appendChild(row);
                });
            },
            renderAdminOrders() {
                const list = document.getElementById('admin-order-list');
                const orders = db.getOrders().filter(o => o.status !== 'completed').reverse(); // Show active only usually
                list.innerHTML = '';

                if (orders.length === 0) {
                    list.innerHTML = '<p class="text-center text-gray-500 py-4">Tidak ada order pending.</p>';
                    return;
                }

                orders.forEach(o => {
                    const item = document.createElement('div');
                    item.className = 'bg-gray-800 p-4 rounded-lg flex justify-between items-center border-l-4 ' + (o.status === 'waiting_confirmation' ? 'border-blue-500' : 'border-yellow-500');
                    item.innerHTML = `
                        <div>
                            <div class="text-xs text-gray-400 font-mono mb-1">#${o.id} • ${o.date}</div>
                            <h4 class="font-bold text-sm">${o.productName}</h4>
                            <p class="text-sm text-brand-400">${this.formatRupiah(o.price)}</p>
                            <span class="text-xs px-2 py-0.5 rounded bg-gray-700 mt-1 inline-block">${o.status}</span>
                        </div>
                        <div class="flex flex-col gap-2">
                            ${o.status === 'waiting_confirmation' ? 
                                `<button onclick="admin.approveOrder('${o.id}')" class="px-3 py-1 bg-green-600 hover:bg-green-500 text-white text-xs rounded font-bold">Terima</button>` : 
                                `<span class="text-xs text-gray-500 italic">Menunggu User</span>`
                            }
                            <button onclick="admin.rejectOrder('${o.id}')" class="px-3 py-1 bg-red-600/20 text-red-500 hover:bg-red-600 hover:text-white text-xs rounded">Tolak</button>
                        </div>
                    `;
                    list.appendChild(item);
                });
            }
        };

        // --- CHECKOUT LOGIC ---
        const checkout = {
            currentOrder: null,
            timerInterval: null,
            
            init(productId) {
                if (!auth.currentUser) {
                    ui.showToast('Silakan Login untuk membeli', 'error');
                    router.navigate('auth');
                    return;
                }

                const product = db.getProducts().find(p => p.id === productId);
                const orderId = 'ORD-' + Math.floor(1000 + Math.random() * 9000);
                
                // Create Order Object
                this.currentOrder = {
                    id: orderId,
                    userId: auth.currentUser.id,
                    productId: product.id,
                    productName: product.name,
                    price: product.price,
                    status: 'pending_payment',
                    date: new Date().toLocaleDateString()
                };

                // Save to DB
                db.addOrder(this.currentOrder);

                // Update UI
                document.getElementById('checkout-order-id').innerText = '#' + orderId;
                document.getElementById('checkout-product-name').innerText = product.name;
                document.getElementById('checkout-price').innerText = ui.formatRupiah(product.price);
                
                // Prepare WA Link
                const waText = `Halo admin, saya sudah melakukan pembayaran. Berikut bukti transfer.%0A%0ANama Toko: Kim Jong Store%0AOrder ID: ${orderId}%0ANama Produk: ${product.name}%0AHarga: ${product.price}`;
                const waLink = `https://wa.me/+6281225980437?text=${waText}`;
                
                const waBtn = document.getElementById('btn-confirm-wa');
                waBtn.href = waLink;
                waBtn.onclick = () => {
                    this.confirmPayment(orderId);
                };

                // Start Timer
                this.startTimer(15 * 60); // 15 mins

                router.navigate('checkout-process');
            },
            startTimer(duration) {
                clearInterval(this.timerInterval);
                let timer = duration, minutes, seconds;
                const display = document.getElementById('countdown-timer');
                
                this.timerInterval = setInterval(() => {
                    minutes = parseInt(timer / 60, 10);
                    seconds = parseInt(timer % 60, 10);

                    minutes = minutes < 10 ? "0" + minutes : minutes;
                    seconds = seconds < 10 ? "0" + seconds : seconds;

                    display.textContent = minutes + ":" + seconds;

                    if (--timer < 0) {
                        clearInterval(this.timerInterval);
                        display.textContent = "EXPIRED";
                        ui.showToast('Waktu pembayaran habis', 'error');
                    }
                }, 1000);
            },
            confirmPayment(orderId) {
                db.updateOrderStatus(orderId, 'waiting_confirmation');
                ui.showToast('Status berubah: Menunggu Konfirmasi Admin', 'success');
                // Don't auto navigate, let user finish WA chat
            }
        };

        // --- ADMIN LOGIC ---
        const admin = {
            approveOrder(orderId) {
                if (confirm('Konfirmasi pembayaran valid?')) {
                    db.updateOrderStatus(orderId, 'completed');
                    ui.showToast(`Order #${orderId} selesai! Produk dikirim.`, 'success');
                    ui.renderAdminOrders();
                }
            },
            rejectOrder(orderId) {
                if (confirm('Tolak order ini?')) {
                    // In real app, update to 'cancelled'
                    const orders = db.getOrders().filter(o => o.id !== orderId); // Delete for demo
                    localStorage.setItem('kj_orders', JSON.stringify(orders));
                    ui.renderAdminOrders();
                    ui.showToast('Order dihapus', 'info');
                }
            },
            addProduct(e) {
                e.preventDefault();
                const name = document.getElementById('new-prod-name').value;
                const desc = document.getElementById('new-prod-desc').value;
                const price = document.getElementById('new-prod-price').value;
                const cat = document.getElementById('new-prod-cat').value;
                
                db.addProduct({
                    id: Date.now(),
                    name, desc, price: parseInt(price), category: cat, image: 'fas fa-cube'
                });
                
                ui.showToast('Produk ditambahkan', 'success');
                e.target.reset();
                ui.renderProducts(); // Refresh public view in background
            }
        };

        // --- AUTH FORMS HANDLER ---
        let isLoginMode = true;
        function toggleAuthMode() {
            isLoginMode = !isLoginMode;
            const title = document.getElementById('auth-title');
            const btnText = document.getElementById('auth-btn-text');
            const switchText = document.getElementById('auth-switch-text');
            const form = document.getElementById('auth-form');

            // Reset form but keep simple animation logic
            form.reset();

            if (isLoginMode) {
                title.innerText = 'Login';
                btnText.innerText = 'Masuk';
                switchText.innerHTML = 'Belum punya akun? <a href="#" onclick="toggleAuthMode()" class="text-brand-500 hover:underline">Daftar disini</a>';
            } else {
                title.innerText = 'Register';
                btnText.innerText = 'Daftar';
                switchText.innerHTML = 'Sudah punya akun? <a href="#" onclick="toggleAuthMode()" class="text-brand-500 hover:underline">Login disini</a>';
                
                // Add Name field if not exists
                if (!document.getElementById('auth-name')) {
                    const nameDiv = document.createElement('div');
                    nameDiv.id = 'name-field-container';
                    nameDiv.innerHTML = `
                        <label class="block text-sm font-medium text-gray-400 mb-1">Nama Lengkap</label>
                        <input type="text" id="auth-name" required class="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-brand-500 focus:ring-1 outline-none transition-all mb-4">
                    `;
                    form.insertBefore(nameDiv, form.firstChild);
                }
            }
        }

        document.getElementById('auth-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('auth-email').value;
            const pass = document.getElementById('auth-password').value;
            
            if (isLoginMode) {
                auth.login(email, pass);
            } else {
                const name = document.getElementById('auth-name').value;
                auth.register(name, email, pass);
            }
        });

        document.getElementById('add-product-form').addEventListener('submit', admin.addProduct);

        // --- THEME TOGGLE ---
        function themeToggle() {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }

        // --- INIT ---
        window.addEventListener('DOMContentLoaded', () => {
            db.init();
            
            // Check Theme
            if (localStorage.getItem('theme') === 'light') document.documentElement.classList.remove('dark');
            else document.documentElement.classList.add('dark');

            ui.updateNavAuth();
            ui.renderProducts();
            
            // Hero Animation
            gsap.to('.hero-text', { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" });
            gsap.to('.hero-image', { opacity: 1, x: 0, duration: 1, delay: 0.5, ease: "power3.out" });

            // Navbar Scroll Effect
            window.addEventListener('scroll', () => {
                const nav = document.getElementById('navbar');
                if (window.scrollY > 50) {
                    nav.classList.add('shadow-lg', 'bg-white/80', 'dark:bg-dark-bg/80');
                } else {
                    nav.classList.remove('shadow-lg', 'bg-white/80', 'dark:bg-dark-bg/80');
                }
            });
        });

    </script>
</body>
</html>

