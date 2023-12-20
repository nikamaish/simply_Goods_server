import React from 'react'
import './categories.css'

const Categories = () => {

    const electronics = [
        {
        'name': 'Pendrives and SD cards',
        'img':'https://purepng.com/public/uploads/large/purepng.com-sandisk-usb-flash-pen-driveelectronics-pen-drive-usb-9415246650490ar6r.png',
        'price': '289',
      },
      {
        'name': 'Wireless Mouse and Keyboard',
        'img':'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/input-devices/dell/keyboards/km3322w/spi/ng/keyboard-mouse-km3322w-campaign-hero-504x350-ng.psd?hei=402&qtl=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto',
        'price': '169',
      },
      {
        'name': 'Camera',
        'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM8oJVQDAgQJqsceuZd59tHI8AG-fSTB2s1w&usqp=CAU',
        'price': '179',
      },
      {
        'name': 'Premium Powerbanks',
        'img':'https://atlas-content-cdn.pixelsquid.com/stock-images/usb-power-bank-powerbank-G9GnBK2-600.jpg',
        'price': '179',
      }
    
    ]


  return (
    <div>
       <div className="rectangle-container">
      {/* <div className='electronics'> */}
      <h1>Best Of Electronics</h1>

      <div className="eproduct-container">
        {electronics.map((product,index)=>(
          <div key={index} className="eproduct-card">
          <img src={product.img} alt={product.name} className="eproduct-image" />
          <div className="eproduct-details">
            <p className="eproduct-name">{product.name}</p>
            <p className="eproduct-price">From ₹ {product.price}</p>
            {/* rupee sign ctrl alt 4 */}
          </div>
        </div>
        ))}
        </div>
      {/* </div> */}
    </div>
    </div>
  )
}

export default Categories
