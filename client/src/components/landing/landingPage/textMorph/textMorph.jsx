import React, { useState, useEffect, useRef } from 'react';
//VideoButton.module.css. This change signifies that the styles in this file are a module and should be treated as such by the build tool
import morphStyles from './textMorph.module.css';


export const Morph = ( text ) => {
    // The strings to morph between. You can change these to anything you want!
    const texts = ["Introducing", "our", "latest", "AI", "innovation", "Revolutionizing", "the", "future", "of", "technology", "Empowering", "creativity", "and", "efficiency", "with", "advanced", "algorithms", "Join", "us", "in", "exploring", "the", "boundaries", "of", "artificial", "intelligence"]
   
    // Controls the speed of morphing.
    const morphTime = 1;
    const cooldownTime = 0.25;
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    const elts = {
        text1: text1Ref.current,
        text2: text2Ref.current
    };

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    // applies the blur filter to the text.
    const setMorph = (fraction) => {
        // fraction = Math.cos(fraction * Math.PI) / -2 + .5;
        
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        
        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
        
        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    const doMorph = () => {
        morph -= cooldown;
        cooldown = 0;
        
        let fraction = morph / morphTime;
        
        if (fraction > 1) {
            cooldown = cooldownTime;
            fraction = 1;
        }
        
        setMorph(fraction);
    }

    const doCooldown = () => {
        morph = 0;
        
        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";
        
        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
    }

    // Animation loop, called every frame.
    const animate = () => {
        requestAnimationFrame(animate);
        
        let newTime = new Date();
        let shouldIncrementIndex = cooldown > 0;
        let dt = (newTime - time) / 1000;
        time = newTime;
        
        cooldown -= dt;
        
        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                textIndex++;
            }
            
            doMorph();
        } else {
            doCooldown();
        }
    }

    animate()
}, []);
    return (
<>
    <div className={morphStyles.container}>
        <span ref={text1Ref} className={morphStyles.text1} />
        <span ref={text2Ref} className={morphStyles.text2} />
    </div>
    <svg className={morphStyles.filters} id="filters">
        <defs>
        <filter id="threshold">
            <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140"
            />
        </filter>
        </defs>
    </svg>
</>

    );
    
};