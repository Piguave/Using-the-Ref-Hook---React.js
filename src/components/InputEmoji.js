import React, { useEffect, useState, useRef } from 'react';
import Picker from 'emoji-picker-react';
import Container from 'react-bootstrap/Container';
function InputEmoji() {

    const [inputStr, setInputStr] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const containerRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (!containerRef.current.contains(e.target)) {
                setShowPicker(false);
                
            }
        });
    }, []);


    const onEmojiClick = (event, emojiObject) => {

        const cursorPos = inputRef.current.selectionStart;
        const text = inputRef.current.value;
        const prev = text.slice(0, cursorPos);
        const next = text.slice(cursorPos);
        console.log(emojiObject)
        setInputStr(prevInput => prev + emojiObject.emoji + next);
        setShowPicker(false);
        // codigo para agregar el cursor 
        const newCursor = cursorPos + emojiObject.emoji.length
        setTimeout(() => inputRef.current.setSelectionRange(newCursor, newCursor), 10)
    };


    return (
        <div className="conetenedorAPP">
            <div className="d-flex justify-content-center">
                <h1 className="text-center">React Emoji Picker App</h1>
            </div>
            <div ref={containerRef} className="justify-content-center picker-container-items" >
                <div className="picker-container">
                    <input
                        ref={inputRef}
                        className="input-style"
                        value={inputStr}
                        onChange={e => setInputStr(e.target.value)} />
                    <img
                        className="emoji-icon"
                        src="https://icons.getbootstrap.com/assets/icons/emoji-sunglasses-fill.svg"
                        onClick={() => setShowPicker(val => !val)} />
                    {showPicker && <Picker
                        pickerStyle={{ width: '100%' }}
                        onEmojiClick={onEmojiClick} />}
                </div>
            </div>
        </div>
    );
}

export default InputEmoji;