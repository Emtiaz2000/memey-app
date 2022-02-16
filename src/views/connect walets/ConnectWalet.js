import React from 'react'
import NavBar from '../../components/NavBar'
import walletIcon from '../../images/icons/wallet.svg'
import metaMask from '../../images/icons/metamask.svg'
import trustWallet from '../../images/icons/trustWallet.svg'
import { Link } from 'react-router-dom'



/* style css */
import './connectWalet.css'

export default function ConnectWalet() {
    return (
        <>
            <NavBar />
            {/* wallet icon and info */}
            <div className='wallet_icon_container'>
                <img src={walletIcon} alt="image"/>
                <div className='wallet_info'>
                    <p>Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem
                        Ipsum has been the industry's
                        standard dummy text ever since the</p>
                </div>
            </div>

            {/* wallets available to connect */}
            <div className='available_wallet'>
                <div className='single_wallet_container'>
                    <Link to='/' className='wallet_container'>
                        <img src={metaMask} alt="image"/>
                        <span className='wallet_text'>MetaMask</span>
                    </Link>
                </div>

                <div className='single_wallet_container'>
                    <Link to='/' className='wallet_container'>
                        <img src={trustWallet} alt="image"/>
                        <span className='wallet_text'>Trust Wallet</span>
                    </Link>
                </div>
                
            </div>
            <div className='new_wallet_user_more'>
                <h3 className='new_wallet_creat'>New to Wallets ?</h3>
                <Link to='/' className='learn_more'>Learn more</Link>

            </div>
        </>
    )
}
