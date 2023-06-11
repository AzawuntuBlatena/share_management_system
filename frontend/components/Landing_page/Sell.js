import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function BuySharesButton() {
  return (
    <div className="buy-shares hover:bg-orange-400 py-10 mx-auto px-5 bg-orange-300 justify-center w-2/3 rounded-lg my-10 hover:scale-105 ease-in duration-300 shadow-stone-100 buy-shares" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',backgroundColor: '#97a99b', justifyContent: 'center' }}>
    
      <p className="buy-shares-description" style={{ marginTop: '10px', fontSize: '20px', color: '#666' }}>Invest in your favorite companies now!
      "Join our company's success story by investing in our available shares today. As a part-owner, you'll benefit from our proven track record of success and innovative plans for the future. Don't miss out on this opportunity to be a part of our team and reap the rewards of our continued growth. Buy shares now!"</p>
      <Link href="buy" className="buy-shares-link mt-10 hover:scale-105 ease-in duration-300" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#7A3E3E', color: '#fff', padding: '10px 20px', borderRadius: '5px', textDecoration: 'none', transition: 'background-color 0.2s ease-in-out' }}>
        <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '5px' }} />
        <span className="buy-shares-text text-sm uppercase hover:border-b hover:text-white " style={{ fontSize: '16px' }}>Buy Shares</span>
      </Link>
    </div>
  );
}




{/* <div className="py-10 mx-auto bg-slate-400 justify-center w-1/3 rounded-lg my-10  buy-shares">
      <Link href="buy" className="buy-shares-link">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="buy-shares-text">Buy Shares</span>
      </Link> */}