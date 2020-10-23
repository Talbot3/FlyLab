import React, {useState} from 'react';
import {useLocation} from 'react-use';
import Link from 'next/link';
import Header from '../components/motion/exp1/Header';
import Home from '../components/motion/exp1/Home';
import Base from '../components/motion/exp1/Base';
import Toppings from '../components/motion/exp1/Toppings';
import Order from '../components/motion/exp1/Order';
import Modal from '../components/motion/exp1/Modal';
import {AnimatePresence} from 'framer-motion';
import './motioin.css';
function App() {
    const location = useLocation();
    const [pizza, setPizza] = useState({base: "", toppings: []});
    const [showModal, setShowModal] = useState(false);

    const addBase = (base) => {
        setPizza({
            ...pizza,
            base
        })
    }

    const addTopping = (topping) => {
        let newToppings;
        if (!pizza.toppings.includes(topping)) {
            newToppings = [
                ...pizza.toppings,
                topping
            ];
        } else {
            newToppings = pizza.toppings.filter(item => item !== topping);
        }
        setPizza({
            ...pizza,
            toppings: newToppings
        });
    }

    return (<>
        <Header/>
        <Modal showModal={showModal}/>
        <AnimatePresence exitBeforeEnter
            onExitComplete={
                () => setShowModal(false)
        }>
                <Link href="/base">
                    <Base addBase={addBase}
                        pizza={pizza}/>
                </Link>
                <Link href="/toppings">
                    <Toppings addTopping={addTopping}
                        pizza={pizza}/>
                </Link>
                <Link href="/order">
                    <Order pizza={pizza}
                        setShowModal={setShowModal}/>
                </Link>
                <Link href="/">
                    <Home/>
                </Link>
        </AnimatePresence>
    </>);
}

export default App;
