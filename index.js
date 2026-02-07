<!DOCTYPE html>
<html lang="id" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Kimjong Store V47</title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    
    <!-- Animate.css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    
    <!-- Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.jsdelivr.net/npm/vanilla-tilt@1.8.0/lib/vanilla-tilt.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: { 
                        tech: ['Oxanium', 'sans-serif'],
                        sans: ['Plus Jakarta Sans', 'sans-serif']
                    },
                    colors: {
                        zenith: {
                            bg: '#050505',
                            card: '#0f0f11',
                            border: '#2A2A35',
                            primary: '#8b5cf6', // Violet
                            secondary: '#38bdf8', // Cyan
                            accent: '#f472b6', // Pink
                            text: '#e2e8f0'
                        }
                    },
                    animation: {
                        'float': 'float 6s ease-in-out infinite',
                        'marquee': 'marquee 40s linear infinite',
                        'pulse-glow': 'pulseGlow 3s infinite',
                        'intro-zoom': 'introZoom 3s ease-out forwards',
                        'gradient-x': 'gradientX 15s ease infinite',
                        'slide-up': 'slideUp 0.5s ease-out forwards',
                        'border-flow': 'borderFlow 4s linear infinite',
                    },
                    keyframes: {
                        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
                        marquee: { '0%': { transform: 'translateX(100%)' }, '100%': { transform: 'translateX(-100%)' } },
                        pulseGlow: { '0%, 100%': { boxShadow: '0 0 10px rgba(139, 92, 246, 0.3)' }, '50%': { boxShadow: '0 0 25px rgba(139, 92, 246, 0.6)' } },
                        introZoom: { '0%': { transform: 'scale(0.8)', opacity: 0 }, '20%': { transform: 'scale(1)', opacity: 1 }, '80%': { transform: 'scale(1)', opacity: 1 }, '100%': { transform: 'scale(1.5)', opacity: 0 } },
                        slideUp: { '0%': { transform: 'translateY(20px)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } },
                        borderFlow: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '100% 50%' } }
                    }
                }
            }
        }
    </script>

    <style>
        body { background-color: #050505; color: #fff; overflow-x: hidden; -webkit-tap-highlight-color: transparent; }
        
        /* Particle Background */
        #particles-js { position: fixed; inset: 0; z-index: -2; opacity: 0.5; }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        
        /* Glass Effect V2 */
        .glass {
            background: rgba(20, 20, 25, 0.6);
            backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
        }

        /* Animated Gradient Border */
        .gradient-border {
            position: relative;
            background: #0f0f11;
            z-index: 1;
        }
        .gradient-border::before {
            content: "";
            position: absolute;
            inset: -2px;
            z-index: -1;
            background: linear-gradient(45deg, #8b5cf6, #38bdf8, #f472b6, #8b5cf6);
            background-size: 400%;
            animation: borderFlow 10s linear infinite;
            border-radius: inherit;
            opacity: 0;
            transition: opacity 0.3s;
        }
        .gradient-border:hover::before { opacity: 1; }

        /* Social Button Gradients */
        .btn-ig { background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%); }
        .btn-tiktok { background: #000000; position: relative; overflow: hidden; }
        .btn-tiktok::after { content: ''; position: absolute; inset: 0; background: linear-gradient(45deg, #00f2ea, #ff0050); mix-blend-mode: overlay; opacity: 0.5; }

        /* Active Scale */
        .active-scale:active { transform: scale(0.95); }
        
        /* Music Visualizer */
        .music-bars { display: flex; align-items: flex-end; height: 10px; gap: 2px; }
        .music-bar { width: 3px; background: #8b5cf6; animation: musicBounce 0.5s infinite; }
        .music-bar:nth-child(2) { animation-delay: 0.1s; }
        .music-bar:nth-child(3) { animation-delay: 0.2s; }
        .music-bar:nth-child(4) { animation-delay: 0.3s; }
        @keyframes musicBounce { 0%, 100% { height: 2px; } 50% { height: 100%; } }
    </style>
</head>
<body class="antialiased font-sans pb-28">

    <!-- === AUDIO PLAYER === -->
    <audio id="bgMusic" loop>
        <source src="mucic web.mp3" type="audio/mpeg">
    </audio>

    <canvas id="particles-js"></canvas>

    <!-- === INTRO SCREEN === -->
    <div id="introScreen" class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-500">
        <div class="animate-intro-zoom flex flex-col items-center">
            <div class="relative w-40 h-40 mb-6">
                <div class="absolute inset-0 border-2 border-zenith-primary rounded-full animate-spin-slow"></div>
                <div class="absolute inset-2 border-2 border-zenith-secondary/50 rounded-full"></div>
                <img src="https://files.catbox.moe/9w4az1.png" class="w-full h-full rounded-full object-cover p-1 shadow-[0_0_30px_rgba(139,92,246,0.6)]">
            </div>
            <h1 class="font-tech text-4xl font-bold tracking-widest text-white mb-2 uppercase text-center leading-none drop-shadow-lg animate-pulse">
                KIMJONG<br><span class="text-zenith-primary text-2xl">STORE</span>
            </h1>
        </div>
    </div>

    <!-- === LIVE TICKER === -->
    <div class="fixed top-0 w-full bg-[#15151A]/90 backdrop-blur border-b border-zenith-border z-50 h-8 flex items-center overflow-hidden">
        <div id="liveTicker" class="whitespace-nowrap animate-marquee flex gap-10 text-[10px] text-gray-400 font-mono"></div>
    </div>

    <!-- === MAIN APP === -->
    <div id="appScreen" class="hidden opacity-0 transition-opacity duration-500">
        
        <!-- HEADER -->
        <header class="fixed top-8 w-full z-40 h-16 flex items-center px-5 max-w-md left-1/2 -translate-x-1/2">
            <div class="w-full flex items-center justify-between glass rounded-full px-4 border border-white/10 animate-slide-up shadow-lg">
                <!-- ADMIN TRIGGER (Klik Foto) -->
                <div class="flex items-center gap-3 cursor-pointer group" onclick="triggerAdmin()">
                    <img id="navAvatar" src="https://files.catbox.moe/9w4az1.png" class="w-9 h-9 rounded-full border border-zenith-primary/50 bg-black p-0.5 object-cover group-hover:border-zenith-primary transition-colors shadow-md">
                    <div>
                        <p class="text-[8px] text-zenith-primary font-mono uppercase tracking-wider">ID: <span id="headerId">...</span></p>
                        <h3 id="navName" class="font-bold text-xs leading-none uppercase text-white">GUEST</h3>
                    </div>
                </div>
                
                <div class="flex gap-3 text-gray-400 items-center">
                    <!-- Music Indicator -->
                    <div class="music-bars cursor-pointer" onclick="toggleMusic()">
                        <div class="music-bar"></div>
                        <div class="music-bar"></div>
                        <div class="music-bar"></div>
                        <div class="music-bar"></div>
                    </div>
                    <button onclick="openNotif()" class="relative active-scale transition">
                        <i class="fa-solid fa-bell text-lg hover:text-white"></i>
                        <span class="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
                    </button>
                </div>
            </div>
        </header>

        <!-- CONTENT -->
        <main class="pt-28 px-4 max-w-md mx-auto">

            <!-- WALLET CARD -->
            <div class="w-full bg-gradient-to-r from-[#1e1b4b] to-[#4c1d95] rounded-3xl p-6 mb-4 relative overflow-hidden shadow-2xl border border-white/10 animate-pulse-glow cursor-pointer" data-tilt onclick="openHistory()">
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                <div class="absolute -right-10 -top-10 w-40 h-40 bg-zenith-primary/30 blur-3xl rounded-full animate-float"></div>
                
                <div class="relative z-10">
                    <div class="flex justify-between items-center mb-1">
                        <p class="text-[10px] text-gray-300 font-bold uppercase tracking-wider mb-1">SALDO AKTIF</p>
                        <i class="fa-solid fa-wallet text-white/50"></i>
                    </div>
                    <div class="flex justify-between items-center mb-4">
                        <h2 class="text-4xl font-bold text-white tracking-tighter font-tech drop-shadow-md" id="userBalance">Rp 0</h2>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-3">
                        <button onclick="event.stopPropagation(); openDeposit()" class="bg-white text-black py-2.5 rounded-xl font-bold text-xs hover:bg-gray-200 transition-all flex items-center justify-center gap-2 shadow-lg active-scale">
                            <i class="fa-solid fa-plus-circle"></i> ISI SALDO
                        </button>
                        <button onclick="event.stopPropagation(); openHistory()" class="bg-white/10 text-white border border-white/10 py-2.5 rounded-xl font-bold text-xs hover:bg-white/20 transition-all flex items-center justify-center gap-2 active-scale backdrop-blur-md">
                            <i class="fa-solid fa-list-ul"></i> RIWAYAT
                        </button>
                    </div>
                </div>
            </div>

            <!-- SOCIAL MEDIA HUB -->
            <div class="grid grid-cols-2 gap-3 mb-8 animate-slide-up" style="animation-delay: 0.1s;">
                <a href="https://www.instagram.com/gentoletttt?igsh=MTZ0aXlmeDVlaXB0bg==" target="_blank" class="glass p-3 rounded-2xl flex items-center gap-3 cursor-pointer border border-white/5 hover:border-pink-500/50 transition-all group active-scale">
                    <div class="w-10 h-10 rounded-full btn-ig flex items-center justify-center text-white text-xl shadow-lg group-hover:rotate-12 transition-transform">
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div class="overflow-hidden">
                        <p class="text-[10px] text-gray-400">Follow Instagram</p>
                        <p class="text-xs font-bold text-white truncate">@gentoletttt</p>
                    </div>
                </a>
                <a href="https://www.tiktok.com/@krekmod?_r=1&_t=ZS-93iEf1xF3do" target="_blank" class="glass p-3 rounded-2xl flex items-center gap-3 cursor-pointer border border-white/5 hover:border-cyan-500/50 transition-all group active-scale">
                    <div class="w-10 h-10 rounded-full btn-tiktok flex items-center justify-center text-white text-xl shadow-lg group-hover:rotate-12 transition-transform">
                        <i class="fa-brands fa-tiktok"></i>
                    </div>
                    <div class="overflow-hidden">
                        <p class="text-[10px] text-gray-400">Follow TikTok</p>
                        <p class="text-xs font-bold text-white truncate">@krekmod</p>
                    </div>
                </a>
            </div>

            <!-- TABS -->
            <div class="flex gap-2 overflow-x-auto no-scrollbar mb-6 animate-slide-up" style="animation-delay: 0.2s;">
                <button onclick="filter('all')" class="cat-btn active bg-zenith-primary text-white px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap shadow-lg shadow-zenith-primary/30 hover:scale-105 transition-transform">All</button>
                <button onclick="filter('Games')" class="cat-btn bg-zenith-card text-gray-400 px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap border border-zenith-border hover:text-white hover:border-zenith-primary transition-all">Games</button>
                <button onclick="filter('Apps')" class="cat-btn bg-zenith-card text-gray-400 px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap border border-zenith-border hover:text-white hover:border-zenith-secondary transition-all">Apps</button>
                <button onclick="filter('Voucher')" class="cat-btn bg-zenith-card text-gray-400 px-6 py-2 rounded-full text-xs font-bold whitespace-nowrap border border-zenith-border hover:text-white hover:border-zenith-accent transition-all">Voucher</button>
            </div>

            <!-- PRODUCT GRID -->
            <div id="productGrid" class="grid grid-cols-2 gap-3 pb-24 animate-slide-up" style="animation-delay: 0.3s;">
                <!-- JS Injected -->
            </div>

        </main>

        <!-- BOTTOM NAV -->
        <div class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[85%] max-w-sm h-14 glass rounded-full flex justify-around items-center px-4 z-40 border border-white/10 shadow-2xl backdrop-blur-xl">
            <button onclick="window.scrollTo(0,0); playSound()" class="w-12 h-12 flex items-center justify-center rounded-full text-zenith-primary bg-white/5 transition-all hover:scale-110 active:scale-90">
                <i class="fa-solid fa-house text-xl"></i>
            </button>
            <button onclick="openHistory()" class="w-12 h-12 flex items-center justify-center rounded-full text-gray-500 hover:text-white transition-all hover:scale-110 active:scale-90">
                <i class="fa-solid fa-receipt text-xl"></i>
            </button>
            <button onclick="window.open('https://wa.me/6281225980437'); playSound()" class="w-12 h-12 flex items-center justify-center rounded-full text-gray-500 hover:text-white transition-all hover:scale-110 active:scale-90">
                <i class="fa-brands fa-whatsapp text-xl"></i>
            </button>
            <button onclick="logout(); playSound()" class="w-12 h-12 flex items-center justify-center rounded-full text-gray-500 hover:text-red-500 transition-all hover:scale-110 active:scale-90">
                <i class="fa-solid fa-power-off text-xl"></i>
            </button>
        </div>

    </div>

    <!-- === MODALS === -->

    <!-- NOTIFICATION MODAL -->
    <div id="notifModal" class="fixed inset-0 z-[80] hidden flex items-start justify-center bg-black/80 backdrop-blur-sm p-4 pt-24" onclick="closeNotif()">
        <div class="w-full max-w-sm bg-zenith-card border border-zenith-border rounded-2xl p-4 shadow-2xl animate__animated animate__fadeInDown" onclick="event.stopPropagation()">
            <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold text-white text-sm font-tech">NOTIFICATIONS</h3>
                <button onclick="closeNotif()" class="text-gray-500 hover:text-white"><i class="fa-solid fa-xmark"></i></button>
            </div>
            <div class="space-y-3">
                <div class="bg-white/5 p-3 rounded-xl flex gap-3 border border-white/5">
                    <div class="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0"><i class="fa-solid fa-server"></i></div>
                    <div>
                        <h4 class="text-xs font-bold text-white">System Online</h4>
                        <p class="text-[10px] text-gray-400">Semua layanan aktif & normal.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- DEPOSIT MODAL -->
    <div id="depositModal" class="fixed inset-0 z-[80] hidden flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
        <div class="w-full max-w-sm bg-[#121212] border border-white/10 rounded-2xl p-6 relative">
            <h2 class="text-xl font-bold text-white mb-6 text-center font-tech">ISI SALDO</h2>
            
            <div class="bg-white/5 border border-white/10 rounded-xl p-3 mb-4 flex justify-between items-center">
                <span class="text-xs text-gray-400">ID Akun:</span>
                <span class="font-mono font-bold text-zenith-primary" id="depModalId">...</span>
            </div>

            <div class="mb-6">
                <label class="text-[10px] text-gray-500 font-bold uppercase mb-2 block">Nominal (Rp)</label>
                <input type="number" id="depAmount" class="w-full bg-black border border-white/20 rounded-xl p-4 text-white focus:border-zenith-primary focus:outline-none font-mono text-xl text-center" placeholder="50.000">
            </div>

            <div class="flex gap-3">
                <button onclick="closeModal('depositModal')" class="flex-1 py-3 border border-white/10 text-gray-400 font-bold rounded-xl text-xs hover:text-white">BATAL</button>
                <button onclick="processDeposit()" class="flex-[2] py-3 bg-white text-black font-bold rounded-xl text-xs hover:bg-gray-200 shadow-lg">KONFIRMASI</button>
            </div>
        </div>
    </div>

    <!-- ADMIN PANEL V41 (Product Manager + Inject) -->
    <div id="adminModal" class="fixed inset-0 z-[120] hidden bg-black/95 flex flex-col items-center justify-center p-4">
        <div class="w-full max-w-sm bg-[#121212] border border-red-900 rounded-2xl p-6 relative max-h-[90vh] overflow-y-auto animate__animated animate__fadeInUp">
            <h2 class="text-xl font-bold text-red-500 mb-6 tracking-widest text-center font-tech">GOD MODE</h2>
            <div class="space-y-4">
                <div class="bg-white/5 p-4 rounded-xl border border-white/5">
                    <h3 class="text-xs font-bold text-gray-400 mb-2">SALDO INJECTOR</h3>
                    <input type="text" id="admTargetId" class="w-full bg-black border border-gray-800 rounded-lg p-2 text-white text-sm focus:border-red-500 mb-2 uppercase" placeholder="ID User">
                    <input type="number" id="admAmount" class="w-full bg-black border border-gray-800 rounded-lg p-2 text-white text-sm focus:border-red-500 mb-2" placeholder="Nominal">
                    <div class="flex gap-2">
                        <button onclick="pasteMyId()" class="px-3 py-2 bg-white/10 rounded text-[10px] text-gray-400">MY ID</button>
                        <button onclick="adminInject()" class="flex-1 py-2 bg-red-600 rounded text-xs font-bold hover:bg-red-500">KIRIM</button>
                    </div>
                </div>
                <div class="bg-white/5 p-4 rounded-xl border border-white/5">
                    <h3 class="text-xs font-bold text-zenith-primary mb-2">PRODUCT MANAGER</h3>
                    <button onclick="openProductManager()" class="w-full py-3 bg-zenith-primary/20 text-zenith-primary border border-zenith-primary rounded-xl text-xs font-bold hover:bg-zenith-primary hover:text-black transition-all">
                        <i class="fa-solid fa-list-check mr-2"></i> KELOLA PRODUK
                    </button>
                </div>
                <button onclick="closeModal('adminModal')" class="py-3 border border-white/10 text-gray-500 rounded-xl text-[10px] font-bold w-full">CLOSE</button>
            </div>
        </div>
    </div>

    <!-- PRODUCT MANAGER & EDIT MODAL -->
    <div id="productManagerModal" class="fixed inset-0 z-[130] hidden bg-black flex flex-col p-4 animate__animated animate__fadeIn">
        <div class="flex justify-between items-center mb-6"><h2 class="text-lg font-bold text-white">KELOLA PRODUK</h2><button onclick="closeProductManager()" class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center"><i class="fa-solid fa-xmark"></i></button></div>
        <button onclick="openEditProduct()" class="w-full py-4 rounded-xl bg-zenith-primary text-black font-bold mb-4 shadow-lg shadow-zenith-primary/20"><i class="fa-solid fa-plus mr-2"></i> TAMBAH PRODUK BARU</button>
        <div id="adminProductList" class="space-y-3 overflow-y-auto pb-20"></div>
    </div>
    <div id="editProductModal" class="fixed inset-0 z-[140] hidden flex items-center justify-center bg-black/90 p-4">
        <div class="w-full max-w-sm bg-[#15151A] rounded-2xl p-6 border border-white/10 animate__animated animate__zoomIn">
            <h3 class="text-lg font-bold text-white mb-4" id="editModalTitle">Edit Produk</h3><input type="hidden" id="editId">
            <div class="space-y-3">
                <div><label class="text-[10px] text-gray-500 uppercase">Nama Produk</label><input type="text" id="editName" class="w-full bg-black border border-white/10 rounded-lg p-2 text-white text-sm"></div>
                <div><label class="text-[10px] text-gray-500 uppercase">Harga (Rp)</label><input type="number" id="editPrice" class="w-full bg-black border border-white/10 rounded-lg p-2 text-white text-sm"></div>
                <div><label class="text-[10px] text-gray-500 uppercase">Kategori</label><select id="editCat" class="w-full bg-black border border-white/10 rounded-lg p-2 text-white text-sm"><option value="Games">Games</option><option value="Apps">Apps</option><option value="Voucher">Voucher</option></select></div>
                <div><label class="text-[10px] text-gray-500 uppercase">URL Gambar</label><input type="text" id="editImg" class="w-full bg-black border border-white/10 rounded-lg p-2 text-white text-sm" placeholder="https://..."></div>
            </div>
            <div class="flex gap-2 mt-6"><button onclick="closeEditProduct()" class="flex-1 py-3 border border-white/10 text-gray-400 rounded-xl text-xs font-bold">BATAL</button><button onclick="saveProduct()" class="flex-[2] py-3 bg-zenith-primary text-black rounded-xl text-xs font-bold">SIMPAN</button></div>
        </div>
    </div>

    <!-- ORDER MODAL -->
    <div id="orderModal" class="fixed inset-0 z-[60] hidden flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm">
        <div class="w-full max-w-sm bg-[#121212] rounded-t-3xl sm:rounded-3xl p-6 border-t border-zenith-border shadow-2xl animate__animated animate__slideInUp">
            <div class="flex gap-4 mb-6">
                <img id="mImg" class="w-16 h-16 rounded-2xl bg-white/5 p-2 object-contain border border-white/10">
                <div>
                    <h3 id="mTitle" class="font-bold text-lg text-white">Product</h3>
                    <p class="text-xs text-gray-400 mb-1">Instant Process</p>
                    <p id="mPrice" class="text-zenith-primary font-bold text-lg font-mono">Rp 0</p>
                </div>
            </div>
            <div class="space-y-4">
                <input type="text" id="targetGameId" class="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-zenith-primary focus:outline-none" placeholder="Masukkan ID Game / Zone">
                <button onclick="processOrder()" class="w-full py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-transform active:scale-95 shadow-lg">BAYAR SEKARANG</button>
                <button onclick="closeModal('orderModal')" class="w-full py-2 text-gray-500 text-xs">BATALKAN</button>
            </div>
        </div>
    </div>

    <script>
        // CONFIG
        const CONFIG = {
            wa: "6281225980437",
            qris: "https://files.catbox.moe/2gdzca.jpg",
            avatar: "https://files.catbox.moe/9w4az1.png"
        };

        const defaultProducts = [
            { id: 1, name: "MLBB 86 DM", price: 20000, img: "https://cdn-icons-png.flaticon.com/512/3408/3408506.png", cat: "Games" },
            { id: 2, name: "Free Fire 140 DM", price: 19500, img: "https://cdn-icons-png.flaticon.com/512/2696/2696459.png", cat: "Games" },
            { id: 3, name: "PUBG 60 UC", price: 14500, img: "https://cdn-icons-png.flaticon.com/512/2099/2099238.png", cat: "Games" },
            { id: 4, name: "Weekly Pass", price: 27500, img: "https://cdn-icons-png.flaticon.com/512/8044/8044321.png", cat: "Games" },
            { id: 5, name: "Netflix Premium", price: 25000, img: "https://cdn-icons-png.flaticon.com/512/2504/2504929.png", cat: "Apps" },
            { id: 6, name: "Spotify Premium", price: 15000, img: "https://cdn-icons-png.flaticon.com/512/2111/2111624.png", cat: "Apps" },
            { id: 7, name: "Token PLN 20k", price: 22000, img: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png", cat: "Voucher" },
            { id: 8, name: "Telkomsel 25k", price: 27000, img: "https://cdn-icons-png.flaticon.com/512/3616/3616927.png", cat: "Voucher" }
        ];

        let user = { name: "Guest", id: "UNK", balance: 0, history: [] };
        let products = [];
        let selectedProd = null;
        let payMethod = 'saldo';
        let adminClicks = 0;
        let musicPlaying = false;
        const bgMusic = document.getElementById('bgMusic');

        // AUDIO ENGINE
        function playSound(type) {
            if(navigator.vibrate) navigator.vibrate(10);
        }

        function toggleMusic() {
            if(musicPlaying) { bgMusic.pause(); musicPlaying = false; } 
            else { 
                bgMusic.play().catch(()=>{ document.addEventListener('click', ()=>{ bgMusic.play(); musicPlaying=true; }, {once:true}); }); 
                musicPlaying = true; 
            }
        }

        // INIT
        window.onload = () => {
            initProducts();
            initTicker();
            initParticles();
            AOS.init();
            
            // Try Auto-Play
            const playPromise = bgMusic.play();
            if (playPromise !== undefined) {
                playPromise.then(_ => { musicPlaying = true; }).catch(error => { document.addEventListener('click', ()=>{ if(!musicPlaying){ bgMusic.play(); musicPlaying=true; } }, {once:true}); });
            }

            setTimeout(() => {
                document.getElementById('introScreen').classList.add('hidden');
                document.getElementById('appScreen').classList.remove('hidden');
                document.getElementById('appScreen').classList.add('opacity-100');
                
                if(!localStorage.getItem('kj_user_v47')) {
                    const randomId = 'Q-' + Math.floor(1000 + Math.random() * 9000);
                    user = { name: "GUEST", id: randomId, balance: 0, history: [] };
                    
                    // Migrate
                    const old = localStorage.getItem('kj_user_v44');
                    if(old) { try{ const o=JSON.parse(old); user.balance=o.balance; user.id=o.id||randomId; user.history=o.history; }catch(e){} }
                    
                    saveUser();
                } else {
                    user = JSON.parse(localStorage.getItem('kj_user_v47'));
                }
                initUser();
            }, 3000);
        };

        // USER
        function initUser() { updateUI(); renderProducts('all'); }
        function saveUser() { localStorage.setItem('kj_user_v47', JSON.stringify(user)); updateUI(); }
        function updateUI() { document.getElementById('navName').innerText = user.name; document.getElementById('userBalance').innerText = `Rp ${user.balance.toLocaleString('id-ID')}`; document.getElementById('userIdDisplay').innerText = user.id; document.getElementById('headerId').innerText = user.id; document.getElementById('depModalId').innerText = user.id; document.getElementById('navAvatar').src = CONFIG.avatar; }
        function logout() { localStorage.removeItem('kj_user_v47'); location.reload(); }
        function copyID() { playSound(); navigator.clipboard.writeText(user.id); Swal.fire({toast:true, title:'ID Copied', icon:'success', background:'#050505', color:'#fff', position:'top', showConfirmButton:false, timer:1500}); }

        // PRODUCTS & CREATOR
        function initProducts() { const stored = localStorage.getItem('kj_products_v41'); if (stored) products = JSON.parse(stored); else { products = defaultProducts; saveProducts(); } }
        function saveProducts() { localStorage.setItem('kj_products_v41', JSON.stringify(products)); renderProducts('all'); }
        function openProductManager() { document.getElementById('productManagerModal').classList.remove('hidden'); document.getElementById('productManagerModal').classList.add('flex'); renderAdminProducts(); }
        function closeProductManager() { document.getElementById('productManagerModal').classList.add('hidden'); document.getElementById('productManagerModal').classList.remove('flex'); }
        function renderAdminProducts() { document.getElementById('adminProductList').innerHTML = products.map(p => `<div class="bg-white/5 p-3 rounded-xl flex items-center gap-3 animate__animated animate__fadeInUp"><img src="${p.img}" class="w-10 h-10 rounded-lg bg-black object-contain"><div class="flex-1"><p class="text-xs font-bold text-white">${p.name}</p><p class="text-[10px] text-gray-400">Rp ${p.price.toLocaleString()}</p></div><div class="flex gap-2"><button onclick="openEditProduct(${p.id})" class="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-500"><i class="fa-solid fa-pen"></i></button><button onclick="deleteProduct(${p.id})" class="w-8 h-8 rounded-lg bg-red-500/20 text-red-500"><i class="fa-solid fa-trash"></i></button></div></div>`).join(''); }
        function openEditProduct(id = null) { const modal = document.getElementById('editProductModal'); modal.classList.remove('hidden'); modal.classList.add('flex'); if (id) { const p = products.find(x => x.id === id); document.getElementById('editModalTitle').innerText = "Edit Produk"; document.getElementById('editId').value = p.id; document.getElementById('editName').value = p.name; document.getElementById('editPrice').value = p.price; document.getElementById('editCat').value = p.cat; document.getElementById('editImg').value = p.img; } else { document.getElementById('editModalTitle').innerText = "Tambah Produk"; document.getElementById('editId').value = ""; document.getElementById('editName').value = ""; document.getElementById('editPrice').value = ""; document.getElementById('editImg').value = "https://cdn-icons-png.flaticon.com/512/3408/3408506.png"; } }
        function closeEditProduct() { document.getElementById('editProductModal').classList.add('hidden'); document.getElementById('editProductModal').classList.remove('flex'); }
        function saveProduct() { const id = document.getElementById('editId').value; const name = document.getElementById('editName').value; const price = parseInt(document.getElementById('editPrice').value); const cat = document.getElementById('editCat').value; const img = document.getElementById('editImg').value; if (!name || !price) return Swal.fire({toast:true, title:'Data tidak lengkap', icon:'error', background:'#111', color:'#fff'}); if (id) { const index = products.findIndex(x => x.id == id); products[index] = { id: parseInt(id), name, price, cat, img }; } else { products.push({ id: Date.now(), name, price, cat, img }); } saveProducts(); closeEditProduct(); renderAdminProducts(); Swal.fire({toast:true, title:'Disimpan', icon:'success', background:'#111', color:'#fff', timer:1500, showConfirmButton:false}); }
        function deleteProduct(id) { Swal.fire({title:'Hapus?',icon:'warning',showCancelButton:true,confirmButtonColor:'#d33',confirmButtonText:'Ya',background:'#111',color:'#fff'}).then((r)=>{if(r.isConfirmed){products=products.filter(p=>p.id!==id);saveProducts();renderAdminProducts();}}); }

        function renderProducts(filterCat) {
            const grid = document.getElementById('productGrid');
            const data = filterCat === 'all' ? products : products.filter(p => p.cat === filterCat);
            grid.innerHTML = data.map((p, i) => `
                <div class="bg-[#121212] rounded-2xl p-4 flex flex-col items-center border border-white/5 hover:border-zenith-primary transition-all cursor-pointer group card-hover gradient-border" onclick="openOrder(${p.id})" style="animation: fadeInUp 0.5s ease-out ${i*0.1}s both;">
                    <img src="${p.img}" class="w-14 h-14 object-contain mb-3 group-hover:scale-110 transition-transform drop-shadow-lg">
                    <h4 class="font-bold text-center text-xs text-gray-200 truncate w-full font-sans">${p.name}</h4>
                    <p class="text-center text-xs text-zenith-primary font-bold mt-1">Rp ${p.price.toLocaleString()}</p>
                    <button class="w-full bg-[#1c1c1c] group-hover:bg-zenith-primary group-hover:text-white text-gray-400 py-2 rounded-xl mt-3 text-[10px] font-bold transition-colors">BELI</button>
                </div>
            `).join('');
        }
        function filter(cat) { document.querySelectorAll('.cat-btn').forEach(b => b.className = "cat-btn bg-zenith-card text-gray-400 px-6 py-2 rounded-xl text-xs font-bold whitespace-nowrap border border-zenith-border hover:text-white"); event.target.className = "cat-btn active bg-zenith-primary text-white px-6 py-2 rounded-xl text-xs font-bold whitespace-nowrap shadow-lg shadow-zenith-primary/30"; renderProducts(cat); }

        // ORDERS
        function openOrder(id) { playSound(); selectedProd = products.find(p => p.id === id); document.getElementById('mImg').src = selectedProd.img; document.getElementById('mTitle').innerText = selectedProd.name; document.getElementById('mPrice').innerText = `Rp ${selectedProd.price.toLocaleString()}`; document.getElementById('targetGameId').value = ''; document.getElementById('orderModal').classList.remove('hidden'); document.getElementById('orderModal').classList.add('flex'); }
        function closeModal(id) { document.getElementById(id).classList.add('hidden'); document.getElementById(id).classList.remove('flex'); }
        function processOrder() {
            const gid = document.getElementById('targetGameId').value;
            if(!gid) return Swal.fire({toast:true, title:'Input Game ID', background:'#121212', color:'#fff'});
            if(user.balance < selectedProd.price) { closeModal('orderModal'); return Swal.fire({title:'Saldo Kurang', text:'Deposit dulu gan!', icon:'error', background:'#121212', color:'#fff', confirmButtonText:'Deposit', preConfirm:()=>openDeposit()}); }
            user.balance -= selectedProd.price; user.history.unshift({item: selectedProd.name, price: selectedProd.price, date: new Date().toLocaleString()}); saveUser(); closeModal('orderModal'); confetti({particleCount: 100, spread: 70, origin: { y: 0.6 }}); Swal.fire({icon:'success', title:'Transaksi Sukses', text:'Item dikirim ke ID: '+gid, background:'#121212', color:'#fff'});
            
            const msg = `====== 🎮 *NEW ORDER* 🎮 ======%0A` + `📦 *Item:* ${selectedProd.name}%0A` + `🆔 *Target ID:* ${gid}%0A` + `💰 *Harga:* Rp ${selectedProd.price.toLocaleString()}%0A` + `💳 *Payment:* SALDO%0A` + `====================================%0A` + `_Mohon diproses secepatnya!_ ✨`;
            setTimeout(() => window.open(`https://wa.me/${CONFIG.wa}?text=${msg}`, '_blank'), 1500);
        }

        // DEPOSIT
        function openDeposit() { playSound(); document.getElementById('depositModal').classList.remove('hidden'); document.getElementById('depositModal').classList.add('flex'); }
        async function processDeposit() {
            const amount = document.getElementById('depAmount').value;
            if(!amount || amount < 10000) return Swal.fire({toast:true, title:'Min 10.000', background:'#121212', color:'#fff'});
            closeModal('depositModal');
            
            await Swal.fire({
                title: 'SCAN QRIS',
                html: `
                    <div class="bg-white p-2 rounded mb-2 inline-block shadow-lg shadow-zenith-primary/20">
                        <img src="${CONFIG.qris}" class="w-48 h-48 object-contain">
                    </div>
                    <p class="font-mono text-sm">Transfer: <b class="text-zenith-primary">Rp ${parseInt(amount).toLocaleString('id-ID')}</b></p>
                    <p class="text-xs text-gray-500 mt-2">ID ANDA: ${user.id}</p>
                `,
                background: '#050505', color: '#fff',
                confirmButtonText: 'SAYA SUDAH BAYAR',
                confirmButtonColor: '#10b981'
            }).then((res) => {
                if(res.isConfirmed) {
                    const msg = `*DEPOSIT REQUEST V47*%0A` +
                                `--------------------------------%0A` +
                                `👤 User ID: *${user.id}*%0A` +
                                `💰 Nominal: Rp ${parseInt(amount).toLocaleString()}%0A` +
                                `📅 Tanggal: ${new Date().toLocaleString()}%0A` +
                                `--------------------------------%0A` +
                                `Mohon verifikasi dan isi saldo saya min. Bukti transfer terlampir.`;
                    
                    window.open(`https://wa.me/${CONFIG.wa}?text=${msg}`, '_blank');
                }
            });
        }

        // ADMIN
        function triggerAdmin() { adminClicks++; if(adminClicks===5) { playSound(); Swal.fire({title:'ADMIN PIN', input:'password', background:'#050505', color:'#fff'}).then(res => { if(res.value==='1234') { document.getElementById('adminModal').classList.remove('hidden'); document.getElementById('adminModal').classList.add('flex'); } }); adminClicks=0; } }
        function pasteMyId() { document.getElementById('admTargetId').value = user.id; }
        function adminInject() { const id=document.getElementById('admTargetId').value; const amt=parseInt(document.getElementById('admAmount').value); if(id===user.id) { user.balance+=amt; saveUser(); Swal.fire({icon:'success',title:'INJECTED',background:'#111',color:'#fff'}); } closeModal('adminModal'); }

        // UTILS
        function initTicker() { const txt = ["🚀 User_99 Deposit 100k", "💎 Sultan_FF beli 140 DM", "⚡ Server Aktif"]; document.getElementById('liveTicker').innerHTML = txt.map(t => `<span>${t}</span>`).join(''); }
        function initParticles() { const c=document.getElementById('particles-js'), x=c.getContext('2d'); c.width=innerWidth; c.height=innerHeight; let p=[]; for(let i=0;i<30;i++)p.push({x:Math.random()*c.width,y:Math.random()*c.height,s:Math.random()*2}); function a(){ x.clearRect(0,0,c.width,c.height); x.fillStyle='rgba(139,92,246,0.2)'; p.forEach(e=>{x.beginPath();x.arc(e.x,e.y,e.s,0,Math.PI*2);x.fill();e.y-=0.2;if(e.y<0)e.y=c.height}); requestAnimationFrame(a); } a(); }
        function openHistory() { const l=user.history.map(h=>`${h.item} | Rp ${h.price}`).join('\n')||'KOSONG'; Swal.fire({title:'RIWAYAT',text:l,background:'#111',color:'#fff'}); }
        function openNotif() { document.getElementById('notifModal').classList.remove('hidden'); document.getElementById('notifModal').classList.add('flex'); }
        function closeNotif() { document.getElementById('notifModal').classList.add('hidden'); document.getElementById('notifModal').classList.remove('flex'); }
    </script>
</body>
</html>


