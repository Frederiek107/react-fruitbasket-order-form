import React, {useState} from 'react';
import './App.css';
import ArticleButton from "./components/ArticleButton";
import ResetButton from "./components/ResetButton";
import Option from "./components/Option";
import { useForm } from 'react-hook-form';
import Label from "./components/Label";


function App() {
    const [counterBanaan, setCounterBanaan] = useState(0);
    const [counterAardbei, setCounterAardbei] = useState(0);
    const [counterAppel, setCounterAppel] = useState(0);
    const [counterKiwi, setCounterKiwi] = useState(0);

    const {register, handleSubmit, errors, watch} = useForm();

    const selectedOption = watch("delivery");

    function resetAll() {
        setCounterBanaan(0);
        setCounterAardbei(0);
        setCounterAppel(0);
        setCounterKiwi(0);
        const elements = document.querySelectorAll("#articleButton");
        for (const item of elements) {
            item.style.setProperty("background-color", "white");
        }
    }

    function onSubmit(data) {
        console.log(data);
    }

    function setBackground(className, value) {
        const element = document.getElementsByClassName(className)[0];
        element.style.setProperty("background-color", value);
    }

    return (
        <>
            <h1>Fruitmand bezorgservice </h1>
            <article className="page">
                <article className="fruitOrder">
                    < ArticleButton
                        gif="🍌"
                        className="Bananen"
                        counter={counterBanaan}
                        addItem={() => setCounterBanaan(counterBanaan + 1)}
                        removeItem={() => {
                            setCounterBanaan(counterBanaan - 1);
                            if (counterBanaan === 0) {
                                setCounterBanaan(0)
                            }
                        }}
                    />
                    {counterBanaan > 0 && setBackground("Bananen", "gold")}
                    <ArticleButton
                        gif="🍓"
                        className="Aardbeien"
                        counter={counterAardbei}
                        addItem={() => setCounterAardbei(counterAardbei + 1)}
                        removeItem={() => {
                            setCounterAardbei(counterAardbei - 1);
                            if (counterAardbei === 0) {
                                setCounterAardbei(0)
                            }
                        }}
                    />
                    {counterAardbei > 0 && setBackground("Aardbeien", "red")}
                    <ArticleButton
                        gif="🍏"
                        className="Appels"
                        counter={counterAppel}
                        addItem={() => setCounterAppel(counterAppel + 1)}
                        removeItem={() => {
                            setCounterAppel(counterAppel - 1);
                            if (counterAppel === 0) {
                                setCounterAppel(0)
                            }
                        }}
                    />
                    {counterAppel > 0 && setBackground("Appels", "lightgreen")}
                    <ArticleButton
                        gif="🥝"
                        className="Kiwi"
                        counter={counterKiwi}
                        addItem={() => setCounterKiwi(counterKiwi + 1)}
                        removeItem={() => {
                            setCounterKiwi(counterKiwi - 1);
                            if (counterKiwi === 0) {
                                setCounterKiwi(0)
                            }
                        }}
                    />
                    {counterKiwi > 0 && setBackground("Kiwi", "darkgreen")}
                    <ResetButton functionReset={resetAll}/>
                </article>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Label
                        title="Voornaam"
                        register={register({required: true})}
                        id="firstName"
                        condition={errors.firstName && <p>Dit veld is verplicht</p>}/>

                    <Label
                        title="Achternaam"
                        register={register({required: true})}
                        id="lastName"
                        condition={errors.lastName && <p>Dit veld is verplicht</p>}/>

                    <Label
                        title="Leeftijd"
                        register={register({required: true, min: 18})}
                        id="age"
                        condition={errors.age &&
                        <p>Dit veld is verplicht. Je moet minimaal 18 jaar oud zijn om te kunnen bestellen.</p>}/>

                    <Label
                        title="Postcode"
                        register={register({required: true, pattern: /[0-9]{4}[A-Za-z]{2}/})}
                        id="zipcode"
                        condition={errors.zipcode && <p>Dit veld is verplicht. Gebruik 4 cijfers en 2 letters.</p>}/>

                    <Label
                        title="Huisnummer"
                        register={register({required: true})}
                        id="housenumber"
                        condition={errors.housenumber && <p>Dit veld is verplicht</p>}/>

                    Bezorgfrequentie:
                    <Option register={register({required: true})} id="weekly" name="delivery" title="Iedere week"/>
                    <Option register={register({required: true})} id="biweekly" name="delivery" title="Om de week"/>
                    <Option register={register({required: true})} id="monthly" name="delivery" title="Iedere maand"/>
                    <label htmlFor="else">
                        <input ref={register({required: true})} type="radio" id="else" name="delivery" value="else"/>
                        Anders
                    </label>
                    {errors.delivery && <p>Dit veld is verplicht</p>}
                    {selectedOption === "else" && (
                        <input
                            ref={register}
                            type="text"
                            name="optionelse"
                        />)}
                    {errors.optionelse && <p> Dit veld is verplicht </p>}

                    <label htmlFor="comments">
                        Opmerkingen:
                        <textarea id="comments" name="comments" ref={register}/>
                    </label>
                    <label htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" name="checkbox"/>
                        Ik ga akkoord met de voorwaarden
                    </label>
                    <button>Bestellen</button>
                </form>
            </article>
        </>
    );
}

export default App;
