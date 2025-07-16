import { useState } from "react";
import shoes from "./images/shoes.jpg";
import watch from "./images/watch.jpg";
import buds from "./images/buds.jpg";
import sunglasses from "./images/sunglasses.jpg";
import wallet from "./images/wallet.jpg";
import baby from "./images/baby knit.jpg";



function App(){
  const [cartCount , setCartCount] = useState(0);
  return (
    <>
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
<div className="flex items-center justify-between">
  {/* left logo */}
  <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 text-transparent bg-clip-text "> Saifarle </h1>

  <div className="hidden md:flex gap-6 text-gray-600 font-medium">
    <a href="#" className="hover:text-purple-600 transition"> Men </a>
    <a href="#" className="hover:text-purple-600 transition"> Women </a>
    <a href="#" className="hover:text-purple-600 transition"> Electronics </a>
  </div>

  {/* right logo */}
  <div className="flex item-center gap-2 text-gray-600 hover:text-purple-700 cursor-pointer transition"><p className="text-sm font-semibold"> Cart: <span className="text-purple-600">{cartCount}</span> </p>
  </div>
</div>
    </nav>
    <div className="w-full flex justify-center mt-6 px-4">
      <input type="text" placeholder="search for products...."
      className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"/>
    </div>
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100 min-h-screen">
      {/*card1*/}
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
        <img
          src={shoes}
          alt="Pair of stylish sneakers with white soles and colorful accents placed on a wooden surface in a well-lit modern room, conveying a trendy and energetic mood"
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="text-lg font-semibold mt-2"> Stylish Sneakers</h2>
        <p className="text-purple-600 font-bold"> ₹7999</p>
        <button
          onClick={() => setCartCount(cartCount + 1)}
          className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
        >
          Add to Cart
        </button>
      </div>

      {/*card2*/}
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
<img  src={watch} alt="modern watch" className="w-full h-48 object-cover rounded"></img>
<h2 className="text-lg font-semibold mt-2"> Modern Watch </h2>
<p className="text-purple-600 font-bold"> ₹700</p>
<button
onClick={() => setCartCount(cartCount + 1)}
className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"> Add to Cart</button>
      </div>

      {/*card3*/}
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
<img  src={buds} alt="Product" className="w-full h-48 object-cover rounded"></img>
<h2 className="text-lg font-semibold mt-2"> Wireless Earbuds</h2>
<p className="text-purple-600 font-bold"> ₹2499</p>
<button
onClick={() => setCartCount(cartCount + 1)}
className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"> Add to Cart</button>
      </div>

      {/*card4*/}
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
<img  src={sunglasses} alt="Product" className="w-full h-48 object-cover rounded"></img>
<h2 className="text-lg font-semibold mt-2"> Sunglasses</h2>
<p className="text-purple-600 font-bold"> ₹2500</p>
<button 
onClick={() => setCartCount(cartCount + 1)}
className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"> Add to Cart</button>
      </div>
      {/*card5*/}
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
<img src={wallet} alt="Product" className="w-full h-48 object-cover rounded"></img>
<h2 className="text-lg font-semibold mt-2"> Slim Card Wallet</h2>
<p className="text-purple-600 font-bold"> ₹4500</p>
<button  onClick={() => setCartCount(cartCount + 1)} className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"> Add to Cart</button>
      </div>
      {/*card6*/}
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
<img src={baby} alt="Product" className="w-full h-48 object-cover rounded"></img>
<h2 className="text-lg font-semibold mt-2">Baby Knit Romper</h2>
<p className="text-purple-600 font-bold"> ₹9000</p>
<button onClick={() => setCartCount(cartCount + 1)} className="mt-3 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"> Add to Cart</button>
      </div>
    
    </section>

    <footer>
      <div className=" shadow-md">
        {/*logo area */}
        <div>
          <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-700 via-pink-500 to-yellow-400 text-transparent bg-clip-text w-fit"> Saifarle </h1>
          <p className="text-gray-400 mt-2"> Premium lifestyle products made for stylish people like you</p>
        </div>

        {/*links */}
        <div>
          <h3 className="text-lg font-semibold mb-2"> Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-400">
            <li><a href="#" className="hover:underline transition">Home</a></li>
            <li><a href="#" className="hover:underline transition">Products</a></li>
            <li><a href="#" className="hover:underline transition">Contact</a></li>
            <li><a href="#" className="hover:underline transition">About</a></li>
          </ul>
        </div>
        {/*socials*/}
        <div>
          <h3 className="text-lg font-semibold mb-4"> Connect</h3>
          <ul className="space-y-1 text-sm text-gray-400">
          <li>Email: support@saifarle.com</li>
          <li>Instagram:@saifarle</li>
          <li>Phone:+91-99999-9999</li>
          </ul>
        </div>
        <div className="border-t pt-4 mt-4 text-sm text-gray-500">
          &copy; 2025 Saifarle. All rights reserved.
        </div>
      </div>
    </footer>
    
    </>
  )
}
export default App;
