export const componentsData = {
  screens: [
    { id: 's1', name: '13.5" 2256x1504', size: '13.5"', resolution: '2256x1504', refreshRate: '60Hz', price: 299, specs: '3:2 aspect ratio, matte finish' },
    { id: 's2', name: '13.5" 2256x1504 120Hz', size: '13.5"', resolution: '2256x1504', refreshRate: '120Hz', price: 449, specs: '3:2 aspect ratio, high refresh' },
    { id: 's3', name: '15.6" 2560x1600', size: '15.6"', resolution: '2560x1600', refreshRate: '60Hz', price: 399, specs: '16:10 aspect ratio' }
  ],
  keyboards: [
    { id: 'k1', name: 'US English', backlight: 'White', language: 'US', price: 49, specs: 'Standard layout' },
    { id: 'k2', name: 'RGB Backlit', backlight: 'RGB', language: 'US', price: 89, specs: 'Per-key RGB' },
    { id: 'k3', name: 'UK English', backlight: 'White', language: 'UK', price: 49, specs: 'UK layout' }
  ],
  ram: [
    { id: 'r1', capacity: '8GB', speed: 'DDR4-3200', price: 79, specs: 'Single channel' },
    { id: 'r2', capacity: '16GB', speed: 'DDR4-3200', price: 149, specs: 'Dual channel' },
    { id: 'r3', capacity: '32GB', speed: 'DDR4-3200', price: 299, specs: 'Dual channel' },
    { id: 'r4', capacity: '64GB', speed: 'DDR5-4800', price: 599, specs: 'High performance' }
  ],
  storage: [
    { id: 'st1', type: 'SSD', capacity: '256GB', speed: 'NVMe Gen3', price: 89, specs: 'PCIe 3.0' },
    { id: 'st2', type: 'SSD', capacity: '512GB', speed: 'NVMe Gen4', price: 149, specs: 'PCIe 4.0' },
    { id: 'st3', type: 'SSD', capacity: '1TB', speed: 'NVMe Gen4', price: 249, specs: 'PCIe 4.0' },
    { id: 'st4', type: 'SSD', capacity: '2TB', speed: 'NVMe Gen4', price: 449, specs: 'High capacity' }
  ],
  gpus: [
    { id: 'g1', name: 'Intel Iris Xe', vram: 'Shared', performance: 'Basic', price: 0, specs: 'Integrated graphics' },
    { id: 'g2', name: 'NVIDIA RTX 3050', vram: '4GB', performance: 'Gaming', price: 399, specs: 'Entry gaming' },
    { id: 'g3', name: 'NVIDIA RTX 4060', vram: '8GB', performance: 'High', price: 699, specs: 'High-end gaming' }
  ],
  cpus: [
    { id: 'c1', name: 'Intel i5-1340P', cores: '12', speed: '4.6GHz', price: 0, specs: 'Base processor' },
    { id: 'c2', name: 'Intel i7-1360P', cores: '12', speed: '5.0GHz', price: 199, specs: 'Performance' },
    { id: 'c3', name: 'Intel i7-1370P', cores: '14', speed: '5.2GHz', price: 349, specs: 'High performance' }
  ],
  batteries: [
    { id: 'b1', capacity: '55Wh', price: 0, specs: 'Standard battery' },
    { id: 'b2', capacity: '61Wh', price: 49, specs: 'Extended battery' },
    { id: 'b3', capacity: '85Wh', price: 99, specs: 'Maximum capacity' }
  ],
  ports: [
    { id: 'p1', types: '4x USB-C', quantity: 4, price: 0, specs: 'All USB-C' },
    { id: 'p2', types: '2x USB-C, 2x USB-A', quantity: 4, price: 29, specs: 'Mixed ports' },
    { id: 'p3', types: '2x USB-C, HDMI, Ethernet', quantity: 4, price: 49, specs: 'Versatile' }
  ],
  bodyColors: [
    { id: 'bc1', name: 'Silver', hex: '#C0C0C0', finish: 'Matte', price: 0 },
    { id: 'bc2', name: 'Space Gray', hex: '#4A4A4A', finish: 'Matte', price: 29 },
    { id: 'bc3', name: 'Midnight Blue', hex: '#1A2332', finish: 'Metallic', price: 49 },
    { id: 'bc4', name: 'Rose Gold', hex: '#B76E79', finish: 'Metallic', price: 49 }
  ]
}
