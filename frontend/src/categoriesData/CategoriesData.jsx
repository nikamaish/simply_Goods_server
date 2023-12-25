// productData.js
const products = [
 { id: 0, name: ' SD cards', price: '289', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
 { id: 0, name: 'Pendrives ', price: '289', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
 { id: 0, name: 'MPort', price: '289', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
 { id: 0, name: 'Pendrives and SD cards', price: '289',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
 { id: 0, name: 'USB', price: '289', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 4, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 1, name: 'DELL WM118 Wireless Optical Mouse', price: '169', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 5, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  // Multiple cards for id: 1
  { id: 1, name: 'Logitech Gaming Mouse', price: '199',img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 4, off: '15% off', cancelPrice: '169',colorType:'Blue,Lithium Polymer' },
  { id: 1, name: 'Wireless Bluetooth Mouse', price: '149', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '12% off', cancelPrice: '129',colorType:'Blue,Lithium Polymer' },
  { id: 1, name: 'Ergonomic Mouse', price: '189', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 4, off: '10% off', cancelPrice: '169',colorType:'Blue,Lithium Polymer' },
  // Add more cards as needed
  { id: 2, name: 'Camera1', price: '169', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 5, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 2, name: 'Camera2', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer'},
  { id: 2, name: 'Camera3', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 2, name: 'Camera4', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 2, name: 'Camera5', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199',colorType:'Blue,Lithium Polymer' },
  { id: 3, name: 'SanDisk1', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199' , colorType:'Blue,Lithium Polymer'},
  { id: 3, name: 'Cellecor', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },
  { id: 3, name: 'Boat', price: '179', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPHqs-C8AYEAKtY8PmcpotDWbmVNx4Ra8Dlw&usqp=CAU', stars: 3, off: '10% off', cancelPrice: '199', colorType:'Blue,Lithium Polymer' },

];

export default products;
