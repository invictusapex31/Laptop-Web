export const componentsData = {
  screens: [
    { 
      id: 's1', 
      name: '13.5" 2256×1504', 
      brand: 'BOE',
      size: '13.5"', 
      resolution: '2256×1504', 
      aspectRatio: '3:2',
      refreshRate: '60Hz', 
      brightness: 400,
      colorGamut: '100% sRGB',
      price: 299, 
      specs: '3:2 aspect ratio, matte finish, 400 nits',
      weight: 280
    },
    { 
      id: 's2', 
      name: '13.5" 2256×1504 120Hz', 
      brand: 'BOE',
      size: '13.5"', 
      resolution: '2256×1504', 
      aspectRatio: '3:2',
      refreshRate: '120Hz', 
      brightness: 500,
      colorGamut: '100% DCI-P3',
      price: 449, 
      specs: '3:2 aspect ratio, high refresh, 500 nits, DCI-P3',
      weight: 290
    }
  ],
  keyboards: [
    { 
      id: 'k1', 
      name: 'US English Keyboard', 
      layout: 'US ANSI',
      backlight: true, 
      travel: '1.5mm',
      price: 0, 
      specs: 'Backlit, 1.5mm travel, US ANSI layout' 
    }
  ],
  ram: [
    { 
      id: 'r1', 
      name: '8GB DDR5-5600',
      capacity: '8GB', 
      type: 'DDR5',
      speed: '5600MHz', 
      slots: 1,
      brand: 'Crucial',
      price: 0, 
      specs: 'DDR5-5600, single channel' 
    },
    { 
      id: 'r2', 
      name: '16GB DDR5-5600',
      capacity: '16GB', 
      type: 'DDR5',
      speed: '5600MHz', 
      slots: 1,
      brand: 'Crucial',
      price: 75, 
      specs: 'DDR5-5600, single channel' 
    },
    { 
      id: 'r3', 
      name: '32GB DDR5-5600',
      capacity: '32GB', 
      type: 'DDR5',
      speed: '5600MHz', 
      slots: 1,
      brand: 'Crucial',
      price: 150, 
      specs: 'DDR5-5600, single channel' 
    }
  ],
  storage: [
    { 
      id: 'st1', 
      name: '256GB NVMe SSD',
      type: 'NVMe PCIe 4.0', 
      capacity: '256GB', 
      read: '5000 MB/s',
      write: '4000 MB/s',
      formFactor: 'M.2 2280',
      brand: 'WD',
      price: 0, 
      specs: 'PCIe 4.0, 5000/4000 MB/s' 
    },
    { 
      id: 'st2', 
      name: '512GB NVMe SSD',
      type: 'NVMe PCIe 4.0', 
      capacity: '512GB', 
      read: '7000 MB/s',
      write: '5000 MB/s',
      formFactor: 'M.2 2280',
      brand: 'Samsung',
      price: 80, 
      specs: 'PCIe 4.0, 7000/5000 MB/s' 
    },
    { 
      id: 'st3', 
      name: '1TB NVMe SSD',
      type: 'NVMe PCIe 4.0', 
      capacity: '1TB', 
      read: '7400 MB/s',
      write: '6500 MB/s',
      formFactor: 'M.2 2280',
      brand: 'Samsung',
      price: 150, 
      specs: 'PCIe 4.0, 7400/6500 MB/s' 
    }
  ],
  cpus: [
    { 
      id: 'c1', 
      name: 'Intel Core Ultra 7 155H',
      brand: 'Intel',
      cores: '16', 
      threads: 22,
      baseClock: '1.4 GHz',
      boostClock: '4.8 GHz', 
      tdp: 28,
      socket: 'BGA',
      performance: 85,
      price: 0, 
      specs: '16 cores, 22 threads, up to 4.8 GHz' 
    },
    { 
      id: 'c2', 
      name: 'AMD Ryzen 7 7840U',
      brand: 'AMD',
      cores: '8', 
      threads: 16,
      baseClock: '3.3 GHz',
      boostClock: '5.1 GHz', 
      tdp: 28,
      socket: 'FP8',
      performance: 82,
      price: 0, 
      specs: '8 cores, 16 threads, up to 5.1 GHz' 
    }
  ],
  batteries: [
    { 
      id: 'b1', 
      name: '55Wh Battery',
      capacity: '55Wh', 
      cells: 4,
      estimatedLife: '8-10 hours',
      weight: 280,
      price: 0, 
      specs: '55Wh, 8-10 hours typical use' 
    },
    { 
      id: 'b2', 
      name: '61Wh Battery',
      capacity: '61Wh', 
      cells: 4,
      estimatedLife: '10-12 hours',
      weight: 310,
      price: 40, 
      specs: '61Wh, 10-12 hours typical use' 
    }
  ],
  expansionCards: [
    { 
      id: 'p1', 
      name: 'USB-C',
      type: 'USB-C 3.2 Gen 2',
      dataRate: '10Gbps',
      price: 9, 
      specs: 'USB-C 3.2 Gen 2, 10Gbps' 
    },
    { 
      id: 'p2', 
      name: 'USB-A',
      type: 'USB-A 3.2 Gen 2',
      dataRate: '10Gbps',
      price: 9, 
      specs: 'USB-A 3.2 Gen 2, 10Gbps' 
    },
    { 
      id: 'p3', 
      name: 'HDMI',
      type: 'HDMI 2.1',
      resolution: '4K@120Hz',
      price: 19, 
      specs: 'HDMI 2.1, 4K@120Hz' 
    },
    { 
      id: 'p4', 
      name: 'Ethernet',
      type: '2.5Gb Ethernet',
      speed: '2500Mbps',
      price: 39, 
      specs: '2.5Gb Ethernet, 2500Mbps' 
    }
  ],
  bodyColors: [
    { 
      id: 'bc1', 
      name: 'Space Gray', 
      hex: '#4a4a4a', 
      finish: 'matte-anodized',
      metalness: 0.9,
      roughness: 0.4,
      price: 0 
    },
    { 
      id: 'bc2', 
      name: 'Silver', 
      hex: '#c0c0c0', 
      finish: 'brushed-aluminum',
      metalness: 1.0,
      roughness: 0.3,
      price: 0 
    },
    { 
      id: 'bc3', 
      name: 'Midnight Black', 
      hex: '#0a0a0a', 
      finish: 'matte-anodized',
      metalness: 0.8,
      roughness: 0.5,
      price: 30 
    }
  ]
}
