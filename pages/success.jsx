import { useStateContext } from '../context/StateContext';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFireworks } from '../lib/utils';
import { useEffect } from 'react';
import Link from 'next/link';

const Success = () => {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    // just remove + reset all values form variables...
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, []);

    return (
        <div className="success-wrapper">

            <div className="success">

                <p className="icon"> <BsBagCheckFill /> </p>
                <h2>Obrigado pela encomenda!</h2>
                <p className="email-msg">Verifique a sua caixa de e-mail para obter o recibo.</p>
                <p className="description">
                Se tiver alguma questão, por favor envie um e-mail para: 
                    <a className="email" href="mailto:phonix@mail.com">
                        phonix@mail.com
                    </a>
                </p>

                <Link href="/" passHref>
                    <button type="button" width="270px" className="btn">
                    Continuar a comprar
                    </button>
                </Link>

            </div>
        </div>
    );
}

export default Success;